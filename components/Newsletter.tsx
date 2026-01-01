'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Gift, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-sage-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sage-200/50 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cream-200/50 rounded-full blur-2xl" />
        <svg
          className="absolute bottom-0 right-0 w-64 h-64 text-sage-200/30"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M42.7,-62.9C53.9,-54.7,60.3,-40.6,65.2,-26.1C70.1,-11.6,73.5,3.3,71.1,17.5C68.7,31.7,60.5,45.2,48.8,54.8C37.1,64.4,21.8,70.2,5.5,72.4C-10.8,74.6,-28.1,73.2,-42.3,65.6C-56.5,58,-67.6,44.2,-73.4,28.4C-79.2,12.6,-79.7,-5.2,-74.5,-21.2C-69.3,-37.2,-58.4,-51.4,-44.7,-58.9C-31,-66.4,-14.5,-67.2,0.7,-68.1C15.9,-69,31.5,-71.1,42.7,-62.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gift Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gold-200 rounded-2xl mb-6"
          >
            <Gift className="w-8 h-8 text-gold-600" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal-900 mb-4"
          >
            Join Our <span className="font-script text-sage-600">Family</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal-600 mb-8 max-w-xl mx-auto"
          >
            Subscribe for exclusive offers, parenting tips, and 10% off your first order.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                className="w-full px-6 py-4 bg-white rounded-full text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-400 shadow-soft transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                isSubmitted
                  ? 'bg-sage-500 text-white'
                  : 'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-soft hover:shadow-soft-lg'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>

          {/* Privacy note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-charcoal-500 mt-4"
          >
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
