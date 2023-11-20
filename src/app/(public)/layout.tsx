'use client'
import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'

import ThemeSwitcher from '@/components/theme-switcher'
import GlobalLoader from '@/components/global-loader'

import { selectGlobalLoaderActive } from '@/redux/common/common.selector'

type PublicLayoutProps = {
  children: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const globalLoaderActive = useSelector(selectGlobalLoaderActive)

  return (
    <>
      <div className={`${globalLoaderActive ? 'hidden' : ''}`}>
        <div>
          <ThemeSwitcher />
        </div>
        {children}
      </div>
      <GlobalLoader />
    </>
  )
}

export default PublicLayout
