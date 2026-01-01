'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowUpRight, Star } from 'lucide-react'

// All categories with details
const categories = [
  {
    id: 1,
    name: 'Nursery',
    slug: 'nursery',
    description: 'Create a dreamy sanctuary for your little one with our premium nursery essentials.',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80',
    productCount: 124,
    color: 'bg-sage-100',
    featured: ['Cribs', 'Bedding', 'Decor', 'Storage'],
  },
  {
    id: 2,
    name: 'Strollers & Travel',
    slug: 'strollers',
    description: 'Adventures await with our selection of top-rated strollers and travel gear.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&auto=format&fit=crop&q=80',
    productCount: 48,
    color: 'bg-blush-100',
    featured: ['Strollers', 'Carriers', 'Travel Cribs', 'Accessories'],
  },
  {
    id: 3,
    name: 'Car Seats',
    slug: 'car-seats',
    description: 'Safety meets comfort with our rigorously tested car seat collection.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    productCount: 36,
    color: 'bg-cream-200',
    featured: ['Infant Seats', 'Convertible', 'Booster', 'Accessories'],
  },
  {
    id: 4,
    name: 'Clothing',
    slug: 'clothing',
    description: 'Adorable and comfortable clothing made from the softest organic materials.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=80',
    productCount: 256,
    color: 'bg-gold-100',
    featured: ['Bodysuits', 'Sleepwear', 'Outfits', 'Accessories'],
  },
  {
    id: 5,
    name: 'Toys & Play',
    slug: 'toys',
    description: 'Encourage learning and development through thoughtfully designed play.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80',
    productCount: 189,
    color: 'bg-blush-100',
    featured: ['Wooden Toys', 'Activity Gyms', 'Rattles', 'Books'],
  },
  {
    id: 6,
    name: 'Feeding',
    slug: 'feeding',
    description: 'Mealtime essentials designed for happy babies and stress-free parents.',
    image: 'https://images.unsplash.com/photo-1584839400972-24e0f9c3de94?w=800&auto=format&fit=crop&q=80',
    productCount: 98,
    color: 'bg-sage-100',
    featured: ['Bottles', 'High Chairs', 'Tableware', 'Storage'],
  },
  {
    id: 7,
    name: 'Bath & Care',
    slug: 'bath-care',
    description: 'Gentle skincare and bath time essentials for delicate baby skin.',
    image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&auto=format&fit=crop&q=80',
    productCount: 72,
    color: 'bg-cream-200',
    featured: ['Bath Tubs', 'Skincare', 'Towels', 'Grooming'],
  },
  {
    id: 8,
    name: 'Gifts & Registry',
    slug: 'gifts',
    description: 'Perfect presents for baby showers, birthdays, and special moments.',
    image: 'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?w=800&auto=format&fit=crop&q=80',
    productCount: 84,
    color: 'bg-gold-100',
    featured: ['Gift Sets', 'Milestone Cards', 'Keepsakes', 'Gift Cards'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function CategoriesPage() {
  return (
    <>
      <Header />

      <main className="pt-[120px] pb-20 bg-cream-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 lg:py-16"
          >
            <span className="font-script text-2xl text-sage-500 block mb-2">Explore</span>
            <h1 className="font-serif text-4xl lg:text-5xl text-charcoal-800 mb-4">
              Shop by Category
            </h1>
            <div className="decorative-line mx-auto mb-6" />
            <p className="font-sans text-charcoal-500 max-w-2xl mx-auto text-lg">
              Discover our thoughtfully curated collections, organized to help you find
              exactly what you need for your growing family.
            </p>
          </motion.div>

          {/* Featured Category (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Link
              href={`/categories/${categories[0].slug}`}
              className="group block relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-soft-xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={categories[0].image}
                    alt={categories[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center absolute lg:relative inset-0 lg:inset-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                    <span className="text-sm font-medium text-gold-600 lg:text-sage-600">Featured Collection</span>
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl text-white lg:text-charcoal-900 mb-4">
                    {categories[0].name}
                  </h2>
                  <p className="text-white/90 lg:text-charcoal-600 mb-6 max-w-md">
                    {categories[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories[0].featured.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/20 lg:bg-sage-50 rounded-full text-sm text-white lg:text-sage-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-6 py-3 bg-white lg:bg-charcoal-900 text-charcoal-900 lg:text-white rounded-full font-medium group-hover:bg-sage-500 group-hover:text-white transition-colors">
                      Explore {categories[0].productCount} Products
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-white lg:text-charcoal-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Category Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {categories.slice(1).map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="group block relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-500 h-full"
                >
                  {/* Background color accent */}
                  <div className={`absolute inset-0 ${category.color} opacity-40`} />

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent" />

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-charcoal-900" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm text-white/80 font-medium">{category.productCount} items</span>
                      <h3 className="font-serif text-2xl text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Featured tags */}
                  <div className="relative p-4 bg-white/80 backdrop-blur-sm">
                    <div className="flex flex-wrap gap-2">
                      {category.featured.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-sage-50 rounded-full text-xs text-sage-700"
                        >
                          {item}
                        </span>
                      ))}
                      {category.featured.length > 3 && (
                        <span className="px-2 py-1 text-xs text-charcoal-500">
                          +{category.featured.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Browse All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-charcoal-500 mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors"
            >
              Browse All Products
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
