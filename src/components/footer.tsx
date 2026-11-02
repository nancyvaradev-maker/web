import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { Stamp } from "@/components/stamp";
import { nav, studio, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer id="pie" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex items-start gap-5">
          <Stamp className="h-24 w-24 shrink-0 text-violet" />
          <div>
            <p className="font-display text-3xl leading-none">
              Nancy <em className="text-violet">Vara</em>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
              Soluciones contables claras para tu negocio o emprendimiento, con atención en todo el país.
            </p>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet">Índice</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {nav.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  <span className="mr-2 font-mono text-[11px] text-paper/40">{String(index).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-paper">
                WhatsApp <span className="font-mono">{studio.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${studio.email}`} className="hover:text-paper">
                {studio.email}
              </a>
            </li>
            <li className="flex gap-5 pt-2">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-paper"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={studio.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-paper"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
            </li>
            <li className="pt-4">
              <a
                href="http://www.thesib.dev"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45 hover:text-paper"
              >
                Desarrollado por sib.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
          <p>
            {studio.name} · {studio.role} · {studio.credential} · UNTREF
          </p>
          <Link href="/login" className="hover:text-paper">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
