'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { ArrowRight, Sparkles, TrendingUp, Gift, Clock } from 'lucide-react'

// Featured collections
const collections = [
  {
    id: 'new',
    title: 'New Arrivals',
    description: 'Fresh finds for your little one',
    icon: Sparkles,
    color: 'from-sage-400 to-sage-500',
    bgColor: 'bg-sage-50',
    href: '/products?filter=new',
  },
  {
    id: 'bestsellers',
    title: 'Best Sellers',
    description: 'Parent favorites',
    icon: TrendingUp,
    color: 'from-blush-400 to-blush-500',
    bgColor: 'bg-blush-50',
    href: '/products?filter=bestseller',
  },
  {
    id: 'gifts',
    title: 'Gift Sets',
    description: 'Perfect for baby showers',
    icon: Gift,
    color: 'from-gold-400 to-gold-500',
    bgColor: 'bg-gold-50',
    href: '/products?filter=gifts',
  },
  {
    id: 'sale',
    title: 'Limited Time',
    description: 'Special offers',
    icon: Clock,
    color: 'from-charcoal-600 to-charcoal-800',
    bgColor: 'bg-cream-100',
    href: '/products?filter=sale',
  },
]

// Featured products
const featuredProducts = [
  { id: '1', name: 'Organic Cotton Swaddle Set', price: 48, originalPrice: 65, rating: 4.9, reviews: 128, image: '', category: 'Nursery', badge: 'Best Seller', colors: ['#f3bdb5', '#d4dbc9', '#fef9f0'] },
  { id: '2', name: 'Wooden Stacking Rainbow', price: 35, rating: 4.8, reviews: 94, image: '', category: 'Toys', colors: ['#f2d68f', '#b5c2a4', '#ea9488'] },
  { id: '3', name: 'Bamboo Feeding Set', price: 42, rating: 4.7, reviews: 76, image: '', category: 'Feeding', badge: 'New', colors: ['#d4dbc9', '#fef9f0'] },
  { id: '4', name: 'Linen Crib Sheet', price: 58, rating: 4.9, reviews: 112, image: '', category: 'Nursery', colors: ['#f3bdb5', '#d4dbc9', '#f5d9ae'] },
]

// Category quick links
const categories = [
  { name: 'Nursery', count: 124, image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&auto=format&fit=crop&q=80' },
  { name: 'Strollers', count: 48, image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&auto=format&fit=crop&q=80' },
  { name: 'Clothing', count: 256, image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&auto=format&fit=crop&q=80' },
  { name: 'Toys', count: 189, image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=80' },
  { name: 'Feeding', count: 98, image: 'https://images.unsplash.com/photo-1584839400972-24e0f9c3de94?w=400&auto=format&fit=crop&q=80' },
  { name: 'Car Seats', count: 36, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=80' },
]

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="pt-[120px] bg-cream-50 min-h-screen">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sage-100 via-cream-100 to-blush-100">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blush-200 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 bg-white/70 backdrop-blur-sm text-sage-700 rounded-full text-sm font-medium mb-6">
                Premium Baby Essentials
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 mb-6 leading-tight">
                Shop the Best for Your
                <span className="block font-script text-sage-500 mt-2">Little One</span>
              </h1>
              <p className="text-lg text-charcoal-600 mb-8 max-w-xl mx-auto">
                Curated collections of premium baby products, handpicked for quality, safety, and style.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-all hover:scale-105"
                >
                  Browse All Products
                </Link>
                <Link
                  href="/categories"
                  className="px-8 py-4 bg-white text-charcoal-800 rounded-full font-medium hover:bg-sage-50 transition-all border border-charcoal-200"
                >
                  Shop by Category
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Collections */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {collections.map((collection, index) => {
                const Icon = collection.icon
                return (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={collection.href}
                      className={`group block ${collection.bgColor} rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${collection.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-serif text-lg text-charcoal-900 mb-1 group-hover:text-sage-600 transition-colors">
                        {collection.title}
                      </h3>
                      <p className="text-sm text-charcoal-500">{collection.description}</p>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Category Quick Links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl text-charcoal-900">
                  Shop by Category
                </h2>
              </div>
              <Link
                href="/categories"
                className="flex items-center gap-2 text-sage-600 font-medium hover:text-sage-700 transition-colors"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="group block"
                  >
                    <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden mb-3 relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                    </div>
                    <h3 className="font-medium text-charcoal-800 text-center text-sm lg:text-base">
                      {category.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 text-center">{category.count} items</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-10"
            >
              <div>
                <span className="font-script text-xl text-sage-500 block mb-2">Curated for You</span>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-900">
                  Featured Products
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white rounded-full text-charcoal-700 font-medium hover:bg-sage-50 transition-colors shadow-soft"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-900 text-white rounded-full font-medium"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sage-500 to-sage-600 p-8 lg:p-12"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full" />
                <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white rounded-full" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                    Free Shipping on Orders $75+
                  </h3>
                  <p className="text-sage-100">
                    Plus easy 30-day returns on all orders
                  </p>
                </div>
                <Link
                  href="/products"
                  className="px-8 py-4 bg-white text-sage-700 rounded-full font-medium hover:bg-cream-50 transition-colors flex-shrink-0"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
