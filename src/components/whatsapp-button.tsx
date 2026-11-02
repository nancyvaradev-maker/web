"use client";

import { FormEvent, useEffect, useState } from "react";

import { whatsappGreeting, whatsappLink } from "@/lib/site";

function WhatsappLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.6.9.9-3.5-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function WhatsappButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = String(new FormData(event.currentTarget).get("mensaje") ?? "").trim();
    window.open(whatsappLink(text || whatsappGreeting), "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-[bottom] duration-300 in-data-[footbar=on]:bottom-20">
      {open ? (
        <div
          role="dialog"
          aria-label="Chat por WhatsApp con Nancy Vara"
          className="w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden border border-ink/15 bg-paper shadow-[8px_8px_0_0_rgba(52,73,94,0.15)]"
        >
          <div className="flex items-center gap-3 bg-ink px-4 py-3 text-paper">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-violet bg-paper font-display text-2xl italic text-violet-deep">
              NV
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-ink bg-[#25D366]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl leading-none">
                Nancy <em className="text-violet">Vara</em>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">Contadora Pública</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="grid h-8 w-8 place-items-center text-xl leading-none text-paper/70 hover:text-paper"
            >
              ×
            </button>
          </div>
          <div className="ruled px-4 py-5">
            <p className="max-w-[85%] rounded-[2px] border border-ink/10 bg-white px-3 py-2 text-sm leading-relaxed text-ink shadow-sm">
              ¡Hola! Soy Nancy. Contame en qué te puedo ayudar y te respondo por WhatsApp a la brevedad.
            </p>
          </div>
          <form onSubmit={onSubmit} className="border-t border-ink/10 bg-white p-3">
            <label className="sr-only" htmlFor="wa-mensaje">
              Tu mensaje
            </label>
            <textarea
              id="wa-mensaje"
              name="mensaje"
              rows={3}
              defaultValue={whatsappGreeting}
              className="w-full resize-none border border-ink/20 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-violet-deep"
            />
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 bg-[#25D366] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-[#1ebe5b]"
            >
              <WhatsappLogo className="h-4 w-4" />
              Abrir WhatsApp
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Cerrar chat de WhatsApp" : "Comunicate por WhatsApp"}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/20 hover:scale-105"
      >
        <WhatsappLogo className="h-7 w-7" />
      </button>
    </div>
  );
}
