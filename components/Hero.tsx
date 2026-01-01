'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white">
      {/* Organic Blob Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large sage blob - top right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-sage-200/40 rounded-full blur-3xl animate-float"
        />

        {/* Blush blob - left center */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-blush-200/30 rounded-full blur-3xl animate-float-delayed"
        />

        {/* Small gold blob - bottom right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
          className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-gold-200/30 rounded-full blur-3xl animate-float"
        />

        {/* Decorative organic shape SVG */}
        <svg
          className="absolute top-1/4 right-10 w-64 h-64 text-sage-200/20 animate-float-delayed"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M42.7,-62.9C53.9,-54.7,60.3,-40.6,65.2,-26.1C70.1,-11.6,73.5,3.3,71.1,17.5C68.7,31.7,60.5,45.2,48.8,54.8C37.1,64.4,21.8,70.2,5.5,72.4C-10.8,74.6,-28.1,73.2,-42.3,65.6C-56.5,58,-67.6,44.2,-73.4,28.4C-79.2,12.6,-79.7,-5.2,-74.5,-21.2C-69.3,-37.2,-58.4,-51.4,-44.7,-58.9C-31,-66.4,-14.5,-67.2,0.7,-68.1C15.9,-69,31.5,-71.1,42.7,-62.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/80 backdrop-blur-sm rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-sage-700">Premium Quality Since 2020</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-charcoal-900 leading-[1.1] mb-6"
            >
              Where{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Love</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-blush-200/60 -z-0 origin-left"
                />
              </span>{' '}
              Meets{' '}
              <span className="font-script text-sage-400 text-[1.1em]">Luxury</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-charcoal-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Curated collection of premium baby essentials crafted with care, designed for comfort,
              and made to celebrate every precious moment of your little one&apos;s journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-all shadow-soft hover:shadow-soft-lg"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-charcoal-700 border-2 border-charcoal-200 rounded-full font-medium hover:border-sage-400 hover:text-sage-600 transition-all"
              >
                View Collections
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-sage-100"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-900">5000+</p>
                <p className="text-sm text-charcoal-500 mt-1">Happy Families</p>
              </div>
              <div className="w-px h-12 bg-sage-200" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-900">500+</p>
                <p className="text-sm text-charcoal-500 mt-1">Premium Products</p>
              </div>
              <div className="w-px h-12 bg-sage-200" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-900">4.9</p>
                <p className="text-sm text-charcoal-500 mt-1">Star Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main image container with organic shape */}
            <div className="relative">
              {/* Organic blob background */}
              <div className="absolute inset-0 bg-sage-200/50 rounded-[60%_40%_50%_50%/50%_50%_50%_50%] transform rotate-6 scale-105" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[50%_50%_40%_60%/60%_40%_60%_40%] aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80"
                  alt="Happy baby with premium toys"
                  className="w-full h-full object-cover"
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 to-transparent" />
              </div>

              {/* Floating product cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-soft-lg p-4 max-w-48"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blush-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">&#x1F476;</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-900">Organic Cotton</p>
                    <p className="text-xs text-charcoal-500">100% Safe Materials</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-soft-lg p-4 max-w-48"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">&#x1F33F;</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-900">Eco-Friendly</p>
                    <p className="text-xs text-charcoal-500">Sustainable Choice</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
