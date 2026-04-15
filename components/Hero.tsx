"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 1.5, suffix: "M+", label: "Registered Users", decimals: 1 },
  { value: 10, suffix: "M+", label: "Monthly Visits", decimals: 0 },
  { value: 2.5, suffix: "M+", label: "Monthly Deliveries", decimals: 1 },
  { value: 20, suffix: "%", prefix: "~", label: "Premium Shoppers", decimals: 0 },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-[260px] md:w-[280px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-zinc-700 bg-zinc-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-900 rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="bg-white pt-8">
          {/* App header */}
          <div className="bg-brand-red px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-white text-[10px] font-black">S</span>
              </div>
              <span className="text-white text-xs font-bold">Snoonu</span>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-white/20" />
              <div className="w-5 h-5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Search bar */}
          <div className="px-3 py-2">
            <div className="bg-zinc-100 rounded-xl px-3 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-zinc-400" />
              <span className="text-[10px] text-zinc-400">Search restaurants, groceries...</span>
            </div>
          </div>

          {/* Sponsored banner */}
          <div className="px-3 pb-2">
            <motion.div
              className="relative rounded-xl overflow-hidden bg-gradient-to-r from-brand-red to-brand-orange p-3"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="absolute top-1.5 right-1.5 text-[7px] bg-white/30 text-white px-1.5 py-0.5 rounded-full font-bold">
                Sponsored
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-10 h-10 rounded-lg bg-white/20" />
                <div>
                  <div className="text-[9px] font-bold text-white">Limited Offer</div>
                  <div className="text-[8px] text-white/80">Order now, 30% off first delivery</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product cards */}
          <div className="px-3 pb-3 grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl bg-zinc-50 p-2">
                <div className={`w-full h-12 rounded-lg ${i === 1 ? "bg-brand-red/10" : "bg-zinc-200"}`} />
                <div className="mt-1.5">
                  <div className="h-1.5 w-3/4 bg-zinc-200 rounded" />
                  <div className="h-1.5 w-1/2 bg-zinc-100 rounded mt-1" />
                  <div className="mt-1.5 flex items-center justify-between">
                    <div className="h-2 w-8 bg-brand-red/20 rounded" />
                    <div className="w-4 h-4 rounded-full bg-brand-red flex items-center justify-center">
                      <span className="text-white text-[6px]">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="border-t border-zinc-100 px-4 py-2 flex justify-between">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`w-5 h-5 rounded-full ${i === 1 ? "bg-brand-red" : "bg-zinc-200"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Glow behind phone */}
      <div className="absolute -inset-10 -z-10 bg-brand-red/20 blur-[60px] rounded-full" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-off-black via-zinc-900 to-brand-red-dark">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,2,23,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,110,255,0.08),transparent_60%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 md:pt-36 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red bg-brand-red/10 px-4 py-2 rounded-full mb-5">
                Qatar&apos;s #1 Retail Media Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] font-black text-white"
            >
              Turn Shoppers Into{" "}
              <span className="text-brand-red">Your Customers</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-white/60 leading-relaxed max-w-md"
            >
              Advertise to 1.5M+ high-intent buyers. First-party data. AI targeting. Real ROAS.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <Button href="#solutions" variant="primary">
                Explore Solutions
              </Button>
              <Button href="#contact" variant="secondary" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                Start Advertising
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" as const, stiffness: 60, damping: 18 }}
            className="hidden lg:block"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-0.5 text-xs text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
