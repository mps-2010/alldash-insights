import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import HeroBadge from "./HeroBadge";
import DashboardMockup from "./DashboardMockup";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <HeroBadge />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
          >
            All Your Social Media
            <br />
            <span className="text-gradient">In One Dashboard</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            Connect all your platforms. Get AI-powered insights. Analyze your content. 
            <span className="text-foreground font-medium"> Save 10+ hours every week.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Watch Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            No credit card required • Free 14-day trial • Cancel anytime
          </motion.p>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
};

export default Hero;
