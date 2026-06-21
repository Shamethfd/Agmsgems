"use client";

import { Gem, TrendingUp, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryLink } from "@/components/ui/luxury-link";

const REASONS = [
  {
    icon: Gem,
    title: "Extreme Rarity",
    description:
      "Fine natural gemstones occur in quantities measured in grams, not tonnes — true scarcity drives enduring value.",
  },
  {
    icon: TrendingUp,
    title: "Limited Supply",
    description:
      "Major deposits are depleted. New discoveries are increasingly rare, tightening global availability.",
  },
  {
    icon: Globe,
    title: "Global Demand",
    description:
      "Collectors and investors across Asia, Europe, and the Americas compete for the finest specimens.",
  },
  {
    icon: Shield,
    title: "Wealth Preservation",
    description:
      "Tangible, portable, and historically resilient — gemstones preserve capital across generations.",
  },
];

export function WhyInvestPreview() {
  return (
    <section className="section-padding bg-primary-black">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Investment Thesis"
          title="Why Rare Gemstones"
          subtitle="Natural gemstones represent one of the most compelling alternative asset classes for sophisticated investors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="luxury-card p-8 group"
            >
              <item.icon
                className="text-luxury-gold mb-6 transition-transform duration-500 group-hover:scale-110"
                size={28}
                strokeWidth={1}
              />
              <h3 className="font-heading text-xl text-ivory mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-text-primary/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LuxuryLink href="/why-invest" variant="outline">
            Why Invest
          </LuxuryLink>
        </div>
      </div>
    </section>
  );
}
