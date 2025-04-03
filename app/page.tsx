import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import SocialProof from './components/sections/SocialProof';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CallToActionFinal from './components/sections/CallToActionFinal';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="proof">
        <SocialProof />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CallToActionFinal />
      </section>
    </main>
  );
}
