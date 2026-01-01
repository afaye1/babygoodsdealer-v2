'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BestSellers from '@/components/BestSellers'
import {
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  Truck,
  Shield,
  RefreshCw,
  ChevronRight,
  Check,
} from 'lucide-react'

// Sample product data - in real app, this would come from API/database
const product = {
  id: '1',
  name: 'Organic Cotton Swaddle Set',
  price: 48,
  originalPrice: 65,
  rating: 4.9,
  reviews: 128,
  category: 'Nursery',
  brand: 'Little Dreamers',
  sku: 'SW-ORG-001',
  description:
    'Our bestselling organic cotton swaddle set features three beautifully designed blankets made from 100% GOTS-certified organic cotton. Incredibly soft and breathable, these swaddles are gentle on your baby\'s delicate skin while providing just the right amount of stretch for a snug, secure wrap.',
  features: [
    '100% GOTS-certified organic cotton',
    'Set of 3 coordinating designs',
    'Generous 47" x 47" size',
    'Pre-washed for extra softness',
    'Breathable and lightweight',
    'Gets softer with every wash',
  ],
  sizes: ['One Size'],
  colors: [
    { name: 'Blush Garden', value: '#f3bdb5' },
    { name: 'Sage Dreams', value: '#d4dbc9' },
    { name: 'Cream Cloud', value: '#fef9f0' },
  ],
  images: [
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=80',
  ],
  specifications: {
    Material: '100% Organic Cotton',
    Size: '47" x 47" (120cm x 120cm)',
    Weight: '0.4 lbs per swaddle',
    'Care Instructions': 'Machine wash cold, tumble dry low',
    Certifications: 'GOTS, OEKO-TEX Standard 100',
    'Age Range': '0-12 months',
  },
  inStock: true,
  stockCount: 24,
}

const tabs = ['Description', 'Specifications', 'Reviews', 'Shipping']

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('Description')
  const [isWishlisted, setIsWishlisted] = useState(false)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <>
      <Header />

      <main className="pt-[120px] pb-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="py-6">
            <ol className="flex items-center space-x-2 font-sans text-sm">
              <li>
                <Link href="/" className="text-charcoal-400 hover:text-sage-600 transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-charcoal-300" />
              <li>
                <Link href="/products" className="text-charcoal-400 hover:text-sage-600 transition-colors">
                  Products
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-charcoal-300" />
              <li>
                <Link
                  href={`/products?category=${product.category.toLowerCase()}`}
                  className="text-charcoal-400 hover:text-sage-600 transition-colors"
                >
                  {product.category}
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-charcoal-300" />
              <li className="text-charcoal-700 font-medium truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cream-100 to-sage-50 shadow-soft relative">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cream-100 to-sage-50 transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-sage-500 ring-offset-2'
                        : 'hover:opacity-80'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Brand & Category */}
              <div className="flex items-center space-x-3">
                <span className="font-sans text-xs text-sage-500 uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="w-1 h-1 rounded-full bg-sage-300" />
                <span className="font-sans text-xs text-charcoal-400">{product.category}</span>
              </div>

              {/* Name */}
              <h1 className="font-serif text-3xl lg:text-4xl text-charcoal-800">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold-400 text-gold-400'
                          : 'text-charcoal-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-charcoal-600">{product.rating}</span>
                <span className="font-sans text-sm text-charcoal-400">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="font-serif text-3xl text-charcoal-800">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="font-sans text-xl text-charcoal-400 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="px-3 py-1 bg-blush-100 text-blush-600 font-sans text-sm font-medium rounded-full">
                      {Math.round(
                        ((product.originalPrice - product.price) / product.originalPrice) * 100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="font-sans text-charcoal-500 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-sm font-medium text-charcoal-700">
                    Color: {selectedColor.name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full transition-all ${
                        selectedColor.name === color.name
                          ? 'ring-2 ring-offset-2 ring-sage-500 scale-110'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 bg-white rounded-full px-4 py-2 shadow-soft">
                  <button
                    onClick={decrementQuantity}
                    className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-charcoal-500 hover:bg-sage-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-sans text-lg font-medium text-charcoal-800 w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-charcoal-500 hover:bg-sage-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="flex-1 flex items-center justify-center space-x-3 py-4 bg-sage-500 text-white font-sans font-medium rounded-full hover:bg-sage-600 transition-colors shadow-soft-lg btn-shine">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart - ${product.price * quantity}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 rounded-full shadow-soft flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? 'bg-blush-500 text-white'
                      : 'bg-white text-charcoal-500 hover:text-blush-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                {product.inStock ? (
                  <>
                    <div className="w-3 h-3 rounded-full bg-sage-500" />
                    <span className="font-sans text-sm text-sage-600">
                      In Stock ({product.stockCount} available)
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 rounded-full bg-charcoal-300" />
                    <span className="font-sans text-sm text-charcoal-500">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sage-100">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-2">
                    <Truck className="w-5 h-5 text-sage-600" />
                  </div>
                  <p className="font-sans text-xs text-charcoal-500">Free Shipping</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-sage-600" />
                  </div>
                  <p className="font-sans text-xs text-charcoal-500">Secure Checkout</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-2">
                    <RefreshCw className="w-5 h-5 text-sage-600" />
                  </div>
                  <p className="font-sans text-xs text-charcoal-500">30-Day Returns</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto space-x-1 bg-white rounded-2xl p-2 shadow-soft mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-sans text-sm transition-colors ${
                    activeTab === tab
                      ? 'bg-sage-500 text-white'
                      : 'text-charcoal-500 hover:bg-sage-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              {activeTab === 'Description' && (
                <div className="space-y-6">
                  <p className="font-sans text-charcoal-600 leading-relaxed">{product.description}</p>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal-800 mb-4">Features</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-sage-600" />
                          </div>
                          <span className="font-sans text-charcoal-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'Specifications' && (
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-sage-100 pb-4 last:border-0">
                      <span className="w-1/3 font-sans font-medium text-charcoal-700">{key}</span>
                      <span className="w-2/3 font-sans text-charcoal-500">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Reviews' && (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="font-serif text-3xl text-charcoal-800 mb-2">{product.rating} out of 5</p>
                  <p className="font-sans text-charcoal-500 mb-6">Based on {product.reviews} reviews</p>
                  <button className="px-6 py-3 bg-sage-500 text-white font-sans text-sm rounded-full hover:bg-sage-600 transition-colors">
                    Write a Review
                  </button>
                </div>
              )}

              {activeTab === 'Shipping' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-800 mb-2">Free Standard Shipping</h3>
                    <p className="font-sans text-charcoal-500">
                      Orders over $75 qualify for free standard shipping (5-7 business days).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-800 mb-2">Express Shipping</h3>
                    <p className="font-sans text-charcoal-500">
                      $12.99 for 2-3 business day delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-800 mb-2">Returns</h3>
                    <p className="font-sans text-charcoal-500">
                      We offer a 30-day return policy for unused items in original packaging.
                      Please see our Returns page for full details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-16">
            <BestSellers title="You May Also Like" />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
