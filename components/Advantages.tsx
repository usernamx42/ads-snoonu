"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ChartLineUp,
  Brain,
  Lightning,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const advantages: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Database size={20} weight="fill" className="text-brand-red" />,
    title: "First-Party Data",
    description: "Real shopping behavior from Snoonu's checkout, not guesswork.",
  },
  {
    icon: <ChartLineUp size={20} weight="fill" className="text-brand-red" />,
    title: "Closed-Loop Measurement",
    description: "Attributed revenue and ROAS tied to actual orders.",
  },
  {
    icon: <Brain size={20} weight="fill" className="text-brand-red" />,
    title: "AI-Powered Targeting",
    description: "ML reaches the right person at peak buying intent.",
  },
  {
    icon: <Lightning size={20} weight="fill" className="text-brand-red" />,
    title: "Real-Time Optimization",
    description: "Automated recommendations to improve campaign performance.",
  },
];

const platformStats = [
  { value: 3, suffix: "M+", label: "App Sessions / Month" },
  { value: 60, suffix: "KM", label: "Delivery Coverage" },
  { value: 12, suffix: "", label: "Verticals" },
  { value: 600, suffix: "+", label: "S-Charge Locations by 2026" },
];

export default function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-off-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Why Snoonu"
            headline="The Advantage That Sets Us Apart"
            light
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.06}>
              <motion.div
                className="rounded-xl border border-white/8 bg-white/5 p-5 h-full"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/15 flex items-center justify-center mb-3">
                  {adv.icon}
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {adv.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {platformStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/8 bg-white/5 px-5 py-4"
              >
                <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
