import type { Locale } from "@/i18n/routing";
import type { CurrencyCode } from "./currency";

export const localeCurrency: Record<Locale, CurrencyCode> = {
  en: "USD",
  es: "EUR",
  fr: "EUR",
  ru: "RUB",
  zh: "USD",
  ar: "QAR",
};
