import type { Metadata } from "next";

import { Ledger } from "@/components/ledger";
import { PageHero } from "@/components/page-hero";
import { getServices } from "@/lib/content-store";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Monotributo, Convenio Multilateral, IVA, Ingresos Brutos, balances, flujo de caja, Ganancias y liquidación de sueldos.",
};

export default async function ServiciosPage() {
  const services = await getServices();
  const impuestos = services.filter((service) => service.category === "Impuestos");
  const analisis = services.filter((service) => service.category === "Análisis financiero");

  return (
    <>
      <PageHero
        kicker="01 · Servicios"
        title="Soluciones contables para operar en orden y decidir con datos."
        lede="Los honorarios se informan en la consulta. Elegí el servicio y escribinos: coordinamos por correo los pasos para empezar."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink/60">Cuenta · Impuestos</h2>
        <div className="mt-4">
          <Ledger items={impuestos} />
        </div>
        <h2 className="mt-16 font-mono text-xs uppercase tracking-[0.22em] text-ink/60">Cuenta · Análisis financiero</h2>
        <div className="mt-4">
          <Ledger items={analisis} start={impuestos.length + 1} />
        </div>
      </section>
    </>
  );
}
