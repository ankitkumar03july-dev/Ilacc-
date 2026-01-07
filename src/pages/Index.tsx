import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyIndiaGRULACSection from "@/components/sections/WhyIndiaGRULACSection";
import ObjectivesSection from "@/components/sections/ObjectivesSection";
import ImpactAreasSection from "@/components/sections/ImpactAreasSection";
import SectorsSection from "@/components/sections/SectorsSection";
import WhyPartnerSection from "@/components/sections/WhyPartnerSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WhyIndiaGRULACSection />
        <ObjectivesSection />
        <ImpactAreasSection />
        <SectorsSection />
        <WhyPartnerSection />
        <ServicesSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
