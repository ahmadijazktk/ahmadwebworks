import { motion } from "motion/react";

const items = [
  {
    year: "Nov 2024 — Feb 2026",
    role: "MERN Stack Developer",
    co: "K2X Tech · Peshawar",
    desc: "Converted design concepts into pixel-perfect UIs, integrated APIs, built robust auth, Chart.js dashboards, and Node.js APIs backed by MongoDB.",
  },
  {
    year: "Jan 2023 — Nov 2024",
    role: "Junior MERN Stack Developer",
    co: "Reveltek · Remote",
    desc: "Shipped React.js interfaces for Facials, built Node/Express routes, managed MongoDB storage, and performed manual QA to keep releases stable.",
  },
  {
    year: "Aug 2022 — Dec 2022",
    role: "Frontend Developer",
    co: "Pixel IO Technology · Abbottabad",
    desc: "Turned wireframes into responsive React interfaces, optimized performance, integrated backend APIs, and ran cross-browser/device compatibility passes.",
  },
  {
    year: "Dec 2020 — July 2022",
    role: "MERN Stack Developer",
    co: "Quantum Tech Academy",
    desc: "Built full-stack apps on MongoDB, Express, React and Node. Implemented REST APIs, responsive UI, and collaborative git workflows.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 sm:mb-16">
          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ 05 — Trajectory</div>
          <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.03em] sm:text-7xl md:text-8xl">
            A working <span className="italic text-foreground/70">history.</span>
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.role + it.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-hover
              className="group grid grid-cols-12 items-start gap-4 py-8 transition hover:bg-foreground/[0.02] sm:py-10"
            >
              <div className="col-span-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:col-span-3">
                {it.year}
              </div>
              <div className="col-span-12 sm:col-span-6">
                <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-4xl">{it.role}</h3>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{it.co}</div>
              </div>
              <p className="col-span-12 text-sm leading-relaxed text-foreground/70 sm:col-span-3">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
