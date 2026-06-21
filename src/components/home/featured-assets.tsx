"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryLink } from "@/components/ui/luxury-link";

const PREVIEW_CARDS = [
  {
    title: "Royal Blue Sapphire",
    description:
      "The pinnacle of colored gemstone investing — unheated Ceylon sapphires of exceptional saturation.",
    image: "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=800&q=80",
    href: "/collection/royal-blue-ceylon-sapphire",
  },
  {
    title: "Padparadscha Sapphire",
    description:
      "The rarest sapphire variety, displaying the coveted lotus blossom hue prized by elite collectors.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    href: "/collection/padparadscha-sunset-sapphire",
  },
  {
    title: "Alexandrite",
    description:
      "Nature's color-change miracle — a gemstone that transforms from emerald green to ruby red.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    href: "/collection/alexandrite-color-change",
  },
  {
    title: "Collector Assets",
    description:
      "Curated portfolio of museum-grade gemstones reserved for discerning private collectors.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    href: "/collection",
  },
];

export function FeaturedAssets() {
  return (
    <section className="section-padding luxury-gradient">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Investment Portfolio"
          title="Featured Investment Assets"
          subtitle="A curated selection of museum-grade gemstones available for private acquisition."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link href={card.href} className="group block luxury-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="text-luxury-gold" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-ivory group-hover:text-luxury-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-primary/50 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LuxuryLink href="/collection">View Collection</LuxuryLink>
        </div>
      </div>
    </section>
  );
}
