'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'New Arrivals', href: '/products?sort=newest' },
    { name: 'Best Sellers', href: '/products?sort=bestsellers' },
    { name: 'Gift Sets', href: '/products?category=gifts' },
    { name: 'Sale', href: '/sale' },
  ],
  categories: [
    { name: 'Nursery', href: '/products?category=nursery' },
    { name: 'Feeding', href: '/products?category=feeding' },
    { name: 'Clothing', href: '/products?category=clothing' },
    { name: 'Toys', href: '/products?category=toys' },
    { name: 'Travel', href: '/products?category=travel' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-sage-50">
      {/* Decorative wave */}
      <div className="footer-wave" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-script text-3xl text-sage-600">Baby</span>
              <span className="font-serif text-2xl text-charcoal-800 ml-1">Goods Dealer</span>
            </Link>
            <p className="font-sans text-sm text-charcoal-500 mb-6 max-w-xs">
              Curating the finest essentials for your little ones since 2020.
              Quality, safety, and love in every product.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@babygoodsdealer.com"
                className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-800 mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories links */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-800 mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-800 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="font-serif text-lg text-charcoal-800 mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-sage-200 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-charcoal-500">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-sage-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:hello@babygoodsdealer.com" className="flex items-center space-x-2 hover:text-sage-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@babygoodsdealer.com</span>
            </a>
            <span className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sage-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-xs text-charcoal-400">
              &copy; {new Date().getFullYear()} Baby Goods Dealer. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img src="/images/payment/visa.svg" alt="Visa" className="h-6 opacity-60" />
              <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-6 opacity-60" />
              <img src="/images/payment/amex.svg" alt="Amex" className="h-6 opacity-60" />
              <img src="/images/payment/paypal.svg" alt="PayPal" className="h-6 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
