import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import ChargingSection from "@/components/ChargingSection";
import ConnectivitySection from "@/components/ConnectivitySection";
import TechSpecs from "@/components/TechSpecs";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ScrollAnimatedSection />
      <FeatureSection />
      <ChargingSection />
      <ConnectivitySection />
      <TechSpecs />
      <PricingSection />
    </div>
  );
};

export default Index;
