"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export type PlacementKey =
  | "checkoutBanner"
  | "searchBanner"
  | "categoryBanner"
  | "foodSliders"
  | "searchPromotedListings"
  | "magazines"
  | "scharge";

export interface Placement {
  key: PlacementKey;
  image: string;
  /** Indicative weekly spend range in QAR — tune with sales before merge. */
  indicativeWeeklyQar: [number, number];
}

export const placements: Placement[] = [
  {
    key: "checkoutBanner",
    image: "/ads-placement-images/checkout-banner.png",
    // source: Home Ads Homepage Banner (Position #2+) — 40k/weekday, 50k/weekend
    indicativeWeeklyQar: [20000, 60000],
  },
  {
    key: "searchBanner",
    image: "/ads-placement-images/search-banner.png",
    // source: Food Search Bar Banner — 20k QAR/week per time segment × 1–3 segments
    indicativeWeeklyQar: [20000, 60000],
  },
  {
    key: "categoryBanner",
    image: "/ads-placement-images/category-banner.png",
    // source: Snoomart In-Category Branded Banner (500/wk) → Groceries In-store Spotlight (5k/wk)
    indicativeWeeklyQar: [2000, 10000],
  },
  {
    key: "foodSliders",
    image: "/ads-placement-images/food-sliders.png",
    // source: Food Product Sliders — position #1 800/day, #2 400/day, #3 200/day (7 days)
    indicativeWeeklyQar: [2800, 5600],
  },
  {
    key: "searchPromotedListings",
    image: "/ads-placement-images/search-promoted-listings.png",
    // source: Food Main Ranking + Search Terms CPC @ min 1.5 QAR/click, weekly spend range
    indicativeWeeklyQar: [5000, 25000],
  },
];

export const offlinePlacements: Placement[] = [
  {
    key: "magazines",
    image: "/ads-placement-images/magazines.png",
    indicativeWeeklyQar: [3000, 12000],
  },
  {
    key: "scharge",
    image: "/ads-placement-images/scharge-screens.png",
    indicativeWeeklyQar: [4000, 15000],
  },
];

function PlacementCard({
  placement,
  index,
}: {
  placement: Placement;
  index: number;
}) {
  const t = useTranslations("placements");
  const imageLeft = index % 2 === 0;
  const features = t.raw(`items.${placement.key}.features`) as string[];
  const kpis = t.raw(`items.${placement.key}.kpis`) as string[];

  return (
    <div
      className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-14`}
    >
      <div className="w-full md:w-1/2 flex justify-center" style={{ perspective: "1400px" }}>
        <motion.div
          initial={{ opacity: 0, rotateY: imageLeft ? -70 : 70, y: 30, scale: 0.92 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 55, damping: 14, mass: 0.9 }}
          style={{ transformStyle: "preserve-3d", transformOrigin: imageLeft ? "left center" : "right center" }}
          className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)]"
        >
          <Image
            src={placement.image}
            alt={t(`items.${placement.key}.alt`)}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 80vw, 340px"
          />
        </motion.div>
      </div>

      <ScrollReveal direction={imageLeft ? "right" : "left"} delay={0.15} className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
          {t(`items.${placement.key}.title`)}
        </h3>

        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-base md:text-lg text-off-black/80 leading-relaxed">
              <span className="mt-1 text-brand-red font-bold shrink-0">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-zinc-200/60">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-3">{t("kpisLabel")}</p>
          <div className="flex flex-wrap gap-2">
            {kpis.map((kpi) => (
              <span key={kpi} className="text-sm font-medium text-off-black bg-zinc-100 px-3 py-1.5 rounded-full">
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Placements() {
  const t = useTranslations("placements");

  return (
    <section id="placements" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline={t("tagline")}
            headline={t("headline")}
            description={t("description")}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 max-w-[1100px] mx-auto">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/online_offline.png"
                alt={t("heroAlt")}
                width={1600}
                height={820}
                className="w-full h-auto block select-none"
                sizes="(max-width: 768px) 100vw, 1100px"
                priority={false}
              />
              <a
                href="#online-placements"
                aria-label={t("onlineJumpAria")}
                className="absolute inset-y-0 left-0 w-[62%] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset transition-colors hover:bg-white/5"
              >
                <span className="sr-only">{t("onlineJumpAria")}</span>
              </a>
              <a
                href="#offline-placements"
                aria-label={t("offlineJumpAria")}
                className="absolute inset-y-0 right-0 w-[38%] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset transition-colors hover:bg-white/5"
              >
                <span className="sr-only">{t("offlineJumpAria")}</span>
              </a>
            </div>
            <p className="mt-3 text-center text-sm text-muted">{t("heroHint")}</p>
          </div>
        </ScrollReveal>

        <div id="online-placements" className="mt-20 md:mt-24 scroll-mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-2">
                {t("onlineTagline")}
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
                {t("onlineTitle")}
              </h3>
              <p className="mt-2 text-base text-muted max-w-2xl mx-auto">{t("onlineSubtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-20 md:gap-28" style={{ perspective: "1400px" }}>
            {placements.map((p, i) => (
              <PlacementCard key={p.key} placement={p} index={i} />
            ))}
          </div>
        </div>

        <div id="offline-placements" className="mt-24 md:mt-32 scroll-mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-2">
                {t("offlineTagline")}
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
                {t("offlineTitle")}
              </h3>
              <p className="mt-2 text-base text-muted max-w-2xl mx-auto">{t("offlineSubtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-20 md:gap-28" style={{ perspective: "1400px" }}>
            {offlinePlacements.map((p, i) => (
              <PlacementCard key={p.key} placement={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
