"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Shield, Award } from "lucide-react";

const CERTIFICATES = [
  {
    id: "GUB-2024-8847",
    lab: "Gübelin Gem Lab",
    gem: "Royal Blue Ceylon Sapphire",
    carat: "12.47 ct",
    origin: "Sri Lanka",
    treatment: "No indications of heating",
    date: "March 2024",
  },
  {
    id: "SSEF-2024-1203",
    lab: "SSEF Swiss Gemmological Institute",
    gem: "Padparadscha Sapphire",
    carat: "8.92 ct",
    origin: "Sri Lanka",
    treatment: "Unheated",
    date: "January 2024",
  },
  {
    id: "GIA-2023-9921",
    lab: "Gemological Institute of America",
    gem: "Alexandrite Color-Change",
    carat: "5.18 ct",
    origin: "Russia",
    treatment: "None",
    date: "November 2023",
  },
];

export default function CertificationViewerPage() {
  const [activeCert, setActiveCert] = useState(0);
  const cert = CERTIFICATES[activeCert];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Verification"
            title="Certification Viewer"
            subtitle="Independent laboratory reports from the world's most respected gemological institutions."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-10">
            {CERTIFICATES.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCert(i)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.1em] border transition-all ${
                  activeCert === i
                    ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                    : "border-luxury-gold/20 text-text-primary/50 hover:border-luxury-gold/40"
                }`}
              >
                {c.id}
              </button>
            ))}
          </div>

          <FadeIn>
            <div className="luxury-card overflow-hidden">
              <div className="bg-dark-navy/50 p-6 md:p-8 border-b border-luxury-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <FileCheck className="text-luxury-gold" size={32} />
                  <div>
                    <h3 className="font-heading text-xl text-ivory">{cert.lab}</h3>
                    <p className="text-xs text-luxury-gold/60 mt-1">Report #{cert.id}</p>
                  </div>
                </div>
                <Badge variant="gold">Verified Authentic</Badge>
              </div>

              <div className="p-8 md:p-12">
                <div className="max-w-lg mx-auto border-2 border-luxury-gold/20 p-8 md:p-12 bg-ivory/5">
                  <div className="text-center mb-8">
                    <Award className="mx-auto text-luxury-gold mb-4" size={40} />
                    <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold">
                      Certificate of Authenticity
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Gemstone", value: cert.gem },
                      { label: "Weight", value: cert.carat },
                      { label: "Origin", value: cert.origin },
                      { label: "Treatment", value: cert.treatment },
                      { label: "Date Issued", value: cert.date },
                    ].map((field) => (
                      <div
                        key={field.label}
                        className="flex justify-between py-3 border-b border-luxury-gold/10"
                      >
                        <span className="text-xs uppercase tracking-[0.15em] text-luxury-gold/60">
                          {field.label}
                        </span>
                        <span className="text-sm text-ivory">{field.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-2 text-xs text-text-primary/40">
                    <Shield size={14} />
                    <span>Secured by AGMS Digital Vault</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 text-center">
            <LuxuryLink href="/contact" variant="outline">
              Request Full Certification Package
            </LuxuryLink>
          </div>
        </div>
      </section>
    </>
  );
}
