import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import ProblemsSection from "@/components/ProblemsSection";
import PropertiesSection from "@/components/PropertiesSection";
import AIAgentsSection from "@/components/AIAgentsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <HowItWorks />
      <PropertiesSection />
      <AIAgentsSection />
      <FooterSection />
    </div>
  );
};

export default Index;