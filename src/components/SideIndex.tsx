import { useEffect, useState } from "react";

const sections = [
  { id: "hero", n: "00", label: "Index" },
  { id: "projects", n: "01", label: "Work" },
  { id: "manifesto", n: "02", label: "Manifesto" },
  { id: "about", n: "03", label: "About" },
  { id: "skills", n: "04", label: "Stack" },
  { id: "experience", n: "05", label: "Journey" },
  { id: "contact", n: "06", label: "Contact" },
];

export function SideIndex() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <aside className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="pointer-events-auto flex flex-col gap-2.5 text-[10px] uppercase tracking-[0.28em]">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-hover
                className={`group flex items-center justify-end gap-3 transition ${on ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className={`transition-all ${on ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {s.label}
                </span>
                <span className="tabular-nums">{s.n}</span>
                <span
                  className={`block h-px transition-all ${on ? "w-8 bg-foreground" : "w-3 bg-foreground/40"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
