import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-deep">Asiento 404</p>
      <h1 className="mt-4 font-display text-5xl text-ink">No encontramos esa página</h1>
      <p className="mt-3 text-ink/75">El enlace puede haber cambiado. Volvé al inicio o mirá los servicios.</p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-violet-deep px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
      >
        Ir al inicio
      </Link>
    </section>
  );
}
