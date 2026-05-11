"use client";

import { useEffect, useState } from "react";
import { WORKSHOP_EVENT } from "@/lib/data";

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

function calcTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
  const d = Math.floor(diff / 86400);
  const r1 = diff - d * 86400;
  const h = Math.floor(r1 / 3600);
  const r2 = r1 - h * 3600;
  const m = Math.floor(r2 / 60);
  const s = r2 - m * 60;
  return { d, h, m, s };
}

function CdItem({ num, label }: { num: string; label: string }) {
  return (
    <span className="flex flex-col items-center min-w-[44px]">
      <span className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink tabular-nums">
        {num}
      </span>
      <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted mt-1.5">
        {label}
      </span>
    </span>
  );
}

function CdSep() {
  return (
    <span className="font-serif text-2xl text-muted-2 leading-none pb-[18px]">:</span>
  );
}

export function Countdown() {
  const target = WORKSHOP_EVENT.targetDate.getTime();
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setTime(calcTimeLeft(target));
    setMounted(true);
    const id = setInterval(() => setTime(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="inline-flex items-end gap-2.5 mx-auto my-2.5 px-5 py-3 border border-rule bg-paper-2"
      aria-label="Time until workshop"
    >
      {mounted ? (
        <>
          <CdItem num={pad(time.d)} label="Days" />
          <CdSep />
          <CdItem num={pad(time.h)} label="Hours" />
          <CdSep />
          <CdItem num={pad(time.m)} label="Minutes" />
          <CdSep />
          <CdItem num={pad(time.s)} label="Seconds" />
        </>
      ) : (
        <>
          <CdItem num="--" label="Days" />
          <CdSep />
          <CdItem num="--" label="Hours" />
          <CdSep />
          <CdItem num="--" label="Minutes" />
          <CdSep />
          <CdItem num="--" label="Seconds" />
        </>
      )}
    </div>
  );
}
