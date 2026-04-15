"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function PhoneFrame({ children, label, stat }: { children: React.ReactNode; label: string; stat: string }) {
  return (
    <div className="text-center">
      <motion.div
        className="relative mx-auto w-[180px] md:w-[200px]"
        whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03 }}
        transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
        style={{ perspective: 800 }}
      >
        <div className="rounded-[2rem] border-[5px] border-zinc-800 bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-xl z-10" />
          <div className="bg-white pt-6">{children}</div>
        </div>
      </motion.div>
      <h3 className="mt-5 text-sm font-bold text-off-black">{label}</h3>
      <p className="mt-1 text-xs text-muted">{stat}</p>
    </div>
  );
}

function HomeFeedMockup() {
  return (
    <div>
      <div className="bg-brand-red px-3 py-2 flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-white/20" />
        <span className="text-white text-[9px] font-bold">Snoonu</span>
      </div>
      <div className="px-2 py-1.5">
        <div className="bg-zinc-100 rounded-lg px-2 py-1.5">
          <span className="text-[8px] text-zinc-400">Search...</span>
        </div>
      </div>
      {/* Sponsored banner */}
      <div className="px-2 pb-1.5">
        <div className="relative rounded-lg bg-gradient-to-r from-brand-red to-brand-orange p-2.5">
          <span className="absolute top-1 right-1 text-[6px] bg-white/30 text-white px-1 py-0.5 rounded font-bold">Ad</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/20 shrink-0" />
            <div>
              <div className="h-1.5 w-16 bg-white/60 rounded" />
              <div className="h-1 w-12 bg-white/30 rounded mt-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pb-2 grid grid-cols-2 gap-1.5">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-zinc-50 p-1.5">
            <div className="w-full h-10 rounded bg-zinc-200" />
            <div className="h-1 w-3/4 bg-zinc-200 rounded mt-1.5" />
            <div className="h-1 w-1/2 bg-zinc-100 rounded mt-0.5" />
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-100 px-3 py-1.5 flex justify-between">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${i === 1 ? "bg-brand-red" : "bg-zinc-200"}`} />
        ))}
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div>
      <div className="bg-brand-red px-3 py-2">
        <div className="bg-white rounded-lg px-2 py-1.5 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full border border-zinc-300" />
          <span className="text-[8px] text-off-black font-medium">burgers</span>
        </div>
      </div>
      {/* Sponsored result */}
      <div className="px-2 py-2">
        <div className="rounded-lg border-2 border-brand-red/20 bg-brand-red/5 p-2 relative">
          <span className="absolute top-1 right-1 text-[6px] bg-brand-red text-white px-1 py-0.5 rounded font-bold">Sponsored</span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-red/10 shrink-0" />
            <div>
              <div className="h-1.5 w-14 bg-off-black/60 rounded" />
              <div className="h-1 w-10 bg-zinc-300 rounded mt-1" />
              <div className="flex items-center gap-1 mt-1">
                <div className="h-1 w-1 rounded-full bg-brand-yellow" />
                <div className="h-1 w-1 rounded-full bg-brand-yellow" />
                <div className="h-1 w-1 rounded-full bg-brand-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="px-2 pb-1.5">
          <div className="flex items-center gap-2 p-1.5 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 shrink-0" />
            <div>
              <div className="h-1.5 w-14 bg-zinc-200 rounded" />
              <div className="h-1 w-10 bg-zinc-100 rounded mt-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PushMockup() {
  return (
    <div className="bg-gradient-to-b from-zinc-100 to-zinc-200">
      <div className="px-3 pt-6 pb-2 flex justify-between items-center">
        <span className="text-[10px] font-bold text-off-black">9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-2 bg-zinc-400 rounded-sm" />
          <div className="w-3 h-2 bg-zinc-400 rounded-sm" />
        </div>
      </div>
      <div className="px-2 mt-4">
        <div className="bg-white rounded-2xl p-3 shadow-lg">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center shrink-0">
              <span className="text-white text-[8px] font-black">S</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-off-black">Snoonu</span>
                <span className="text-[7px] text-zinc-400">now</span>
              </div>
              <p className="text-[8px] text-zinc-600 mt-0.5 leading-relaxed">
                Your favorite brand has a special offer! 30% off for the next 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-2">
        <div className="bg-white/60 rounded-2xl p-3">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-300 shrink-0" />
            <div>
              <div className="h-1.5 w-16 bg-zinc-300 rounded" />
              <div className="h-1 w-24 bg-zinc-200 rounded mt-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}

function CheckoutMockup() {
  return (
    <div>
      <div className="bg-brand-red px-3 py-2 flex items-center gap-2">
        <span className="text-[7px] text-white/80">&larr;</span>
        <span className="text-white text-[9px] font-bold">Your Cart</span>
      </div>
      <div className="px-2 py-2 space-y-1.5">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-50">
            <div className="w-8 h-8 rounded bg-zinc-200 shrink-0" />
            <div className="flex-1">
              <div className="h-1.5 w-12 bg-zinc-300 rounded" />
              <div className="h-1 w-8 bg-zinc-200 rounded mt-0.5" />
            </div>
            <span className="text-[8px] font-bold text-off-black">12 QAR</span>
          </div>
        ))}
      </div>
      {/* Sponsored upsell */}
      <div className="px-2 pb-2">
        <div className="text-[7px] font-bold text-zinc-500 mb-1 px-1">You might also like</div>
        <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-2 relative">
          <span className="absolute top-1 right-1 text-[5px] bg-brand-red text-white px-1 py-0.5 rounded font-bold">Sponsored</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-red/10 shrink-0" />
            <div className="flex-1">
              <div className="h-1.5 w-14 bg-zinc-300 rounded" />
              <div className="h-1 w-8 bg-zinc-200 rounded mt-0.5" />
            </div>
            <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center">
              <span className="text-white text-[7px]">+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="rounded-xl bg-brand-red py-2 text-center">
          <span className="text-[9px] font-bold text-white">Checkout - 36 QAR</span>
        </div>
      </div>
    </div>
  );
}

export default function Placements() {
  return (
    <section id="placements" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Ad Placements"
            headline="Your Ads, Everywhere That Matters"
            description="Native placements across the entire Snoonu experience."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <ScrollReveal delay={0}>
            <PhoneFrame label="Home Feed Banner" stat="20M+ daily impressions">
              <HomeFeedMockup />
            </PhoneFrame>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PhoneFrame label="Sponsored Search" stat="Pay per click from 1 QAR">
              <SearchMockup />
            </PhoneFrame>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <PhoneFrame label="Push Notification" stat="Targeted, opted-in users">
              <PushMockup />
            </PhoneFrame>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <PhoneFrame label="Checkout Upsell" stat="High-intent cart moment">
              <CheckoutMockup />
            </PhoneFrame>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
