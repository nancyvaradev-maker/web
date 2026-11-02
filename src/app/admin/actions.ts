"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/admin-session";
import {
  getContent,
  publicAssetPath,
  saveContent,
  saveUploadedImage,
  slugify,
  textToBody,
  type Content,
} from "@/lib/content-store";

function text(formData: FormData, name: string) {
  return String(formData.get(name) ?? "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function lines(formData: FormData, name: string) {
  return text(formData, name)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/login?error=" + encodeURIComponent("Sesión de admin no válida"));
  }
}

function errorMessage(error: unknown) {
  const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";
  if (code === "EROFS" || code === "EPERM") {
    return "Este hosting no puede guardar archivos. Configurá DATABASE_URL (Neon) y BLOB_READ_WRITE_TOKEN (Vercel Blob).";
  }
  return error instanceof Error ? error.message : "No se pudo guardar. Probá de nuevo.";
}

async function edit(
  errorTo: string,
  update: (content: Content) => Promise<string>,
) {
  await requireAdmin();
  const content = structuredClone(await getContent());
  let successTo: string;
  try {
    successTo = await update(content);
    await saveContent(content);
  } catch (error) {
    console.error("[admin] guardar", error);
    redirect(`${errorTo}?error=${encodeURIComponent(errorMessage(error))}`);
  }
  revalidatePath("/", "layout");
  redirect(successTo);
}

async function imageValue(formData: FormData, name: string, fallback: string) {
  const uploaded = await saveUploadedImage(formData.get(`${name}File`), name);
  if (uploaded) return uploaded;
  return publicAssetPath(text(formData, name), fallback);
}

export async function saveServiceAction(formData: FormData) {
  const slug = text(formData, "slug");
  const back = `/admin/servicios/${slug}`;
  await edit(back, async (content) => {
    const service = content.services.find((item) => item.slug === slug);
    if (!service) throw new Error("No encontramos ese servicio.");
    const title = text(formData, "title");
    if (!title) throw new Error("El título no puede quedar vacío.");
    service.title = title;
    service.tagline = text(formData, "tagline");
    service.summary = text(formData, "summary");
    service.paragraphs = lines(formData, "paragraphs");
    service.points = lines(formData, "points");
    service.image = await imageValue(formData, "image", service.image);
    return `${back}?ok=${encodeURIComponent("Servicio guardado.")}`;
  });
}

function excerptFrom(body: ReturnType<typeof textToBody>) {
  const first = body.find((block) => block.kind === "p");
  if (!first || first.kind !== "p") return "";
  return first.text.length > 180 ? `${first.text.slice(0, 177).trimEnd()}…` : first.text;
}

export async function savePostAction(formData: FormData) {
  const originalSlug = text(formData, "originalSlug");
  const back = originalSlug ? `/admin/blog/${originalSlug}` : "/admin/blog/nueva";

  await edit(back, async (content) => {
    const title = text(formData, "title");
    if (!title) throw new Error("La entrada necesita un título.");

    let bodyText = text(formData, "body");
    const extra = formData.getAll("bodyImages");
    for (const file of extra) {
      const src = await saveUploadedImage(file, "nota");
      if (src) bodyText = `${bodyText}\n\n![](${src})`;
    }
    const body = textToBody(bodyText);
    if (!body.length) throw new Error("La entrada necesita texto.");

    const existing = originalSlug ? content.posts.find((post) => post.slug === originalSlug) : undefined;
    if (originalSlug && !existing) throw new Error("No encontramos esa entrada.");

    const date = /^\d{4}-\d{2}-\d{2}$/.test(text(formData, "date"))
      ? text(formData, "date")
      : new Date().toISOString().slice(0, 10);

    let slug = existing?.slug ?? (slugify(title) || "nota");
    if (!existing) {
      const base = slug;
      let n = 2;
      while (content.posts.some((post) => post.slug === slug)) slug = `${base}-${n++}`;
    }

    const post = {
      slug,
      title,
      date,
      author: text(formData, "author") || "Nancy Vara",
      excerpt: text(formData, "excerpt") || excerptFrom(body),
      image: await imageValue(formData, "image", existing?.image ?? ""),
      body,
    };

    if (existing) {
      content.posts = content.posts.map((item) => (item.slug === slug ? post : item));
    } else {
      content.posts.unshift(post);
    }
    return `/admin/blog/${slug}?ok=${encodeURIComponent(existing ? "Entrada guardada." : "Entrada publicada.")}`;
  });
}

export async function deletePostAction(formData: FormData) {
  const slug = text(formData, "slug");
  await edit("/admin/blog", async (content) => {
    const before = content.posts.length;
    content.posts = content.posts.filter((post) => post.slug !== slug);
    if (content.posts.length === before) throw new Error("No encontramos esa entrada.");
    return `/admin/blog?ok=${encodeURIComponent("Entrada eliminada.")}`;
  });
}
