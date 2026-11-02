import Link from "next/link";

import { AdminFlash, AdminTitle } from "@/components/admin-ui";
import { PostForm } from "@/components/post-form";

type Props = { searchParams: Promise<{ error?: string }> };

export default async function NewPostPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="max-w-4xl">
      <Link href="/admin/blog" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 hover:text-violet-deep">
        ← Todas las entradas
      </Link>
      <div className="mt-4">
        <AdminTitle kicker="Blog" title="Nueva entrada" />
      </div>
      <AdminFlash error={error} />
      <PostForm bodyText="" />
    </div>
  );
}
