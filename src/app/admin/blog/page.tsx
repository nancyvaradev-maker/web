import Link from "next/link";

import { AdminFlash, AdminTitle } from "@/components/admin-ui";
import { DeletePostButton } from "@/components/delete-post-button";
import { getPosts } from "@/lib/content-store";
import { formatDate } from "@/lib/site";

import { deletePostAction } from "../actions";

type Props = { searchParams: Promise<{ ok?: string; error?: string }> };

export default async function AdminBlogPage({ searchParams }: Props) {
  const [flash, posts] = await Promise.all([searchParams, getPosts()]);

  return (
    <div className="max-w-5xl">
      <AdminTitle kicker="Blog" title="Entradas">
        Las entradas se ordenan por fecha, de la más nueva a la más vieja.
      </AdminTitle>
      <AdminFlash ok={flash.ok} error={flash.error} />
      <Link
        href="/admin/blog/nueva"
        className="mb-6 inline-flex bg-violet-deep px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
      >
        + Nueva entrada
      </Link>
      <ul className="border-t-2 border-ink bg-white">
        {posts.map((post) => (
          <li key={post.slug} className="grid grid-cols-[5rem_1fr] items-center gap-4 border-b border-line p-4 md:grid-cols-[6rem_1fr_auto]">
            {post.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.image} alt="" className="aspect-[16/10] w-full border border-ink/15 object-cover" />
            ) : (
              <span className="grid aspect-[16/10] place-items-center border border-dashed border-ink/25 font-mono text-[10px] text-ink/40">
                SIN FOTO
              </span>
            )}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">{formatDate(post.date)}</p>
              <Link href={`/admin/blog/${post.slug}`} className="font-display text-2xl leading-tight text-ink hover:text-violet-deep">
                {post.title}
              </Link>
            </div>
            <div className="col-span-2 flex gap-4 md:col-span-1">
              <Link href={`/admin/blog/${post.slug}`} className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-deep">
                Editar
              </Link>
              <Link href={`/blog/${post.slug}`} target="_blank" className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
                Ver ↗
              </Link>
              <form action={deletePostAction}>
                <input type="hidden" name="slug" value={post.slug} />
                <DeletePostButton title={post.title} />
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
