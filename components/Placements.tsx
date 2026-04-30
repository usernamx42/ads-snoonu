"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { DeviceMobile, Storefront, type IconProps } from "@phosphor-icons/react";
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

type ChannelTab = "online" | "offline";

function ChannelTabButton({
  active,
  onClick,
  Icon,
  label,
  controls,
}: {
  active: boolean;
  onClick: () => void;
  Icon: ComponentType<IconProps>;
  label: string;
  controls: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      onClick={onClick}
      className={`relative inline-flex items-center gap-2.5 px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-bold tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
        active ? "bg-white text-off-black shadow-[0_4px_14px_-4px_rgba(0,0,0,0.18)]" : "text-white/85 hover:text-white"
      }`}
    >
      <Icon size={20} weight={active ? "duotone" : "regular"} className={active ? "text-brand-red" : ""} />
      <span>{label}</span>
    </button>
  );
}

export default function Placements() {
  const t = useTranslations("placements");
  const [active, setActive] = useState<ChannelTab>("online");

  const items = active === "online" ? placements : offlinePlacements;
  const tagline = active === "online" ? t("onlineTagline") : t("offlineTagline");
  const title = active === "online" ? t("onlineTitle") : t("offlineTitle");
  const subtitle = active === "online" ? t("onlineSubtitle") : t("offlineSubtitle");

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
          <div className="mt-10 md:mt-12 flex justify-center">
            <div
              role="tablist"
              aria-label={t("tabsLabel")}
              className="inline-flex items-center gap-1 p-1.5 rounded-full bg-brand-red shadow-[0_12px_30px_-14px_rgba(217,2,23,0.6)]"
            >
              <ChannelTabButton
                active={active === "online"}
                onClick={() => setActive("online")}
                Icon={DeviceMobile}
                label={t("onlineTagline")}
                controls="placements-panel"
              />
              <ChannelTabButton
                active={active === "offline"}
                onClick={() => setActive("offline")}
                Icon={Storefront}
                label={t("offlineTagline")}
                controls="placements-panel"
              />
            </div>
          </div>
        </ScrollReveal>

        <div id="placements-panel" role="tabpanel" className="mt-14 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="text-center mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-2">{tagline}</p>
                <h3 className="text-2xl md:text-3xl font-black text-off-black tracking-tight">{title}</h3>
                <p className="mt-2 text-base text-muted max-w-2xl mx-auto">{subtitle}</p>
              </div>

              <div className="flex flex-col gap-20 md:gap-28" style={{ perspective: "1400px" }}>
                {items.map((p, i) => (
                  <PlacementCard key={p.key} placement={p} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
