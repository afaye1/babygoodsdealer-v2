'use client'

import { Header, Hero, TrustBadges, CategoryGrid, BestSellers, Testimonials, Newsletter, Footer } from '@/components'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <TrustBadges />
      <CategoryGrid />
      <BestSellers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
