import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About AGMS",
  description: "Learn about AGMS Rare Gemstone Asset Management — stewards of nature's rarest treasures.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Company"
            title="About AGMS"
            subtitle={BRAND.tagline}
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=800&q=80"
                  alt="Museum-grade sapphire"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 border border-luxury-gold/20 m-4" />
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <h3 className="font-heading text-2xl md:text-3xl text-ivory">
                  A Legacy of Excellence
                </h3>
                <p className="mt-4 text-text-primary/70 leading-relaxed">
                  Founded on the principle that the finest natural gemstones
                  represent more than beauty — they are stores of value,
                  cultural artifacts, and generational assets — AGMS has
                  established itself as a trusted partner to the world&apos;s most
                  discerning collectors and investors.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-text-primary/70 leading-relaxed">
                  Our team combines decades of gemological expertise with deep
                  relationships across Sri Lanka, Myanmar, Colombia, and other
                  premier source regions. We operate with the discretion and
                  rigor expected of a private wealth institution.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-text-primary/70 leading-relaxed">
                  From initial sourcing through certification, acquisition, and
                  long-term custody, AGMS provides end-to-end asset management
                  for natural gemstones of exceptional quality and provenance.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-navy border-y border-luxury-gold/10">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Values"
            title="Trust. Rarity. Legacy."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Integrity",
                text: "Every gemstone we present has been independently verified by leading international laboratories.",
              },
              {
                title: "Absolute Discretion",
                text: "Our clients' acquisitions and portfolios are managed with the confidentiality of a private bank.",
              },
              {
                title: "Generational Vision",
                text: "We advise on gemstones as legacy assets — treasures to be preserved and passed forward.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="luxury-card p-8 h-full">
                  <h3 className="font-heading text-xl text-ivory mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-primary/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <LuxuryLink href="/contact">Schedule a Consultation</LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
