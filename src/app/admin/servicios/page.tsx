import Link from "next/link";

import { AdminTitle } from "@/components/admin-ui";
import { getServices } from "@/lib/content-store";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div className="max-w-5xl">
      <AdminTitle kicker="Servicios" title="Libro de servicios">
        Elegí un servicio para editar su título, la bajada, el resumen que aparece en el listado, la descripción y
        la lista de qué incluye.
      </AdminTitle>
      <ol className="border-t-2 border-ink bg-white">
        {services.map((service, index) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={`/admin/servicios/${service.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 px-4 py-4 hover:bg-violet/[0.06]"
            >
              <span className="font-mono text-sm text-violet-deep">{String(index + 1).padStart(3, "0")}</span>
              <span>
                <span className="block font-display text-2xl text-ink">{service.title}</span>
                <span className="block text-sm text-ink/60">{service.category}</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50 group-hover:text-violet-deep">
                Editar →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
