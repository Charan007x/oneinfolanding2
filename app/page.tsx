import HeroSection from "@/components/HeroSection";
import LogoLoopSection from "@/components/LogoLoopSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <StatsSection />
      <LogoLoopSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
