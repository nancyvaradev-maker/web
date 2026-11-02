import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getPosts } from "@/lib/content-store";
import { formatDate } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Novedades fiscales y criterios de gestión para pymes: Monotributo, Ingresos Brutos, financiamiento y flujo de caja.",
  ...pageMeta("/blog"),
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        kicker="02 · Notas"
        title="Novedades para decidir con la normativa a la vista."
        lede="Notas sobre Monotributo, saldos a favor, financiamiento y estabilidad financiera."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ul className="border-t-2 border-ink">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-5 py-8 md:grid-cols-[11rem_1fr_15rem] md:gap-8"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/55">{formatDate(post.date)}</span>
                <span>
                  <span className="block font-display text-4xl leading-tight text-ink group-hover:text-violet-deep">
                    {post.title}
                  </span>
                  <span className="mt-2 block max-w-2xl leading-relaxed text-ink/70">{post.excerpt}</span>
                </span>
                {post.image ? (
                  <span className="relative block aspect-[16/10] overflow-hidden border border-ink/15 bg-white">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      unoptimized={!post.image.startsWith("/images/")}
                      sizes="(min-width: 768px) 240px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
