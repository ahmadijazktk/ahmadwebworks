import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import pBarclay from "@/assets/proj-barclay.png";
import pEnlitenu from "@/assets/proj-enlitenu.png";
import pAspira from "@/assets/proj-aspira.png";
import pScholared from "@/assets/proj-scholared.png";
import pRheum from "@/assets/proj-rheumzoom.png";
import pFoody from "@/assets/proj-foodyspoint.png";
import pAv from "@/assets/proj-avschools.png";
import pMicro from "@/assets/proj-micromagic.png";
import pSmart from "@/assets/proj-smartlearning.png";

const projects = [
  {
    n: "01",
    title: "Barclay Training Institute",
    year: "2025",
    role: "Full-Stack · LMS",
    tags: "WordPress · LMS · Stripe",
    img: pBarclay,
    url: "https://barclaytraininginstitute.com/",
  },
  {
    n: "02",
    title: "EnlitenU",
    year: "2025",
    role: "Full-Stack · LMS",
    tags: "WordPress · LearnDash",
    img: pEnlitenu,
    url: "https://enlitenu.net/",
  },
  {
    n: "03",
    title: "Aspira.ai",
    year: "2025",
    role: "Full-Stack · AI",
    tags: "React · OpenAI · Node",
    img: pAspira,
    url: "https://aspira-ai.netlify.app/",
  },
  {
    n: "04",
    title: "Scholared",
    year: "2025",
    role: "Full-Stack · EdTech",
    tags: "React · Node · Gamification",
    img: pScholared,
    url: "https://scholared.ca/",
  },
  {
    n: "05",
    title: "RheumZoom — StudyBloom",
    year: "2025",
    role: "Full-Stack · MedEd",
    tags: "React · Question Bank",
    img: pRheum,
    url: "https://study-bloom-medical.netlify.app/",
  },
  {
    n: "06",
    title: "Foodyspoint",
    year: "2024",
    role: "Full-Stack · Marketplace",
    tags: "React · Node · Chef Booking",
    img: pFoody,
    url: "https://foodyspoint.com/",
  },
  {
    n: "07",
    title: "AV Schools",
    year: "2024",
    role: "Full-Stack · E-Learning",
    tags: "WordPress · Arabic · RTL",
    img: pAv,
    url: "https://av-schools.com/",
  },
  {
    n: "08",
    title: "Micro Magic SMP",
    year: "2024",
    role: "Frontend · Brand",
    tags: "WordPress · Booking",
    img: pMicro,
    url: "https://micromagicsmp.com/",
  },
  {
    n: "09",
    title: "Smart Learning EC",
    year: "2024",
    role: "Full-Stack · Courses",
    tags: "WordPress · WooCommerce",
    img: pSmart,
    url: "https://smartlearningec.com/",
  },
];

export function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1500px]">
        {/* heading */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ 01 — Selected Work · 2024—25</div>
            <h2 className="font-serif text-5xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl">
              An <span className="italic text-foreground/70">index</span> of recent things.
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Hover to preview · Click to visit live
          </p>
        </div>

        {/* desktop: sticky reel with hover-driven floating preview */}
        <div
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
          className="relative hidden md:block"
        >
          {/* floating preview */}
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -50%)" }}
                className="pointer-events-none absolute z-20 aspect-[16/10] w-[34vw] max-w-[560px] overflow-hidden rounded-2xl border border-border bg-background shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              >
                <img src={projects[hover].img} alt="" className="h-full w-full object-cover object-top" />
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="divide-y divide-border border-y border-border">
            {projects.map((p, i) => (
              <li
                key={p.title}
                onMouseEnter={() => setHover(i)}
                data-hover
                className="group relative"
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid grid-cols-12 items-center gap-4 py-7 transition-all duration-500"
                >
                  <div className="col-span-1 font-serif text-2xl italic text-muted-foreground transition group-hover:text-foreground">
                    {p.n}
                  </div>
                  <div className="col-span-6">
                    <h3 className="font-serif text-3xl leading-none tracking-[-0.02em] text-foreground/70 transition-all duration-500 group-hover:translate-x-3 group-hover:text-foreground lg:text-5xl">
                      {p.title}
                    </h3>
                  </div>
                  <div className="col-span-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.role}</div>
                  <div className="col-span-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.tags}</div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-foreground" />
                  </div>
                </a>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-foreground transition-transform duration-700 group-hover:scale-x-100" />
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>End of index — {projects.length} works</span>
            <a href="#contact" className="font-serif text-2xl italic normal-case tracking-normal text-foreground/80 transition hover:text-foreground">
              Start a project →
            </a>
          </div>
        </div>

        {/* mobile */}
        <div className="flex flex-col gap-10 md:hidden">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute left-4 top-4 font-serif text-xl italic text-foreground/85">{p.n}</div>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.role} · {p.year}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
