'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ShoppingBag, Star, Eye, Check } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

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
  inStock?: boolean
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product.colors?.[0])
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (product.inStock === false) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      color: selectedColor,
    })

    // Show added feedback
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative mb-4">
        {/* Product image */}
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-cream-100 to-sage-50 card-lift">
            {/* Product image or placeholder */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-3xl text-sage-300">{product.category}</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/10 transition-colors duration-300" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 product-badge">
                {product.badge}
              </div>
            )}

            {/* Out of stock overlay */}
            {product.inStock === false && (
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                <span className="px-4 py-2 bg-charcoal-800 text-white text-sm font-sans rounded-full">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Quick actions */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                onClick={(e) => {
                  e.preventDefault()
                  setIsWishlisted(!isWishlisted)
                }}
                className={`w-10 h-10 rounded-full shadow-soft flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'bg-blush-500 text-white'
                    : 'bg-white text-charcoal-500 hover:text-blush-500'
                }`}
                aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                aria-pressed={isWishlisted}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ delay: 0.05 }}
                className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center text-charcoal-500 hover:text-sage-600 transition-colors"
                aria-label={`Quick view ${product.name}`}
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Add to cart button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              className="absolute bottom-4 left-4 right-4"
            >
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 font-sans text-sm rounded-full transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isAdded
                    ? 'bg-sage-500 text-white'
                    : 'bg-charcoal-800 text-white hover:bg-charcoal-900'
                }`}
                disabled={product.inStock === false}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
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
          <h3 className="font-serif text-lg text-charcoal-800 mb-2 group-hover:text-sage-600 transition-colors line-clamp-2">
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
          {product.originalPrice && (
            <span className="text-xs font-sans text-blush-500 font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Color options */}
        {product.colors && (
          <div className="flex items-center space-x-2 mt-3">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 hover:scale-110 transition-all ${
                  selectedColor === color
                    ? 'border-sage-500 ring-2 ring-sage-200'
                    : 'border-sage-200'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
