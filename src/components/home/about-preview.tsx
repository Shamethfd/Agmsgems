import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";

export function AboutPreview() {
  return (
    <section className="section-padding bg-primary-black">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionHeading
            eyebrow="About AGMS"
            title="Stewards of Nature's Rarest Treasures"
            align="left"
            className="mb-0 lg:mb-0"
          />

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-text-primary/70 leading-relaxed text-base md:text-lg">
                AGMS Rare Gemstone Asset Management operates at the intersection
                of heritage, expertise, and private wealth preservation. We are
                not a retailer — we are curators and custodians of the world&apos;s
                most exceptional natural gemstones.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text-primary/70 leading-relaxed text-base md:text-lg">
                For over three decades, we have served collectors, family offices,
                and institutional investors seeking tangible alternative assets
                of enduring value — gemstones that transcend markets and define
                legacies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <LuxuryLink href="/about" variant="outline">
                Learn More
              </LuxuryLink>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
