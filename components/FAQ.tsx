"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "What is Snoonu Ads?",
    a: "Snoonu Ads is Qatar's retail media platform. It lets brands reach 1.5M+ high-intent shoppers through native app placements, sponsored search results, push notifications, video ads, and offline surfaces like S-Charge stations.",
  },
  {
    q: "Do I need to be a Snoonu merchant to advertise?",
    a: "No. Any brand operating in Qatar can advertise on Snoonu, whether or not your products are listed on the platform. We support both on-platform and off-platform campaign goals.",
  },
  {
    q: "How does targeting work?",
    a: "Our AI-powered targeting uses Snoonu's first-party purchase data, including location, past orders, search behavior, and spending patterns, to reach the right users at peak buying intent. No third-party cookies needed.",
  },
  {
    q: "How do I measure performance?",
    a: "Every campaign gets a real-time dashboard with impressions, clicks, conversions, and ROAS. Our closed-loop measurement ties ad exposure directly to actual Snoonu orders, so you know exactly what your spend drove.",
  },
  {
    q: "What is the minimum budget?",
    a: "Our Starter plan begins at QAR 15,000/month. For sponsored search listings, you can start with pay-per-click from as little as 1 QAR per click. Contact us to discuss custom budgets.",
  },
  {
    q: "Is my data confidential?",
    a: "Absolutely. All campaign data is fully confidential and never shared with other advertisers on the platform. Your competitive insights stay yours.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-base font-bold text-off-black pr-8 group-hover:text-brand-red transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="shrink-0"
        >
          <CaretDown size={18} weight="bold" className="text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <ScrollReveal>
            <SectionHeading
              tagline="FAQ"
              headline="Common Questions"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
