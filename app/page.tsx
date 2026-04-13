import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Audience from "@/components/Audience";
import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import Placements from "@/components/Placements";
import Analytics from "@/components/Analytics";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
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
        <Audience />
        <Solutions />
        <Advantages />
        <Placements />
        <Analytics />
        <CaseStudies />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
