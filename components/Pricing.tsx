"use client";

import { Check, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const tiers = [
  {
    name: "Starter",
    price: "QAR 15,000",
    period: " / month",
    bestFor: "Testing Snoonu Ads for the first time",
    outcome: "Validate performance and generate your first measurable sales",
    popular: false,
    features: ["App & web banner ads", "Up to 50,000 impressions", "Basic geo-targeting", "Monthly performance report", "Self-serve dashboard"],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Growth",
    price: "QAR 45,000",
    period: " / month",
    bestFor: "Scaling performance and driving consistent sales",
    outcome: "Turn Snoonu Ads into a reliable revenue channel",
    popular: true,
    features: ["Everything in Starter", "Sponsored search (capture high-intent demand)", "AI-powered audience targeting", "Push notifications", "Up to 250,000 impressions", "Weekly performance analytics"],
    cta: "Get Started",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " Pricing",
    bestFor: "Market leaders aiming to dominate their category",
    outcome: "Maximise visibility, conversions, and market share on Snoonu",
    popular: false,
    features: ["Everything in Growth", "Homepage takeovers", "Video ad placements", "Custom audience segments", "Dedicated account manager", "API access & advanced integrations"],
    cta: "Talk to Our Team",
    ctaVariant: "tertiary" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Plans"
            headline="Plans Built for Every Stage of Growth"
            description="Every plan includes first-party data targeting, closed-loop measurement, and access to Snoonu's high-intent shoppers."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-5 items-start">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 md:p-8 h-full hover:-translate-y-1.5 transition-transform duration-300 ${
                  tier.popular
                    ? "bg-white border-2 border-brand-red shadow-[0_25px_60px_-15px_rgba(217,2,23,0.12)]"
                    : "bg-white border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-7 inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white bg-brand-red shadow-[0_4px_12px_rgba(217,2,23,0.3)]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-off-black">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-0.5">
                  <span className="text-3xl font-black text-off-black tracking-tight">{tier.price}</span>
                  <span className="text-sm text-muted">{tier.period}</span>
                </div>
                <div className="mt-4 space-y-1.5">
                  <p className="text-xs text-muted"><span className="font-bold text-off-black">Best for:</span> {tier.bestFor}</p>
                  <p className="text-xs text-muted"><span className="font-bold text-off-black">Outcome:</span> {tier.outcome}</p>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check size={14} weight="bold" className={`mt-0.5 shrink-0 ${tier.popular ? "text-brand-red" : "text-zinc-400"}`} />
                      <span className="text-sm text-muted">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="#contact" variant={tier.ctaVariant} className="w-full">{tier.cta}</Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center max-w-xl mx-auto">
            <p className="text-sm text-muted">
              Not sure where to start?{" "}
              <a href="#contact" className="font-bold text-brand-red hover:underline inline-flex items-center gap-1">
                Get a custom media plan <ArrowRight size={12} weight="bold" />
              </a>{" "}
              tailored to your goals and budget in under 48 hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
