"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { placements, type PlacementKey } from "@/components/Placements";
import { useCurrency } from "@/lib/CurrencyContext";
import { formatAmount, CURRENCIES } from "@/lib/currency";

const zoneIds = ["all", "doha", "lusail", "alrayyan", "alwakrah"] as const;
type ZoneId = (typeof zoneIds)[number];

const targetingDefs = [
  { id: "broad",      multiplier: 1.0 },
  { id: "category",   multiplier: 1.15 },
  { id: "behavioral", multiplier: 1.3 },
] as const;

type TargetingId = (typeof targetingDefs)[number]["id"];

const MIN_BUDGET = 5000;

function toBudgetBucket(midpointQar: number): string {
  if (midpointQar < 5000) return "under-5k";
  if (midpointQar < 15000) return "5k-15k";
  if (midpointQar < 45000) return "15k-45k";
  return "45k-plus";
}

export default function CostCalculator() {
  const t = useTranslations("calculator");
  const tEst = useTranslations("calculator.estimate");
  const tZones = useTranslations("calculator.zones");
  const tTarg = useTranslations("calculator.targeting");
  const tPlace = useTranslations("placements.items");
  const { currency } = useCurrency();
  const [selectedZones, setSelectedZones] = useState<Set<ZoneId>>(() => new Set(["all"]));
  const [selected, setSelected] = useState<Set<PlacementKey>>(() => new Set([placements[0].key, placements[1].key]));
  const [weeks, setWeeks] = useState(4);
  const [target, setTarget] = useState<TargetingId>("broad");

  const multiplier = targetingDefs.find((td) => td.id === target)?.multiplier ?? 1;

  function toggleZone(id: ZoneId) {
    setSelectedZones((prev) => {
      const next = new Set(prev);
      if (id === "all") return new Set<ZoneId>(["all"]);
      next.delete("all");
      if (next.has(id)) next.delete(id);
      else next.add(id);
      if (next.size === 0) next.add("all");
      return next;
    });
  }

  const zonesLabel = useMemo(() => {
    if (selectedZones.has("all")) return tZones("all");
    const picked = zoneIds.filter((z) => z !== "all" && selectedZones.has(z));
    if (picked.length <= 2) return picked.map((z) => tZones(z)).join(", ");
    return tZones("summary", { count: picked.length });
  }, [selectedZones, tZones]);

  const { low, high } = useMemo(() => {
    const chosen = placements.filter((p) => selected.has(p.key));
    if (chosen.length === 0) return { low: 0, high: 0 };
    const lowSum = chosen.reduce((s, p) => s + p.indicativeWeeklyQar[0], 0);
    const highSum = chosen.reduce((s, p) => s + p.indicativeWeeklyQar[1], 0);
    return {
      low: Math.max(MIN_BUDGET, lowSum * weeks * multiplier),
      high: Math.max(MIN_BUDGET, highSum * weeks * multiplier),
    };
  }, [selected, weeks, multiplier]);

  const hasSelection = selected.size > 0;
  const midpoint = (low + high) / 2;

  function togglePlacement(key: PlacementKey) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const quoteHref = hasSelection
    ? `?budget=${toBudgetBucket(midpoint)}#contact`
    : "#contact";

  const weeksWord = t("weeks", { count: weeks });

  return (
    <section id="calculator" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline={t("tagline")}
            headline={t("headline")}
            description={t("description")}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)] gap-10 lg:gap-14 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-12">
              <Step number={1} title={t("step1.title")} hint={t("step1.hint")}>
                <div className="flex flex-wrap gap-3">
                  {zoneIds.map((id) => {
                    const active = selectedZones.has(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleZone(id)}
                        aria-pressed={active}
                        className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-base font-semibold transition-all ${
                          active
                            ? "bg-brand-red text-white shadow-[0_6px_20px_-6px_rgba(217,2,23,0.5)]"
                            : "bg-white text-off-black border border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`flex items-center justify-center w-5 h-5 rounded-full ${
                            active ? "bg-white/25" : "bg-zinc-100"
                          }`}
                        >
                          {active && <Check size={12} weight="bold" className="text-white" />}
                        </span>
                        {tZones(id)}
                      </button>
                    );
                  })}
                </div>
              </Step>

              <Step number={2} title={t("step2.title")} hint={t("step2.hint")}>
                <div className="flex flex-wrap gap-3">
                  {placements.map((p) => {
                    const active = selected.has(p.key);
                    return (
                      <button
                        key={p.key}
                        type="button"
                        onClick={() => togglePlacement(p.key)}
                        aria-pressed={active}
                        className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-base font-semibold transition-all ${
                          active
                            ? "bg-brand-red text-white shadow-[0_6px_20px_-6px_rgba(217,2,23,0.5)]"
                            : "bg-white text-off-black border border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`flex items-center justify-center w-5 h-5 rounded-full ${
                            active ? "bg-white/25" : "bg-zinc-100"
                          }`}
                        >
                          {active && <Check size={12} weight="bold" className="text-white" />}
                        </span>
                        {tPlace(`${p.key}.title`)}
                      </button>
                    );
                  })}
                </div>
              </Step>

              <Step
                number={3}
                title={t("step3.title")}
                hint={t("step3.hint")}
                trailing={
                  <span className="text-2xl font-black text-brand-red tabular-nums">
                    {weeks} <span className="text-lg font-bold text-muted">{weeksWord}</span>
                  </span>
                }
              >
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  className="w-full accent-brand-red cursor-pointer h-2"
                  aria-label={t("durationAria")}
                />
                <div className="flex justify-between mt-2 text-sm text-muted">
                  <span>{t("weeksRange.min")}</span>
                  <span>{t("weeksRange.max")}</span>
                </div>
              </Step>

              <Step number={4} title={t("step4.title")} hint={t("step4.hint")}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {targetingDefs.map((td) => {
                    const active = target === td.id;
                    return (
                      <button
                        key={td.id}
                        type="button"
                        onClick={() => setTarget(td.id)}
                        aria-pressed={active}
                        className={`p-5 rounded-2xl text-start transition-all ${
                          active
                            ? "bg-brand-red text-white shadow-[0_10px_30px_-10px_rgba(217,2,23,0.5)]"
                            : "bg-white border border-zinc-200 hover:border-zinc-400 text-off-black"
                        }`}
                      >
                        <p className="text-lg font-bold">{tTarg(`${td.id}.label`)}</p>
                        <p className={`text-sm mt-1 leading-snug ${active ? "text-white/80" : "text-muted"}`}>
                          {tTarg(`${td.id}.description`)}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Step>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-off-black text-white p-8 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">{tEst("label")}</p>

              {hasSelection ? (
                <>
                  <div className="mt-5">
                    <p className="text-sm text-white/50 mb-1">{CURRENCIES[currency].code}</p>
                    <div className="text-4xl md:text-5xl font-black tracking-tight tabular-nums leading-none">
                      {formatAmount(low, currency)}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white/40 tabular-nums">
                      – {formatAmount(high, currency)}
                    </div>
                    <p className="mt-3 text-sm text-white/50">{tEst("totalSpend")}</p>
                  </div>

                  <div className="mt-7 pt-7 border-t border-white/10 space-y-2.5 text-base">
                    <Row label={tEst("rows.zones")} value={zonesLabel} />
                    <Row label={tEst("rows.placements")} value={`${selected.size}`} />
                    <Row label={tEst("rows.duration")} value={`${weeks} ${weeksWord}`} />
                    <Row label={tEst("rows.targeting")} value={tTarg(`${target}.label`)} />
                  </div>
                </>
              ) : (
                <div className="mt-6">
                  <p className="text-xl font-bold text-white/80">{tEst("noSelectionTitle")}</p>
                  <p className="mt-2 text-base text-white/50">{tEst("noSelectionHint")}</p>
                </div>
              )}

              <div className="mt-8">
                <Button href={quoteHref} variant="secondary" className="w-full border-0 text-base">
                  {tEst("cta")} <ArrowRight size={18} weight="bold" />
                </Button>
                <p className="mt-4 text-xs text-white/40 leading-relaxed">
                  {tEst("disclaimer")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  hint,
  trailing,
  children,
}: {
  number: number;
  title: string;
  hint?: string;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-red/10 text-brand-red text-base font-black tabular-nums shrink-0">
            {number}
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-off-black tracking-tight">{title}</h3>
            {hint && <p className="mt-1 text-base text-muted">{hint}</p>}
          </div>
        </div>
        {trailing && <div className="shrink-0 pt-1">{trailing}</div>}
      </div>
      <div className="ps-0 md:ps-14">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-white/50">{label}</span>
      <span className="font-bold text-white tabular-nums">{value}</span>
    </div>
  );
}
