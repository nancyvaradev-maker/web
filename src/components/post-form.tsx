import { AdminCard, Area, Field, ImageField, SaveButton } from "@/components/admin-ui";
import type { Post } from "@/lib/site";

import { savePostAction } from "@/app/admin/actions";

export function PostForm({ post, bodyText }: { post?: Post; bodyText: string }) {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <form action={savePostAction} className="space-y-6">
      <input type="hidden" name="originalSlug" value={post?.slug ?? ""} />
      <AdminCard title="Datos de la entrada">
        <Field label="Título" name="title" defaultValue={post?.title ?? ""} required />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Fecha" name="date" type="date" defaultValue={post?.date ?? today} />
          <Field label="Autora" name="author" defaultValue={post?.author ?? "Nancy Vara"} />
        </div>
        <Area
          label="Resumen"
          name="excerpt"
          defaultValue={post?.excerpt ?? ""}
          rows={3}
          hint="Se muestra en el listado del blog. Si lo dejás vacío, se usa el comienzo del texto."
        />
      </AdminCard>
      <AdminCard title="Imagen de portada">
        <ImageField label="Portada" name="image" current={post?.image ?? ""} />
      </AdminCard>
      <AdminCard title="Texto">
        <Area
          label="Cuerpo de la nota"
          name="body"
          defaultValue={bodyText}
          rows={18}
          hint="Dejá una línea en blanco entre párrafos. Para un subtítulo, empezá la línea con ## . Para una lista, empezá cada línea con - . Las imágenes aparecen como ![](/uploads/...) y podés mover esa línea a donde quieras que se vea."
        />
        <label className="grid gap-1">
          <span className="text-sm font-medium text-ink">Agregar imágenes dentro de la nota</span>
          <span className="text-xs text-ink/55">Podés elegir varias. Se suman al final del texto y después las podés mover.</span>
          <input
            name="bodyImages"
            type="file"
            multiple
            accept="image/png,image/jpeg,image/webp"
            className="text-sm file:mr-3 file:border file:border-ink/30 file:bg-paper file:px-3 file:py-1.5 file:font-mono file:text-[11px] file:uppercase file:tracking-[0.14em]"
          />
        </label>
      </AdminCard>
      <SaveButton label={post ? "Guardar cambios" : "Publicar entrada"} />
    </form>
  );
}
