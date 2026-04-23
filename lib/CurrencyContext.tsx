"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type CurrencyCode, isCurrencyCode } from "./currency";

const STORAGE_KEY = "snoonu-ads-currency";
const DEFAULT_CURRENCY: CurrencyCode = "QAR";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(DEFAULT_CURRENCY);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isCurrencyCode(stored)) setCurrencyState(stored);
    } catch {
      // ignore — localStorage may be unavailable (private mode, etc.)
    }
  }, []);

  function setCurrency(code: CurrencyCode) {
    setCurrencyState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within a CurrencyProvider");
  return ctx;
}
