import Link from "next/link";

import { AdminTitle } from "@/components/admin-ui";
import { getContent } from "@/lib/content-store";
import { formatDate } from "@/lib/site";

export default async function AdminHomePage() {
  const { services, posts } = await getContent();

  return (
    <div className="max-w-5xl">
      <AdminTitle kicker="Resumen" title="Hola, Nancy">
        Desde acá podés cambiar los textos de los servicios y publicar notas en el blog. Los cambios se ven en el
        sitio apenas guardás.
      </AdminTitle>
      <div className="grid gap-5 md:grid-cols-2">
        <Link href="/admin/servicios" className="group border border-ink/15 bg-white p-6 hover:border-violet-deep">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">Servicios</p>
          <p className="mt-2 font-display text-4xl text-ink">{services.length} servicios</p>
          <p className="mt-2 text-sm text-ink/70">Títulos, bajadas, descripciones, qué incluye e imagen.</p>
        </Link>
        <Link href="/admin/blog" className="group border border-ink/15 bg-white p-6 hover:border-violet-deep">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">Blog</p>
          <p className="mt-2 font-display text-4xl text-ink">{posts.length} entradas</p>
          <p className="mt-2 text-sm text-ink/70">
            Última: {posts[0] ? `${posts[0].title} (${formatDate(posts[0].date)})` : "todavía no hay"}.
          </p>
        </Link>
      </div>
      <Link
        href="/admin/blog/nueva"
        className="mt-8 inline-flex bg-violet-deep px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
      >
        Escribir una entrada nueva
      </Link>
    </div>
  );
}
