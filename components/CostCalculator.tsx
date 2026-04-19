"use client";

import { useMemo, useState } from "react";
import { Check, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { placements } from "@/components/Placements";

const targeting = [
  { id: "broad",      label: "Broad",      description: "Widest possible audience",          multiplier: 1.0 },
  { id: "category",   label: "Category",   description: "Shoppers in your vertical",          multiplier: 1.15 },
  { id: "behavioral", label: "Behavioral", description: "AI-matched high-intent users",       multiplier: 1.3 },
] as const;

type TargetingId = (typeof targeting)[number]["id"];

const MIN_BUDGET = 5000;

function toBudgetBucket(midpoint: number): string {
  if (midpoint < 5000) return "under-5k";
  if (midpoint < 15000) return "5k-15k";
  if (midpoint < 45000) return "15k-45k";
  return "45k-plus";
}

function formatQar(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export default function CostCalculator() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set([placements[0].title, placements[1].title]));
  const [weeks, setWeeks] = useState(4);
  const [target, setTarget] = useState<TargetingId>("broad");

  const multiplier = targeting.find((t) => t.id === target)?.multiplier ?? 1;

  const { low, high } = useMemo(() => {
    const chosen = placements.filter((p) => selected.has(p.title));
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

  function togglePlacement(title: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  const quoteHref = hasSelection
    ? `?budget=${toBudgetBucket(midpoint)}#contact`
    : "#contact";

  return (
    <section id="calculator" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Campaign Calculator"
            headline="Plan Your Snoonu Ads Budget"
            description="Three quick choices, one clear estimate. Final quote factors in creative, dates, and inventory."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)] gap-10 lg:gap-14 items-start">
          {/* Steps */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-12">
              <Step number={1} title="Which placements?" hint="Pick as many as you like.">
                <div className="flex flex-wrap gap-3">
                  {placements.map((p) => {
                    const active = selected.has(p.title);
                    return (
                      <button
                        key={p.title}
                        type="button"
                        onClick={() => togglePlacement(p.title)}
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
                        {p.title}
                      </button>
                    );
                  })}
                </div>
              </Step>

              <Step
                number={2}
                title="For how long?"
                hint="Drag to set your campaign length."
                trailing={
                  <span className="text-2xl font-black text-brand-red tabular-nums">
                    {weeks} <span className="text-lg font-bold text-muted">{weeks === 1 ? "week" : "weeks"}</span>
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
                  aria-label="Campaign duration in weeks"
                />
                <div className="flex justify-between mt-2 text-sm text-muted">
                  <span>1 week</span>
                  <span>12 weeks</span>
                </div>
              </Step>

              <Step number={3} title="Who do you want to reach?" hint="Tighter targeting usually converts better.">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {targeting.map((t) => {
                    const active = target === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTarget(t.id)}
                        aria-pressed={active}
                        className={`p-5 rounded-2xl text-left transition-all ${
                          active
                            ? "bg-brand-red text-white shadow-[0_10px_30px_-10px_rgba(217,2,23,0.5)]"
                            : "bg-white border border-zinc-200 hover:border-zinc-400 text-off-black"
                        }`}
                      >
                        <p className="text-lg font-bold">{t.label}</p>
                        <p className={`text-sm mt-1 leading-snug ${active ? "text-white/80" : "text-muted"}`}>
                          {t.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Step>
            </div>
          </ScrollReveal>

          {/* Estimate — sticky on desktop */}
          <ScrollReveal delay={0.2} className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-off-black text-white p-8 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Your estimate</p>

              {hasSelection ? (
                <>
                  <div className="mt-5">
                    <p className="text-sm text-white/50 mb-1">QAR</p>
                    <div className="text-4xl md:text-5xl font-black tracking-tight tabular-nums leading-none">
                      {formatQar(low)}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white/40 tabular-nums">
                      – {formatQar(high)}
                    </div>
                    <p className="mt-3 text-sm text-white/50">total campaign spend</p>
                  </div>

                  <div className="mt-7 pt-7 border-t border-white/10 space-y-2.5 text-base">
                    <Row label="Placements" value={`${selected.size}`} />
                    <Row label="Duration" value={`${weeks} ${weeks === 1 ? "week" : "weeks"}`} />
                    <Row label="Targeting" value={targeting.find((t) => t.id === target)?.label ?? "Broad"} />
                  </div>
                </>
              ) : (
                <div className="mt-6">
                  <p className="text-xl font-bold text-white/80">Pick at least one placement</p>
                  <p className="mt-2 text-base text-white/50">Your estimate will appear here.</p>
                </div>
              )}

              <div className="mt-8">
                <Button href={quoteHref} variant="secondary" className="w-full border-0 text-base">
                  Get Custom Quote <ArrowRight size={18} weight="bold" />
                </Button>
                <p className="mt-4 text-xs text-white/40 leading-relaxed">
                  Indicative range. Final quote depends on creative, dates, inventory, and seasonality.
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
      <div className="pl-0 md:pl-14">{children}</div>
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
