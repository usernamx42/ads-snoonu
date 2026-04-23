"use client";

import { useEffect, useRef, useState } from "react";
import { CaretDown, Check } from "@phosphor-icons/react";
import { CURRENCIES, CURRENCY_ORDER, type CurrencyCode } from "@/lib/currency";
import { useCurrency } from "@/lib/CurrencyContext";

export default function CurrencySwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
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

  function handleSelect(code: CurrencyCode) {
    setCurrency(code);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change currency"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold tabular-nums transition-colors ${buttonBase}`}
      >
        <span>{CURRENCIES[currency].code}</span>
        <CaretDown size={12} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 min-w-[160px] rounded-xl bg-white border border-zinc-200 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.18)] overflow-hidden z-50"
        >
          {CURRENCY_ORDER.map((code) => {
            const active = code === currency;
            const info = CURRENCIES[code];
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-semibold text-left transition-colors ${
                  active ? "bg-brand-red/5 text-brand-red" : "text-off-black hover:bg-zinc-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex w-6 justify-center text-muted">{info.symbol}</span>
                  <span>{info.code}</span>
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
