"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { CaretDown, Check } from "@phosphor-icons/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useCurrency } from "@/lib/CurrencyContext";
import { localeCurrency } from "@/lib/localeCurrency";

const labels: Record<Locale, { native: string; short: string }> = {
  en: { native: "English", short: "EN" },
  es: { native: "Español", short: "ES" },
  fr: { native: "Français", short: "FR" },
  ru: { native: "Русский", short: "RU" },
  zh: { native: "中文", short: "ZH" },
  ar: { native: "العربية", short: "AR" },
};

export default function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const buttonBase = variant === "dark"
    ? "bg-white/10 text-white border-white/15 hover:bg-white/15"
    : "bg-white/70 text-off-black border-zinc-200 hover:bg-white";

  function handleSelect(next: Locale) {
    setOpen(false);
    if (next === current) return;
    setCurrency(localeCurrency[next]);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${buttonBase}`}
      >
        <span>{labels[current].short}</span>
        <CaretDown size={12} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute end-0 mt-2 min-w-[180px] rounded-xl bg-white border border-zinc-200 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.18)] overflow-hidden z-50"
        >
          {routing.locales.map((code) => {
            const active = code === current;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-semibold text-start transition-colors ${
                  active ? "bg-brand-red/5 text-brand-red" : "text-off-black hover:bg-zinc-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex w-7 justify-center text-muted text-xs font-bold">{labels[code].short}</span>
                  <span>{labels[code].native}</span>
                </span>
                {active && <Check size={14} weight="bold" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
