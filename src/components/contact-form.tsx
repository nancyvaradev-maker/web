"use client";

import { FormEvent, useState } from "react";

import { studio } from "@/lib/site";

const fields = [
  { name: "nombre", label: "Nombre", autoComplete: "name", type: "text" },
  { name: "email", label: "Email", autoComplete: "email", type: "email" },
  { name: "telefono", label: "Teléfono", autoComplete: "tel", type: "tel" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const text = `Hola Nancy, soy ${nombre}.\nEmail: ${email}\nTeléfono: ${telefono}\n\n${mensaje}`;
    window.open(`${studio.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-ink/20 bg-white p-6 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)] md:p-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-deep">Formulario de consulta</p>
      <div className="mt-6 space-y-6">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">{field.label}</span>
            <input
              required
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              className="mt-1 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-lg outline-none focus:border-violet-deep"
            />
          </label>
        ))}
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Mensaje</span>
          <textarea
            required
            name="mensaje"
            rows={4}
            className="ruled mt-1 w-full resize-y border-0 border-b border-ink/30 bg-transparent px-0 py-1 text-lg leading-8 outline-none focus:border-violet-deep"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
      >
        Enviar por WhatsApp
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-ink/75">
          Se abrió WhatsApp con tu mensaje. Si no lo ves, revisá que el navegador no haya bloqueado la ventana.
        </p>
      ) : null}
    </form>
  );
}
