import { FC, ReactNode } from 'react'

import GlobalLoader from '@/components/ui/loaders/global-loader'

import Navbar from '@/app/(marketing)/_components/navbar'
import Footer from '@/app/(marketing)/_components/footer'

type MarketingLayoutProps = {
  children: ReactNode
}

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex h-full flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
      <GlobalLoader initTime={500} />
    </>
  )
}

export default MarketingLayout
