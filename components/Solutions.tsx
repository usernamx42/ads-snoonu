"use client";

import { useTranslations } from "next-intl";
import { Megaphone, ShoppingCart, UsersThree, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutionKeys = [
  {
    key: "awareness",
    icon: Megaphone,
    accent: "text-brand-red bg-brand-red/[0.08] group-hover:bg-brand-red group-hover:text-white",
  },
  {
    key: "conversions",
    icon: ShoppingCart,
    accent: "text-brand-blue bg-brand-blue/[0.08] group-hover:bg-brand-blue group-hover:text-white",
  },
  {
    key: "acquisition",
    icon: UsersThree,
    accent: "text-brand-orange bg-brand-orange/[0.08] group-hover:bg-brand-orange group-hover:text-white",
  },
] as const;

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline={t("tagline")}
            headline={t("headline")}
            description={t("description")}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutionKeys.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <ScrollReveal key={sol.key} delay={i * 0.1}>
                <a
                  href="#placements"
                  className="group block rounded-2xl bg-white border border-zinc-100 p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${sol.accent}`}>
                    <Icon size={28} weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold text-off-black tracking-tight">{t(`items.${sol.key}.title`)}</h3>
                  <p className="mt-3 text-base text-muted leading-relaxed">{t(`items.${sol.key}.benefit`)}</p>
                  <div className="mt-6 flex items-center gap-2 text-base font-bold text-brand-red opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {t("learnMore")} <ArrowRight size={16} weight="bold" />
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
