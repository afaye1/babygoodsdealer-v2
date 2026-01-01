'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Mother of twins',
    avatar: '/images/testimonials/sarah.jpg',
    rating: 5,
    text: "Baby Goods Dealer has been a lifesaver for our family. The organic cotton swaddles are incredibly soft, and knowing they're safe for my babies gives me peace of mind. The quality is unmatched!",
    product: 'Organic Cotton Swaddle Set',
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'First-time mom',
    avatar: '/images/testimonials/emily.jpg',
    rating: 5,
    text: "I spent months researching the safest products for my nursery, and Baby Goods Dealer exceeded every expectation. Their customer service is as beautiful as their products. Highly recommend!",
    product: 'Complete Nursery Collection',
  },
  {
    id: 3,
    name: 'Jessica Thompson',
    role: 'Mom of three',
    avatar: '/images/testimonials/jessica.jpg',
    rating: 5,
    text: "After three kids, I've tried countless baby brands. Nothing compares to the quality here. The wooden toys are gorgeous and built to last. They've become family heirlooms already!",
    product: 'Wooden Stacking Rainbow',
  },
  {
    id: 4,
    name: 'Amanda Rodriguez',
    role: 'Expecting mother',
    avatar: '/images/testimonials/amanda.jpg',
    rating: 5,
    text: "The gift registry feature made baby shower planning so easy! Everyone complimented the beautiful packaging, and I love that everything is eco-friendly. Perfect for conscious parents.",
    product: 'Baby Shower Gift Set',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-blush-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-sage-500 block mb-2">What Parents Say</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-800 mb-4">
            Stories of Love
          </h2>
          <div className="decorative-line mx-auto" />
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote mark decoration */}
          <div className="absolute -top-8 left-0 lg:-left-12 opacity-20">
            <Quote className="w-24 h-24 text-sage-400" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-soft-xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
                {/* Author info */}
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-sage-200 to-blush-200 flex items-center justify-center mb-4">
                    <span className="font-script text-3xl text-sage-600">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-charcoal-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-sans text-sm text-charcoal-500 mb-3">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <div>
                  <blockquote className="font-sans text-lg lg:text-xl text-charcoal-600 leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="inline-flex items-center space-x-2 bg-sage-50 px-4 py-2 rounded-full">
                    <span className="text-xs font-sans text-charcoal-500">Purchased:</span>
                    <span className="text-xs font-sans text-sage-600 font-medium">
                      {testimonials[currentIndex].product}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-charcoal-500 hover:text-sage-600 hover:shadow-soft-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-sage-500'
                      : 'bg-sage-200 hover:bg-sage-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-charcoal-500 hover:text-sage-600 hover:shadow-soft-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-sage-200"
        >
          {[
            { value: '10,000+', label: 'Happy Families' },
            { value: '4.9', label: 'Average Rating' },
            { value: '500+', label: 'Products' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-sage-600 mb-2">{stat.value}</p>
              <p className="font-sans text-sm text-charcoal-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
