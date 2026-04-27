import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Placements from "@/components/Placements";
import AudienceData from "@/components/AudienceData";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CostCalculator from "@/components/CostCalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandMarquee />
        <Solutions />
        <HowItWorks />
        <Placements />
        <AudienceData />
        <Results />
        <Pricing />
        <CostCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
