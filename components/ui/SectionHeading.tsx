interface SectionHeadingProps {
  tagline?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  tagline,
  headline,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {tagline && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-4">
          {tagline}
        </p>
      )}
      <h2
        className={`text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-none font-bold ${
          light ? "text-white" : "text-off-black"
        }`}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-[65ch] ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
