export type CurrencyCode = "QAR" | "USD" | "EUR" | "RUB";

export type CurrencyInfo = {
  code: CurrencyCode;
  symbol: string;
  /** 1 QAR = `rate` of this currency. Verify with finance before release. */
  rate: number;
  locale: string;
};

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  QAR: { code: "QAR", symbol: "QAR", rate: 1, locale: "en-US" },
  USD: { code: "USD", symbol: "$", rate: 0.2747, locale: "en-US" },
  EUR: { code: "EUR", symbol: "€", rate: 0.253, locale: "en-US" },
  RUB: { code: "RUB", symbol: "₽", rate: 21.8, locale: "ru-RU" },
};

export const CURRENCY_ORDER: CurrencyCode[] = ["QAR", "USD", "EUR", "RUB"];

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && value in CURRENCIES;
}

export function convertFromQar(amountQar: number, code: CurrencyCode): number {
  return amountQar * CURRENCIES[code].rate;
}

/** Format the converted amount as a locale-aware number with no currency symbol. */
export function formatAmount(amountQar: number, code: CurrencyCode): string {
  const info = CURRENCIES[code];
  return Math.round(amountQar * info.rate).toLocaleString(info.locale);
}

/** Format an amount given in QAR as the selected currency's display string (rounded to whole units, no decimals). */
export function formatCurrency(amountQar: number, code: CurrencyCode): string {
  const info = CURRENCIES[code];
  const converted = amountQar * info.rate;
  const rounded = Math.round(converted).toLocaleString(info.locale);
  return code === "QAR" ? `${rounded} QAR` : `${info.symbol}${rounded}`;
}

/** Compact form (e.g. "5K QAR", "$1.4K") for budget bucket labels. */
export function formatCurrencyCompact(amountQar: number, code: CurrencyCode): string {
  const info = CURRENCIES[code];
  const converted = amountQar * info.rate;
  const abs = Math.abs(converted);
  let display: string;
  if (abs >= 1_000_000) display = `${(converted / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  else if (abs >= 1_000) display = `${(converted / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  else display = Math.round(converted).toString();
  return code === "QAR" ? `${display} QAR` : `${info.symbol}${display}`;
}
