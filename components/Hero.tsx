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
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

function FloatingShapes() {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
      <motion.div
        className="absolute top-[10%] right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-brand-red/10"
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] right-[30%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-red"
        animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-brand-red/20 rotate-12"
        animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[55%] right-[45%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-yellow/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        className="absolute top-[5%] right-[50%] w-12 h-12 rounded-lg bg-brand-electric/20"
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-24 md:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-8 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-red bg-brand-red/5 px-4 py-2 rounded-full mb-6">
                Qatar&apos;s Retail Media Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-black text-off-black"
            >
              Reach Qatar&apos;s Most Active{" "}
              <span className="text-brand-red">Shoppers</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-[55ch]"
            >
              Connect with 1.5M+ users on Qatar&apos;s most-used super app,
              powered by real purchase data and AI.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                Start Advertising
              </Button>
              <Button href="#solutions" variant="secondary">
                See Solutions
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.3,
            }}
            className="hidden lg:block"
          >
            <FloatingShapes />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 20 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i > 0 ? "md:border-l md:border-zinc-200 md:pl-8" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-black text-off-black tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
