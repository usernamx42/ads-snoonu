"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ChartLineUp,
  Brain,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const advantages: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Database size={20} weight="bold" className="text-brand-red" />,
    title: "First-Party Data",
    description:
      "Every campaign is powered by real shopping behavior from Snoonu's own checkout, not guesswork.",
  },
  {
    icon: <ChartLineUp size={20} weight="bold" className="text-brand-red" />,
    title: "Closed-Loop Measurement",
    description:
      "See exactly which sales your campaign drove. Real attributed revenue and ROAS from day one.",
  },
  {
    icon: <Brain size={20} weight="bold" className="text-brand-red" />,
    title: "AI-Powered Targeting",
    description:
      "Machine learning reaches the right person at peak buying intent using location, past orders, and search behavior.",
  },
];

const platformStats = [
  { value: 3, suffix: "M+", label: "App Sessions / Month" },
  { value: 60, suffix: "KM", label: "Delivery Coverage" },
  { value: 12, suffix: "", label: "Verticals" },
  { value: 600, suffix: "", label: "S-Charge Locations by 2026" },
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-32 bg-off-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <ScrollReveal>
            <SectionHeading
              tagline="Why Snoonu"
              headline="The Advantage That Sets Us Apart"
              light
            />
          </ScrollReveal>

          <div className="space-y-6">
            {advantages.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.1}>
                <motion.div
                  className="flex gap-5 items-start p-6 rounded-2xl border border-white/10 bg-white/5"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 pt-12 border-t border-white/10">
            {platformStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}`}
              >
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
