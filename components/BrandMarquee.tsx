"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const brands = [
  "McDonald's",
  "KFC",
  "Pizza Hut",
  "Starbucks",
  "Lulu Hypermarket",
  "Al Meera",
  "Costa Coffee",
  "Hardee's",
  "Subway",
  "Domino's",
  "Papa John's",
  "Burger King",
];

function MarqueeRow({ items, reverse = false, speed = 30 }: { items: string[]; reverse?: boolean; speed?: number }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-5 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center justify-center px-7 py-3.5 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 min-w-[140px] transition-colors"
          >
            <span className="text-sm font-bold text-zinc-400 tracking-tight whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const firstRow = brands.slice(0, 6);
  const secondRow = brands.slice(6);

  return (
    <section id="brands" className="py-12 md:py-16">
      <ScrollReveal>
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
          Brands Already Advertising on Snoonu
        </p>
      </ScrollReveal>
      <div className="space-y-3">
        <MarqueeRow items={firstRow} speed={35} />
        <MarqueeRow items={secondRow} reverse speed={40} />
      </div>
    </section>
  );
}
