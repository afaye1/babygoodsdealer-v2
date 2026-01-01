'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Shop', href: '/shop', hasDropdown: true },
  { name: 'Categories', href: '/categories', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">B</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-serif font-semibold text-charcoal-900">
                  Baby
                </span>
                <span className="text-xl font-script text-sage-400 ml-1">
                  Goods
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-1 text-charcoal-700 hover:text-sage-600 transition-colors font-medium"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search */}
              <button className="p-2 hover:bg-sage-50 rounded-full transition-colors group">
                <Search className="w-5 h-5 text-charcoal-600 group-hover:text-sage-600 transition-colors" />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative p-2 hover:bg-blush-50 rounded-full transition-colors group">
                <Heart className="w-5 h-5 text-charcoal-600 group-hover:text-blush-500 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blush-400 text-white text-2xs font-medium rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 hover:bg-sage-50 rounded-full transition-colors group">
                <ShoppingBag className="w-5 h-5 text-charcoal-600 group-hover:text-sage-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-sage-500 text-white text-2xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-sage-50 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-charcoal-700" />
                ) : (
                  <Menu className="w-6 h-6 text-charcoal-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal-900/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-soft-xl"
            >
              <div className="pt-24 px-6">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 text-lg font-medium text-charcoal-800 hover:text-sage-600 transition-colors border-b border-sage-100"
                      >
                        {link.name}
                        {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-sage-100">
                  <Link
                    href="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 bg-charcoal-900 text-white text-center rounded-full font-medium hover:bg-charcoal-800 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
