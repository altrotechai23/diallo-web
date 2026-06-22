import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <WhyChoose />
        <Reviews />
        <ServiceAreas />
        <CTA />
        <Footer />
      </main>
    </>
  );
}