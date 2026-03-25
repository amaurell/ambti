import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServiceBricks from "@/components/sections/ServiceBricks";
import PricingGrid from "@/components/sections/PricingGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-brand-graphite">
      <Navbar />
      <HeroSection />
      <ServiceBricks />
      <PricingGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
