"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  ShoppingCart,
  UsersThree,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Megaphone size={24} weight="bold" className="text-brand-red" />,
    title: "Build Brand Awareness",
    description:
      "Reach millions across the Snoonu app, website, and physical screens. Get your brand in front of Qatar's most active consumers.",
  },
  {
    icon: <ShoppingCart size={20} weight="bold" className="text-brand-red" />,
    title: "Drive Sales",
    description:
      "Capture high-intent shoppers the moment they search your category. Convert browsing into buying.",
  },
  {
    icon: <UsersThree size={20} weight="bold" className="text-brand-red" />,
    title: "Acquire New Customers",
    description:
      "Use Snoonu's first-party data to find your ideal audience segments and expand your customer base.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Solutions"
            headline="Built Around Your Goals"
            description="Whether you want awareness, conversions, or new customers, we have the format and targeting to deliver."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative bg-white rounded-2xl p-8 md:p-12 border border-zinc-100 h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
                {solutions[0].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-off-black tracking-tight">
                {solutions[0].title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed max-w-md">
                {solutions[0].description}
              </p>
              <a
                href="#placements"
                className="inline-flex items-center gap-1 mt-6 text-sm font-bold text-brand-red hover:underline"
              >
                Explore
                <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </ScrollReveal>

          <div className="grid grid-rows-2 gap-6">
            {solutions.slice(1).map((sol, i) => (
              <ScrollReveal key={sol.title} delay={0.2 + i * 0.1}>
                <motion.div
                  className="relative bg-white rounded-2xl p-8 border border-zinc-100 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                    {sol.icon}
                  </div>
                  <h3 className="text-lg font-bold text-off-black tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {sol.description}
                  </p>
                  <a
                    href="#placements"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-brand-red hover:underline"
                  >
                    Explore
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
