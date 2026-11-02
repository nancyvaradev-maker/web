import Image from "next/image";
import Link from "next/link";

import { Ledger } from "@/components/ledger";
import { Stamp } from "@/components/stamp";
import { getContent } from "@/lib/content-store";
import { formatDate, studio, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/");

const debe = [
  ["Monotributo", "Recategorización semestral y control de la categoría"],
  ["IVA e Ingresos Brutos", "Declaraciones juradas mensuales ante ARCA y las provincias"],
  ["Ganancias y Bienes Personales", "Liquidación anual"],
  ["Sueldos", "F. 931, SAC, vacaciones y Libro de Sueldos Digital"],
];

const haber = [
  ["Tranquilidad fiscal", "Vencimientos al día y sin intimaciones"],
  ["Beneficios fiscales", "Deducciones y desgravaciones que te corresponden"],
  ["Liquidez", "Retenciones SIRCREB corregidas y flujo de caja proyectado"],
  ["Decisiones con datos", "Análisis de estados contables para invertir o crecer"],
];

const steps = [
  ["Elegí el servicio", "Impuestos, balances o análisis financiero."],
  ["Dejá tus datos", "Nombre, email, teléfono y el detalle de tu consulta. Los honorarios se informan en la respuesta."],
  ["Si es urgente, WhatsApp", "El botón verde te comunica al instante."],
];

function SectionLabel({ folio, children }: { folio: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-deep">
      <span>Folio {folio}</span>
      <span className="h-px w-10 bg-violet-deep/40" />
      <span className="text-ink/60">{children}</span>
    </p>
  );
}

export default async function HomePage() {
  const { services, posts } = await getContent();

  return (
    <>
      <section className="ruled relative overflow-hidden border-b border-ink/15">
        <div className="pointer-events-none absolute inset-y-0 left-[max(1.25rem,calc(50%-36rem))] hidden w-px bg-violet/40 md:block" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.35fr_0.65fr] md:pb-24 md:pl-12 md:pt-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
              Estudio contable · Buenos Aires · atención en todo el país
            </p>
            <h1 className="mt-6 font-display text-[3.4rem] leading-[0.95] text-ink sm:text-7xl md:text-[6.2rem]">
              Asesoría contable <em className="text-violet-deep">confiable</em> para tu negocio.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
              Bienvenido a mi espacio profesional. Soy Nancy Vara, Contadora Pública. Te ofrezco soluciones contables
              claras y confiables para tu negocio o emprendimiento. Explorá mis servicios y encontrá el apoyo que
              necesitás para crecer.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/servicios"
                className="bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
              >
                Ver servicios
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink underline decoration-violet decoration-2 underline-offset-[6px] hover:text-violet-deep"
              >
                o escribime por WhatsApp
              </a>
            </div>
          </div>
          <div className="relative flex flex-col justify-end">
            <Stamp className="absolute -top-2 right-0 z-10 h-36 w-36 -rotate-12 opacity-90 md:-right-6 md:-top-6 md:h-44 md:w-44" />
            <figure className="mt-16 md:mt-0">
              <div className="relative aspect-[3/4] overflow-hidden border border-ink/20 bg-white p-2 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Escritorio del estudio con libros abiertos y luz natural"
                    fill
                    priority
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                Fig. 1 — El estudio
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/15 bg-white/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink/15 px-5 md:grid-cols-4">
          {[
            ["Matrícula", "F242 T452"],
            ["Consejo", "CPCECABA"],
            ["Formación", "UNTREF"],
            ["Servicios", String(services.length).padStart(2, "0")],
          ].map(([label, value]) => (
            <div key={label} className="px-4 py-5 first:pl-0">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{label}</dt>
              <dd className="mt-1 font-mono text-lg text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel folio="01">Servicios</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-6xl">
              Libro de servicios: impuestos y análisis financiero.
            </h2>
          </div>
          <Link href="/servicios" className="font-mono text-xs uppercase tracking-[0.16em] text-violet-deep hover:text-ink">
            Ver el detalle →
          </Link>
        </div>
        <div className="mt-10">
          <Ledger items={services} />
        </div>
      </section>

      <section className="border-y border-ink/15 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel folio="02">El balance</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-6xl">
            Tus obligaciones de un lado. <em className="text-violet-deep">Tus ventajas</em> del otro.
          </h2>
          <div className="mt-12 grid border-t-2 border-ink md:grid-cols-2">
            <div className="border-b border-ink/15 py-6 md:border-b-0 md:border-r md:pr-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/60">Debe · lo que te toca</p>
              <ul className="mt-4">
                {debe.map(([title, text]) => (
                  <li key={title} className="border-b border-line py-4 last:border-0">
                    <p className="font-display text-2xl text-ink">{title}</p>
                    <p className="text-sm text-ink/65">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-6 md:pl-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-deep">Haber · lo que ganás</p>
              <ul className="mt-4">
                {haber.map(([title, text]) => (
                  <li key={title} className="border-b border-line py-4 last:border-0">
                    <p className="font-display text-2xl text-violet-deep">{title}</p>
                    <p className="text-sm text-ink/65">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="double-rule flex flex-wrap items-baseline justify-between gap-4 border-t border-ink pb-3 pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/60">Saldo</p>
            <p className="font-display text-3xl text-ink md:text-4xl">
              Tu negocio, <em className="text-violet-deep">en orden</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden border border-ink/20 bg-white p-2">
            <div className="relative h-full w-full">
              <Image src="/images/consulta.jpg" alt="Rincón de consulta del estudio" fill className="object-cover" sizes="(min-width: 768px) 35vw, 100vw" />
            </div>
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
            Fig. 2 — Donde se hacen las consultas
          </figcaption>
        </figure>
        <div className="md:pt-6">
          <SectionLabel folio="03">Quién firma</SectionLabel>
          <blockquote className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            “Mantener tu empresa en orden no es solo evitar multas: es la llave para conseguir{" "}
            <em className="text-violet-deep">beneficios fiscales</em>.”
          </blockquote>
          <p className="mt-8 max-w-xl leading-relaxed text-ink/80">
            Soy Nancy Vara, Contadora Pública egresada de la UNTREF. Mi pasión son las pymes y la gestión financiera
            estratégica: control impositivo para que no pagues de más, y herramientas como el flujo de caja para que
            decidas sobre inversión, deuda y crecimiento.
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-ink/15 pt-5">
            <p className="font-display text-2xl italic text-ink">Nancy Vara</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">{studio.credential}</p>
          </div>
          <Link href="/quienes-somos" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.16em] text-violet-deep hover:text-ink">
            Leer la presentación completa →
          </Link>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet">Folio 04 · Cómo consultar</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] md:text-6xl">
            Tres pasos. <em className="text-violet">Sin vueltas.</em>
          </h2>
          <ol className="mt-12 grid gap-px bg-paper/15 md:grid-cols-3">
            {steps.map(([title, text], index) => (
              <li key={title} className="bg-ink p-6 md:p-8">
                <p className="font-mono text-sm text-violet">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-6 font-display text-3xl">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel folio="05">Notas</SectionLabel>
            <h2 className="mt-4 font-display text-5xl text-ink md:text-6xl">Del blog</h2>
          </div>
          <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.16em] text-violet-deep hover:text-ink">
            Todas las notas →
          </Link>
        </div>
        <ul className="mt-10 border-t-2 border-ink">
          {posts.slice(0, 4).map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-6 md:grid-cols-[11rem_1fr_8rem] md:items-center md:gap-8"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/55">{formatDate(post.date)}</span>
                <span className="font-display text-3xl leading-tight text-ink group-hover:text-violet-deep">{post.title}</span>
                {post.image ? (
                  <span className="relative hidden aspect-[16/10] overflow-hidden border border-ink/15 bg-white md:block">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      unoptimized={!post.image.startsWith("/images/")}
                      sizes="128px"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </span>
                ) : (
                  <span aria-hidden="true" className="hidden text-right font-display text-3xl text-ink/30 md:block">
                    →
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="ruled border-t border-ink/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-6xl">
            Contactanos hoy y llevá tu contabilidad <em className="text-violet-deep">al siguiente nivel</em>.
          </h2>
          <Link
            href="/contacto"
            className="shrink-0 bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
          >
            Ir a contacto
          </Link>
        </div>
      </section>
    </>
  );
}
