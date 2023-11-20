import { FC } from 'react'
import Image from 'next/image'

import Button from '@/components/button'
import Badge from '@/components/badge'

import { ThemeColors } from '@/types'

import StyledBackground from '../../components/styled-background'

type HeroSectionProps = {
  onActionBtnClick: () => void
}

const HeroSection: FC<HeroSectionProps> = ({ onActionBtnClick }) => {
  return (
    <div className="relative isolate overflow-hidden">
      <StyledBackground />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="flex gap-3 items-center">
            <Image src="/images/logo.png" alt="AutoAdvisor" width={40} height={40} />
            <Badge themeColor={ThemeColors.ACCENT}>alpha</Badge>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            Get real-time assistance from top mechanics, straight from your screen.
          </h1>
          <p className="mt-6 text-lg leading-8">
            Experiencing car trouble? Don&apos;t let it disrupt your day. With AutoAdvisor, help is just a click away.
            Our platform connects you with mechanics who offer live, personalized guidance to get you back on road
            safely and swiftly.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button themeColor={ThemeColors.PRIMARY} onClick={onActionBtnClick}>
              <span className="text-slate-50 uppercase">Get early access</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/images/landing/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
