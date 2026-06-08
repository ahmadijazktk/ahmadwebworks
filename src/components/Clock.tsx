import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Karachi",
      }).format(new Date());
      setTime(fmt);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "00:00:00"}</span>;
}
