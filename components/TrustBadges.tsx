'use client';

import { motion } from 'framer-motion';
import { Truck, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';

const badges = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $75',
    color: 'bg-sage-100',
    iconColor: 'text-sage-600',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Hassle-free returns',
    color: 'bg-blush-100',
    iconColor: 'text-blush-500',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    description: '100% protected payment',
    color: 'bg-gold-100',
    iconColor: 'text-gold-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Here to help always',
    color: 'bg-cream-200',
    iconColor: 'text-cream-700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function TrustBadges() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-sage-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group"
              >
                <div className={`w-14 h-14 ${badge.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${badge.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-charcoal-900 mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-charcoal-500">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
