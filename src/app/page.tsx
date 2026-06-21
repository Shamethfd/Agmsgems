import { HeroSection } from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedAssets } from "@/components/home/featured-assets";
import { WhyInvestPreview } from "@/components/home/why-invest-preview";
import { StatsSection } from "@/components/home/stats-section";
import { ProcessPreview } from "@/components/home/process-preview";
import { ConsultationCTA } from "@/components/home/consultation-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedAssets />
      <WhyInvestPreview />
      <StatsSection />
      <ProcessPreview />
      <ConsultationCTA />
    </>
  );
}
