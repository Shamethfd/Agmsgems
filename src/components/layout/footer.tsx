import Link from "next/link";
import { BRAND, NAV_LINKS, PREMIUM_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-luxury-gold/10 bg-dark-navy">
      <div className="container-luxury section-padding !py-16 md:!py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl tracking-[0.15em] text-ivory">
              {BRAND.shortName}
            </Link>
            <p className="mt-4 text-sm text-text-primary/50 leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-luxury-gold/60">
              {BRAND.altTagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-primary/60 hover:text-luxury-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold mb-6">
              Private Access
            </h4>
            <ul className="space-y-3">
              {PREMIUM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-primary/60 hover:text-luxury-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold mb-6">
              Contact
            </h4>
            <address className="not-italic text-sm text-text-primary/60 space-y-2">
              <p>Colombo · Geneva · Dubai</p>
              <p>
                <a
                  href="mailto:private@agms.com"
                  className="hover:text-luxury-gold transition-colors"
                >
                  private@agms.com
                </a>
              </p>
              <p className="pt-4 text-xs text-text-primary/40">
                By appointment only. All inquiries are confidential.
              </p>
            </address>
          </div>
        </div>

        <div className="gold-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-primary/40">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Museum-Grade · Investment-Grade · Natural Gemstones
          </p>
        </div>
      </div>
    </footer>
  );
}
