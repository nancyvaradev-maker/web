import Link from "next/link";
import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/admin-session";

import { logoutAdminAction } from "../login/actions";

export const metadata = {
  title: "Admin",
  robots: { index: false },
};

const links = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/blog/nueva", label: "Nueva entrada" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAdminAuthenticated())) {
    redirect("/login?error=" + encodeURIComponent("Iniciá sesión para entrar al panel"));
  }

  return (
    <div className="min-h-screen md:flex">
      <aside className="border-b border-ink/15 bg-ink text-paper md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-b-0">
        <div className="flex items-center justify-between gap-4 p-5 md:block">
          <Link href="/admin" className="font-display text-3xl leading-none">
            Nancy <em className="text-violet">Vara</em>
          </Link>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 md:mt-2 md:block">Panel del estudio</p>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:block md:space-y-1 md:px-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block shrink-0 px-3 py-2 text-sm text-paper/80 hover:bg-paper/10 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden space-y-2 border-t border-paper/10 p-5 md:block">
          <Link href="/" target="_blank" className="block text-sm text-paper/70 hover:text-paper">
            Ver el sitio ↗
          </Link>
          <form action={logoutAdminAction}>
            <button type="submit" className="text-sm text-paper/70 hover:text-paper">
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>
      <div className="min-w-0 flex-1 px-5 py-10 md:px-10">{children}</div>
    </div>
  );
}
