'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-sage-100">
      {/* Top announcement bar */}
      <div className="bg-sage-500 text-white text-center py-2 px-4">
        <p className="text-xs font-sans tracking-wide">
          Free shipping on orders over $75 | Premium quality guaranteed
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-charcoal-700 hover:text-sage-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-script text-3xl text-sage-600">Baby</span>
            <span className="font-serif text-2xl text-charcoal-800 tracking-wide">Goods Dealer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-sans text-sm text-charcoal-600 hover:text-sage-600 transition-colors flowing-underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-charcoal-600 hover:text-sage-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/wishlist"
              className="p-2 text-charcoal-600 hover:text-blush-500 transition-colors hidden sm:block"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/account"
              className="p-2 text-charcoal-600 hover:text-sage-600 transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="/cart"
              className="relative p-2 text-charcoal-600 hover:text-sage-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-2xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-soft-lg p-6"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-4 px-6 pr-12 text-lg font-sans bg-cream-50 border border-sage-200 rounded-full focus:outline-none focus:border-sage-400 input-glow transition-all"
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-charcoal-500">Popular:</span>
                {['Organic blankets', 'Wooden toys', 'Nursery decor', 'Gift sets'].map((term) => (
                  <button
                    key={term}
                    className="text-xs text-sage-600 hover:text-sage-700 px-3 py-1 bg-sage-50 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-sage-100"
          >
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 font-sans text-charcoal-700 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-sage-100 mt-4 pt-4 px-6 space-y-3">
                <Link href="/account" className="flex items-center space-x-3 text-charcoal-600">
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </Link>
                <Link href="/wishlist" className="flex items-center space-x-3 text-charcoal-600">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
