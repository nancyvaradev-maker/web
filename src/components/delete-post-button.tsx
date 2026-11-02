"use client";

export function DeletePostButton({ title }: { title: string }) {
  return (
    <button
      type="submit"
      onClick={(event) => {
        if (!window.confirm(`¿Borrar “${title}”? No se puede deshacer.`)) event.preventDefault();
      }}
      className="font-mono text-[11px] uppercase tracking-[0.16em] text-red-700 hover:text-red-900"
    >
      Borrar
    </button>
  );
}
