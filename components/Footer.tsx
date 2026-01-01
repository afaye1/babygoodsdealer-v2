'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, CreditCard, Lock } from 'lucide-react';

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { name: 'New Arrivals', href: '/shop/new' },
      { name: 'Best Sellers', href: '/shop/bestsellers' },
      { name: 'Sale', href: '/shop/sale' },
      { name: 'Gift Cards', href: '/gift-cards' },
      { name: 'Registry', href: '/registry' },
    ],
  },
  help: {
    title: 'Help',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Sustainability', href: '/sustainability' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-xl font-serif font-semibold text-white">
                  Baby
                </span>
                <span className="text-xl font-script text-sage-300 ml-1">
                  Goods
                </span>
              </div>
            </Link>
            <p className="text-charcoal-300 mb-6 max-w-sm leading-relaxed">
              Curating premium baby essentials for families who want nothing but the best. 
              Quality, safety, and style in every product.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-serif font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-charcoal-400 hover:text-sage-300 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-charcoal-500 text-sm">
              &copy; {new Date().getFullYear()} Baby Goods Dealer. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-charcoal-500 text-sm">
                <Lock className="w-4 h-4" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-charcoal-800 rounded flex items-center justify-center">
                  <CreditCard className="w-5 h-4 text-charcoal-400" />
                </div>
                <span className="text-xs text-charcoal-500 font-medium">VISA</span>
                <span className="text-xs text-charcoal-500 font-medium">MC</span>
                <span className="text-xs text-charcoal-500 font-medium">AMEX</span>
                <span className="text-xs text-charcoal-500 font-medium">PayPal</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-charcoal-500 hover:text-sage-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-charcoal-500 hover:text-sage-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
