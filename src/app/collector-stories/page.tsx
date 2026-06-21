import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Collector Stories",
  description: "Private collector perspectives on building gemstone portfolios with AGMS.",
};

const STORIES = [
  {
    name: "A European Family Office",
    location: "Geneva, Switzerland",
    quote:
      "AGMS understood our mandate from the first conversation — we sought tangible assets with generational significance. Our portfolio of unheated Ceylon sapphires has appreciated beyond our most optimistic projections.",
    collection: "Royal Blue Sapphires · Padparadscha",
    image: "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=600&q=80",
  },
  {
    name: "Private Collector & Philanthropist",
    location: "Singapore",
    quote:
      "What distinguishes AGMS is their field expertise. Accompanying their team to Sri Lanka transformed my understanding of provenance. Every stone in my collection carries a story I can share with my children.",
    collection: "Alexandrite · Burmese Ruby",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    name: "Third-Generation Collector",
    location: "Dubai, UAE",
    quote:
      "My grandfather began collecting gemstones in the 1960s. AGMS helped us catalog, certify, and expand a collection that now spans three generations. Their discretion and expertise are unmatched.",
    collection: "Kashmir Sapphire · Colombian Emerald",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  },
];

export default function CollectorStoriesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Testimonials"
            title="Collector Stories"
            subtitle="Perspectives from collectors and investors who trust AGMS with their most treasured assets."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury space-y-16">
          {STORIES.map((story, i) => (
            <FadeIn key={story.name} delay={i * 0.1}>
              <article className="luxury-card overflow-hidden">
                <div className="grid lg:grid-cols-5">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-2 min-h-[280px]">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="text-luxury-gold/30 mb-6" size={40} />
                    <blockquote className="font-heading text-xl md:text-2xl text-ivory leading-relaxed italic">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    <div className="mt-8 pt-6 border-t border-luxury-gold/10">
                      <p className="text-ivory font-medium">{story.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-luxury-gold/60 mt-1">
                        {story.location}
                      </p>
                      <p className="text-sm text-text-primary/40 mt-3">
                        Collection: {story.collection}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="container-luxury mt-16 text-center">
          <p className="text-text-primary/50 mb-6">
            All client identities are protected. Stories shared with permission.
          </p>
          <LuxuryLink href="/contact">Share Your Journey</LuxuryLink>
        </div>
      </section>
    </>
  );
}
