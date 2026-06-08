const columns = [
  { title: "Languages", items: ["HTML5", "CSS", "JavaScript", "TypeScript", "Python", "OOP", "SQL", "LaTeX"] },
  { title: "Frameworks · Libraries", items: ["React.js", "Next.js", "Express.js", "Angular.js", "React Native", "Material UI", "Tailwind CSS", "Bootstrap", "ShadCN"] },
  { title: "Databases · CMS", items: ["MongoDB", "MySQL", "WordPress", "WooCommerce", "Elementor"] },
  { title: "Tools · Deployment", items: ["GitHub", "Bitbucket", "Postman", "Visual Studio", "Jira", "Confluence", "Clockify", "Trello", "AWS", "Netlify", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ 04 — Stack</div>
            <h2 className="font-serif text-5xl leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-8xl">
              Tools of the <span className="italic text-foreground/70">craft.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Always learning. Currently exploring Rust + WebGPU.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border/60 lg:grid-cols-4">
          {columns.map((c, i) => (
            <div key={c.title} className="relative h-[420px] overflow-hidden bg-background sm:h-[520px]">
              <div className="sticky top-0 z-10 flex items-baseline justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur">
                <h3 className="font-serif text-xl italic text-foreground">{c.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</span>
              </div>

              {/* dual marquee column */}
              <div
                className="flex flex-col gap-6 py-6 will-change-transform"
                style={{
                  animation: `${i % 2 === 0 ? "skill-up" : "skill-down"} ${22 + i * 4}s linear infinite`,
                }}
              >
                {[...c.items, ...c.items, ...c.items].map((s, k) => (
                  <div key={k} className="px-5">
                    <div
                      data-hover
                      className="font-serif text-3xl leading-none tracking-tight text-foreground/70 transition hover:italic hover:text-foreground sm:text-4xl"
                    >
                      {s}
                    </div>
                  </div>
                ))}
              </div>

              {/* fades */}
              <div className="pointer-events-none absolute inset-x-0 top-[60px] h-16 bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
