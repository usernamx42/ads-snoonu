"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const formatValue = useCallback(
    (v: number) => {
      const val = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
      return `${prefix}${val}${suffix}`;
    },
    [decimals, prefix, suffix]
  );

  const [display, setDisplay] = useState(formatValue(0));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(formatValue(v)),
      onComplete: () => setDisplay(formatValue(target)),
    });

    return () => controls.stop();
  }, [isInView, target, duration, formatValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
