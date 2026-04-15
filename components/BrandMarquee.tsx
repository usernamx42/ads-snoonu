"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const brands = [
  "McDonald's", "KFC", "Pizza Hut", "Starbucks", "Lulu Hypermarket", "Al Meera",
  "Costa Coffee", "Hardee's", "Subway", "Domino's", "Papa John's", "Burger King",
];

function MarqueeRow({ items, reverse = false, speed = 30 }: { items: string[]; reverse?: boolean; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-4 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite` }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center justify-center px-6 py-3 bg-white rounded-lg border border-zinc-100 min-w-[130px] shadow-sm"
          >
            <span className="text-xs font-bold text-zinc-400 tracking-tight whitespace-nowrap">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section id="brands" className="py-12 md:py-16 bg-off-white">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-8 text-center">
          <p className="text-sm font-bold text-off-black">
            Trusted by <span className="text-brand-red">200+</span> brands in Qatar
          </p>
        </div>
      </ScrollReveal>
      <div className="space-y-3">
        <MarqueeRow items={brands.slice(0, 6)} speed={35} />
        <MarqueeRow items={brands.slice(6)} reverse speed={40} />
      </div>
    </section>
  );
}
