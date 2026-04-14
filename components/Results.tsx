"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DeviceMobile,
  MagnifyingGlass,
  Bell,
  VideoCamera,
  Handshake,
  MapPin,
  Car,
  Storefront,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

type PlacementItem = { icon: ReactNode; title: string; description: string };

const onlinePlacements: PlacementItem[] = [
  {
    icon: <DeviceMobile size={20} weight="fill" className="text-brand-red" />,
    title: "App Banners",
    description: "Native banners across home, search, category, and checkout. 20M+ daily impressions.",
  },
  {
    icon: <MagnifyingGlass size={20} weight="fill" className="text-brand-red" />,
    title: "Sponsored Search",
    description: "Top placement when users search your category. Pay per click from 1 QAR.",
  },
  {
    icon: <Bell size={20} weight="fill" className="text-brand-red" />,
    title: "Push Notifications",
    description: "Targeted messages to opted-in users at the right moment.",
  },
  {
    icon: <VideoCamera size={20} weight="fill" className="text-brand-red" />,
    title: "Video Ads",
    description: "Short-form video within the browsing experience.",
  },
  {
    icon: <Handshake size={20} weight="fill" className="text-brand-red" />,
    title: "Co-op Media",
    description: "Joint campaigns across social and partner networks.",
  },
];

const offlinePlacements: PlacementItem[] = [
  {
    icon: <MapPin size={20} weight="fill" className="text-brand-red" />,
    title: "S-Charge Screens",
    description: "Digital screens at 600+ S-Charge locations across Qatar.",
  },
  {
    icon: <Car size={20} weight="fill" className="text-brand-red" />,
    title: "Fleet Branding",
    description: "Brand visibility on Snoonu's delivery fleet in high-traffic areas.",
  },
  {
    icon: <Storefront size={20} weight="fill" className="text-brand-red" />,
    title: "Sampling & Inserts",
    description: "Product samples and promos delivered directly with orders.",
  },
];

const performanceMetrics = [
  { value: 3.8, suffix: "%", label: "Avg CTR", decimals: 1 },
  { value: 0.92, suffix: "", prefix: "QAR ", label: "Avg CPC", decimals: 2 },
  { value: 6.5, suffix: "%", label: "Conversion Rate", decimals: 1 },
  { value: 4.7, suffix: "x", label: "Avg ROAS", decimals: 1 },
];

const tabs = [
  { key: "online", label: "Online" },
  { key: "offline", label: "Offline" },
] as const;

export default function Results() {
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");
  const items = activeTab === "online" ? onlinePlacements : offlinePlacements;

  return (
    <section id="results" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Results"
            headline="One Platform. Every Surface."
            description="Online and offline placements that deliver measurable performance."
          />
        </ScrollReveal>

        {/* Performance highlights */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceMetrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-off-white border border-zinc-100 px-5 py-4">
                <div className="text-2xl md:text-3xl font-black text-brand-red tracking-tight">
                  <AnimatedCounter
                    target={m.value}
                    suffix={m.suffix}
                    prefix={m.prefix}
                    decimals={m.decimals}
                  />
                </div>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Placement tabs */}
        <div className="mt-12 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2 text-sm font-bold rounded-full transition-colors cursor-pointer ${
                activeTab === tab.key ? "text-white" : "text-muted hover:text-off-black"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="results-tab"
                  className="absolute inset-0 bg-off-black rounded-full"
                  transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-3.5 items-start p-5 rounded-xl border border-zinc-100 bg-white hover:border-zinc-200 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-off-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
