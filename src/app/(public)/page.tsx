import HeroSection from '@/modules/landing/sections/hero'
import FeaturesSection from '@/modules/landing/sections/features'
import StatsSection from '@/modules/landing/sections/stats'
import CtaSection from '@/modules/landing/sections/cta'
import FooterSection from '@/modules/landing/sections/footer'

const LandingPage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  )
}

export default LandingPage
