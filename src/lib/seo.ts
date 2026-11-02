import type { Metadata } from "next";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export const shareImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Nancy Vara · Contadora Pública. Asesoría contable confiable para tu negocio.",
};

export const baseOpenGraph = {
  type: "website",
  locale: "es_AR",
  siteName: "Nancy Vara · Contadora Pública",
  images: [shareImage],
} satisfies OpenGraph;

export function pageMeta(path: string, openGraph: OpenGraph = {}): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, ...openGraph, url: path } as OpenGraph,
  };
}
