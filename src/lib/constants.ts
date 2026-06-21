export const BRAND = {
  name: "AGMS Rare Gemstone Asset Management",
  shortName: "AGMS",
  tagline:
    "Connecting Collectors and Investors with the World's Rarest Natural Gemstones.",
  altTagline: "Rare Gemstones. Timeless Assets.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/why-invest", label: "Why Invest" },
  { href: "/our-process", label: "Our Process" },
  { href: "/services", label: "Services" },
  { href: "/sri-lanka", label: "Sri Lanka" },
  { href: "/contact", label: "Contact" },
] as const;

export const PREMIUM_LINKS = [
  { href: "/investor-dashboard", label: "Investor Dashboard" },
  { href: "/certification-viewer", label: "Certification Viewer" },
  { href: "/gallery", label: "Interactive Gallery" },
  { href: "/market-insights", label: "Market Insights" },
  { href: "/collector-stories", label: "Collector Stories" },
] as const;

export const STATS = [
  { label: "Global Clients", value: 280, suffix: "+" },
  { label: "Rare Gemstones Managed", value: 1450, suffix: "+" },
  { label: "Countries Served", value: 42, suffix: "" },
  { label: "Years of Expertise", value: 35, suffix: "+" },
] as const;
