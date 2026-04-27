"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { List, X } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import CurrencySwitcher from "@/components/ui/CurrencySwitcher";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);

  const navItems = [
    { label: t("solutions"), href: "#solutions" },
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("placements"), href: "#placements" },
    { label: t("calculator"), href: "#calculator" },
    { label: t("results"), href: "#results" },
  ];

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-slide-down ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-brand-red rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(217,2,23,0.25)]">
              <span className="text-white font-black text-lg leading-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-off-black text-base leading-tight tracking-tight">Snoonu</span>
              <span className="text-xs text-muted tracking-[0.25em] uppercase leading-tight">Ads</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted hover:text-off-black hover:-translate-y-px transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <CurrencySwitcher />
            <Button href="#contact" variant="primary">{t("cta")}</Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-off-black"
            aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
          >
            {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-white pt-20 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
          >
            <div className="flex flex-col gap-6 py-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-bold text-off-black"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 flex items-center gap-3">
                <LanguageSwitcher />
                <CurrencySwitcher />
              </div>
              <div>
                <Button href="#contact" variant="primary" className="w-full" onClick={() => setMobileOpen(false)}>
                  {t("cta")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
