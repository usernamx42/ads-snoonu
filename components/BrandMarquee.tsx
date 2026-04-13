"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const brands = [
  "McDonald's",
  "KFC",
  "Pizza Hut",
  "Starbucks",
  "Lulu Hypermarket",
  "Al Meera",
  "Talabat",
  "Costa Coffee",
  "Hardee's",
  "Subway",
  "Domino's",
  "Papa John's",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-8 whitespace-nowrap ${
          reverse ? "[animation:marquee-reverse_40s_linear_infinite]" : "[animation:marquee_40s_linear_infinite]"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center justify-center px-8 py-4 bg-zinc-50 rounded-xl border border-zinc-100 min-w-[160px]"
          >
            <span className="text-sm font-bold text-zinc-400 tracking-tight">
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
    <section className="py-16 md:py-20 border-t border-zinc-100">
      <ScrollReveal>
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted mb-10">
          Brands Already Advertising on Snoonu
        </p>
      </ScrollReveal>
      <div className="space-y-4">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}
