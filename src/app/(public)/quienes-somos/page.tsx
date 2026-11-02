import type { Metadata } from "next";
import Image from "next/image";

import { Stamp } from "@/components/stamp";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Nancy Vara, Contadora Pública egresada de la UNTREF. Gestión de pymes, impuestos y flujo de caja. Matrícula CPCECABA.",
};

export default function QuienesSomosPage() {
  return (
    <article>
      <section className="border-b border-ink/15">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_0.7fr] md:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-deep">05 · Quién firma</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Tu aliada estratégica: contabilidad y <em className="text-violet-deep">beneficios fiscales</em>.
            </h1>
          </div>
          <figure className="relative">
            <Stamp className="absolute -right-3 -top-6 z-10 h-28 w-28 rotate-6" />
            <div className="relative aspect-[4/5] border border-ink/20 bg-white p-2 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)]">
              <div className="relative h-full w-full">
                <Image src="/images/consulta.jpg" alt="Espacio de consulta del estudio" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
            </div>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-lg leading-relaxed text-ink/85">
        <p className="font-display text-3xl leading-snug text-ink">
          Hola, soy Nancy Vara, Contadora Pública egresada de la Universidad Nacional de Tres de Febrero (UNTREF).
        </p>
        <p>
          Soy una profesional responsable y actualizada de forma permanente, y mi compromiso va más allá de un simple
          balance: busco la eficiencia financiera y fiscal de tu negocio.
        </p>
        <h2 className="pt-6 font-display text-4xl text-ink">Mi especialidad: gestión pyme y el poder de los impuestos</h2>
        <p>
          Mi verdadera pasión reside en las pequeñas y medianas empresas y en la gestión financiera estratégica.
          Entiendo que tu tiempo es oro, por lo que mi enfoque es doble:
        </p>
        <ol className="border-t-2 border-ink">
          <li className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm text-violet-deep">01</span>
            <div>
              <h3 className="font-display text-3xl text-ink">Control impositivo, beneficios reales</h3>
              <p className="mt-2 text-base">
                Mantener tu empresa en orden y al día con las normativas fiscales no es solo evitar multas: es la llave
                para conseguir beneficios fiscales y optimizar tu carga tributaria de manera legal e inteligente.
              </p>
            </div>
          </li>
          <li className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm text-violet-deep">02</span>
            <div>
              <h3 className="font-display text-3xl text-ink">Gestión financiera de alto impacto</h3>
              <p className="mt-2 text-base">
                Te ayudo a mirar hacia el futuro con herramientas como el flujo de caja, el pulso de tu liquidez, para
                decidir sobre inversión, endeudamiento y crecimiento.
              </p>
            </div>
          </li>
        </ol>
        <p>
          Si buscás una contadora que te brinde tranquilidad fiscal y, al mismo tiempo, te ayude a aumentar el control
          y la rentabilidad de tu emprendimiento, llegaste al lugar correcto.
        </p>
        <p className="font-display text-3xl italic text-violet-deep">
          Hablemos y transformemos tus obligaciones en ventajas competitivas.
        </p>
        <div className="double-rule flex flex-wrap items-baseline justify-between gap-4 border-t border-ink pb-3 pt-5">
          <p className="font-display text-3xl italic text-ink">{studio.name}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
            {studio.role} · {studio.credential}
          </p>
        </div>
        <a
          href={studio.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
        >
          Escribir por WhatsApp
        </a>
      </section>
    </article>
  );
}
