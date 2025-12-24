import Header from "./landing/components/layout/header";
import Hero from "./landing/components/sections/hero";
import Features from "./landing/components/sections/features";
import Why from "./landing/components/sections/why";
import Metrics from "./landing/components/sections/metrics";
import Showcase from "./landing/components/sections/showCase";
import Mockup from "./landing/components/mockup";
import Testimonials from "./landing/components/sections/testimonials";
import Plans from "./landing/components/sections/plans";
import CTA from "./landing/components/sections/cta";
import Footer from "./landing/components/layout/footer";

export default function LandingPage() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero />
      <Why />
      <Showcase />
      <Testimonials />
      <Features />
      <Mockup />
      <Plans />
      <CTA />
      <Footer />
    </main>
  );
}

