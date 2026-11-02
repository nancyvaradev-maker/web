"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { Stamp } from "@/components/stamp";
import { studio } from "@/lib/site";

export function FooterBar() {
  const [scrolled, setScrolled] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const visible = scrolled && !footerInView;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.getElementById("pie");
    const observer = footer
      ? new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting))
      : null;
    if (footer) observer?.observe(footer);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.footbar = visible ? "on" : "off";
  }, [visible]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-ink text-paper transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" tabIndex={visible ? 0 : -1} className="flex items-center gap-3">
          <Stamp className="h-9 w-9 shrink-0 text-violet" />
          <span className="font-display text-xl leading-none">
            Nancy <em className="text-violet">Vara</em>
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            tabIndex={visible ? 0 : -1}
            className="text-paper/80 hover:text-paper"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={studio.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            tabIndex={visible ? 0 : -1}
            className="text-paper/80 hover:text-paper"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href="#pie"
            tabIndex={visible ? 0 : -1}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet hover:text-paper"
          >
            Índice ↓
          </a>
        </div>
      </div>
    </div>
  );
}
