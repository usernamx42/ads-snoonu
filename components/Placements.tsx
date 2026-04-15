"use client";

import { type ReactNode } from "react";
import { DeviceMobile, MagnifyingGlass, Bell, VideoCamera, Handshake, MapPin } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const placements: { icon: ReactNode; title: string; description: string; stat: string }[] = [
  {
    icon: <DeviceMobile size={24} weight="fill" className="text-brand-red" />,
    title: "App Banners",
    description: "Native banners across home feed, search, category pages, and checkout.",
    stat: "20M+ daily impressions",
  },
  {
    icon: <MagnifyingGlass size={24} weight="fill" className="text-brand-red" />,
    title: "Sponsored Search",
    description: "Top placement when users search your category. Pay per click.",
    stat: "From 1 QAR per click",
  },
  {
    icon: <Bell size={24} weight="fill" className="text-brand-red" />,
    title: "Push Notifications",
    description: "Targeted messages sent to opted-in users at the right moment.",
    stat: "Opted-in users only",
  },
  {
    icon: <VideoCamera size={24} weight="fill" className="text-brand-red" />,
    title: "Video Ads",
    description: "Short-form video spots within the browsing experience.",
    stat: "High engagement rates",
  },
  {
    icon: <Handshake size={24} weight="fill" className="text-brand-red" />,
    title: "Co-op Media",
    description: "Joint platform campaigns across social and partner networks.",
    stat: "Cross-channel reach",
  },
  {
    icon: <MapPin size={24} weight="fill" className="text-brand-red" />,
    title: "S-Charge Screens",
    description: "Digital screens at 600+ S-Charge locations across Qatar.",
    stat: "Physical touchpoints",
  },
];

export default function Placements() {
  return (
    <section id="placements" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Ad Placements"
            headline="Your Ads, Everywhere That Matters"
            description="Native placements across the entire Snoonu experience, online and offline."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {placements.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.06}>
              <div
                className="group rounded-2xl bg-white border border-zinc-100 p-6 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/[0.06] group-hover:bg-brand-red/[0.1] flex items-center justify-center transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-medium text-muted bg-zinc-100 px-2.5 py-1 rounded-full">{p.stat}</span>
                </div>
                <h3 className="text-base font-bold text-off-black tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
