"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type CurrencyCode, isCurrencyCode } from "./currency";

const STORAGE_KEY = "snoonu-ads-currency";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({
  children,
  initialCurrency = "QAR",
}: {
  children: ReactNode;
  initialCurrency?: CurrencyCode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(initialCurrency);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isCurrencyCode(stored)) setCurrencyState(stored);
    } catch {
      // localStorage may be unavailable
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
