"use client";

import { useMemo, useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle, Clock, Database, Headset } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { useCurrency } from "@/lib/CurrencyContext";
import { formatCurrencyCompact, type CurrencyCode } from "@/lib/currency";

function buildBudgetOptions(currency: CurrencyCode, t: ReturnType<typeof useTranslations<"contact.budgetOptions">>) {
  return [
    { value: "",          label: t("placeholder") },
    { value: "under-5k",  label: t("under",   { amount: formatCurrencyCompact(5000, currency) }) },
    { value: "5k-15k",    label: t("between", { from: formatCurrencyCompact(5000, currency), to: formatCurrencyCompact(15000, currency) }) },
    { value: "15k-45k",   label: t("between", { from: formatCurrencyCompact(15000, currency), to: formatCurrencyCompact(45000, currency) }) },
    { value: "45k-plus",  label: t("plus",    { amount: formatCurrencyCompact(45000, currency) }) },
    { value: "discuss",   label: t("discuss") },
  ];
}

const validBudgetValues = new Set(["under-5k", "5k-15k", "15k-45k", "45k-plus", "discuss"]);

const outcomeIcons = [
  <Clock key="clock" size={20} weight="fill" />,
  <Database key="db" size={20} weight="fill" />,
  <Headset key="hs" size={20} weight="fill" />,
];

export default function Contact() {
  const t = useTranslations("contact");
  const tForm = useTranslations("contact.form");
  const tBudget = useTranslations("contact.budgetOptions");
  const tSuccess = useTranslations("contact.success");
  const { currency } = useCurrency();
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");
  const budgetOptions = useMemo(() => buildBudgetOptions(currency, tBudget), [currency, tBudget]);
  const outcomes = t.raw("outcomes") as string[];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("budget");
    if (value && validBudgetValues.has(value)) setBudget(value);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-base text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors";

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-gradient-to-br from-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <ScrollReveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-4">{t("tagline")}</p>
              <h2 className="text-3xl md:text-5xl tracking-tighter leading-[0.95] font-bold text-white">
                {t("headline")}
              </h2>
              <p className="mt-4 text-base text-white/60 max-w-md leading-relaxed">
                {t("description")}
              </p>
              <div className="mt-8 space-y-4">
                {outcomes.map((text, i) => (
                  <motion.div key={text} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" as const, stiffness: 100, damping: 20 }}>
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">{outcomeIcons[i]}</div>
                    <span className="text-base text-white/80 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-base text-white/50">ads@snoonu.com</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/15">
                  <CheckCircle size={48} weight="fill" className="text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">{tSuccess("title")}</h3>
                  <p className="mt-2 text-white/70 text-base">{tSuccess("body")}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/15 space-y-4"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("name")}</label>
                      <input type="text" required className={inputClass} placeholder={tForm("namePlaceholder")} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("company")}</label>
                      <input type="text" required className={inputClass} placeholder={tForm("companyPlaceholder")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("email")}</label>
                      <input type="email" required className={inputClass} placeholder={tForm("emailPlaceholder")} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("phone")}</label>
                      <input type="tel" className={inputClass} placeholder={tForm("phonePlaceholder")} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("budget")}</label>
                    <select
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""} className="bg-off-black text-white">{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-white/70 uppercase tracking-wider">{tForm("goals")}</label>
                    <textarea rows={3} className={`${inputClass} resize-none`} placeholder={tForm("goalsPlaceholder")} />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full bg-white text-brand-red hover:bg-white/90 border-0">
                    {tForm("submit")}
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
