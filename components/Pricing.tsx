"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const tiers = [
  {
    name: "Starter",
    price: "QAR 15,000",
    period: "/month",
    popular: false,
    features: [
      "App and web banner ads",
      "Up to 50,000 impressions",
      "Basic geo-targeting",
      "Monthly report",
      "Self-serve dashboard",
    ],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Growth",
    price: "QAR 45,000",
    period: "/month",
    popular: true,
    features: [
      "Everything in Starter",
      "Sponsored search",
      "AI targeting",
      "Up to 250,000 impressions",
      "Push notifications",
      "Weekly analytics",
    ],
    cta: "Get Started",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " Pricing",
    popular: false,
    features: [
      "Everything in Growth",
      "Homepage takeover",
      "Video ads",
      "Dedicated account manager",
      "Custom audiences",
      "API access",
    ],
    cta: "Talk to Our Team",
    ctaVariant: "tertiary" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Plans"
            headline="A Plan for Every Business"
            description="Every plan includes first-party data targeting and closed-loop measurement."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-6 lg:gap-4 items-start">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <motion.div
                className={`relative rounded-2xl p-8 md:p-10 h-full ${
                  tier.popular
                    ? "bg-white border-2 border-brand-red shadow-[0_20px_40px_-15px_rgba(217,2,23,0.12)]"
                    : "bg-white border border-zinc-200"
                }`}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-8 inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-brand-red">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-off-black">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black text-off-black tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted">{tier.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        size={16}
                        weight="bold"
                        className={`mt-0.5 shrink-0 ${
                          tier.popular ? "text-brand-red" : "text-zinc-400"
                        }`}
                      />
                      <span className="text-sm text-muted">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={tier.ctaVariant}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
