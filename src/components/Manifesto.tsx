import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const words = [
  "Considered.",
  "Performant.",
  "Quiet.",
  "Crafted.",
  "Detail-obsessed.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-22%"]);

  return (
    <section id="manifesto" ref={ref} className="relative overflow-hidden py-24 sm:py-36">
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ 02 — Manifesto</div>
          <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-muted-foreground">
            A short list of <span className="font-serif italic text-foreground">non-negotiables</span>.
          </p>
        </div>
      </div>

      <motion.div style={{ x }} className="flex w-max gap-12 whitespace-nowrap will-change-transform">
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-serif text-[18vw] leading-[0.85] tracking-[-0.04em] text-foreground/90 sm:text-[14vw]"
          >
            <span className="text-muted-foreground/40">{String((i % words.length) + 1).padStart(2, "0")}</span>
            <em className="not-italic"> </em>
            <span className="italic">{w}</span>
          </span>
        ))}
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {[
          { t: "Performance is design.", d: "Every kilobyte and every paint earns its place. Lighthouse scores are a starting line." },
          { t: "Type is the interface.", d: "Hierarchy, rhythm, and restraint do more than gradients ever will." },
          { t: "Ship, then refine.", d: "Real users beat hypotheticals. Iterate weekly, measure honestly." },
        ].map((c, i) => (
          <div key={i} className="glass rounded-3xl p-7">
            <div className="mb-4 font-serif text-3xl italic text-foreground/40">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="font-serif text-2xl leading-tight text-foreground">{c.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
