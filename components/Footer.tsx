"use client";

import { useTranslations } from "next-intl";
import {
  InstagramLogo,
  FacebookLogo,
  XLogo,
  YoutubeLogo,
  TiktokLogo,
  MapPin,
  Envelope,
  Phone,
} from "@phosphor-icons/react";

const linkDefs = [
  { key: "about",         href: "https://join.snoonu.com/en/#about" },
  { key: "services",      href: "https://join.snoonu.com/en/#services" },
  { key: "partner",       href: "https://join.snoonu.com/en/#partner-program" },
  { key: "privacy",       href: "https://snoonu.com/privacy" },
  { key: "terms",         href: "https://snoonu.com/terms" },
  { key: "merchantTerms", href: "#" },
] as const;

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/snoonu", icon: InstagramLogo },
  { label: "Facebook",  href: "https://www.facebook.com/snoonu.qa", icon: FacebookLogo },
  { label: "X",         href: "https://x.com/snoonu_qa", icon: XLogo },
  { label: "YouTube",   href: "https://www.youtube.com/channel/UCldXY2LDjfF_TBijZ3mdtZA", icon: YoutubeLogo },
  { label: "TikTok",    href: "https://www.tiktok.com/@snoonu", icon: TiktokLogo },
];

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-off-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-red rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base leading-tight tracking-tight">
                  Snoonu Ads
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-[35ch] text-base leading-relaxed text-zinc-400">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-widest text-white">
              {t("contact")}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-zinc-500" />
                <span className="text-base text-zinc-400">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Envelope size={20} className="shrink-0 text-zinc-500" />
                <a
                  href="mailto:ads@snoonu.com"
                  className="text-base text-zinc-400 transition-colors hover:text-white"
                >
                  ads@snoonu.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-zinc-500" />
                <a
                  href="tel:+97444302000"
                  className="text-base text-zinc-400 transition-colors hover:text-white"
                  dir="ltr"
                >
                  +974 4430 2000
                </a>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest text-white">
              {t("follow")}
            </h3>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-widest text-white">
              {t("quickLinks")}
            </h3>
            <ul className="flex flex-col">
              {linkDefs.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block py-1.5 text-base text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(`links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <div />
          <p className="text-sm text-zinc-500">
            {t("rights", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
