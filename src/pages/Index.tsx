import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformLogos from "@/components/PlatformLogos";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PlatformLogos />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
