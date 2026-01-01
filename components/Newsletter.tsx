'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Gift, ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Handle newsletter signup
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sage-100/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush-100/30 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-4xl p-8 lg:p-16 shadow-soft-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <Gift className="w-4 h-4 text-gold-600" />
                <span className="text-sm font-sans text-gold-700">Exclusive Offer</span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-4">
                Join Our Family & Get
                <span className="block text-sage-600 mt-2">15% Off Your First Order</span>
              </h2>

              <p className="font-sans text-charcoal-500 mb-6 max-w-md">
                Subscribe to our newsletter for exclusive offers, parenting tips,
                new arrivals, and a special discount on your first purchase.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-sage-200 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-sage-600" />
                  </div>
                  <span>Exclusive discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-sage-200 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-sage-600" />
                  </div>
                  <span>Early access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-sage-200 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-sage-600" />
                  </div>
                  <span>Parenting tips</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-sage-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full py-4 pl-12 pr-4 bg-white border border-sage-200 rounded-full font-sans text-charcoal-700 placeholder:text-charcoal-400 focus:outline-none focus:border-sage-400 input-glow transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full py-4 bg-sage-500 text-white font-sans font-medium rounded-full hover:bg-sage-600 transition-colors flex items-center justify-center space-x-2 btn-shine"
                  >
                    <span>Subscribe & Get 15% Off</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-charcoal-400 text-center">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center bg-white rounded-3xl p-8 shadow-soft"
                >
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-2">
                    Welcome to the Family!
                  </h3>
                  <p className="font-sans text-charcoal-500 mb-4">
                    Check your inbox for your 15% discount code.
                  </p>
                  <p className="font-sans text-sm text-sage-600">
                    Use code: <span className="font-semibold">WELCOME15</span>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
