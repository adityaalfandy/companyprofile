import HeroSection from "@/components/home/HeroSection";
import ClientMarquee from "@/components/home/ClientMarquee";
import PillarSection from "@/components/home/PillarSection";
import StatsSection from "@/components/home/StatsSection";
import FrameworkPreview from "@/components/home/FrameworkPreview";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import { CTABanner } from "@/components/Section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <PillarSection />
      <StatsSection />
      <FrameworkPreview />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
