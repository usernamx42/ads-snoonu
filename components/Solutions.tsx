"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  ShoppingCart,
  UsersThree,
  ArrowRight,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions: {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    icon: <Megaphone size={28} weight="fill" className="text-brand-red" />,
    title: "Build Brand Awareness",
    description:
      "Reach millions across the Snoonu app, website, and physical screens. Put your brand in front of Qatar's most active consumers.",
    color: "group-hover:bg-brand-red/10",
  },
  {
    icon: <ShoppingCart size={28} weight="fill" className="text-brand-orange" />,
    title: "Drive Sales",
    description:
      "Capture high-intent shoppers the moment they search your category. Convert browsing into purchases.",
    color: "group-hover:bg-brand-orange/10",
  },
  {
    icon: <UsersThree size={28} weight="fill" className="text-brand-blue" />,
    title: "Acquire New Customers",
    description:
      "Use first-party data to find your ideal audience segments and grow your customer base in Qatar.",
    color: "group-hover:bg-brand-blue/10",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Solutions"
            headline="Built Around Your Goals"
            description="Whether you want awareness, conversions, or new customers, we have the format and targeting to deliver."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 0.08}>
              <motion.a
                href="#results"
                className="group block relative rounded-2xl p-7 border border-zinc-100 bg-white hover:border-zinc-200 transition-all h-full"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-zinc-50 ${sol.color} flex items-center justify-center mb-5 transition-colors`}
                >
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold text-off-black tracking-tight">
                  {sol.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {sol.description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight size={14} weight="bold" />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
