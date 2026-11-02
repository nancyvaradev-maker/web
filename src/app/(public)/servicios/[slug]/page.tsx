import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getService, getServices } from "@/lib/content-store";
import { whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: "Servicio" };
  return { title: service.title, description: service.summary, ...pageMeta(`/servicios/${service.slug}`) };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const number = String(services.indexOf(service) + 1).padStart(3, "0");
  const related = services.filter((item) => item.slug !== service.slug && item.category === service.category).slice(0, 3);

  return (
    <article>
      <section className="border-b border-ink/15">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_0.7fr] md:py-20">
          <div>
            <Link href="/servicios" className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 hover:text-violet-deep">
              ← Libro de servicios
            </Link>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-deep">
              Asiento {number} · {service.category}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-7xl">{service.title}</h1>
            <p className="mt-6 font-display text-2xl italic text-violet-deep">{service.tagline}</p>
            <a
              href={whatsappLink(`Hola Nancy, te escribo desde tu web. Quiero consultar por ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
            >
              Consultar este servicio
            </a>
          </div>
          <div className="relative aspect-[4/5] border border-ink/20 bg-white p-2 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)]">
            <div className="relative h-full w-full">
              <Image
                src={service.image}
                alt=""
                fill
                priority
                unoptimized={!service.image.startsWith("/images/")}
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink/85">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit border-t-2 border-ink">
          <h2 className="py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink/60">Qué incluye</h2>
          <ol>
            {service.points.map((point, index) => (
              <li key={point} className="flex gap-4 border-t border-line py-3 text-[15px] leading-relaxed text-ink/85">
                <span className="font-mono text-xs text-violet-deep">{String(index + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </aside>
      </section>
      {related.length ? (
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink/60">
            También en la cuenta {service.category.toLowerCase()}
          </h2>
          <ul className="mt-4 border-t-2 border-ink">
            {related.map((item) => (
              <li key={item.slug} className="border-b border-line">
                <Link href={`/servicios/${item.slug}`} className="group flex items-baseline justify-between gap-4 py-4">
                  <span className="font-display text-2xl text-ink group-hover:text-violet-deep">{item.title}</span>
                  <span aria-hidden="true" className="font-display text-2xl text-ink/30 group-hover:text-violet-deep">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
