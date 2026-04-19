"use client";

import { type ReactNode, useRef, useEffect, useState } from "react";
import { Database, ChartLineUp, Brain, Lightning } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function useInViewOnce(margin = "-50px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: margin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);
  return { ref, inView };
}

function AnimatedBar({ value }: { value: number }) {
  const { ref, inView } = useInViewOnce();
  return (
    <div ref={ref} className="h-2 bg-zinc-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-brand-red transition-[width] duration-1000 ease-out"
        style={{ width: inView ? `${value}%` : "0%" }}
      />
    </div>
  );
}

function MiniBarChart() {
  const { ref, inView } = useInViewOnce();
  const bars = [40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 90];
  return (
    <div ref={ref} className="flex items-end gap-1 h-14">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-t-sm bg-brand-red/15 relative overflow-hidden" style={{ height: `${h}%` }}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-brand-red rounded-t-sm transition-[height] duration-600 ease-out"
            style={{ height: inView ? "100%" : "0%", transitionDelay: `${i * 40}ms` }}
          />
        </div>
      ))}
    </div>
  );
}

function DonutChart({ value }: { value: number }) {
  const { ref, inView } = useInViewOnce();
  const c = 2 * Math.PI * 38;
  return (
    <div ref={ref} className="relative w-16 h-16">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="38" fill="none" stroke="#f4f4f5" strokeWidth="8" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#D90217" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={inView ? c - (value / 100) * c : c}
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-black text-off-black">{value}%</span>
      </div>
    </div>
  );
}

const whyCards: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <Database size={20} weight="fill" className="text-brand-red" />, title: "First-Party Data", text: "Real purchase behavior, not guesswork" },
  { icon: <ChartLineUp size={20} weight="fill" className="text-brand-red" />, title: "Closed-Loop", text: "Revenue tied to actual orders" },
  { icon: <Brain size={20} weight="fill" className="text-brand-red" />, title: "AI Targeting", text: "ML-driven intent matching" },
  { icon: <Lightning size={20} weight="fill" className="text-brand-red" />, title: "Real-Time", text: "Auto-optimized campaigns" },
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
          <div>
            <ScrollReveal>
              <SectionHeading tagline="Audience" headline="Why Snoonu Audience Wins" description="High-intent shoppers with real purchase data. No third-party cookies needed." />
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {whyCards.map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.06}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-off-white border border-zinc-100 h-full hover:-translate-y-0.5 hover:bg-[#f0f0f0] transition-all duration-200">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/[0.08] flex items-center justify-center shrink-0">{card.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-off-black">{card.title}</p>
                      <p className="text-xs text-muted mt-0.5">{card.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-4xl font-black text-brand-red tracking-tight">99%</span>
                  <span className="text-base text-muted">browse before ordering</span>
                </div>
                <AnimatedBar value={99} />
                <p className="mt-3 text-base text-muted leading-relaxed">Users explore products before checkout. Your ad is part of that journey.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-4xl font-black text-brand-red tracking-tight">~30</span>
                  <span className="text-base text-muted">orders per user / year</span>
                </div>
                <MiniBarChart />
                <p className="mt-3 text-base text-muted leading-relaxed">High repeat frequency means more touchpoints and chances to convert.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-off-white border border-zinc-100 p-6">
                <div className="flex items-center gap-6">
                  <DonutChart value={20} />
                  <div>
                    <span className="text-sm font-bold text-off-black">Premium subscribers</span>
                    <p className="mt-1 text-base text-muted leading-relaxed">High-spending users with elevated basket sizes.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-off-white border border-zinc-100 px-5 py-4">
                <div className="text-2xl font-black text-off-black tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-base text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
