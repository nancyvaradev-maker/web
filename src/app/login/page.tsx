import Link from "next/link";
import { redirect } from "next/navigation";

import { Stamp } from "@/components/stamp";
import { isAdminAuthenticated } from "@/lib/admin-session";

import { loginAdminAction } from "./actions";

type SearchParams = Promise<{ error?: string }>;

export const metadata = {
  title: "Iniciar sesión",
  robots: { index: false },
};

export default async function LoginPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <div className="ruled min-h-screen">
      <div className="mx-auto w-full max-w-md px-6 py-16">
        <Stamp className="h-24 w-24 -rotate-6" />
        <h1 className="mt-6 font-display text-5xl text-ink">Panel del estudio</h1>
        <p className="mt-2 text-ink/70">Entrá con el usuario admin y la contraseña del panel.</p>

        {params.error ? (
          <p className="mt-6 border-l-4 border-red-600 bg-red-50 px-4 py-2 text-sm text-red-900">{params.error}</p>
        ) : null}

        <form action={loginAdminAction} className="mt-8 space-y-5 border border-ink/20 bg-white p-6 shadow-[6px_6px_0_0_rgba(52,73,94,0.12)]">
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Usuario</span>
            <input
              name="user"
              type="text"
              required
              autoComplete="username"
              defaultValue="admin"
              className="mt-1 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-lg outline-none focus:border-violet-deep"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Contraseña</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-lg outline-none focus:border-violet-deep"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-violet-deep px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-sm">
          <Link href="/" className="underline decoration-violet underline-offset-4">
            Volver al sitio
          </Link>
        </p>
      </div>
    </div>
  );
}
