"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";

const TOPICS = [
  {
    title: "Extreme Scarcity",
    stat: "< 0.001%",
    description:
      "Fine gem-quality crystals represent an infinitesimal fraction of all mined material. The rarest specimens — unheated Kashmir sapphires, Burmese pigeon blood rubies, Colombian emeralds — exist in quantities that defy conventional supply economics.",
    chart: [12, 18, 15, 22, 28, 35, 42, 55, 68, 85],
  },
  {
    title: "Historical Appreciation",
    stat: "+847%",
    description:
      "Over the past four decades, top-tier colored gemstones have outperformed many traditional asset classes. Record auction results at Christie's and Sotheby's continue to establish new benchmarks for the finest specimens.",
    chart: [20, 25, 30, 38, 45, 52, 60, 72, 80, 95],
  },
  {
    title: "Wealth Preservation",
    stat: "5000+ yrs",
    description:
      "Gemstones have served as portable stores of wealth since antiquity. Unlike paper assets, they cannot be debased, defaulted upon, or erased by market volatility.",
    chart: [40, 42, 41, 43, 44, 45, 46, 47, 48, 50],
  },
  {
    title: "Collector Demand",
    stat: "3 Continents",
    description:
      "Demand from Asian collectors, Middle Eastern royal families, and Western family offices has created a truly global marketplace for the finest natural gemstones.",
    chart: [30, 35, 42, 48, 55, 62, 70, 78, 88, 100],
  },
  {
    title: "Tangible Asset Ownership",
    stat: "100% Natural",
    description:
      "In an era of digital abstraction, the physical ownership of a rare natural gemstone provides psychological and financial security that intangible assets cannot replicate.",
    chart: [50, 52, 54, 58, 62, 65, 70, 75, 82, 90],
  },
  {
    title: "Legacy Assets",
    stat: "Generations",
    description:
      "The finest gemstones become family heirlooms — passed from generation to generation, each transfer adding to their provenance and historical significance.",
    chart: [25, 30, 35, 40, 50, 58, 65, 75, 85, 95],
  },
];

function MiniChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-24 mt-6">
      {data.map((value, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="flex-1 bg-gradient-to-t from-luxury-gold/20 to-luxury-gold/60 min-h-[4px]"
        />
      ))}
    </div>
  );
}

export default function WhyInvestPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Investment Thesis"
            title="Why Invest in Rare Gemstones"
            subtitle="An editorial exploration of colored gemstones as a premier alternative asset class."
          />
        </div>
      </section>

      <section ref={containerRef} className="section-padding bg-primary-black">
        <div className="container-luxury max-w-4xl mx-auto">
          <motion.div style={{ opacity }} className="text-center mb-20">
            <p className="font-numbers text-6xl md:text-8xl text-luxury-gold/20">
              Alternative Assets
            </p>
            <p className="text-text-primary/60 mt-4 text-lg">
              Scroll to explore the investment case
            </p>
          </motion.div>

          <div className="space-y-24">
            {TOPICS.map((topic, i) => (
              <FadeIn key={topic.title} delay={0.05}>
                <article className="luxury-card p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl text-ivory mt-2">
                        {topic.title}
                      </h3>
                      <p className="mt-4 text-text-primary/60 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                    <div className="md:w-48 text-center md:text-right">
                      <p className="font-numbers text-4xl md:text-5xl text-luxury-gold">
                        {topic.stat}
                      </p>
                    </div>
                  </div>
                  <MiniChart data={topic.chart} />
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 text-center">
            <LuxuryLink href="/contact">Discuss Your Investment Strategy</LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
