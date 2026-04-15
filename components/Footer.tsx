import {
  InstagramLogo,
  FacebookLogo,
  XLogo,
  YoutubeLogo,
  TiktokLogo,
  MapPin,
  Envelope,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

const quickLinks = [
  { label: "About Us", href: "https://join.snoonu.com/en/#about" },
  { label: "Services", href: "https://join.snoonu.com/en/#services" },
  { label: "Become a Partner", href: "https://join.snoonu.com/en/#partner-program" },
  { label: "Privacy Policy", href: "https://snoonu.com/privacy" },
  { label: "Terms & Conditions", href: "https://snoonu.com/terms" },
  { label: "Merchant Terms & Conditions", href: "#" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/snoonu", icon: InstagramLogo },
  { label: "Facebook", href: "https://www.facebook.com/snoonu.qa", icon: FacebookLogo },
  { label: "X", href: "https://x.com/snoonu_qa", icon: XLogo },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCldXY2LDjfF_TBijZ3mdtZA", icon: YoutubeLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@snoonu", icon: TiktokLogo },
];

export default function Footer() {
  return (
    <footer className="bg-off-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          {/* Logo + description */}
          <div>
            {/* Placeholder for logo — replace with <Image> when ready */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-red rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base leading-tight tracking-tight">
                  Snoonu Ads
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-[35ch] text-sm leading-relaxed text-zinc-400">
              Qatar&apos;s retail media platform connecting brands with high-intent
              shoppers across the country.
            </p>
          </div>

          {/* Contact Us + Follow Us */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-zinc-500" />
                <span className="text-sm text-zinc-400">
                  The 18th Tower, 14th Floor, Lusail, Qatar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Envelope size={18} className="shrink-0 text-zinc-500" />
                <a
                  href="mailto:ads@snoonu.com"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  ads@snoonu.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-zinc-500" />
                <a
                  href="tel:+97444302000"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                  dir="ltr"
                >
                  +974 4430 2000
                </a>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-sm font-bold uppercase tracking-widest text-white">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block py-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <div />
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Snoonu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
