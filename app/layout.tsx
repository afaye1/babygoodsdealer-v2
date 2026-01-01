import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Baby Goods Dealer | Premium Baby Products & Essentials',
  description: 'Discover our curated collection of premium, organic baby products. From nursery essentials to strollers, car seats, and beyond. Free shipping on orders over $75.',
  keywords: 'baby products, nursery, strollers, car seats, organic baby, premium baby goods, baby essentials',
  openGraph: {
    title: 'Baby Goods Dealer | Premium Baby Products & Essentials',
    description: 'Discover our curated collection of premium, organic baby products.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Goods Dealer | Premium Baby Products',
    description: 'Discover our curated collection of premium, organic baby products.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8BA888" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal-900 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
        >
          Skip to main content
        </a>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
