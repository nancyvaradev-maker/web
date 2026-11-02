import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cómo consultar",
  description: "Elegí el servicio, dejanos tus datos y, si la consulta es urgente, escribinos por WhatsApp.",
};

const steps = [
  {
    title: "Elegí el servicio que querés consultar",
    text: "Podés mirar Monotributo, Convenio Multilateral, Régimen General, balances, análisis, flujo de caja, Ingresos Brutos o sueldos.",
  },
  {
    title: "Escribinos con el servicio elegido",
    text: "En la ficha de cada servicio hay un botón de consulta. También podés sumar más de un servicio en el mismo mensaje.",
  },
  {
    title: "Completá tus datos de contacto",
    text: "Nombre, email y teléfono. Con eso coordinamos la respuesta y los pasos para empezar a trabajar.",
  },
  {
    title: "Contanos dónde operás",
    text: "Indicá la jurisdicción o las provincias en las que tenés actividad, para orientar la respuesta.",
  },
  {
    title: "Si es urgente, usá WhatsApp",
    text: "El botón verde te comunica de inmediato. Respondemos lo antes posible.",
  },
];

export default function ComoConsultarPage() {
  return (
    <>
      <PageHero
        kicker="03 · Cómo consultar"
        title="Cinco pasos para pedir una respuesta concreta."
        lede="Los honorarios no están publicados: se informan en la consulta, según el alcance de tu caso."
      />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <ol className="border-t-2 border-ink">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-2 border-b border-line py-8 md:grid-cols-[5rem_1fr]">
              <p className="font-mono text-sm text-violet-deep">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-display text-3xl text-ink md:text-4xl">{step.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/75">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/servicios" className="bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink">
            Ver servicios
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-sm underline decoration-violet decoration-2 underline-offset-[6px]">
            o abrir WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
