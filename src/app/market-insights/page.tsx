"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { TrendingUp, BarChart3 } from "lucide-react";

const INSIGHTS = [
  {
    date: "Q1 2026",
    title: "Unheated Blue Sapphires Reach Record Premiums",
    excerpt:
      "Auction results at Geneva and Hong Kong confirm a widening gap between heated and unheated Ceylon sapphires, with top specimens commanding 300%+ premiums.",
    trend: "+24%",
    category: "Sapphires",
  },
  {
    date: "Q4 2025",
    title: "Padparadscha Supply Tightens Globally",
    excerpt:
      "Production from Sri Lankan padparadscha deposits has declined 40% over the past decade, driving sustained appreciation in fine examples above 5 carats.",
    trend: "+31%",
    category: "Padparadscha",
  },
  {
    date: "Q3 2025",
    title: "Family Office Allocation to Colored Gemstones Increases",
    excerpt:
      "A survey of 120 family offices reveals 18% now hold colored gemstones as a dedicated alternative asset class, up from 8% five years ago.",
    trend: "+18%",
    category: "Market",
  },
  {
    date: "Q2 2025",
    title: "Burmese Ruby Auction Momentum Continues",
    excerpt:
      "Christie's Magnificent Jewels sale sets new benchmarks for unheated pigeon blood rubies, with a 15ct specimen achieving $1.2M per carat.",
    trend: "+42%",
    category: "Rubies",
  },
];

const MARKET_DATA = [
  { year: "2016", sapphire: 100, ruby: 100, emerald: 100 },
  { year: "2018", sapphire: 118, ruby: 125, emerald: 112 },
  { year: "2020", sapphire: 142, ruby: 148, emerald: 130 },
  { year: "2022", sapphire: 178, ruby: 195, emerald: 155 },
  { year: "2024", sapphire: 215, ruby: 240, emerald: 172 },
  { year: "2026", sapphire: 248, ruby: 285, emerald: 198 },
];

export default function MarketInsightsPage() {
  const maxVal = 300;

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Intelligence"
            title="Market Insights"
            subtitle="Curated analysis and market intelligence for sophisticated gemstone investors."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury">
          <FadeIn>
            <div className="luxury-card p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="text-luxury-gold" size={24} />
                <h3 className="font-heading text-2xl text-ivory">
                  Investment-Grade Index (2016–2026)
                </h3>
              </div>
              <div className="flex items-end gap-4 md:gap-8 h-48 md:h-64">
                {MARKET_DATA.map((point) => (
                  <div key={point.year} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-40 md:h-52">
                      {(["sapphire", "ruby", "emerald"] as const).map((gem) => (
                        <motion.div
                          key={gem}
                          initial={{ height: 0 }}
                          whileInView={{
                            height: `${(point[gem] / maxVal) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className={`flex-1 min-h-[4px] ${
                            gem === "sapphire"
                              ? "bg-luxury-gold/70"
                              : gem === "ruby"
                              ? "bg-red-400/50"
                              : "bg-green-400/50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-text-primary/40">{point.year}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 mt-6 justify-center">
                {[
                  { label: "Sapphire", color: "bg-luxury-gold/70" },
                  { label: "Ruby", color: "bg-red-400/50" },
                  { label: "Emerald", color: "bg-green-400/50" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${item.color}`} />
                    <span className="text-xs text-text-primary/50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {INSIGHTS.map((insight, i) => (
              <FadeIn key={insight.title} delay={i * 0.05}>
                <article className="luxury-card p-8 md:p-10 group hover:border-luxury-gold/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold/60">
                          {insight.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 border border-luxury-gold/20 text-luxury-gold/70">
                          {insight.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-ivory group-hover:text-luxury-gold transition-colors">
                        {insight.title}
                      </h3>
                      <p className="mt-3 text-text-primary/60 leading-relaxed">
                        {insight.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-green-400/80">
                      <TrendingUp size={16} />
                      <span className="font-numbers text-2xl">{insight.trend}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <LuxuryLink href="/contact" variant="outline">
              Subscribe to Private Reports
            </LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
