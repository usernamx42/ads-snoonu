"use client";

import { type ReactNode } from "react";
import {
  ChartBar,
  GitFork,
  UsersFour,
  Robot,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const metrics = [
  { value: 3.8, suffix: "%", label: "Avg CTR", decimals: 1 },
  { value: 0.92, suffix: "", prefix: "QAR ", label: "Avg CPC", decimals: 2 },
  { value: 6.5, suffix: "%", label: "Avg Conversion Rate", decimals: 1 },
  { value: 4.7, suffix: "x", label: "Avg ROAS", decimals: 1 },
];

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <ChartBar size={20} weight="bold" className="text-brand-red" />,
    title: "Real-Time Dashboard",
    description: "Live impressions, clicks, spend and conversions.",
  },
  {
    icon: <GitFork size={20} weight="bold" className="text-brand-red" />,
    title: "Attribution Modelling",
    description: "Tied directly to actual Snoonu orders.",
  },
  {
    icon: <UsersFour size={20} weight="bold" className="text-brand-red" />,
    title: "Audience Insights",
    description: "See which segments performed best.",
  },
  {
    icon: <Robot size={20} weight="bold" className="text-brand-red" />,
    title: "AI Optimisation",
    description: "Automated recommendations to improve ROAS.",
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Performance"
            headline="Know Exactly What's Working"
            description="All data is fully confidential and never shared with other advertisers on the platform."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-4xl md:text-5xl font-black text-brand-red tracking-tight">
                  <AnimatedCounter
                    target={m.value}
                    suffix={m.suffix}
                    prefix={m.prefix}
                    decimals={m.decimals}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex items-end gap-3 h-40">
                  {[35, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-brand-red/20 relative"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-brand-red"
                          style={{ height: `${h * 0.6}%` }}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-between text-xs text-muted">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-off-black text-sm tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted mt-0.5">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
