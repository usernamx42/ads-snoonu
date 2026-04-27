"use client";

import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const tierDefs = [
  { key: "starter",    price: "QAR 15,000", popular: false, ctaVariant: "secondary" as const },
  { key: "growth",     price: "QAR 45,000", popular: true,  ctaVariant: "primary"   as const },
  { key: "enterprise", price: null,         popular: false, ctaVariant: "tertiary"  as const },
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-5 items-start">
          {tierDefs.map((tier, i) => {
            const features = tTiers.raw(`${tier.key}.features`) as string[];
            const price = tier.price ?? tTiers(`${tier.key}.priceCustom`);
            const period = tier.price ? t("perMonth") : tTiers(`${tier.key}.periodCustom`);
            return (
              <ScrollReveal key={tier.key} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-7 md:p-8 h-full hover:-translate-y-1.5 transition-transform duration-300 ${
                    tier.popular
                      ? "bg-white border-2 border-brand-red shadow-[0_25px_60px_-15px_rgba(217,2,23,0.12)]"
                      : "bg-white border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 start-7 inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-white bg-brand-red shadow-[0_4px_12px_rgba(217,2,23,0.3)]">
                      {t("popularBadge")}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-off-black">{tTiers(`${tier.key}.name`)}</h3>
                  <div className="mt-3 flex items-baseline gap-0.5">
                    <span className="text-3xl font-black text-off-black tracking-tight">{price}</span>
                    <span className="text-base text-muted">{period}</span>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-base text-muted">
                      <span className="font-bold text-off-black">{t("bestForLabel")}</span> {tTiers(`${tier.key}.bestFor`)}
                    </p>
                    <p className="text-base text-muted">
                      <span className="font-bold text-off-black">{t("outcomeLabel")}</span> {tTiers(`${tier.key}.outcome`)}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check size={20} weight="bold" className={`mt-0.5 shrink-0 ${tier.popular ? "text-brand-red" : "text-zinc-400"}`} />
                        <span className="text-lg text-muted">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href="#contact" variant={tier.ctaVariant} className="w-full">{tTiers(`${tier.key}.cta`)}</Button>
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
