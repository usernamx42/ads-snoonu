"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Eye, MagnifyingGlass, Crosshair, ShoppingBag } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stages: { icon: ReactNode; label: string; description: string; color: string }[] = [
  {
    icon: <Eye size={28} weight="fill" />,
    label: "Discover",
    description: "Banner ads on home feed and category pages",
    color: "from-brand-red to-brand-orange",
  },
  {
    icon: <MagnifyingGlass size={28} weight="fill" />,
    label: "Search",
    description: "Sponsored listings when users search your category",
    color: "from-brand-orange to-brand-yellow",
  },
  {
    icon: <Crosshair size={28} weight="fill" />,
    label: "Influence",
    description: "Push notifications and video ads at peak intent",
    color: "from-brand-yellow to-brand-green",
  },
  {
    icon: <ShoppingBag size={28} weight="fill" />,
    label: "Convert",
    description: "Checkout upsells and post-purchase retargeting",
    color: "from-brand-green to-brand-electric",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-off-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white">
              From Discovery to Checkout
            </h2>
            <p className="mt-4 text-base text-white/50">
              Your ads follow the shopper journey at every touchpoint.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop funnel */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-14 left-[12%] right-[12%] h-px">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-electric"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {stages.map((stage, i) => (
                <ScrollReveal key={stage.label} delay={i * 0.15}>
                  <div className="text-center">
                    <motion.div
                      className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${stage.color} mx-auto flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                    >
                      {stage.icon}
                    </motion.div>
                    <h3 className="mt-5 text-lg font-bold text-white">{stage.label}</h3>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed max-w-[200px] mx-auto">
                      {stage.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-8">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.label} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="relative flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    {stage.icon}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-bold text-white">{stage.label}</h3>
                  <p className="mt-1 text-sm text-white/40 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
