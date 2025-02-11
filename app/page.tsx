import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  )
}
