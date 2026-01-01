'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ShoppingBag, Star, ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  badge?: string
  colors?: string[]
}

const products: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton Swaddle Set',
    price: 48,
    originalPrice: 65,
    rating: 4.9,
    reviews: 128,
    image: '/images/products/swaddle.jpg',
    category: 'Nursery',
    badge: 'Best Seller',
    colors: ['#f3bdb5', '#d4dbc9', '#fef9f0'],
  },
  {
    id: '2',
    name: 'Wooden Stacking Rainbow',
    price: 35,
    rating: 4.8,
    reviews: 94,
    image: '/images/products/rainbow.jpg',
    category: 'Toys',
    colors: ['#f2d68f', '#b5c2a4', '#ea9488'],
  },
  {
    id: '3',
    name: 'Bamboo Feeding Set',
    price: 42,
    rating: 4.7,
    reviews: 76,
    image: '/images/products/feeding.jpg',
    category: 'Feeding',
    badge: 'New',
    colors: ['#d4dbc9', '#fef9f0'],
  },
  {
    id: '4',
    name: 'Linen Crib Sheet',
    price: 58,
    rating: 4.9,
    reviews: 112,
    image: '/images/products/crib-sheet.jpg',
    category: 'Nursery',
    colors: ['#f3bdb5', '#d4dbc9', '#f5d9ae'],
  },
]

interface BestSellersProps {
  title?: string
}

export default function BestSellers({ title = 'Our Bestsellers' }: BestSellersProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="font-script text-2xl text-sage-500 block mb-2">Customer Favorites</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-800 mb-4">{title}</h2>
            <div className="decorative-line" />
          </div>
          <Link
            href="/products?sort=bestsellers"
            className="group inline-flex items-center text-sage-600 font-sans text-sm mt-6 md:mt-0 hover:text-sage-700 transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group"
            >
              <div className="relative mb-4">
                {/* Product image */}
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-cream-100 to-sage-50 card-lift">
                    {/* Placeholder gradient */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-script text-3xl text-sage-300">{product.category}</span>
                    </div>

                    {/* Quick actions overlay */}
                    <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/10 transition-colors duration-300" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 product-badge">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick actions */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredProduct === product.id ? 1 : 0,
                          scale: hoveredProduct === product.id ? 1 : 0.8,
                        }}
                        transition={{ delay: 0 }}
                        className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center text-charcoal-500 hover:text-blush-500 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Add to cart button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        y: hoveredProduct === product.id ? 0 : 20,
                      }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <button className="w-full py-3 bg-charcoal-800 text-white font-sans text-sm rounded-full hover:bg-charcoal-900 transition-colors flex items-center justify-center space-x-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </motion.div>
                  </div>
                </Link>
              </div>

              {/* Product info */}
              <div>
                <p className="font-sans text-xs text-sage-500 uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-serif text-lg text-charcoal-800 mb-2 group-hover:text-sage-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                  <span className="font-sans text-sm text-charcoal-600">{product.rating}</span>
                  <span className="font-sans text-xs text-charcoal-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="font-sans font-semibold text-charcoal-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-sans text-sm text-charcoal-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Color options */}
                {product.colors && (
                  <div className="flex items-center space-x-2 mt-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        className="w-5 h-5 rounded-full border border-sage-200 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
