import { motion } from "motion/react";
import { Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Magnetic } from "./Magnetic";
import { Clock } from "./Clock";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // TODO: Replace with your actual EmailJS Service ID
        "YOUR_TEMPLATE_ID", // TODO: Replace with your actual EmailJS Template ID
        formRef.current,
        {
          publicKey: "YOUR_PUBLIC_KEY", // TODO: Replace with your actual EmailJS Public Key
        }
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          toast.success("Message has been successfully sent!");
          formRef.current?.reset();

          setTimeout(() => setSent(false), 5000); // Reset sent state after 5s
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 border-b border-border pb-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          / 06 — Contact
        </div>

        {/* massive interactive lockup */}
        <a href="mailto:ahmadijazktk1@gmail.com" data-hover className="group block">
          <h2 className="font-serif text-[clamp(3.5rem,16vw,14rem)] leading-[0.82] tracking-[-0.045em]">
            <span className="block text-foreground/70 transition group-hover:text-foreground">Let's build</span>
            <span className="block italic text-foreground">
              something
              <span className="ml-4 inline-block translate-y-2 align-middle">
                <ArrowUpRight className="h-[0.7em] w-[0.7em] stroke-[1.3] transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </span>
            <span className="block text-foreground/40 transition group-hover:text-foreground/60">memorable.</span>
          </h2>
        </a>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          {/* left: form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-10 md:col-span-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Ada Lovelace" />
              <Field label="Email" name="email" type="email" placeholder="ada@studio.com" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Project brief</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about what you're building…"
                className="w-full resize-none rounded-2xl border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-foreground/[0.06]"
              />
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                {[
                  { Icon: Mail, href: "mailto:ahmadijazktk1@gmail.com", label: "Email" },
                  { Icon: Github, href: "https://github.com/", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                ].map(({ Icon, href, label }, i) => (
                  <Magnetic key={i} strength={0.4}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={label}
                      data-hover
                      className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-foreground/10"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
              <Magnetic strength={0.35}>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-background disabled:opacity-70"
                >
                  {loading ? "Sending..." : sent ? "Sent ✦" : "Send message"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>
            </div>
          </motion.form>

          {/* right: meta */}
          <div className="space-y-6 md:col-span-4">
            {[
              { k: "Email", v: "ahmadijazktk1@gmail.com", href: "mailto:ahmadijazktk1@gmail.com" },
              { k: "Local time", v: <><Clock /> PKT</> },
              { k: "Response", v: "within 24 hours" },
              { k: "Booking", v: "Q1 2026 — 2 slots left" },
            ].map((row, i) => (
              <div key={i} className="border-b border-border pb-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{row.k}</div>
                <div className="mt-2 font-serif text-xl italic text-foreground">
                  {row.href ? <a href={row.href} className="hover:underline">{row.v}</a> : row.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© 2026 Ahmad Ijaz · Crafted in Pakistan</div>
          <div>N° 04 — MMXXVI · A folio in seven movements</div>
          <a href="#hero" data-hover className="hover:text-foreground transition">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-foreground/[0.06]"
      />
    </div>
  );
}
