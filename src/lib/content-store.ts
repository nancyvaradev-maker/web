import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { neon } from "@neondatabase/serverless";
import { put } from "@vercel/blob";
import { connection } from "next/server";
import { cache } from "react";

import { defaultPosts, defaultServices, type Post, type Rich, type Service } from "@/lib/site";

export type Content = {
  services: Service[];
  posts: Post[];
};

const contentPath = path.join(process.cwd(), "data", "content.json");
export const uploadsDir = path.join(process.cwd(), "data", "uploads");

function asString(value: unknown, fallback: string) {
  return typeof value === "string" ? value : fallback;
}

function asLines(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  return value.filter((item): item is string => typeof item === "string");
}

function asServices(value: unknown): Service[] {
  if (!Array.isArray(value)) return structuredClone(defaultServices);
  return defaultServices.map((service) => {
    const found = value.find(
      (item) => item && typeof item === "object" && (item as Service).slug === service.slug,
    ) as Partial<Service> | undefined;
    if (!found) return structuredClone(service);
    return {
      ...service,
      title: asString(found.title, service.title),
      tagline: asString(found.tagline, service.tagline),
      summary: asString(found.summary, service.summary),
      image: asString(found.image, service.image),
      paragraphs: asLines(found.paragraphs, service.paragraphs),
      points: asLines(found.points, service.points),
    };
  });
}

function asRich(value: unknown): Rich[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((block): Rich[] => {
    if (!block || typeof block !== "object") return [];
    const item = block as Record<string, unknown>;
    if ((item.kind === "p" || item.kind === "h") && typeof item.text === "string") {
      return [{ kind: item.kind, text: item.text }];
    }
    if (item.kind === "ul") return [{ kind: "ul", items: asLines(item.items, []) }];
    if (item.kind === "img" && typeof item.src === "string") {
      return [{ kind: "img", src: item.src, alt: asString(item.alt, "") }];
    }
    return [];
  });
}

function asPosts(value: unknown): Post[] {
  if (!Array.isArray(value)) return structuredClone(defaultPosts);
  return value.flatMap((entry): Post[] => {
    if (!entry || typeof entry !== "object") return [];
    const item = entry as Partial<Post>;
    if (typeof item.slug !== "string" || typeof item.title !== "string") return [];
    return [
      {
        slug: item.slug,
        title: item.title,
        date: asString(item.date, new Date().toISOString().slice(0, 10)),
        author: asString(item.author, "Nancy Vara"),
        excerpt: asString(item.excerpt, ""),
        image: asString(item.image, ""),
        body: asRich(item.body),
      },
    ];
  });
}

function sortPosts(posts: Post[]) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

let tableReady: Promise<unknown> | null = null;

function database() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  const sql = neon(url);
  tableReady ??= sql`
    create table if not exists site_content (
      id text primary key,
      data jsonb not null,
      updated_at timestamptz not null default now()
    )
  `.catch((error) => {
    tableReady = null;
    throw error;
  });
  return { sql, ready: tableReady };
}

async function readSaved(): Promise<Partial<Content> | null> {
  const db = database();
  if (db) {
    await db.ready;
    const rows = await db.sql`select data from site_content where id = 'main'`;
    return (rows[0]?.data as Partial<Content> | undefined) ?? null;
  }
  try {
    return JSON.parse(await readFile(contentPath, "utf8")) as Partial<Content>;
  } catch {
    return null;
  }
}

export const getContent = cache(async (): Promise<Content> => {
  await connection();
  const saved = await readSaved();
  if (!saved) {
    return { services: structuredClone(defaultServices), posts: sortPosts(structuredClone(defaultPosts)) };
  }
  return { services: asServices(saved.services), posts: sortPosts(asPosts(saved.posts)) };
});

export async function getServices() {
  return (await getContent()).services;
}

export async function getService(slug: string) {
  return (await getServices()).find((service) => service.slug === slug);
}

export async function getPosts() {
  return (await getContent()).posts;
}

export async function getPost(slug: string) {
  return (await getPosts()).find((post) => post.slug === slug);
}

export async function saveContent(content: Content) {
  const db = database();
  if (db) {
    await db.ready;
    await db.sql`
      insert into site_content (id, data, updated_at)
      values ('main', ${JSON.stringify(content)}::jsonb, now())
      on conflict (id) do update set data = excluded.data, updated_at = now()
    `;
    return;
  }
  await mkdir(path.dirname(contentPath), { recursive: true });
  await writeFile(contentPath, JSON.stringify(content, null, 2), "utf8");
}

const imageTypes = new Map([
  ["image/png", ".png"],
  ["image/jpeg", ".jpg"],
  ["image/webp", ".webp"],
]);

export async function saveUploadedImage(file: FormDataEntryValue | null, prefix: string) {
  if (!(file instanceof File) || file.size === 0) return null;
  if (file.size > 4 * 1024 * 1024) {
    throw new Error("La imagen supera 4 MB.");
  }
  const extension = imageTypes.get(file.type);
  if (!extension) {
    throw new Error("Usá una imagen PNG, JPG o WebP.");
  }

  const safePrefix = prefix.replace(/[^a-z0-9-]/gi, "").slice(0, 40) || "imagen";
  const filename = `${safePrefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}${extension}`;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`uploads/${filename}`, file, { access: "public", contentType: file.type });
    return blob.url;
  }
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(path.join(uploadsDir, filename), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${filename}`;
}

const blobHost = /^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\/[^\s"'<>]+$/i;

export function publicAssetPath(value: string, fallback: string) {
  const next = value.trim();
  if (blobHost.test(next)) return next;
  if (!next.startsWith("/") || next.startsWith("//") || next.includes("..") || next.includes("\\")) return fallback;
  return next;
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function bodyToText(body: Rich[]) {
  return body
    .map((block) => {
      if (block.kind === "h") return `## ${block.text}`;
      if (block.kind === "ul") return block.items.map((item) => `- ${item}`).join("\n");
      if (block.kind === "img") return `![${block.alt}](${block.src})`;
      return block.text;
    })
    .join("\n\n");
}

const imageLine = /^!\[([^\]]*)\]\(([^)\s]+)\)$/;

export function textToBody(text: string): Rich[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .flatMap((chunk): Rich[] => {
      const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean);
      if (lines.length === 1 && lines[0].startsWith("## ")) return [{ kind: "h", text: lines[0].slice(3).trim() }];
      if (lines.every((line) => imageLine.test(line))) {
        return lines.map((line) => {
          const [, alt, src] = line.match(imageLine)!;
          return { kind: "img", src: publicAssetPath(src, ""), alt };
        });
      }
      if (lines.every((line) => line.startsWith("- "))) {
        return [{ kind: "ul", items: lines.map((line) => line.slice(2).trim()) }];
      }
      return [{ kind: "p", text: lines.join(" ") }];
    })
    .filter((block) => block.kind !== "img" || block.src);
}
