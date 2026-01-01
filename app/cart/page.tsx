'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Sparkles, ArrowRight, Tag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    savings,
  } = useCart()

  const freeShippingThreshold = 75
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  const shipping = subtotal >= freeShippingThreshold ? 0 : 8.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-charcoal-600 hover:text-sage-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Continue Shopping</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-serif text-3xl text-charcoal-900">
                  Shopping Cart
                </h1>
                <span className="text-charcoal-500">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </span>
              </div>

              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 bg-white rounded-3xl shadow-soft"
                >
                  <div className="w-24 h-24 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-12 h-12 text-sage-300" />
                  </div>
                  <h2 className="font-serif text-2xl text-charcoal-800 mb-3">
                    Your cart is empty
                  </h2>
                  <p className="text-charcoal-500 mb-8 max-w-md mx-auto">
                    Looks like you haven't added anything to your cart yet.
                    Explore our collection and find something special for your little one.
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
                  >
                    Start Shopping
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ) : (
                <>
                  {/* Free Shipping Progress */}
                  <div className="mb-6 p-4 bg-sage-50 rounded-2xl">
                    {remainingForFreeShipping > 0 ? (
                      <>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-charcoal-600">
                            Add <span className="font-semibold text-sage-700">${remainingForFreeShipping.toFixed(2)}</span> more for free shipping!
                          </span>
                          <Sparkles className="w-4 h-4 text-gold-500" />
                        </div>
                        <div className="h-2 bg-sage-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${freeShippingProgress}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-sage-400 to-sage-500 rounded-full"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-sage-700">
                        <Sparkles className="w-5 h-5 text-gold-500" />
                        <span className="font-medium">You qualify for free shipping!</span>
                      </div>
                    )}
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={`${item.id}-${item.color || 'default'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-6 p-6 bg-white rounded-2xl shadow-soft"
                      >
                        {/* Product Image */}
                        <Link href={`/products/${item.id}`} className="flex-shrink-0">
                          <div className="w-28 h-28 rounded-xl overflow-hidden bg-cream-50">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-sage-500 uppercase tracking-wider mb-1">
                            {item.category}
                          </p>
                          <Link href={`/products/${item.id}`}>
                            <h3 className="font-serif text-lg text-charcoal-800 hover:text-sage-600 transition-colors mb-2 line-clamp-2">
                              {item.name}
                            </h3>
                          </Link>
                          {item.color && (
                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className="w-4 h-4 rounded-full border border-sage-200"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-sm text-charcoal-500">Color selected</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-charcoal-800">${item.price}</span>
                            {item.originalPrice && (
                              <>
                                <span className="text-sm text-charcoal-400 line-through">
                                  ${item.originalPrice}
                                </span>
                                <span className="text-xs text-blush-500 font-medium px-2 py-0.5 bg-blush-50 rounded-full">
                                  Save ${(item.originalPrice - item.price).toFixed(2)}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-charcoal-400 hover:text-blush-500 transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center bg-sage-50 rounded-full text-charcoal-600 hover:bg-sage-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center font-medium text-charcoal-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center bg-sage-50 rounded-full text-charcoal-600 hover:bg-sage-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-serif text-lg text-charcoal-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Clear Cart */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={clearCart}
                      className="text-sm text-charcoal-500 hover:text-blush-500 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Order Summary */}
            {items.length > 0 && (
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-28 bg-white rounded-3xl shadow-soft p-8"
                >
                  <h2 className="font-serif text-xl text-charcoal-900 mb-6">
                    Order Summary
                  </h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm text-charcoal-600 mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                      />
                      <button className="px-4 py-3 bg-sage-100 text-sage-700 rounded-xl font-medium hover:bg-sage-200 transition-colors">
                        <Tag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-sage-100 pt-6">
                    <div className="flex justify-between text-charcoal-600">
                      <span>Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between text-blush-600">
                        <span>Savings</span>
                        <span className="font-medium">-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-charcoal-600">
                      <span>Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-sage-600">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-charcoal-600">
                      <span>Estimated Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-sage-100 pt-4 flex justify-between">
                      <span className="font-serif text-lg text-charcoal-900">Total</span>
                      <span className="font-serif text-2xl text-charcoal-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full mt-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-xs text-charcoal-400 text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-sage-100 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-xs text-charcoal-500">Secure</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <span className="text-xs text-charcoal-500">Easy Returns</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <span className="text-xs text-charcoal-500">Free Shipping</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
