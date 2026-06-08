import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-foreground/70"
    />
  );
}
