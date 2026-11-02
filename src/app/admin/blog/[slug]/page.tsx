import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminFlash, AdminTitle } from "@/components/admin-ui";
import { PostForm } from "@/components/post-form";
import { bodyToText, getPost } from "@/lib/content-store";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ ok?: string; error?: string }>;
};

export default async function EditPostPage({ params, searchParams }: Props) {
  const [{ slug }, flash] = await Promise.all([params, searchParams]);
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-4xl">
      <Link href="/admin/blog" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 hover:text-violet-deep">
        ← Todas las entradas
      </Link>
      <div className="mt-4">
        <AdminTitle kicker="Editar entrada" title={post.title}>
          <Link href={`/blog/${post.slug}`} target="_blank" className="text-sm underline decoration-violet underline-offset-4">
            Ver en el sitio ↗
          </Link>
        </AdminTitle>
      </div>
      <AdminFlash ok={flash.ok} error={flash.error} />
      <PostForm key={`${post.slug}-${flash.ok ?? ""}`} post={post} bodyText={bodyToText(post.body)} />
    </div>
  );
}
