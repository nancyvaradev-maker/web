import type { Rich } from "@/lib/site";

export function RichText({ blocks }: { blocks: Rich[] }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-ink/85">
      {blocks.map((block, index) => {
        if (block.kind === "h") {
          return (
            <h2 key={index} className="pt-6 font-display text-3xl text-ink">
              {block.text}
            </h2>
          );
        }
        if (block.kind === "ul") {
          return (
            <ol key={index} className="border-y border-line">
              {block.items.map((item, itemIndex) => (
                <li key={item} className="flex gap-4 border-b border-line py-2.5 text-base last:border-0">
                  <span className="pt-0.5 font-mono text-xs text-violet-deep">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (block.kind === "img") {
          return (
            <figure key={index} className="py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={block.src} alt={block.alt} className="w-full border border-ink/15" loading="lazy" />
              {block.alt ? (
                <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
                  {block.alt}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
