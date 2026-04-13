"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const studies = [
  { type: "Search Ads", color: "bg-brand-red" },
  { type: "App Banners", color: "bg-brand-blue" },
  { type: "Smart Sampling", color: "bg-brand-orange" },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            tagline="Results"
            headline="Brands Do Better Here"
            description="Case studies coming soon."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl border border-zinc-100 bg-white p-8 md:p-10 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${studies[0].color}`}
                >
                  {studies[0].type}
                </span>
                <h3 className="mt-4 text-xl font-bold text-off-black tracking-tight">
                  Case Study Coming Soon
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Results from this campaign will be published shortly.
                </p>
              </div>
              <p className="mt-6 text-sm font-bold text-brand-red">
                Read Story &rarr;
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-rows-2 gap-6">
            {studies.slice(1).map((study, i) => (
              <ScrollReveal key={study.type} delay={0.2 + i * 0.1}>
                <div className="relative rounded-2xl border border-zinc-100 bg-white p-6 h-full flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${study.color}`}
                    >
                      {study.type}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-off-black tracking-tight">
                      Case Study Coming Soon
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Results from this campaign will be published shortly.
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-bold text-brand-red">
                    Read Story &rarr;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
