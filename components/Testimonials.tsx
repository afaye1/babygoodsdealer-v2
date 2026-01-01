'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Mom of 2',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Baby Goods Dealer has become my go-to for everything baby related. The quality is exceptional and the customer service is outstanding. My little ones deserve the best, and I always find it here.',
    childAge: 'Emma, 8 months',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'First-time Dad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'As a first-time dad, I was overwhelmed with choices. The curated selection here made it so easy to find premium, safe products. The stroller we bought is absolutely perfect!',
    childAge: 'Noah, 4 months',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Mom of 3',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'After three kids, I know quality when I see it. This store offers the best baby products. The organic cotton clothing is so soft and the nursery furniture is beautifully crafted.',
    childAge: 'Sophia, 1 year',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Dad of Twins',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Shopping for twins can be stressful, but the team here made it a breeze. Free shipping and easy returns gave us peace of mind. We are customers for life!',
    childAge: 'Lily & Jack, 6 months',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 rounded-full text-sm font-medium mb-4">
            Happy Families
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal-900 mb-4">
            What Parents <span className="font-script text-sage-400">Say</span>
          </h2>
          <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
            Join thousands of happy families who trust us with their precious ones.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote decoration */}
          <div className="absolute -top-8 -left-4 sm:-left-12 opacity-10">
            <Quote className="w-24 h-24 text-sage-400" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-4xl shadow-soft-lg p-8 sm:p-12"
            >
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-center text-lg sm:text-xl text-charcoal-700 leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-sage-100"
                />
                <h4 className="font-serif font-semibold text-charcoal-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-charcoal-500">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs text-sage-500 mt-1">
                  Parent of {testimonials[currentIndex].childAge}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-sage-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal-600" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-sage-400'
                      : 'bg-charcoal-200 hover:bg-charcoal-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-sage-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-charcoal-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
