"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock, Database, Headset } from "@phosphor-icons/react";
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

const outcomes = [
  { icon: <Clock size={18} weight="fill" />, text: "Custom media plan in 48 hours" },
  { icon: <Database size={18} weight="fill" />, text: "First-party data targeting from day one" },
  { icon: <Headset size={18} weight="fill" />, text: "Dedicated onboarding support" },
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
      className="relative py-20 md:py-28 bg-gradient-to-br from-brand-red to-brand-red-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_60%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <ScrollReveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-5xl tracking-tighter leading-[0.95] font-bold text-white">
                Let&apos;s Build Your Growth Engine on Snoonu
              </h2>
              <p className="mt-4 text-base text-white/60 max-w-md">
                Get a custom media plan tailored to your goals and budget in under 48 hours.
              </p>

              <div className="mt-8 space-y-4">
                {outcomes.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm text-white/80 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/40">ads@snoonu.com</p>
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
                  <CheckCircle size={48} weight="fill" className="text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">Thanks for reaching out!</h3>
                  <p className="mt-2 text-white/60 text-sm">
                    Our team will send your custom media plan within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/15 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Full Name</label>
                      <input type="text" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Company</label>
                      <input type="text" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Email</label>
                      <input type="email" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors" placeholder="you@company.com" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Phone</label>
                      <input type="tel" className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors" placeholder="+974" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Monthly Budget</label>
                    <select required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none transition-colors appearance-none cursor-pointer">
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""} className="bg-off-black text-white">{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Your Goals</label>
                    <textarea rows={3} className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors resize-none" placeholder="What do you want to achieve?" />
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
