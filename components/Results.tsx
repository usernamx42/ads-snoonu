"use client";

import { ArrowRight } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const metrics = [
  { value: 3.8, suffix: "%", label: "Click-through Rate", decimals: 1 },
  { value: 6.5, suffix: "%", label: "Conversion Rate", decimals: 1 },
  { value: 4.7, suffix: "x", label: "Return on Ad Spend", decimals: 1 },
];

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">Results</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-off-black">
              Real Performance, Real Revenue
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Every campaign on Snoonu is measured against actual orders, not vanity metrics.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="mt-12 rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
              <div className="p-8 md:p-12">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white bg-brand-red px-3 py-1 rounded-full mb-5">
                  Search Ads
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-off-black tracking-tight leading-tight">
                  How a leading QSR brand drove 4.7x ROAS with Snoonu Ads
                </h3>
                <p className="mt-4 text-base text-muted leading-relaxed max-w-lg">
                  By targeting high-intent food searchers with sponsored listings and push notifications during peak hours, this brand turned Snoonu into their #1 digital acquisition channel.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 hover:gap-3 text-base font-bold text-brand-red transition-all duration-200"
                >
                  Read Full Story <ArrowRight size={18} weight="bold" />
                </a>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center gap-8 border-t lg:border-t-0 lg:border-l border-zinc-100 bg-off-white/50">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className={`text-3xl font-black tracking-tight ${m.suffix === "x" ? "text-brand-red" : "text-off-black"}`}>
                      <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals} />
                    </div>
                    <p className="text-base text-muted mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-base text-muted text-center">More case studies launching soon. Results above represent platform averages.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
