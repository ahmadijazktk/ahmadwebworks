import { useEffect, useRef, useState, type ElementType } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function ScrambleText({
  text,
  as: Tag = "span",
  className,
  duration = 1100,
  trigger = "view",
}: {
  text: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  trigger?: "view" | "mount";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [out, setOut] = useState(text);
  const playedRef = useRef(false);

  const play = () => {
    if (playedRef.current) return;
    playedRef.current = true;
    const start = performance.now();
    const len = text.length;
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      let s = "";
      for (let i = 0; i < len; i++) {
        const char = text[i];
        if (char === " ") { s += " "; continue; }
        const reveal = p * len * 1.4 - i;
        if (reveal > 1) s += char;
        else if (reveal > 0) s += CHARS[Math.floor(Math.random() * CHARS.length)];
        else s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(s);
      if (p < 1) raf = requestAnimationFrame(step);
      else setOut(text);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  };

  useEffect(() => {
    if (trigger === "mount") { play(); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) play(); });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <Tag ref={ref as never} className={className}>{out}</Tag>;
}
