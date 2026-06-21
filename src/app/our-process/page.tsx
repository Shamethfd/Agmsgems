"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryLink } from "@/components/ui/luxury-link";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Private Sourcing",
    description:
      "Our global network of trusted relationships with miners, dealers, and estate holders provides exclusive access to gemstones before they reach the open market. We operate with the discretion of a private bank.",
  },
  {
    number: "02",
    title: "Gemstone Discovery",
    description:
      "Our gemologists travel to source regions — Sri Lanka, Myanmar, Colombia, Madagascar — to identify exceptional specimens at their origin. Field expertise is the foundation of our acquisition strategy.",
  },
  {
    number: "03",
    title: "Verification",
    description:
      "Every gemstone undergoes rigorous in-house examination using advanced gemological instruments. We verify origin, treatment status, and quality before any acquisition proceeds.",
  },
  {
    number: "04",
    title: "International Certification",
    description:
      "Independent certification from Gübelin, SSEF, GIA, and AGL provides the authoritative documentation required for investment-grade acquisitions and insurance purposes.",
  },
  {
    number: "05",
    title: "Valuation",
    description:
      "Our valuation methodology combines auction comparables, market intelligence, and gemological rarity assessment to establish fair market value for each asset.",
  },
  {
    number: "06",
    title: "Private Acquisition",
    description:
      "We facilitate secure, confidential transactions with full chain-of-custody documentation. Post-acquisition, we provide custody, insurance coordination, and legacy planning advisory.",
  },
];

export default function OurProcessPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Methodology"
            title="Our Process"
            subtitle="Six disciplined stages from discovery to legacy preservation."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury max-w-4xl">
          <div ref={timelineRef} className="relative">
            <div
              ref={lineRef}
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-luxury-gold/30 origin-top"
            />

            <div className="space-y-16">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="process-step relative pl-16 md:pl-20"
                >
                  <div className="absolute left-0 md:left-2 w-12 h-12 flex items-center justify-center border border-luxury-gold bg-primary-black text-luxury-gold text-xs z-10">
                    {step.number}
                  </div>
                  <div className="luxury-card p-8 md:p-10">
                    <h3 className="font-heading text-2xl md:text-3xl text-ivory">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-text-primary/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <LuxuryLink href="/contact" variant="outline">
              Begin the Process
            </LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
