import '@/styles/app.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import Providers from '@/components/providers'
import { siteConfig } from '@/config/site'

const font = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="theme-color" href="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
