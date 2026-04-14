"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { User, Storefront, Buildings } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const audiences: {
  icon: ReactNode;
  title: string;
  stat: string;
  description: string;
}[] = [
  {
    icon: <User size={24} weight="fill" className="text-brand-red" />,
    title: "Snoonu Users",
    stat: "1.5M+",
    description:
      "High-intent shoppers who browse, search, and buy daily. 99% explore products before placing an order.",
  },
  {
    icon: <Storefront size={24} weight="fill" className="text-brand-orange" />,
    title: "Merchants",
    stat: "5,000+",
    description:
      "Restaurants, grocery stores, and retailers across Qatar actively serving customers through our platform.",
  },
  {
    icon: <Buildings size={24} weight="fill" className="text-brand-blue" />,
    title: "Brand Partners",
    stat: "200+",
    description:
      "Leading brands already advertising on Snoonu, from QSR chains to FMCG to retail and services.",
  },
];

const highlights = [
  { value: 99, suffix: "%", label: "browse before ordering" },
  { value: 30, suffix: "", prefix: "~", label: "orders per user / year" },
  { value: 20, suffix: "%", prefix: "~", label: "are Premium subscribers" },
];

export default function Audience() {
  return (
    <section id="audience" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Audience"
            headline="Reach Shoppers Ready to Buy"
            description="Snoonu users open the app with intent. Your ad appears at the moment of decision."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {audiences.map((aud, i) => (
            <ScrollReveal key={aud.title} delay={i * 0.08}>
              <motion.div
                className="group rounded-2xl p-7 bg-white border border-zinc-100 hover:border-zinc-200 transition-all h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 group-hover:bg-brand-red/5 flex items-center justify-center transition-colors">
                    {aud.icon}
                  </div>
                  <span className="text-2xl font-black text-off-black tracking-tight">
                    {aud.stat}
                  </span>
                </div>
                <h3 className="text-base font-bold text-off-black tracking-tight">
                  {aud.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {aud.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="flex items-center gap-4 rounded-xl bg-white border border-zinc-100 px-6 py-4"
              >
                <div className="text-2xl font-black text-brand-red tracking-tight shrink-0">
                  <AnimatedCounter
                    target={h.value}
                    suffix={h.suffix}
                    prefix={h.prefix}
                  />
                </div>
                <p className="text-sm text-muted">{h.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
