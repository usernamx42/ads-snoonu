"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Megaphone, ShoppingCart, UsersThree, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions: {
  icon: ReactNode;
  title: string;
  benefit: string;
  gradient: string;
  iconBg: string;
}[] = [
  {
    icon: <Megaphone size={32} weight="fill" className="text-white" />,
    title: "Brand Awareness",
    benefit: "Get seen by millions of high-intent shoppers across every Snoonu surface.",
    gradient: "from-brand-red to-brand-orange",
    iconBg: "bg-brand-red",
  },
  {
    icon: <ShoppingCart size={32} weight="fill" className="text-white" />,
    title: "Drive Conversions",
    benefit: "Capture demand at the moment of search and turn browsers into buyers.",
    gradient: "from-brand-blue to-brand-electric",
    iconBg: "bg-brand-blue",
  },
  {
    icon: <UsersThree size={32} weight="fill" className="text-white" />,
    title: "Acquire Customers",
    benefit: "Use first-party data to find and convert your ideal audience in Qatar.",
    gradient: "from-brand-orange to-brand-yellow",
    iconBg: "bg-brand-orange",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Solutions"
            headline="Built Around Your Goals"
            description="Three ways to grow on Qatar's largest retail media platform."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 0.1}>
              <motion.div
                className="group relative rounded-2xl bg-white border border-zinc-100 overflow-hidden h-full shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow"
                whileHover={{ y: -8 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              >
                {/* Gradient top accent */}
                <div className={`h-1.5 bg-gradient-to-r ${sol.gradient}`} />

                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${sol.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-off-black tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {sol.benefit}
                  </p>
                  <a
                    href="#placements"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
