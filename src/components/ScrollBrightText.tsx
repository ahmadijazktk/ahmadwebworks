import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollBrightText({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.25"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(2px)", "blur(0px)"]);
  return (
    <motion.div ref={ref} style={{ opacity, filter }} className={className}>
      {children}
    </motion.div>
  );
}
