"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { nav, studio } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.9rem] leading-none text-ink">
            Nancy <em className="text-violet-deep">Vara</em>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 sm:inline">
            C.P. · {studio.credential}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.slice(1).map((item, index) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group text-sm ${current ? "text-violet-deep" : "text-ink/80 hover:text-ink"}`}
              >
                <span className="mr-1 font-mono text-[10px] text-ink/40 group-hover:text-violet-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={current ? "underline decoration-violet decoration-2 underline-offset-[6px]" : ""}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-paper sm:inline-flex"
          >
            Consultar
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-ink/30 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px bg-ink" />
              <span className="h-px bg-ink" />
              <span className="h-px bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-ink/15 bg-paper px-5 py-4 lg:hidden">
          <ul>
            {nav.map((item, index) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  className="flex items-baseline gap-3 py-3"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[11px] text-violet-deep">{String(index).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
