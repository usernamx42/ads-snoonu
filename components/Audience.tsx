"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const audienceStats = [
  {
    value: 99,
    suffix: "%",
    label: "browse before placing an order",
    description: "Users actively explore products, categories, and promotions before checkout.",
  },
  {
    value: 30,
    suffix: "",
    prefix: "~",
    label: "orders per user per year",
    description: "High repeat purchase frequency means more touchpoints for your brand.",
  },
  {
    value: 20,
    suffix: "%",
    prefix: "~",
    label: "are Premium subscribers",
    description: "High-spending power customers with elevated basket sizes.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-start">
          <ScrollReveal>
            <SectionHeading
              tagline="Your Audience"
              headline="Reach Shoppers Who Are Ready to Buy"
              description="Snoonu users open the app with intent, searching for food, groceries, and products right now. Your ad appears at the moment of decision, driving real conversions for your brand."
            />
          </ScrollReveal>

          <div className="space-y-8">
            {audienceStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="text-4xl md:text-5xl font-black text-brand-red tracking-tight shrink-0 w-28 text-right tabular-nums">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="border-l border-zinc-200 pl-6">
                    <p className="text-sm font-bold text-off-black">{stat.label}</p>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
