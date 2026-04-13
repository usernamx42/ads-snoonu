"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const budgetOptions = [
  { value: "", label: "Monthly Budget" },
  { value: "under-5k", label: "Under 5K QAR" },
  { value: "5k-15k", label: "5K to 15K QAR" },
  { value: "15k-45k", label: "15K to 45K QAR" },
  { value: "45k-plus", label: "45K+ QAR" },
  { value: "discuss", label: "Let's discuss" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-br from-brand-red to-brand-red-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <ScrollReveal>
            <SectionHeading
              tagline="Get Started"
              headline="Ready to Reach Qatar's Shoppers?"
              description="Tell us your goals and we'll build the right media plan for your brand."
              light
            />
            <div className="mt-8 space-y-3">
              <p className="text-white/70 text-sm flex items-center gap-2">
                <PaperPlaneTilt size={16} weight="bold" />
                ads@snoonu.com
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/20"
                >
                  <CheckCircle size={48} weight="bold" className="text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">
                    Thanks for reaching out!
                  </h3>
                  <p className="mt-2 text-white/70 text-sm">
                    Our team will be in touch within 24 hours to discuss your
                    media plan.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="+974"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      Monthly Budget
                    </label>
                    <select
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-white/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          disabled={opt.value === ""}
                          className="bg-off-black text-white"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      Your Goals
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what you want to achieve..."
                    />
                  </div>

                  <Button type="submit" variant="secondary" className="w-full bg-white text-brand-red hover:bg-white/90 border-0">
                    Let&apos;s Talk
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
