import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, LuxuryLink } from "@/components/ui/luxury-link";
import {
  Search,
  Compass,
  FileCheck,
  LineChart,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Private gemstone sourcing, certification, investment consultation, and viewing services.",
};

const SERVICES = [
  {
    icon: Search,
    title: "Rare Gemstone Sourcing",
    description:
      "Access to off-market gemstones through our global network of trusted miners, dealers, and estate holders. We identify exceptional specimens before they reach public auction.",
    image: "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=800&q=80",
  },
  {
    icon: Compass,
    title: "Private Gemstone Hunting",
    description:
      "Exclusive field expeditions to Sri Lanka, Myanmar, and other premier source regions. Accompany our gemologists on bespoke sourcing journeys tailored to your collection goals.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    icon: FileCheck,
    title: "Certification Management",
    description:
      "End-to-end management of gemological certification from Gübelin, SSEF, GIA, and AGL. We ensure every asset in your portfolio carries authoritative documentation.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    icon: LineChart,
    title: "Investment Consultation",
    description:
      "Strategic advisory on building a diversified gemstone portfolio. Our senior advisors provide market intelligence, valuation analysis, and acquisition timing guidance.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    icon: Eye,
    title: "Private Viewing",
    description:
      "By-appointment viewings at our secure facilities in Colombo, Geneva, and Dubai. Experience museum-grade gemstones in a private, unhurried setting with expert guidance.",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Private Services"
            title="Our Services"
            subtitle="Comprehensive asset management services for collectors and investors."
          />
        </div>
      </section>

      <section className="section-padding bg-primary-black">
        <div className="container-luxury space-y-24">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={0.05}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden luxury-card ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <service.icon
                    className="text-luxury-gold mb-6"
                    size={32}
                    strokeWidth={1}
                  />
                  <h3 className="font-heading text-2xl md:text-3xl text-ivory">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-text-primary/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="container-luxury mt-20 text-center">
          <LuxuryLink href="/contact">Request a Private Consultation</LuxuryLink>
        </div>
      </section>
    </>
  );
}
