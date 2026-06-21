"use client";

import { motion } from "framer-motion";
import { LuxuryLink } from "@/components/ui/luxury-link";

export function ConsultationCTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dark-navy" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(201,168,106,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(201,168,106,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container-luxury relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-6">
            Private Consultation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ivory max-w-3xl mx-auto leading-tight">
            Begin Your Private Gemstone Investment Journey
          </h2>
          <p className="mt-6 text-text-primary/60 max-w-xl mx-auto">
            Schedule a confidential consultation with our senior advisors to
            explore acquisition opportunities tailored to your portfolio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <LuxuryLink href="/contact">Schedule Consultation</LuxuryLink>
            <LuxuryLink href="/contact" variant="outline">
              Contact AGMS
            </LuxuryLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
