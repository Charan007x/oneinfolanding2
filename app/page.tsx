import HeroSection from "@/components/HeroSection";
import PartnerLogoLoopSection from "@/components/PartnerLogoLoopSection";
import BrandsSection from "@/components/BrandsSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <PartnerLogoLoopSection />
      <StatsSection />
      <FeaturesSection />
      <BrandsSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <ComparisonSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
