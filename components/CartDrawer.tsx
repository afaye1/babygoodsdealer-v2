'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Sparkles } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
    savings,
  } = useCart()

  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Focus trap for accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeCart()
      return
    }

    if (e.key === 'Tab' && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }
  }, [closeCart])

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      // Focus the close button when drawer opens
      setTimeout(() => closeButtonRef.current?.focus(), 100)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      // Return focus to previous element when drawer closes
      if (previousActiveElement.current && !isOpen) {
        previousActiveElement.current.focus()
      }
    }
  }, [isOpen, handleKeyDown])

  // Close on click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart()
    }
  }

  const freeShippingThreshold = 75
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-sage-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h2 id="cart-drawer-title" className="font-serif text-xl text-charcoal-900">Your Cart</h2>
                  <p className="text-sm text-charcoal-500">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-charcoal-500 hover:bg-sage-100 hover:text-charcoal-700 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {items.length > 0 && (
              <div className="px-6 py-4 bg-sage-50/50">
                {remainingForFreeShipping > 0 ? (
                  <>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-charcoal-600">
                        Add <span className="font-semibold text-sage-700">${remainingForFreeShipping.toFixed(2)}</span> for free shipping
                      </span>
                      <Sparkles className="w-4 h-4 text-gold-500" />
                    </div>
                    <div className="h-2 bg-sage-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${freeShippingProgress}%` }}
                        className="h-full bg-gradient-to-r from-sage-400 to-sage-500 rounded-full"
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-sage-700">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span className="font-medium">You qualify for free shipping!</span>
                  </div>
                )}
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 py-12">
                  <div className="w-24 h-24 bg-cream-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-sage-300" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-2">Your cart is empty</h3>
                  <p className="text-charcoal-500 text-center mb-6">
                    Looks like you haven't added any items yet. Start shopping to fill it up!
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.color || 'default'}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-cream-50 rounded-2xl p-4"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-sage-500 uppercase tracking-wider mb-1">
                          {item.category}
                        </p>
                        <h4 className="font-serif text-charcoal-800 text-sm leading-tight mb-1 line-clamp-2">
                          {item.name}
                        </h4>
                        {item.color && (
                          <div className="flex items-center gap-1 mb-2">
                            <div
                              className="w-3 h-3 rounded-full border border-sage-200"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-charcoal-400">Selected color</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-charcoal-800">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs text-charcoal-400 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-charcoal-400 hover:text-blush-500 transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-1 bg-white rounded-full border border-sage-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal-500 hover:text-sage-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-charcoal-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal-500 hover:text-sage-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-sage-100 p-6 bg-white">
                {/* Savings */}
                {savings > 0 && (
                  <div className="flex items-center justify-between text-sm mb-3 px-2 py-2 bg-blush-50 rounded-lg">
                    <span className="text-blush-600 font-medium">You're saving</span>
                    <span className="text-blush-600 font-semibold">${savings.toFixed(2)}</span>
                  </div>
                )}

                {/* Subtotal */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-charcoal-600">Subtotal</span>
                  <span className="font-serif text-2xl text-charcoal-900">${subtotal.toFixed(2)}</span>
                </div>

                <p className="text-xs text-charcoal-400 text-center mb-4">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="w-full py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="w-full py-3 bg-cream-100 text-charcoal-700 rounded-full font-medium hover:bg-sage-100 transition-colors text-center block"
                  >
                    View Full Cart
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
