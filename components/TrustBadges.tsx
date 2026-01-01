'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, Leaf, RefreshCw, Award, Heart } from 'lucide-react'

const badges = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $75',
    color: 'sage',
  },
  {
    icon: Shield,
    title: 'Safe & Tested',
    description: 'CPSC certified products',
    color: 'blush',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Natural materials only',
    color: 'sage',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
    color: 'gold',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked essentials',
    color: 'blush',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'By parents, for parents',
    color: 'sage',
  },
]

const colorClasses = {
  sage: {
    bg: 'bg-sage-100',
    icon: 'text-sage-600',
    hover: 'group-hover:bg-sage-200',
  },
  blush: {
    bg: 'bg-blush-100',
    icon: 'text-blush-500',
    hover: 'group-hover:bg-blush-200',
  },
  gold: {
    bg: 'bg-gold-100',
    icon: 'text-gold-600',
    hover: 'group-hover:bg-gold-200',
  },
}

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            const colors = colorClasses[badge.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`trust-icon w-16 h-16 mx-auto mb-4 ${colors.bg} ${colors.hover} transition-colors`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="font-serif text-sm text-charcoal-800 mb-1">{badge.title}</h3>
                <p className="font-sans text-xs text-charcoal-400">{badge.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
