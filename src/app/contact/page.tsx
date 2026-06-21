"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/luxury-link";
import { CheckCircle } from "lucide-react";

const CONSULTATION_TYPES = [
  "Video Consultation",
  "Sri Lanka Visit",
  "Private Sourcing Request",
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consultationType, setConsultationType] = useState<string>(
    CONSULTATION_TYPES[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Private Inquiry"
            title="Contact AGMS"
            subtitle="All inquiries are treated with absolute confidentiality. Our senior advisors respond within 24 hours."
          />
        </div>
      </section>

      <section className="section-padding !pt-0 bg-primary-black">
        <div className="container-luxury max-w-3xl">
          {submitted ? (
            <FadeIn>
              <div className="luxury-card p-12 text-center">
                <CheckCircle className="mx-auto text-luxury-gold mb-6" size={48} />
                <h3 className="font-heading text-2xl text-ivory mb-4">
                  Inquiry Received
                </h3>
                <p className="text-text-primary/60">
                  Thank you for your interest. A senior advisor will contact you
                  within 24 hours to arrange your private consultation.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={handleSubmit} className="luxury-card p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" required placeholder="Country of residence" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="private@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Investment Interest</Label>
                  <Input
                    id="interest"
                    name="interest"
                    placeholder="e.g. Royal Blue Sapphires, Portfolio Diversification"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Consultation Type</Label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {CONSULTATION_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setConsultationType(type)}
                        className={`p-4 text-xs uppercase tracking-[0.1em] border transition-all text-left ${
                          consultationType === type
                            ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                            : "border-luxury-gold/20 text-text-primary/50 hover:border-luxury-gold/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your investment objectives or specific interests..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Private Inquiry
                </Button>

                <p className="text-xs text-text-primary/40 text-center">
                  By submitting this form, you agree to our confidential handling
                  of your personal information.
                </p>
              </form>
            </FadeIn>
          )}

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {[
              { city: "Colombo", region: "Sri Lanka" },
              { city: "Geneva", region: "Switzerland" },
              { city: "Dubai", region: "UAE" },
            ].map((office) => (
              <div key={office.city} className="luxury-card p-6">
                <p className="font-heading text-lg text-ivory">{office.city}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-luxury-gold/60 mt-1">
                  {office.region}
                </p>
                <p className="text-sm text-text-primary/40 mt-3">By appointment only</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
