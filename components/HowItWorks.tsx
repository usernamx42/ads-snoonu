"use client";

import { type ReactNode } from "react";
import { Eye, MagnifyingGlass, Crosshair, ShoppingBag } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stages: { icon: ReactNode; label: string; description: string }[] = [
  { icon: <Eye size={24} weight="fill" />, label: "Discover", description: "Banners on home feed and category pages" },
  { icon: <MagnifyingGlass size={24} weight="fill" />, label: "Search", description: "Sponsored listings when users search" },
  { icon: <Crosshair size={24} weight="fill" />, label: "Influence", description: "Push notifications and video at peak intent" },
  { icon: <ShoppingBag size={24} weight="fill" />, label: "Convert", description: "Checkout upsells and retargeting" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-off-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white">
              From Discovery to Checkout
            </h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">Your ads follow the shopper journey at every touchpoint.</p>
          </div>
        </ScrollReveal>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line — behind icons */}
            <div className="absolute top-[52px] left-[12%] right-[12%] h-px z-0">
              <ScrollReveal delay={0.3}>
                <div className="h-px bg-gradient-to-r from-brand-red via-brand-yellow to-brand-green" />
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {stages.map((stage, i) => (
                <ScrollReveal key={stage.label} delay={i * 0.12}>
                  <div className="text-center relative z-10">
                    <div
                      className="w-[104px] h-[104px] rounded-3xl bg-white/[0.06] border border-white/[0.08] mx-auto flex items-center justify-center text-white backdrop-blur-sm hover:scale-110 hover:bg-brand-red/15 hover:border-brand-red/30 transition-all duration-300"
                    >
                      {stage.icon}
                    </div>
                    <h3 className="mt-5 text-base font-bold text-white">{stage.label}</h3>
                    <p className="mt-2 text-xs text-white/35 leading-relaxed max-w-[180px] mx-auto">{stage.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.label} delay={i * 0.08}>
              <div className="flex gap-4 items-start">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white shrink-0">
                    {stage.icon}
                  </div>
                  {i < stages.length - 1 && <div className="w-px h-6 bg-white/10 mt-2" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold text-white">{stage.label}</h3>
                  <p className="mt-1 text-xs text-white/35 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
