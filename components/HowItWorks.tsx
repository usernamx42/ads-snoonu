"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Stage = {
  key: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  // illustrative — funnel-narrowing figures from the deck design,
  // not measured reach. Swap to real numbers when analytics lands.
  audience: string;
  pct: number;
};

const stages: Stage[] = [
  {
    key: "discover",
    label: "Discover",
    description: "App Home, DooH & External Media",
    image: "/ads-placement-images/category-banner.png",
    imageAlt: "Snoonu app category page banner",
    audience: "1.5M",
    pct: 100,
  },
  {
    key: "search",
    label: "Search",
    description: "Sponsored Listings & Contextual Ads",
    image: "/ads-placement-images/search-banner.png",
    imageAlt: "Snoonu app search results banner",
    audience: "850K",
    pct: 57,
  },
  {
    key: "influence",
    label: "Influence",
    description: "Influencers, Video & Co-op",
    image: "/ads-placement-images/food-sliders.png",
    imageAlt: "Snoonu app food sliders carousel",
    audience: "420K",
    pct: 28,
  },
  {
    key: "engage",
    label: "Engage",
    description: "Push, In-App & Homepage Ads",
    image: "/ads-placement-images/search-promoted-listings.png",
    imageAlt: "Snoonu app promoted listings",
    audience: "210K",
    pct: 14,
  },
  {
    key: "convert",
    label: "Convert",
    description: "Checkout Ads & Sampling",
    image: "/ads-placement-images/checkout-banner.png",
    imageAlt: "Snoonu app checkout banner",
    audience: "95K",
    pct: 6.3,
  },
];

const VBW = 1100;
const VBH = 320;
const BAND_W = VBW / 5;
const HEIGHTS = [100, 84, 66, 48, 32, 20];

function HorizontalRibbedCone({
  activeIndex,
  onHover,
}: {
  activeIndex: number | null;
  onHover: (i: number | null) => void;
}) {
  const radius = (pct: number) => (pct / 100) * (VBH / 2 - 8);
  const cy = VBH / 2;

  const bandFill = (i: number, hovered: boolean) => {
    const t = i / 4;
    if (hovered) return `rgba(217, 2, 23, ${0.30 + t * 0.5})`;
    return `rgba(255, 255, 255, ${0.05 + t * 0.06})`;
  };
  const bandStroke = (i: number, hovered: boolean) =>
    hovered ? "#D90217" : `rgba(255,255,255, ${0.20 + i * 0.05})`;

  return (
    <svg
      viewBox={`0 0 ${VBW} ${VBH + 28}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="band-shade-h" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0.45)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.45)" />
        </linearGradient>
      </defs>

      {[0.18, 0.30, 0.42, 0.58, 0.70, 0.82].map((y, i) => (
        <g key={i} transform={`translate(0, ${VBH * y})`} opacity="0.32">
          <line x1="0" y1="0" x2="22" y2="0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
          <polyline
            points="16,-4 22,0 16,4"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {Array.from({ length: 5 }).map((_, i) => {
        const xLeft = 30 + i * (BAND_W - 6);
        const xRight = xLeft + (BAND_W - 6);
        const rL = radius(HEIGHTS[i]);
        const rR = radius(HEIGHTS[i + 1]);
        const ellRx = 10;
        const hovered = activeIndex === i;

        const sidePath = `
          M ${xLeft} ${cy - rL}
          L ${xRight} ${cy - rR}
          A ${ellRx} ${rR} 0 0 1 ${xRight} ${cy + rR}
          L ${xLeft} ${cy + rL}
          A ${ellRx} ${rL} 0 0 1 ${xLeft} ${cy - rL}
          Z
        `;

        return (
          <g
            key={i}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            style={{ cursor: "pointer", transition: "opacity 200ms" }}
            opacity={activeIndex !== null && activeIndex !== i ? 0.5 : 1}
          >
            <path d={sidePath} fill={bandFill(i, hovered)} stroke={bandStroke(i, hovered)} strokeWidth="1" />
            <path d={sidePath} fill="url(#band-shade-h)" opacity="0.55" />
            <ellipse
              cx={xLeft}
              cy={cy}
              rx={ellRx}
              ry={rL}
              fill="none"
              stroke={bandStroke(i, hovered)}
              strokeWidth="1"
            />
          </g>
        );
      })}

      <g transform={`translate(${30 + 5 * (BAND_W - 6) + 6}, ${cy})`} opacity="0.45">
        <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" strokeLinecap="round" />
        <polyline
          points="14,-5 20,0 14,5"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function PhoneCard({
  stage,
  index,
  active,
  onMouseEnter,
  onMouseLeave,
}: {
  stage: Stage;
  index: number;
  active: boolean | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isActive = active === true;
  const isDimmed = active === false;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex flex-col items-center cursor-pointer"
      style={{
        opacity: isDimmed ? 0.4 : 1,
        transform: isActive ? "translateY(-4px)" : "none",
        transition: "opacity 200ms, transform 200ms",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="rounded-full flex items-center justify-center font-black tabular-nums shrink-0"
          style={{
            width: 28,
            height: 28,
            background: isActive ? "#D90217" : "rgba(255,255,255,0.08)",
            color: "#fff",
            fontSize: 12,
            border: isActive ? "2px solid #D90217" : "2px solid rgba(255,255,255,0.15)",
            boxShadow: isActive ? "0 0 0 5px rgba(217,2,23,0.18)" : "none",
            transition: "all 200ms",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white leading-none">
            {stage.label}
          </div>
          <div className="text-[10px] text-white/55 mt-0.5 leading-tight max-w-[140px]">
            {stage.description}
          </div>
        </div>
      </div>

      <div
        className="relative"
        style={{
          width: 132,
          height: 244,
          borderRadius: 22,
          background: "#1a1a1a",
          padding: 5,
          boxShadow: isActive
            ? "0 16px 48px rgba(217,2,23,0.35), 0 0 0 1.5px rgba(217,2,23,0.7)"
            : "0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
          transition: "box-shadow 200ms",
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden bg-white"
          style={{ borderRadius: 17 }}
        >
          <Image
            src={stage.image}
            alt={stage.imageAlt}
            fill
            sizes="132px"
            className="object-cover object-top"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 36,
            height: 5,
            borderRadius: 3,
            background: "#0a0a0a",
          }}
        />
      </div>

      <div className="mt-4 text-center">
        <div className="text-xl font-black text-white tabular-nums tracking-tight leading-none">
          {stage.audience}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
          {stage.pct}% reach
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-off-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white">
              From Discovery to Checkout
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Your ads follow the shopper journey at every touchpoint — reaching customers at every stage of intent.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-5 gap-0 mb-2 px-[60px]">
              {stages.map((stage, i) => {
                const isActive = hovered === i;
                const isDimmed = hovered !== null && hovered !== i;
                return (
                  <div
                    key={stage.key}
                    className="text-center"
                    style={{ opacity: isDimmed ? 0.4 : 1, transition: "opacity 200ms" }}
                  >
                    <div
                      className="text-[13px] font-bold tracking-tight inline-block px-2 py-1 rounded"
                      style={{
                        color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                        background: isActive ? "rgba(217,2,23,0.2)" : "transparent",
                        transition: "all 200ms",
                      }}
                    >
                      {stage.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <HorizontalRibbedCone activeIndex={hovered} onHover={setHovered} />
          </div>

          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-5 gap-4">
            {stages.map((stage, i) => {
              const active = hovered === null ? null : hovered === i;
              return (
                <PhoneCard
                  key={stage.key}
                  stage={stage}
                  index={i}
                  active={active}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {stages.map((stage, i) => {
            const gutterW = 4 - i * 0.5;
            return (
              <ScrollReveal key={stage.key} delay={i * 0.05}>
                <div className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="relative shrink-0"
                      style={{
                        width: 96,
                        height: 176,
                        borderRadius: 18,
                        background: "#1a1a1a",
                        padding: 4,
                        boxShadow: "0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="relative w-full h-full overflow-hidden bg-white"
                        style={{ borderRadius: 14 }}
                      >
                        <Image
                          src={stage.image}
                          alt={stage.imageAlt}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 8,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 28,
                          height: 4,
                          borderRadius: 2,
                          background: "#0a0a0a",
                        }}
                      />
                    </div>
                    {i < stages.length - 1 && (
                      <div
                        className="flex-1 mt-2 bg-white/15"
                        style={{ width: `${gutterW}px`, minHeight: 24 }}
                      />
                    )}
                  </div>

                  <div className="pt-2 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full flex items-center justify-center font-black tabular-nums shrink-0 bg-white/10 text-white text-[10px] w-6 h-6 border border-white/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold text-white tracking-tight">{stage.label}</h3>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{stage.description}</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-black text-white tabular-nums tracking-tight leading-none">
                        {stage.audience}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">
                        {stage.pct}% reach
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
