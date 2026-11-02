import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Stamp } from "@/components/stamp";
import { studio, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribile a Nancy Vara por WhatsApp o por email para coordinar una consulta contable.",
  ...pageMeta("/contacto"),
};

export default function ContactoPage() {
  return (
    <>
      <PageHero kicker="04 · Contacto" title="Contanos qué necesitás y te respondemos con los próximos pasos." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
        <aside>
          <dl className="border-t-2 border-ink">
            <div className="border-b border-line py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">WhatsApp</dt>
              <dd className="mt-1">
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="font-mono text-2xl text-violet-deep hover:text-ink">
                  {studio.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="border-b border-line py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${studio.email}`} className="text-xl text-ink hover:text-violet-deep">
                  {studio.email}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">Matrícula</dt>
              <dd className="mt-1 font-mono text-lg text-ink">{studio.credential}</dd>
            </div>
          </dl>
          <Stamp className="mt-6 h-32 w-32 -rotate-6" />
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
