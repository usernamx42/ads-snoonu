import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Audience from "@/components/Audience";
import BrandMarquee from "@/components/BrandMarquee";
import Results from "@/components/Results";
import Advantages from "@/components/Advantages";
import Analytics from "@/components/Analytics";
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
        <Solutions />
        <Audience />
        <BrandMarquee />
        <Results />
        <Advantages />
        <Analytics />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
