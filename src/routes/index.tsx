import { createFileRoute } from "@tanstack/react-router";
import { ShaderBackground } from "@/components/ShaderBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { SideIndex } from "@/components/SideIndex";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Ijaz — Full Stack Developer (WordPress, WooCommerce, React)" },
      { name: "description", content: "Ahmad Ijaz — Full Stack Web Developer from Pakistan. 3+ years building 20+ WordPress, WooCommerce and React.js sites for retail, education and services." },
      { property: "og:title", content: "Ahmad Ijaz — Full Stack Developer" },
      { property: "og:description", content: "Considered websites & commerce systems — WordPress, WooCommerce and React.js, built from Pakistan." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <SmoothScroll />
      <ShaderBackground />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <SideIndex />
      <Hero />
      <Marquee items={["Available Q1 2026", "WordPress", "WooCommerce", "React.js", "Next.js", "Built in Pakistan", "Remote · GMT+5"]} />
      <Projects />
      <Manifesto />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
