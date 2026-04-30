"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

type StudyKey = "qsr" | "beverage" | "fmcg";

interface CaseStudy {
  key: StudyKey;
  href: string;
  metricValue: number;
  metricSuffix: string;
  metricDecimals: number;
}

const studies: CaseStudy[] = [
  { key: "qsr",      href: "#", metricValue: 4.7,    metricSuffix: "x", metricDecimals: 1 },
  { key: "beverage", href: "#", metricValue: 2.1,    metricSuffix: "M", metricDecimals: 1 },
  { key: "fmcg",     href: "#", metricValue: 38,     metricSuffix: "%", metricDecimals: 0 },
];

export default function Results() {
  const t = useTranslations("results");

  return (
    <section id="results" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">{t("tagline")}</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-off-black">
              {t("headline")}
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              {t("description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((s, i) => (
            <ScrollReveal key={s.key} delay={i * 0.08}>
              <a
                href={s.href}
                aria-label={t(`studies.${s.key}.title`)}
                className="group h-full flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300"
              >
                <span className="self-start text-[11px] font-bold uppercase tracking-wider text-white bg-brand-red px-3 py-1 rounded-full mb-5">
                  {t(`studies.${s.key}.tag`)}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-off-black tracking-tight leading-snug">
                  {t(`studies.${s.key}.title`)}
                </h3>

                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {t(`studies.${s.key}.body`)}
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <div className="text-4xl font-black tracking-tight text-brand-red">
                    <AnimatedCounter
                      target={s.metricValue}
                      suffix={s.metricSuffix}
                      decimals={s.metricDecimals}
                    />
                  </div>
                  <p className="mt-1 text-sm text-muted">{t(`studies.${s.key}.metricLabel`)}</p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 group-hover:gap-3 text-base font-bold text-brand-red transition-all duration-200">
                  {t("ctaLabel")} <ArrowRight size={18} weight="bold" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mt-10 text-base text-muted text-center">{t("footnote")}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
