import { motion } from "motion/react";
import { ScrollBrightText } from "./ScrollBrightText";

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "20+", label: "Sites in production" },
  { value: "15+", label: "Happy clients" },
  { value: "9", label: "Time zones served" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ 03 — About</div>
            <h2 className="font-serif text-5xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl">
              The <span className="italic text-foreground/70">maker.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-muted-foreground">
            A short note from the desk
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* big editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-8"
          >
            <ScrollBrightText className="font-serif text-3xl leading-[1.18] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.4rem]">
              I'm Ahmad — a full-stack developer who treats the web like a craft, not a checklist.
              I obsess over the millisecond it takes a page to feel alive, the breath between
              paragraphs, the weight of a button under your finger.
            </ScrollBrightText>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Based in Karachi, I've spent three years quietly shipping over twenty sites — bespoke
                WordPress themes, headless WooCommerce stores, and React apps — for retail, education
                and service businesses across Pakistan, the UK, and the US.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                My favourite projects are the ones where business goals and pixels argue politely
                until they agree. I write code that other developers can read, and interfaces that
                clients can actually update without calling me at 1 AM.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Available Q1 2026", "Remote · GMT+5", "English · Urdu", "Asynchronous"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* sidebar stats — vertical strip */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border/60 md:grid-cols-1">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex items-baseline justify-between bg-background p-6"
                >
                  <span className="font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl">
                    {s.value}
                  </span>
                  <span className="text-right text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
