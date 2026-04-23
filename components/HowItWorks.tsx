"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Globe, MagnifyingGlass, UsersThree, Bell, CheckCircle, CaretRight } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Stage = {
  icon: ReactNode;
  label: string;
  description: string;
};

const ICON_SIZE = 112;

const stages: Stage[] = [
  { icon: <Globe size={ICON_SIZE} weight="regular" />,          label: "Discover",  description: "App Home, DooH & External Media" },
  { icon: <MagnifyingGlass size={ICON_SIZE} weight="regular" />, label: "Search",    description: "Sponsored Listings & Contextual Ads" },
  { icon: <UsersThree size={ICON_SIZE} weight="regular" />,     label: "Influence", description: "Influencers, Video & Co-op" },
  { icon: <Bell size={ICON_SIZE} weight="regular" />,           label: "Engage",    description: "Push, In-App & Homepage Ads" },
  { icon: <CheckCircle size={ICON_SIZE} weight="regular" />,    label: "Convert",   description: "Checkout Ads & Sampling" },
];

function DockIcon({ mouseX, children }: { mouseX: MotionValue<number>; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { left: 0, width: ICON_SIZE };
    return val - rect.left - rect.width / 2;
  });

  const scaleTransform = useTransform(distance, [-200, -100, 0, 100, 200], [1, 1.15, 1.5, 1.15, 1]);
  const scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.div
      ref={ref}
      style={{ scale, transformOrigin: "center bottom" }}
      className="text-white/90 hover:text-brand-red transition-colors duration-200"
    >
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-off-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white">
              From Discovery to Checkout
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Your ads follow the shopper journey at every touchpoint — reaching customers at every stage of intent.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop */}
        <div className="hidden md:block">
          <div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
            className="flex items-start justify-between gap-0 pb-4"
          >
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex items-start flex-1 last:flex-initial">
                <ScrollReveal delay={i * 0.08} className="flex-1">
                  <div className="flex flex-col items-center text-center px-2">
                    <div className="h-[112px] flex items-end justify-center">
                      <DockIcon mouseX={mouseX}>{stage.icon}</DockIcon>
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-white tracking-tight">{stage.label}</h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed max-w-[220px]">
                      {stage.description}
                    </p>
                  </div>
                </ScrollReveal>

                {i < stages.length - 1 && (
                  <div className="flex items-center justify-center pt-[48px] w-10 shrink-0 text-white/25">
                    <CaretRight size={26} weight="bold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-8">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.label} delay={i * 0.06}>
              <div className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="text-white/90">{stage.icon}</div>
                  {i < stages.length - 1 && <div className="w-px h-8 mt-3 bg-white/10" />}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">{stage.label}</h3>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
