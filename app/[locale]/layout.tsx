import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_SC } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { CurrencyProvider } from "@/lib/CurrencyContext";
import { routing, isRtl, type Locale } from "@/i18n/routing";
import { localeCurrency } from "@/lib/localeCurrency";

const altform = localFont({
  src: [
    { path: "../../fonts/Altform-Light.otf", weight: "300", style: "normal" },
    { path: "../../fonts/Altform-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../fonts/Altform-Regular.otf", weight: "400", style: "normal" },
    { path: "../../fonts/Altform-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../fonts/Altform-Bold.otf", weight: "700", style: "normal" },
    { path: "../../fonts/Altform-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../fonts/Altform-Black.otf", weight: "900", style: "normal" },
    { path: "../../fonts/Altform-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-altform",
  display: "swap",
});

const estedad = localFont({
  src: [
    { path: "../../fonts/estedad/Estedad-Thin.woff2", weight: "100" },
    { path: "../../fonts/estedad/Estedad-ExtraLight.woff2", weight: "200" },
    { path: "../../fonts/estedad/Estedad-Light.woff2", weight: "300" },
    { path: "../../fonts/estedad/Estedad-Regular.woff2", weight: "400" },
    { path: "../../fonts/estedad/Estedad-Medium.woff2", weight: "500" },
    { path: "../../fonts/estedad/Estedad-SemiBold.woff2", weight: "600" },
    { path: "../../fonts/estedad/Estedad-Bold.woff2", weight: "700" },
    { path: "../../fonts/estedad/Estedad-ExtraBold.woff2", weight: "800" },
    { path: "../../fonts/estedad/Estedad-Black.woff2", weight: "900" },
  ],
  variable: "--font-estedad",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

function bodyFontClass(locale: Locale): string {
  if (locale === "ar") return "font-locale-ar";
  if (locale === "zh") return "font-locale-zh";
  return "";
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Snoonu Ads",
      locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${altform.variable} ${estedad.variable} ${notoSansSC.variable}`}
    >
      <body className={`antialiased ${bodyFontClass(locale)}`}>
        <NextIntlClientProvider>
          <CurrencyProvider initialCurrency={localeCurrency[locale]}>
            {children}
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
