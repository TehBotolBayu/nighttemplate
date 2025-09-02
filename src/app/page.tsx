import HeroSection from "@/components/landing/Hero";
import HeaderSection from "@/components/landing/Header";
import FeaturesSection from "@/components/landing/Features";
import HowItWorksSection from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
}
