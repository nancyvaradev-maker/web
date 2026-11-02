import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminCard, AdminFlash, AdminTitle, Area, Field, ImageField, SaveButton } from "@/components/admin-ui";
import { getService } from "@/lib/content-store";

import { saveServiceAction } from "../../actions";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ ok?: string; error?: string }>;
};

export default async function AdminServicePage({ params, searchParams }: Props) {
  const [{ slug }, flash] = await Promise.all([params, searchParams]);
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <div className="max-w-4xl">
      <Link href="/admin/servicios" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 hover:text-violet-deep">
        ← Todos los servicios
      </Link>
      <div className="mt-4">
        <AdminTitle kicker={service.category} title={service.title}>
          <Link href={`/servicios/${service.slug}`} target="_blank" className="text-sm underline decoration-violet underline-offset-4">
            Ver en el sitio ↗
          </Link>
        </AdminTitle>
      </div>
      <AdminFlash ok={flash.ok} error={flash.error} />
      <form action={saveServiceAction} className="space-y-6">
        <input type="hidden" name="slug" value={service.slug} />
        <AdminCard title="Encabezado">
          <Field label="Título" name="title" defaultValue={service.title} required />
          <Field label="Bajada" name="tagline" defaultValue={service.tagline} hint="La frase en cursiva violeta debajo del título." />
          <Area
            label="Resumen"
            name="summary"
            defaultValue={service.summary}
            rows={3}
            hint="Lo que se lee en el listado de servicios del inicio. Conviene una o dos líneas."
          />
        </AdminCard>
        <AdminCard title="Detalle">
          <Area
            label="Descripción"
            name="paragraphs"
            defaultValue={service.paragraphs.join("\n")}
            rows={8}
            hint="Un párrafo por línea."
          />
          <Area
            label="Qué incluye"
            name="points"
            defaultValue={service.points.join("\n")}
            rows={8}
            hint="Un ítem por línea. Se numeran solos."
          />
        </AdminCard>
        <AdminCard title="Imagen">
          <ImageField label="Foto del servicio" name="image" current={service.image} />
        </AdminCard>
        <SaveButton />
      </form>
    </div>
  );
}
