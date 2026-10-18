import Header from "./landing/components/layout/header";
import Hero from "./landing/components/sections/hero";
import Pain from "./landing/components/sections/pain";
import Solution from "./landing/components/sections/solution";
import BeforeAfter from "./landing/components/sections/before-after";
import Audience from "./landing/components/sections/audience";
import Steps from "./landing/components/sections/steps";
import Testimonials from "./landing/components/sections/testimonials";
import Plans from "./landing/components/sections/plans";
import Faq from "./landing/components/sections/faq";
import FinalCta from "./landing/components/sections/final-cta";
import Footer from "./landing/components/layout/footer";
import StickyCta from "./landing/components/layout/sticky-cta";

export default function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Pain />
      <Solution />
      <BeforeAfter />
      <Audience />
      <Steps />
      <Testimonials />
      <Plans />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
    </main>
  );
}