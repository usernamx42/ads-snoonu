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

type PlacementItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const onlinePlacements: PlacementItem[] = [
  {
    icon: <DeviceMobile size={20} weight="bold" className="text-brand-red" />,
    title: "App Banners",
    description:
      "Native banners across home feed, search, category pages, and checkout. Up to 20M+ daily impressions.",
  },
  {
    icon: <MagnifyingGlass size={20} weight="bold" className="text-brand-red" />,
    title: "Search & Sponsored Listings",
    description:
      "Top placement when users search your category. Pay per click from 1 QAR.",
  },
  {
    icon: <Bell size={20} weight="bold" className="text-brand-red" />,
    title: "Push Notifications",
    description:
      "Targeted messages sent to opted-in users at the right moment.",
  },
  {
    icon: <VideoCamera size={20} weight="bold" className="text-brand-red" />,
    title: "Video Ads",
    description: "Short-form video spots within the browsing experience.",
  },
  {
    icon: <Handshake size={20} weight="bold" className="text-brand-red" />,
    title: "Co-op & External Media",
    description:
      "Joint platform campaigns and placements across social and partner networks.",
  },
];

const offlinePlacements: PlacementItem[] = [
  {
    icon: <MapPin size={20} weight="bold" className="text-brand-red" />,
    title: "S-Charge Station Screens",
    description:
      "Digital screens at 600+ S-Charge locations across Qatar by end of 2026.",
  },
  {
    icon: <Car size={20} weight="bold" className="text-brand-red" />,
    title: "Delivery Fleet Branding",
    description:
      "Brand visibility on Snoonu's delivery fleet across Qatar's busiest areas.",
  },
  {
    icon: <Storefront size={20} weight="bold" className="text-brand-red" />,
    title: "Sampling & Inserts",
    description:
      "Product samples and promotional inserts delivered directly with orders.",
  },
];

const tabs = [
  { key: "online", label: "Online" },
  { key: "offline", label: "Offline" },
] as const;

export default function Placements() {
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");
  const items = activeTab === "online" ? onlinePlacements : offlinePlacements;

  return (
    <section id="placements" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Placements"
            headline="One Platform. Every Surface"
            description="Online and offline, every touchpoint covered."
          />
        </ScrollReveal>

        <div className="mt-12 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-full transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-muted hover:text-off-black"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="placement-tab"
                  className="absolute inset-0 bg-off-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-off-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
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
