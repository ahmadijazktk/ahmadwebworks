import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownRight, Download } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { ScrambleText } from "./ScrambleText";
import { Clock } from "./Clock";
// import cvAsset from "@/assets/ahmad-cv.pdf.asset.json";


const roles = ["Full-Stack Developer", "WordPress Architect", "WooCommerce Engineer", "React Craftsman"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] px-4 pt-32 sm:px-8 sm:pt-28">
      {/* Top meta row */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-6 pb-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:grid-cols-4">
        <div>
          <div className="mb-1 text-foreground/40">Edition</div>
          <div className="text-foreground/85">N° 04 — MMXXVI</div>
        </div>
        <div>
          <div className="mb-1 text-foreground/40">Locale</div>
          <div className="text-foreground/85">Karachi · PK</div>
        </div>
        <div>
          <div className="mb-1 text-foreground/40">Local time</div>
          <div className="text-foreground/85"><Clock /> PKT</div>
        </div>
        <div>
          <div className="mb-1 text-foreground/40">Status</div>
          <div className="inline-flex items-center gap-2 text-foreground/85">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Booking Q1 ’26
          </div>
        </div>
      </div>

      {/* Editorial title */}
      <div className="mx-auto max-w-[1500px]">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(4.5rem,18vw,17rem)] font-normal leading-[0.82] tracking-[-0.045em] text-foreground"
          >
            <ScrambleText as="span" text="Ahmad" duration={900} trigger="mount" />
            <br />
            <span className="relative inline-flex items-baseline gap-[0.15em]">
              <span className="italic text-foreground/80">
                <ScrambleText as="span" text="Ijaz" duration={1100} trigger="mount" />
              </span>
              <span className="font-sans text-[0.18em] not-italic tracking-[0.22em] text-muted-foreground">
                /ah·mad ee·jaz/
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Lower row: rotating role + statement + CTA */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Currently</div>
            <div className="relative h-7 overflow-hidden font-serif text-2xl italic leading-7 text-foreground sm:text-3xl">
              {roles.map((r, i) => (
                <motion.div
                  key={r}
                  initial={false}
                  animate={{ y: (i - idx) * 28, opacity: i === idx ? 1 : 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-0"
                >
                  {r}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-balance text-base leading-[1.55] text-foreground/80 sm:text-xl"
            >
              I build <span className="font-serif italic text-foreground">considered</span> websites and
              commerce systems — bespoke WordPress themes, headless WooCommerce stores, and React.js
              apps shipped from Pakistan for clients across three continents.
            </motion.p>
          </div>

          <div className="flex flex-wrap items-end justify-start gap-3 md:col-span-3 md:justify-end">
            <Magnetic strength={0.4}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-background"
              >
                Open Index
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href="#"
                download="AhmadIjaz_Fullstack_CV.pdf"
                data-hover
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-foreground/30 bg-transparent px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
              >
                <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors group-hover:text-background">Download CV</span>
                <Download className="relative z-10 h-4 w-4 transition-all group-hover:translate-y-0.5 group-hover:text-background" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>


      {/* footnote bar */}
      <div className="mx-auto mt-16 flex max-w-[1500px] items-end justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:mt-24">
        <div>① Scroll to begin</div>
        <div className="hidden sm:block">A folio in seven movements</div>
        <div>2026 ⇢</div>
      </div>
    </section >
  );
}
