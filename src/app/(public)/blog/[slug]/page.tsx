import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RichText } from "@/components/rich-text";
import { getPost } from "@/lib/content-store";
import { formatDate } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Nota" };
  return {
    title: post.title,
    description: post.excerpt,
    ...pageMeta(`/blog/${post.slug}`, {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}),
    }),
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 hover:text-violet-deep">
        ← Todas las notas
      </Link>
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-violet-deep">
        {formatDate(post.date)} · {post.author}
      </p>
      <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-6xl">{post.title}</h1>
      {post.image ? (
        <figure className="mt-10 border border-ink/20 bg-white p-2 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)]">
          <div className="relative aspect-[16/9]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              unoptimized={!post.image.startsWith("/images/")}
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      ) : null}
      <div className="mt-10 border-t-2 border-ink pt-8">
        <RichText blocks={post.body} />
      </div>
    </article>
  );
}
