"use client";

import { type ReactNode } from "react";
import {
  UserPlus,
  PencilSimpleLine,
  Rocket,
  ChartLineUp,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps: { num: string; icon: ReactNode; title: string; description: string }[] = [
  {
    num: "01",
    icon: <UserPlus size={24} weight="bold" className="text-brand-red" />,
    title: "Sign Up",
    description:
      "Create your account, set up your business profile, and choose your goal.",
  },
  {
    num: "02",
    icon: <PencilSimpleLine size={24} weight="bold" className="text-brand-red" />,
    title: "Build Your Campaign",
    description:
      "Pick your ad format, upload creatives, set your budget and targeting. AI suggests the best audience.",
  },
  {
    num: "03",
    icon: <Rocket size={24} weight="bold" className="text-brand-red" />,
    title: "Go Live",
    description:
      "Ads are reviewed, approved, and launched. AI optimises placement and delivery in real time.",
  },
  {
    num: "04",
    icon: <ChartLineUp size={24} weight="bold" className="text-brand-red" />,
    title: "Track Results",
    description:
      "Monitor impressions, clicks, conversions, and ROAS. See exactly which Snoonu orders your campaign drove.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Process"
            headline="How Snoonu Ads Works"
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] right-[-24px] h-px border-t-2 border-dashed border-zinc-300" />
                )}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-5 relative">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-red text-white text-[10px] font-black flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-off-black tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-muted">
              {["Discover", "Search", "Influence", "Engage", "Convert"].map(
                (label, i) => (
                  <span key={label} className="flex items-center gap-3">
                    <span
                      className={
                        i === 4
                          ? "text-brand-red"
                          : ""
                      }
                    >
                      {label}
                    </span>
                    {i < 4 && (
                      <span className="w-4 h-px bg-zinc-300 inline-block" />
                    )}
                  </span>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
