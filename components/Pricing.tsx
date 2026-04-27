"use client";

import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TierKey = "starter" | "growth" | "enterprise";

type TierDef = {
  key: TierKey;
  price: string | null;
  popular: boolean;
  accent: string;        // tailwind text color class for headline accent + check icons
  buttonBg: string;      // tailwind bg color class for the CTA
  buttonHover: string;   // tailwind hover bg
};

const tierDefs: readonly TierDef[] = [
  {
    key: "starter",
    price: "QAR 15,000",
    popular: false,
    accent: "text-emerald-700",
    buttonBg: "bg-emerald-700",
    buttonHover: "hover:bg-emerald-800",
  },
  {
    key: "growth",
    price: "QAR 45,000",
    popular: true,
    accent: "text-brand-red",
    buttonBg: "bg-brand-red",
    buttonHover: "hover:bg-brand-red/90",
  },
  {
    key: "enterprise",
    price: null,
    popular: false,
    accent: "text-emerald-700",
    buttonBg: "bg-emerald-700",
    buttonHover: "hover:bg-emerald-800",
  },
] as const;

export default function Pricing() {
  const t = useTranslations("pricing");
  const tTiers = useTranslations("pricing.tiers");

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline={t("tagline")}
            headline={t("headline")}
            description={t("description")}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-5 items-stretch max-w-5xl mx-auto">
          {tierDefs.map((tier, i) => {
            const features = tTiers.raw(`${tier.key}.features`) as string[];
            const price = tier.price ?? tTiers(`${tier.key}.priceCustom`);
            const period = tier.price ? t("perMonth") : tTiers(`${tier.key}.periodCustom`);
            return (
              <ScrollReveal key={tier.key} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl h-full flex flex-col overflow-hidden hover:-translate-y-1.5 transition-transform duration-300 ${
                    tier.popular
                      ? "bg-white border-2 border-brand-red shadow-[0_25px_60px_-15px_rgba(217,2,23,0.18)]"
                      : "bg-white border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-4 py-1 rounded-full text-[13px] font-bold tracking-wider text-white bg-brand-red shadow-[0_4px_12px_rgba(217,2,23,0.3)]">
                      {t("popularBadge")}
                    </span>
                  )}

                  {/* Header (centered) */}
                  <div className="text-center px-7 pt-10 pb-7 md:px-8">
                    <h3 className="text-xl font-bold text-off-black tracking-tight">
                      {tTiers(`${tier.key}.name`)}
                    </h3>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className={`text-4xl md:text-5xl font-black tracking-tight ${tier.accent}`}>
                        {price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{period.trim()}</p>
                  </div>

                  {/* CTA */}
                  <div className="px-7 md:px-8">
                    <a
                      href="#contact"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white tracking-tight min-h-[48px] transition-all cursor-pointer active:scale-[0.98] active:translate-y-px ${tier.buttonBg} ${tier.buttonHover}`}
                    >
                      {tTiers(`${tier.key}.cta`)}
                    </a>
                  </div>

                  {/* Features list */}
                  <ul className="px-7 md:px-8 pt-7 pb-7 space-y-3 flex-1">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check size={20} weight="bold" className={`mt-0.5 shrink-0 ${tier.accent}`} />
                        <span className="text-base text-off-black/80 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best for / Outcome — grey block at the bottom */}
                  <div className="bg-zinc-50 border-t border-zinc-100 px-7 md:px-8 py-5 space-y-2">
                    <p className="text-sm text-muted leading-relaxed">
                      <span className="font-bold text-off-black">{t("bestForLabel")}</span> {tTiers(`${tier.key}.bestFor`)}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      <span className="font-bold text-off-black">{t("outcomeLabel")}</span> {tTiers(`${tier.key}.outcome`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center max-w-xl mx-auto">
            <p className="text-base text-muted">
              {t("footer")}{" "}
              <a href="#contact" className="font-bold text-brand-red hover:underline inline-flex items-center gap-1">
                {t("footerCta")} <ArrowRight size={18} weight="bold" />
              </a>{" "}
              {t("footerSuffix")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
