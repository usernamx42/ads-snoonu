"use client";

import { useTranslations } from "next-intl";
import { Brain, MapPin, ChartBar, UsersThree, Target, type IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureKey = "locationTargeting" | "behavioralData" | "demographics" | "purchaseIntent";

const features: { key: FeatureKey; Icon: ComponentType<IconProps> }[] = [
  { key: "locationTargeting", Icon: MapPin },
  { key: "behavioralData",    Icon: ChartBar },
  { key: "demographics",      Icon: UsersThree },
  { key: "purchaseIntent",    Icon: Target },
];

export default function AISmartTargeting() {
  const t = useTranslations("aiTargeting");
  const tFeatures = useTranslations("aiTargeting.features");

  return (
    <section id="ai-targeting" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-red text-white shadow-[0_8px_24px_-6px_rgba(217,2,23,0.4)]">
              <Brain size={28} weight="bold" />
            </div>
            <SectionHeading
              tagline={t("tagline")}
              headline={t("headline")}
              description={t("description")}
              align="center"
            />
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {features.map(({ key, Icon }, i) => (
            <ScrollReveal key={key} delay={i * 0.08}>
              <div className="relative h-full bg-white rounded-2xl p-7 md:p-8 border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <span className="absolute top-4 end-4 inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand-red text-white text-xs font-black tracking-wider">
                  {tFeatures(`${key}.letter`)}
                </span>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand-red/10 inline-flex items-center justify-center">
                    <Icon size={24} weight="bold" className="text-brand-red" />
                  </div>
                  <div className="pe-6">
                    <h3 className="text-xl font-bold text-off-black tracking-tight">
                      {tFeatures(`${key}.label`)}
                    </h3>
                    <p className="mt-2 text-base text-muted leading-relaxed">
                      {tFeatures(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
