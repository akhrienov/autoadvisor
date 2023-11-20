'use client'
import { useRouter } from 'next/navigation'

import HeroSection from '@/modules/landing/sections/hero'
import FeaturesSection from '@/modules/landing/sections/features'
import CtaSection from '@/modules/landing/sections/cta'
import FooterSection from '@/modules/landing/sections/footer'

const LandingPage = () => {
  const router = useRouter()

  const handleActionBtnClick = () => {
    router.push('/auth')
  }

  return (
    <>
      <main>
        <HeroSection onActionBtnClick={handleActionBtnClick} />
        <FeaturesSection />
        <CtaSection onActionBtnClick={handleActionBtnClick} />
      </main>
      <FooterSection />
    </>
  )
}

export default LandingPage
