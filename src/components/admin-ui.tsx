export function AdminFlash({ ok, error }: { ok?: string; error?: string }) {
  return (
    <>
      {ok ? <p className="mb-6 border-l-4 border-emerald-600 bg-emerald-50 px-4 py-2 text-sm text-emerald-950">{ok}</p> : null}
      {error ? <p className="mb-6 border-l-4 border-red-600 bg-red-50 px-4 py-2 text-sm text-red-950">{error}</p> : null}
    </>
  );
}

export function AdminTitle({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-deep">{kicker}</p>
      <h1 className="mt-2 font-display text-5xl text-ink">{title}</h1>
      {children ? <div className="mt-3 max-w-3xl text-ink/70">{children}</div> : null}
    </div>
  );
}

export function AdminCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5 border border-ink/15 bg-white p-6">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">{title}</h2>
      {children}
    </section>
  );
}

const controlClass =
  "w-full border border-ink/25 bg-paper px-3 py-2 text-base text-ink outline-none focus:border-violet-deep focus:ring-2 focus:ring-violet/30";

function Label({ label, hint }: { label: string; hint?: string }) {
  return (
    <>
      <span className="text-sm font-medium text-ink">{label}</span>
      {hint ? <span className="text-xs text-ink/55">{hint}</span> : null}
    </>
  );
}

export function Field({
  label,
  name,
  defaultValue,
  hint,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  defaultValue: string;
  hint?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1">
      <Label label={label} hint={hint} />
      <input name={name} type={type} defaultValue={defaultValue} required={required} className={controlClass} />
    </label>
  );
}

export function Area({
  label,
  name,
  defaultValue,
  hint,
  rows = 5,
}: {
  label: string;
  name: string;
  defaultValue: string;
  hint?: string;
  rows?: number;
}) {
  return (
    <label className="grid gap-1">
      <Label label={label} hint={hint} />
      <textarea name={name} defaultValue={defaultValue} rows={rows} className={`${controlClass} leading-relaxed`} />
    </label>
  );
}

export function ImageField({ label, name, current, hint }: { label: string; name: string; current: string; hint?: string }) {
  return (
    <div className="grid gap-2">
      <Label label={label} hint={hint} />
      {current ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={current} alt="" className="h-32 w-auto max-w-full border border-ink/15 object-cover" />
      ) : null}
      <input name={name} type="hidden" defaultValue={current} />
      <input
        name={`${name}File`}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="text-sm file:mr-3 file:border file:border-ink/30 file:bg-paper file:px-3 file:py-1.5 file:font-mono file:text-[11px] file:uppercase file:tracking-[0.14em]"
      />
      <span className="text-xs text-ink/55">PNG, JPG o WebP, hasta 4 MB. Si no subís nada, queda la imagen actual.</span>
    </div>
  );
}

export function SaveButton({ label = "Guardar cambios" }: { label?: string }) {
  return (
    <button
      type="submit"
      className="bg-violet-deep px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-ink"
    >
      {label}
    </button>
  );
}
