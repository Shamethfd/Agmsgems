"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { MapPin } from "lucide-react";

const TIMELINE = [
  { year: "500 BC", event: "Ancient Sri Lankan gem trade documented by traders from Rome and Persia" },
  { year: "1292", event: "Marco Polo describes Ceylon as having the finest sapphires in the world" },
  { year: "1870s", event: "Modern mechanized mining begins in Ratnapura gem gravels" },
  { year: "1937", event: "The Star of India — 563ct star sapphire — cements Ceylon's global reputation" },
  { year: "1980s", event: "AGMS establishes direct sourcing operations in Sri Lanka" },
  { year: "Present", event: "Sri Lanka remains the world's premier source of unheated blue sapphires" },
];

const REGIONS = [
  { name: "Ratnapura", x: 45, y: 72, desc: "The City of Gems — heart of Sri Lankan sapphire mining" },
  { name: "Elahara", x: 52, y: 65, desc: "Renowned for padparadscha and fancy sapphires" },
  { name: "Balangoda", x: 48, y: 68, desc: "Alluvial deposits yielding exceptional blue sapphires" },
  { name: "Colombo", x: 35, y: 55, desc: "AGMS headquarters and private viewing facility" },
];

const TOPICS = [
  {
    title: "Gemstone Heritage",
    text: "For over 2,500 years, Sri Lanka has been synonymous with the world's finest gemstones. Known to ancient traders as Ratna-Dweepa — the Island of Gems — Ceylon's gem gravels have yielded treasures that adorn royal collections across continents.",
  },
  {
    title: "Mining History",
    text: "Traditional pit mining in the gem-rich gravels of Ratnapura continues alongside modern exploration. The island's unique geological history — a collision of tectonic plates — created the perfect conditions for corundum formation.",
  },
  {
    title: "Sapphire Legacy",
    text: "Ceylon sapphires are distinguished by their exceptional clarity, vibrant color, and often unheated status. The royal blue hue originating from Sri Lanka remains the global benchmark against which all sapphires are measured.",
  },
  {
    title: "Global Reputation",
    text: "From the British Crown Jewels to the collections of Middle Eastern royalty, Sri Lankan gemstones have defined luxury for millennia. AGMS maintains the island's legacy through direct, ethical sourcing relationships.",
  },
  {
    title: "Rare Discoveries",
    text: "Recent decades have yielded extraordinary finds — padparadscha sapphires of unprecedented size, star sapphires of perfect asterism, and color-change stones that challenge gemological understanding.",
  },
];

export default function SriLankaPage() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState(0);

  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589308078058-971481caa3e5?w=1920&q=80"
          alt="Sri Lanka landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-luxury relative z-10 pb-16 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-4"
          >
            The Island of Gems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl text-ivory max-w-3xl"
          >
            Sri Lanka — Birthplace of the World&apos;s Finest Sapphires
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury space-y-16">
          {TOPICS.map((topic, i) => (
            <FadeIn key={topic.title} delay={i * 0.05}>
              <div className="grid md:grid-cols-3 gap-8 items-start border-b border-luxury-gold/10 pb-16 last:border-0">
                <h3 className="font-heading text-2xl text-ivory md:col-span-1">
                  {topic.title}
                </h3>
                <p className="text-text-primary/60 leading-relaxed md:col-span-2">
                  {topic.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding bg-dark-navy border-y border-luxury-gold/10">
        <div className="container-luxury">
          <SectionHeading eyebrow="History" title="Interactive Timeline" />

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {TIMELINE.map((item, i) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveYear(i)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-all ${
                  activeYear === i
                    ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                    : "border-luxury-gold/20 text-text-primary/50 hover:border-luxury-gold/40"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="luxury-card p-8 md:p-12 text-center max-w-2xl mx-auto"
            >
              <p className="font-numbers text-4xl text-luxury-gold mb-4">
                {TIMELINE[activeYear].year}
              </p>
              <p className="text-text-primary/70 leading-relaxed">
                {TIMELINE[activeYear].event}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury">
          <SectionHeading eyebrow="Geography" title="Source Regions" />

          <div className="relative aspect-[16/9] max-w-4xl mx-auto luxury-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-navy to-primary-black" />
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full opacity-20"
              aria-hidden
            >
              <ellipse cx="45" cy="60" rx="25" ry="35" fill="none" stroke="#C9A86A" strokeWidth="0.3" />
            </svg>

            {REGIONS.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() =>
                  setActiveRegion(activeRegion === region.name ? null : region.name)
                }
                className="absolute group"
                style={{ left: `${region.x}%`, top: `${region.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <MapPin
                  size={20}
                  className={`transition-colors ${
                    activeRegion === region.name
                      ? "text-luxury-gold"
                      : "text-luxury-gold/50 group-hover:text-luxury-gold"
                  }`}
                />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-wider text-luxury-gold/70">
                  {region.name}
                </span>
              </button>
            ))}

            <AnimatePresence>
              {activeRegion && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 left-6 right-6 luxury-card p-6 bg-primary-black/90 backdrop-blur"
                >
                  <p className="font-heading text-lg text-ivory">{activeRegion}</p>
                  <p className="text-sm text-text-primary/60 mt-2">
                    {REGIONS.find((r) => r.name === activeRegion)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <LuxuryLink href="/contact" variant="outline">
              Plan a Sri Lanka Visit
            </LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
