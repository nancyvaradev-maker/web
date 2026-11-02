import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";

import { baseOpenGraph, shareImage } from "@/lib/seo";

import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3456");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: baseOpenGraph,
  twitter: { card: "summary_large_image", images: [shareImage] },
  title: {
    default: "Nancy Vara · Contadora Pública",
    template: "%s · Nancy Vara",
  },
  description:
    "Asesoría contable para pymes y emprendedores. Monotributo, impuestos, balances, flujo de caja y liquidación de sueldos. Contadora Pública matriculada en CPCECABA.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
