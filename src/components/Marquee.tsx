export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const loop = [...items, ...items];
  return (
    <div className={`relative flex w-full overflow-hidden border-y border-border/60 py-6 ${className}`}>
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-12 pr-12">
        {loop.map((s, i) => (
          <span key={i} className="font-serif text-4xl italic text-foreground/80 sm:text-6xl md:text-7xl">
            {s} <span className="text-foreground/30">✦</span>
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-12 pr-12" aria-hidden>
        {loop.map((s, i) => (
          <span key={i} className="font-serif text-4xl italic text-foreground/80 sm:text-6xl md:text-7xl">
            {s} <span className="text-foreground/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
