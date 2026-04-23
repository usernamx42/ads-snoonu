"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface Placement {
  title: string;
  image: string;
  alt: string;
  features: string[];
  kpis: string[];
  /** Indicative weekly spend range in QAR — tune with sales before merge. */
  indicativeWeeklyQar: [number, number];
}

export const placements: Placement[] = [
  {
    title: "Checkout Banner",
    image: "/ads-placement-images/checkout-banner.png",
    alt: "Snoonu app checkout screen showing a promotional banner during order tracking",
    features: [
      "4M+ daily impressions in high-attention state",
      "Maximize brand awareness and recall",
      "Ensures your brand reaches many user profiles, especially those who make purchases on Snoonu",
      "Optional Customized Landing Page Add-on",
    ],
    kpis: ["Impressions", "Reach", "Clicks", "Sales uplifts on Snoonu"],
    // source: Home Ads Homepage Banner (Position #2+) \u2014 40k/weekday, 50k/weekend; checkout tier scales lower
    indicativeWeeklyQar: [20000, 60000],
  },
  {
    title: "Search Banner",
    image: "/ads-placement-images/search-banner.png",
    alt: "Snoonu app search screen with a promotional banner ad",
    features: [
      "20M+ daily high-intent impressions",
      "Highest conversion rate of all formats due to active searching behaviors",
      "Best to combine with awareness format to expand Marketing funnel",
    ],
    kpis: ["Impressions", "Reach", "Clicks", "Sales uplifts on Snoonu"],
    // source: Food Search Bar Banner \u2014 20k QAR/week per time segment \u00d7 1\u20133 segments
    indicativeWeeklyQar: [20000, 60000],
  },
  {
    title: "Category Banner",
    image: "/ads-placement-images/category-banner.png",
    alt: "Snoonu app groceries category page with store listings",
    features: [
      "Placement on category pages with 30K\u201335K daily impressions to increase brand awareness",
      "Strategic campaign driving attention to your products and value propositions",
      "Creative design support",
    ],
    kpis: ["Impressions", "Reach", "Clicks", "Sales uplifts on Snoonu"],
    // source: Snoomart In-Category Branded Banner (500/wk) \u2192 Groceries In-store Spotlight (5k/wk)
    indicativeWeeklyQar: [2000, 10000],
  },
  // {
  //   title: "In-Store Banner",
  //   image: "/ads-placement-images/in-store-banner.png",
  //   alt: "Snoonu app Al Meera store page with a featured product banner",
  //   features: [
  //     "Positioned at the top of the merchant page to immediately drive user attention",
  //     "Rotating banners showcasing your products",
  //     "Ideal for new launches, trending items, or time-limited promotions",
  //   ],
  //   kpis: ["Impressions", "Reach", "Clicks", "Sales uplifts on Snoonu"],
  //   indicativeWeeklyQar: [5000, 13000],
  // },
  {
    title: "Food Sliders",
    image: "/ads-placement-images/food-sliders.png",
    alt: "Snoonu app homepage showing food slider carousel with restaurant promotions",
    features: [
      "Prime placement on Snoonu homepage with up to 10M+ daily impressions",
      "Highlights your specific products or bundles",
      "Best for promoting high-margin SKUs, campaign heroes, or limited offers",
    ],
    kpis: ["Impressions", "Clicks", "Sales uplifts on Snoonu"],
    // source: Food Product Sliders — position #1 800/day, #2 400/day, #3 200/day (7 days)
    indicativeWeeklyQar: [2800, 5600],
  },
  {
    title: "Search & Promoted Listings",
    image: "/ads-placement-images/search-promoted-listings.png",
    alt: "Snoonu app search results showing sponsored listings with Ad badges",
    features: [
      "Search Ads: Bid on keywords to appear in top 10 search results with Pay-per-Click model",
      "Food Listing: allows you to reach up to 10M users browsing Snoonu on a daily basis",
    ],
    kpis: ["Impressions", "Auction Win rate", "Clicks / CTR", "Sales uplifts on Snoonu"],
    // source: Food Main Ranking (Merchant Banner) + Search Terms CPC @ min 1.5 QAR/click, weekly spend range
    indicativeWeeklyQar: [5000, 25000],
  },
];

export default function Placements() {
  return (
    <section id="placements" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Ad Placements"
            headline="Your Ads, Everywhere That Matters"
            description="Native placements across the entire Snoonu experience, online and offline."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28" style={{ perspective: "1400px" }}>
          {placements.map((p, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={p.title}
                className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-14`}
              >
                {/* Image — 3D flip-in on scroll */}
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
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 80vw, 340px"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <ScrollReveal direction={imageLeft ? "right" : "left"} delay={0.15} className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-black text-off-black tracking-tight">
                    {p.title}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-base md:text-lg text-off-black/80 leading-relaxed">
                        <span className="mt-1 text-brand-red font-bold shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-zinc-200/60">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-3">KPIs</p>
                    <div className="flex flex-wrap gap-2">
                      {p.kpis.map((kpi) => (
                        <span key={kpi} className="text-sm font-medium text-off-black bg-zinc-100 px-3 py-1.5 rounded-full">
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
