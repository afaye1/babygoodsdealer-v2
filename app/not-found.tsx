'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ShoppingBag, Search, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-8 opacity-10"
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-sage-400" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-16 opacity-5"
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-blush-400" />
                </motion.div>

                {/* Main 404 display */}
                <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-sage-100 to-cream-100 rounded-full flex items-center justify-center">
                  <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  >
                    <span className="font-serif text-7xl text-sage-400">404</span>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blush-100 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-2xl">🧸</span>
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-2 -left-6 w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center"
                >
                  <span className="text-xl">🍼</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-charcoal-500 mb-8 max-w-md mx-auto">
                Looks like this little one wandered off! The page you're looking for
                doesn't exist or has been moved to a new home.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Browse Shop
              </Link>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-sage-100 pt-8"
            >
              <p className="text-sm text-charcoal-400 mb-4">Popular destinations:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'New Arrivals', href: '/products?filter=new' },
                  { name: 'Best Sellers', href: '/products?filter=bestseller' },
                  { name: 'Categories', href: '/categories' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 bg-cream-100 text-charcoal-600 rounded-full text-sm hover:bg-sage-100 hover:text-sage-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Search suggestion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Or search our products</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
