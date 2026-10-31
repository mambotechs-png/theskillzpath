"use client";

import { useEffect, useState } from "react";

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({
  target,
  className = "",
}: {
  target: string;
  className?: string;
}) {
  const targetMs = new Date(target).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(targetMs));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const cells = [
    { value: parts ? String(parts.days) : "--", label: "Days" },
    { value: parts ? pad(parts.hours) : "--", label: "Hours" },
    { value: parts ? pad(parts.minutes) : "--", label: "Min" },
    { value: parts ? pad(parts.seconds) : "--", label: "Sec" },
  ];

  return (
    <div className={className} role="timer" aria-label="Time until launch">
      <div className="grid grid-cols-4 gap-2">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="rounded-xl border border-[#0b0b12]/[0.07] bg-white/70 px-1 py-2.5 text-center backdrop-blur-sm"
          >
            <div className="font-mono text-[1.15rem] font-semibold leading-none tabular-nums text-[#0b0b12] sm:text-[1.3rem]">
              {cell.value}
            </div>
            <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8b90a3]">
              {cell.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
