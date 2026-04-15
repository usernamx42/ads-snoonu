const footerLinks = {
  Solutions: [
    { label: "Brand Awareness", href: "#solutions" },
    { label: "Drive Conversions", href: "#solutions" },
    { label: "Acquire Customers", href: "#solutions" },
  ],
  Platform: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Ad Placements", href: "#placements" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Audience Data", href: "#audience" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-off-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm leading-tight tracking-tight">
                  Snoonu
                </span>
                <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase leading-tight">
                  Ads
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Qatar&apos;s retail media platform. Reach shoppers at the moment of
              decision.
            </p>
            <p className="text-white/30 text-sm mt-6">ads@snoonu.com</p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-white/80 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Snoonu Ads. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
