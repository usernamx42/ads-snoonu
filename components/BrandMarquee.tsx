"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Brand = { name: string; logo: string };

// TODO: drop in real partner-supplied SVGs at /public/brand-logos/{filename}
// and re-add the entries below. Filenames to use: pizza-hut.svg, subway.svg,
// dominos.svg, papa-johns.svg, costa-coffee.svg, hardees.svg, lulu.svg,
// al-meera.svg.
const brands: Brand[] = [
  { name: "McDonald's",  logo: "/brand-logos/mcdonalds.svg" },
  { name: "KFC",         logo: "/brand-logos/kfc.svg" },
  { name: "Starbucks",   logo: "/brand-logos/starbucks.svg" },
  { name: "Burger King", logo: "/brand-logos/burger-king.svg" },
];

function MarqueeRow({ items, reverse = false, speed = 30 }: { items: Brand[]; reverse?: boolean; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-4 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] animate-marquee"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite` }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center justify-center bg-white rounded-xl border border-zinc-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] shrink-0"
            style={{ width: 160, height: 64 }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={40}
              className="object-contain max-h-10 max-w-[120px] w-auto h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const t = useTranslations("brandMarquee");
  return (
    <section id="brands" className="py-14 md:py-16 bg-off-white border-b border-zinc-100">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-8 text-center">
          <p className="text-base text-muted">
            {t.rich("trustedBy", {
              strong: (chunks) => <span className="font-bold text-off-black">{chunks}</span>,
            })}
          </p>
        </div>
      </ScrollReveal>
      <div className="space-y-3">
        <MarqueeRow items={brands} speed={35} />
      </div>
    </section>
  );
}
