export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-deep">{kicker}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">{title}</h1>
        {lede ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{lede}</p> : null}
      </div>
    </section>
  );
}
