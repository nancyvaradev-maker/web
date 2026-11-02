import Link from "next/link";

import type { Service } from "@/lib/site";

export function Ledger({ items, start = 1 }: { items: Service[]; start?: number }) {
  return (
    <div className="border-t-2 border-ink">
      <div className="hidden grid-cols-[4rem_1fr_11rem_3rem] gap-6 border-b border-ink/30 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 md:grid">
        <span>Nº</span>
        <span>Asiento</span>
        <span>Cuenta</span>
        <span className="text-right">Ver</span>
      </div>
      <ol>
        {items.map((service, index) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={`/servicios/${service.slug}`}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 py-6 transition-colors hover:bg-violet/[0.06] md:grid-cols-[4rem_1fr_11rem_3rem] md:gap-6 md:px-0"
            >
              <span className="font-mono text-sm text-violet-deep">
                {String(index + start).padStart(3, "0")}
              </span>
              <span>
                <span className="block font-display text-[1.7rem] leading-tight text-ink md:text-3xl">
                  {service.title}
                </span>
                <span className="mt-1 block max-w-xl text-[15px] leading-relaxed text-ink/70">{service.summary}</span>
              </span>
              <span className="col-start-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 md:col-start-auto md:pt-2">
                {service.category}
              </span>
              <span
                aria-hidden="true"
                className="hidden pt-1 text-right font-display text-3xl text-ink/30 transition group-hover:translate-x-1 group-hover:text-violet-deep md:block"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
