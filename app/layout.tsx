import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
