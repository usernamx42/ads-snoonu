"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const rotatingKeys = ["customers", "revenue", "growth", "results"] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20 } },
};

function RotatingWord() {
  const t = useTranslations("hero.rotating");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingKeys.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingKeys[index]}
          className="inline-block text-brand-red"
          initial={{ y: 30, opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 40 }}
          transition={{ type: "spring" as const, stiffness: 150, damping: 18 }}
        >
          {t(rotatingKeys[index])}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-brand-red/[0.04] blur-3xl animate-float-1" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-brand-blue/[0.03] blur-3xl animate-float-2" />
      <div className="absolute top-[40%] right-[40%] w-48 h-48 rounded-full bg-brand-yellow/[0.04] blur-3xl animate-float-3" />
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("hero.stats");

  const stats = [
    { value: 1.5, suffix: "M+", label: tStats("users"), decimals: 1 },
    { value: 10, suffix: "M+", label: tStats("visits"), decimals: 0 },
    { value: 30, suffix: "M+", label: tStats("searches"), decimals: 0 },
    { value: 2.5, suffix: "M+", label: tStats("deliveries"), decimals: 1 },
    { value: 20, suffix: "%", prefix: "~", label: tStats("premium"), decimals: 0 },
  ];

  return (
    <section
      className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/website%20snoonu%202.png')" }}
    >
      <FloatingOrbs />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-24 md:pt-28 pb-12">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp}>
            <span className="inline-block text-[13px] font-bold uppercase tracking-[0.25em] text-brand-red bg-brand-red/[0.06] px-4 py-2 rounded-full mb-6">
              {t("tagline")}
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.92] font-black text-off-black">
            {t("headlineBefore")}{" "}
            <br className="hidden md:block" />
            {t("headlineYour")} <RotatingWord />
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-lg">
            {t("subhead")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button href="#solutions" variant="primary">{t("ctaPrimary")}</Button>
            <Button href="#contact" variant="secondary">{t("ctaSecondary")}</Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" as const, stiffness: 100, damping: 20 }}
        className="border-t border-zinc-100 bg-off-white/60"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-7 grid grid-cols-2 md:grid-cols-5 gap-y-5">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`${i > 0 ? "md:border-l md:border-zinc-200/60 md:pl-8" : ""}`}>
              <div className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
              </div>
              <p className="mt-1 text-base text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
