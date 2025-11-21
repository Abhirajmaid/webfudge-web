import HeroSection from "@/components/HeroSection";
import AboutPage from "@/components/AboutPage";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsMarqueeSection from "@/components/StatsMarqueeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <ServicesSection />
      <PortfolioSection />
      <StatsMarqueeSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
