import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Clock } from "./Clock";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 hidden transition-all md:block ${scrolled ? "py-3" : "py-5"}`}>
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8">
          <a href="#hero" data-hover className="flex items-baseline gap-3 text-sm">
            <span className="font-serif text-xl italic leading-none">Ahmad Ijaz</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Folio ’26</span>
          </a>

          <div className={`glass flex items-center gap-0.5 rounded-full px-2 py-1.5 transition-all ${scrolled ? "scale-100" : "scale-100"}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-hover
                className="rounded-full px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground transition hover:bg-foreground/10 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="hidden lg:inline"><Clock /> PKT</span>
            <a href="#contact" data-hover className="rounded-full border border-foreground/30 px-3 py-1.5 transition hover:bg-foreground hover:text-background">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <nav className="fixed inset-x-3 top-3 z-50 md:hidden">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5">
          <a href="#hero" className="flex items-center gap-2 text-sm">
            <span className="font-serif italic">Ahmad Ijaz</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-8 w-8 place-items-center rounded-full text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {open && (
          <div className="glass-strong mt-2 rounded-3xl p-3">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-serif text-2xl italic text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
