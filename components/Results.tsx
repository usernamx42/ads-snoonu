"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-off-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">
              Results
            </p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white">
              Real Performance, Real Revenue
            </h2>
            <p className="mt-4 text-base text-white/50">
              Every campaign on Snoonu is measured against actual orders, not vanity metrics.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured case study */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="mt-12 relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
              <div className="p-8 md:p-12">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-off-black bg-brand-red px-3 py-1 rounded-full mb-5">
                  Search Ads
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  How a leading QSR brand drove 4.7x ROAS with Snoonu Ads
                </h3>
                <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-lg">
                  By targeting high-intent food searchers with sponsored listings and push notifications during peak hours, this brand turned Snoonu into their #1 digital acquisition channel.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:gap-3 transition-all cursor-pointer">
                  Read Full Story <ArrowRight size={14} weight="bold" />
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10">
                <div>
                  <div className="text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter target={3.8} suffix="%" decimals={1} />
                  </div>
                  <p className="text-xs text-white/40 mt-1">Click-through Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight">
                    <AnimatedCounter target={6.5} suffix="%" decimals={1} />
                  </div>
                  <p className="text-xs text-white/40 mt-1">Conversion Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-red tracking-tight">
                    <AnimatedCounter target={4.7} suffix="x" decimals={1} />
                  </div>
                  <p className="text-xs text-white/40 mt-1">Return on Ad Spend</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-sm text-white/30 text-center">
            More case studies launching soon. Results above represent platform averages.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
