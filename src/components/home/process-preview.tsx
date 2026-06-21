"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryLink } from "@/components/ui/luxury-link";

const STEPS = [
  { step: "01", title: "Source", description: "Global network of trusted miners and dealers" },
  { step: "02", title: "Verify", description: "Rigorous gemological examination" },
  { step: "03", title: "Certify", description: "International laboratory certification" },
  { step: "04", title: "Acquire", description: "Private acquisition and secure custody" },
  { step: "05", title: "Preserve", description: "Long-term asset management and legacy planning" },
];

export function ProcessPreview() {
  return (
    <section className="section-padding luxury-gradient">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The AGMS Process"
          subtitle="A disciplined approach to sourcing, verifying, and preserving the world's finest gemstones."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-luxury-gold/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-luxury-gold/30 bg-primary-black text-luxury-gold text-xs font-medium mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl text-ivory mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-primary/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <LuxuryLink href="/our-process">View Full Process</LuxuryLink>
        </div>
      </div>
    </section>
  );
}
