import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("button, a, [data-hover]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 3 : 1})`,
          transition: "transform 250ms cubic-bezier(0.22,1,0.36,1), opacity 200ms",
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-8 w-8 rounded-full border border-foreground/60 bg-foreground/5 backdrop-blur-sm mix-blend-difference" />
      </div>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%)`,
          transition: "opacity 200ms",
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-1 w-1 rounded-full bg-foreground" />
      </div>
    </>
  );
}
