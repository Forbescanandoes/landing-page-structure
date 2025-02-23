import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import CallToAction from './components/sections/CallToAction';
import CallToActionFinal from './components/sections/CallToActionFinal';
import FAQ from './components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section>
        <SocialProof />
      </section>
      <div className="bg-white">
        {' '}
        {/* White wrapper for Features + CTA */}
        <section id="features">
          <Features />
        </section>
        <CallToAction />
      </div>
      <section id="pricing" className="bg-[#111]">
        <Pricing />
      </section>
      <section>
        <CallToActionFinal />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </main>
  );
}
