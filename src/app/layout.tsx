import { ReactNode, FC } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'AutoAdvisor | Connect with expert mechanics for real-time vehicle advice and solutions',
  description:
    'AutoAdvisor is a cutting-edge web application designed to seamlessly connect car owners with professional mechanics for online consultations',
  icons: {
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" data-theme="twilight">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
