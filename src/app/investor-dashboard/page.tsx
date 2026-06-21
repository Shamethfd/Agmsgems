"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  PieChart,
  Shield,
  Bell,
  FileText,
  Lock,
} from "lucide-react";

const FEATURES = [
  { icon: PieChart, title: "Portfolio Overview", desc: "Real-time valuation of your gemstone holdings" },
  { icon: TrendingUp, title: "Market Analytics", desc: "Auction comparables and appreciation tracking" },
  { icon: Shield, title: "Insurance Status", desc: "Coverage details and renewal reminders" },
  { icon: FileText, title: "Certification Vault", desc: "Digital access to all laboratory reports" },
  { icon: Bell, title: "Acquisition Alerts", desc: "Priority notifications for matching specimens" },
  { icon: Lock, title: "Secure Access", desc: "Bank-grade encryption and two-factor authentication" },
];

const MOCK_PORTFOLIO = [
  { name: "Royal Blue Ceylon Sapphire", carat: "12.47 ct", value: "$2.4M", change: "+12.4%" },
  { name: "Padparadscha Sapphire", carat: "8.92 ct", value: "$1.8M", change: "+18.2%" },
  { name: "Alexandrite Color-Change", carat: "5.18 ct", value: "$980K", change: "+8.7%" },
];

export default function InvestorDashboardPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Private Access"
            title="Investor Dashboard"
            subtitle="A conceptual preview of AGMS client portfolio management — available to verified investors."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury">
          <FadeIn>
            <div className="luxury-card p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <Badge variant="gold" className="mb-2">Concept Preview</Badge>
                  <h3 className="font-heading text-2xl text-ivory">Portfolio Summary</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-luxury-gold/60">Total Value</p>
                  <p className="font-numbers text-4xl text-luxury-gold">$5.18M</p>
                  <p className="text-sm text-green-400/80">+14.2% YTD</p>
                </div>
              </div>

              <div className="space-y-0 border border-luxury-gold/10">
                {MOCK_PORTFOLIO.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 gap-2 ${
                      i % 2 === 0 ? "bg-dark-navy/30" : ""
                    }`}
                  >
                    <div>
                      <p className="text-ivory">{item.name}</p>
                      <p className="text-xs text-text-primary/40">{item.carat}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-numbers text-lg text-ivory">{item.value}</span>
                      <span className="text-sm text-green-400/80">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.05}>
                <div className="luxury-card p-6 h-full">
                  <feature.icon className="text-luxury-gold mb-4" size={24} strokeWidth={1} />
                  <h4 className="font-heading text-lg text-ivory">{feature.title}</h4>
                  <p className="text-sm text-text-primary/50 mt-2">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <LuxuryLink href="/contact">Request Dashboard Access</LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
