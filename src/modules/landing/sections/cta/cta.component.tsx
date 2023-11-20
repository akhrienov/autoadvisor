import { FC } from 'react'

import Button from '@/components/button'

import StyledBackground from '../../components/styled-background'

import { ThemeColors } from '@/types'

type CtaSectionProps = {
  onActionBtnClick: () => void
}

const CtaSection: FC<CtaSectionProps> = ({ onActionBtnClick }) => {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <StyledBackground />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Your personal mechanic, just one tap away.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Say goodbye to car troubles and hello to hassle-free driving. AutoAdvisor links you directly to automotive
          experts, ready to diagnose and guide you through any issue, right from your phone. Why wait at a garage when
          you can get expert advice now?
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button themeColor={ThemeColors.PRIMARY} onClick={onActionBtnClick}>
            <span className="text-slate-50 uppercase">Learn How It Works</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
