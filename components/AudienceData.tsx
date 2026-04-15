"use client";

import { type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, ChartLineUp, Brain, Lightning } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function AnimatedBar({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="h-2.5 bg-zinc-100 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : {}}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
    </div>
  );
}

function MiniBarChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const bars = [40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 90];
  return (
    <div ref={ref} className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-brand-red/20 rounded-t-sm relative overflow-hidden"
          style={{ height: `${h}%` }}
        >
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-brand-red rounded-t-sm"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function DonutChart({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div ref={ref} className="relative w-20 h-20 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f4f4f5" strokeWidth="10" />
        <motion.circle
          cx="50" cy="50" r="40" fill="none" stroke="#D90217" strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-black text-off-black">{value}%</span>
      </div>
    </div>
  );
}

const advantages: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <Database size={18} weight="fill" className="text-brand-red" />, title: "First-Party Data", text: "Real purchase behavior, not guesswork" },
  { icon: <ChartLineUp size={18} weight="fill" className="text-brand-red" />, title: "Closed-Loop", text: "Revenue tied to actual orders" },
  { icon: <Brain size={18} weight="fill" className="text-brand-red" />, title: "AI Targeting", text: "ML-driven intent matching" },
  { icon: <Lightning size={18} weight="fill" className="text-brand-red" />, title: "Real-Time", text: "Auto-optimized campaigns" },
];

const platformStats = [
  { value: 3, suffix: "M+", label: "App Sessions / Month" },
  { value: 60, suffix: "KM", label: "Delivery Coverage" },
  { value: 12, suffix: "", label: "Verticals" },
  { value: 600, suffix: "+", label: "S-Charge Locations" },
];

export default function AudienceData() {
  return (
    <section id="audience" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <SectionHeading
              tagline="Audience"
              headline="Why Snoonu Audience Wins"
              description="High-intent shoppers with real purchase data. No third-party cookies needed."
            />

            {/* Advantage cards */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex items-start gap-3 p-4 rounded-xl bg-off-white border border-zinc-100">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                    {adv.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-off-black">{adv.title}</p>
                    <p className="text-[11px] text-muted mt-0.5">{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              {/* 99% browse */}
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-3xl font-black text-brand-red tracking-tight">99%</span>
                  <span className="text-xs text-muted">browse before ordering</span>
                </div>
                <AnimatedBar value={99} color="bg-brand-red" />
                <p className="mt-3 text-xs text-muted leading-relaxed">
                  Users actively explore products, categories, and deals before checkout. Your ad is part of that journey.
                </p>
              </div>

              {/* ~30 orders/year */}
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-3xl font-black text-brand-red tracking-tight">~30</span>
                  <span className="text-xs text-muted">orders per user / year</span>
                </div>
                <MiniBarChart />
                <p className="mt-3 text-xs text-muted leading-relaxed">
                  High repeat frequency means more touchpoints and more chances to convert.
                </p>
              </div>

              {/* ~20% Premium */}
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-center gap-6">
                  <DonutChart value={20} />
                  <div>
                    <span className="text-xs text-muted">Premium subscribers</span>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      High-spending power users with elevated basket sizes and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Platform stats strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-off-white border border-zinc-100 px-5 py-4">
                <div className="text-2xl font-black text-off-black tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
