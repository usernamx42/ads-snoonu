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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-30 blur-[100px] [animation:mesh-float_12s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #D90217 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-20 blur-[100px] [animation:mesh-float-2_15s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #FF4600 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-15 blur-[120px] [animation:mesh-float-3_18s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #FFD700 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-white/70" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex flex-col justify-center overflow-hidden">
      <MeshBackground />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-24 md:pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 lg:gap-6 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-red bg-brand-red/8 px-4 py-2 rounded-full mb-5">
                Qatar&apos;s Retail Media Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[4.25rem] tracking-tighter leading-[0.95] font-black text-off-black"
            >
              Turn Shoppers Into{" "}
              <span className="text-brand-red">Your Customers</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-[50ch]"
            >
              Advertise to 1.5M+ high-intent buyers on Qatar&apos;s #1 super app.
              First-party data. AI targeting. Real ROAS.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <Button href="#solutions" variant="primary">
                Explore Solutions
              </Button>
              <Button href="#contact" variant="secondary">
                Start Advertising
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring" as const,
              stiffness: 60,
              damping: 18,
              delay: 0.3,
            }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              <motion.div
                className="w-56 h-56 rounded-3xl bg-brand-red shadow-[0_30px_60px_-15px_rgba(217,2,23,0.3)]"
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-2xl bg-brand-yellow/80 shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-brand-electric/60 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -right-12 w-14 h-14 rounded-xl bg-brand-orange/50"
                animate={{ y: [0, 6, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" as const, stiffness: 100, damping: 20 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-t border-zinc-200/60 pt-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i > 0 ? "md:border-l md:border-zinc-200/60 md:pl-8" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
