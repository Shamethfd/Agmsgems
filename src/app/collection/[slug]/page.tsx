import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GEMSTONES, getGemstoneBySlug } from "@/lib/gemstones";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return GEMSTONES.map((gem) => ({ slug: gem.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gem = getGemstoneBySlug(slug);
  if (!gem) return { title: "Not Found" };
  return {
    title: gem.name,
    description: gem.description,
  };
}

export default async function GemstoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const gem = getGemstoneBySlug(slug);
  if (!gem) notFound();

  const specs = [
    { label: "Gemstone Type", value: gem.type },
    { label: "Carat Weight", value: `${gem.carat} ct` },
    { label: "Measurements", value: gem.measurements },
    { label: "Origin", value: gem.origin },
    { label: "Color", value: gem.color },
    { label: "Clarity", value: gem.clarity },
    { label: "Treatment", value: gem.treatment },
    { label: "Certification", value: gem.certification },
    { label: "Availability", value: gem.availability },
  ];

  return (
    <>
      <section className="pt-28 md:pt-36 pb-12 bg-primary-black">
        <div className="container-luxury">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-sm text-luxury-gold/70 hover:text-luxury-gold transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden luxury-card">
                <Image
                  src={gem.image}
                  alt={gem.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {gem.gallery.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden luxury-card"
                  >
                    <Image
                      src={img}
                      alt={`${gem.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Badge variant="gold" className="mb-4">
                {gem.availability}
              </Badge>
              <p className="text-xs uppercase tracking-[0.25em] text-luxury-gold/70">
                {gem.type}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ivory mt-2">
                {gem.name}
              </h1>
              <p className="mt-6 text-text-primary/70 leading-relaxed text-lg">
                {gem.description}
              </p>

              <div className="mt-10 space-y-0 border border-luxury-gold/10">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between py-4 px-6 ${
                      i % 2 === 0 ? "bg-dark-navy/30" : ""
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.15em] text-luxury-gold/60">
                      {spec.label}
                    </span>
                    <span className="text-sm text-ivory text-right max-w-[60%]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link href={`/contact?gem=${gem.slug}`}>Request Details</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link href="/certification-viewer">View Certification</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
