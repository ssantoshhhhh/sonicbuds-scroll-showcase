import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import TechSpecs from "@/components/TechSpecs";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureSection />
      <TechSpecs />
      <PricingSection />
    </div>
  );
};

export default Index;
