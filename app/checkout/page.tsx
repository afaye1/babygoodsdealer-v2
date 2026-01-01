'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Lock, Shield, Truck, ChevronDown, Check, Sparkles } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FormData {
  // Contact
  email: string
  phone: string
  // Shipping
  firstName: string
  lastName: string
  address: string
  apartment: string
  city: string
  state: string
  zipCode: string
  country: string
  // Payment
  cardNumber: string
  cardName: string
  expiry: string
  cvv: string
  // Options
  saveInfo: boolean
  sameAsBilling: boolean
}

const initialFormData: FormData = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'United States',
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
  saveInfo: true,
  sameAsBilling: true,
}

export default function CheckoutPage() {
  const { items, subtotal, savings, clearCart } = useCart()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [step, setStep] = useState(1) // 1: Information, 2: Shipping, 3: Payment
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const freeShippingThreshold = 75
  const shipping = subtotal >= freeShippingThreshold ? 0 : 8.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  if (orderComplete) {
    return (
      <>
        <Header />
        <main id="main-content" className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-cream-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-3xl shadow-soft"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Check className="w-12 h-12 text-sage-600" />
              </motion.div>
              <h1 className="font-serif text-3xl text-charcoal-900 mb-4">
                Thank You for Your Order!
              </h1>
              <p className="text-charcoal-500 mb-2">
                Order confirmation has been sent to
              </p>
              <p className="font-medium text-charcoal-800 mb-8">
                {formData.email || 'your email address'}
              </p>
              <div className="bg-cream-50 rounded-2xl p-6 mb-8 mx-6">
                <p className="text-sm text-charcoal-600 mb-2">Order Number</p>
                <p className="font-mono text-xl text-charcoal-900">
                  #BGD-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
                <Link
                  href="/shop"
                  className="px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-cream-100 text-charcoal-700 rounded-full font-medium hover:bg-sage-100 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main id="main-content" className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-cream-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="text-center py-16 bg-white rounded-3xl shadow-soft">
              <h1 className="font-serif text-3xl text-charcoal-900 mb-4">
                Your cart is empty
              </h1>
              <p className="text-charcoal-500 mb-8">
                Add some items to your cart before checking out.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-charcoal-600 hover:text-sage-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Cart</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <h1 className="font-serif text-3xl text-charcoal-900 mb-8">Checkout</h1>

              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-10">
                {[
                  { num: 1, label: 'Information' },
                  { num: 2, label: 'Shipping' },
                  { num: 3, label: 'Payment' },
                ].map((s, i) => (
                  <div key={s.num} className="flex items-center gap-4">
                    <button
                      onClick={() => s.num < step && setStep(s.num)}
                      className={`flex items-center gap-2 ${
                        step >= s.num ? 'text-sage-600' : 'text-charcoal-400'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          step > s.num
                            ? 'bg-sage-500 text-white'
                            : step === s.num
                            ? 'bg-sage-100 text-sage-700 ring-2 ring-sage-500'
                            : 'bg-cream-100 text-charcoal-400'
                        }`}
                      >
                        {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                      </div>
                      <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                    </button>
                    {i < 2 && (
                      <div className={`w-12 h-0.5 ${step > s.num ? 'bg-sage-500' : 'bg-cream-200'}`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-serif text-xl text-charcoal-900 mb-4">Contact Information</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm text-charcoal-600 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm text-charcoal-600 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            autoComplete="tel"
                            placeholder="(555) 123-4567"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-serif text-xl text-charcoal-900 mb-4">Shipping Address</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm text-charcoal-600 mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              autoComplete="given-name"
                              className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm text-charcoal-600 mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              autoComplete="family-name"
                              className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm text-charcoal-600 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            autoComplete="street-address"
                            placeholder="Street address"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="apartment" className="block text-sm text-charcoal-600 mb-2">
                            Apartment, suite, etc. (optional)
                          </label>
                          <input
                            type="text"
                            id="apartment"
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleInputChange}
                            autoComplete="address-line2"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <label htmlFor="city" className="block text-sm text-charcoal-600 mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              autoComplete="address-level2"
                              className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-sm text-charcoal-600 mb-2">
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              autoComplete="address-level1"
                              className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="zipCode" className="block text-sm text-charcoal-600 mb-2">
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              required
                              autoComplete="postal-code"
                              className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        className="w-5 h-5 rounded border-sage-300 text-sage-500 focus:ring-sage-300"
                      />
                      <label htmlFor="saveInfo" className="text-sm text-charcoal-600">
                        Save this information for next time
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors"
                    >
                      Continue to Shipping
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Shipping Method */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <fieldset>
                      <legend className="font-serif text-xl text-charcoal-900 mb-4">Shipping Method</legend>

                      <div className="space-y-3">
                        <label htmlFor="shipping-standard" className="flex items-center justify-between p-4 border-2 border-sage-500 rounded-xl bg-sage-50/50 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="shipping-standard"
                              name="shippingMethod"
                              value="standard"
                              defaultChecked
                              className="w-5 h-5 text-sage-500 border-sage-300 focus:ring-sage-300"
                            />
                            <div>
                              <span className="font-medium text-charcoal-800">Standard Shipping</span>
                              <p className="text-sm text-charcoal-500">5-7 business days</p>
                            </div>
                          </div>
                          <span className="font-medium text-charcoal-800">
                            {subtotal >= freeShippingThreshold ? (
                              <span className="text-sage-600">FREE</span>
                            ) : (
                              '$8.99'
                            )}
                          </span>
                        </label>

                        <label htmlFor="shipping-express" className="flex items-center justify-between p-4 border border-sage-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="shipping-express"
                              name="shippingMethod"
                              value="express"
                              className="w-5 h-5 text-sage-500 border-sage-300 focus:ring-sage-300"
                            />
                            <div>
                              <span className="font-medium text-charcoal-800">Express Shipping</span>
                              <p className="text-sm text-charcoal-500">2-3 business days</p>
                            </div>
                          </div>
                          <span className="font-medium text-charcoal-800">$14.99</span>
                        </label>

                        <label htmlFor="shipping-overnight" className="flex items-center justify-between p-4 border border-sage-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="shipping-overnight"
                              name="shippingMethod"
                              value="overnight"
                              className="w-5 h-5 text-sage-500 border-sage-300 focus:ring-sage-300"
                            />
                            <div>
                              <span className="font-medium text-charcoal-800">Overnight Shipping</span>
                              <p className="text-sm text-charcoal-500">Next business day</p>
                            </div>
                          </div>
                          <span className="font-medium text-charcoal-800">$24.99</span>
                        </label>
                      </div>
                    </fieldset>

                    {subtotal >= freeShippingThreshold && (
                      <div className="flex items-center gap-2 p-4 bg-sage-50 rounded-xl">
                        <Sparkles className="w-5 h-5 text-gold-500" />
                        <span className="text-sage-700 font-medium">
                          You qualify for free standard shipping!
                        </span>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 bg-cream-100 text-charcoal-700 rounded-full font-medium hover:bg-sage-100 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-xl text-charcoal-900">Payment</h2>
                      <div className="flex items-center gap-2 text-sm text-charcoal-500">
                        <Lock className="w-4 h-4" />
                        <span>Secure checkout</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm text-charcoal-600 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              cardNumber: formatCardNumber(e.target.value)
                            }))}
                            maxLength={19}
                            required
                            autoComplete="cc-number"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 pr-12 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm text-charcoal-600 mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          autoComplete="cc-name"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm text-charcoal-600 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            value={formData.expiry}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              expiry: formatExpiry(e.target.value)
                            }))}
                            maxLength={5}
                            required
                            autoComplete="cc-exp"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm text-charcoal-600 mb-2">
                            Security Code
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            required
                            autoComplete="cc-csc"
                            placeholder="CVV"
                            className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="sameAsBilling"
                        name="sameAsBilling"
                        checked={formData.sameAsBilling}
                        onChange={handleInputChange}
                        className="w-5 h-5 rounded border-sage-300 text-sage-500 focus:ring-sage-300"
                      />
                      <label htmlFor="sameAsBilling" className="text-sm text-charcoal-600">
                        Billing address same as shipping
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 bg-cream-100 text-charcoal-700 rounded-full font-medium hover:bg-sage-100 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex-1 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            Pay ${total.toFixed(2)}
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-6 pt-6 border-t border-sage-100">
                      <div className="flex items-center gap-2 text-charcoal-500">
                        <Shield className="w-5 h-5 text-sage-500" />
                        <span className="text-sm">SSL Encrypted</span>
                      </div>
                      <div className="flex items-center gap-2 text-charcoal-500">
                        <CreditCard className="w-5 h-5 text-sage-500" />
                        <span className="text-sm">Secure Payment</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:pl-8 lg:border-l border-sage-100">
              <div className="sticky top-28">
                <h2 className="font-serif text-xl text-charcoal-900 mb-6">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.color || 'default'}`} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-cream-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal-700 text-white text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-charcoal-800 line-clamp-2">
                          {item.name}
                        </p>
                        {item.color && (
                          <div className="flex items-center gap-1 mt-1">
                            <div
                              className="w-3 h-3 rounded-full border border-sage-200"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                        )}
                      </div>
                      <span className="font-medium text-charcoal-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 pt-6 border-t border-sage-100">
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
                  <div className="flex justify-between pt-4 border-t border-sage-100">
                    <span className="font-serif text-lg text-charcoal-900">Total</span>
                    <span className="font-serif text-2xl text-charcoal-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 p-4 bg-sage-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-sage-600" />
                    <div>
                      <p className="text-sm font-medium text-charcoal-800">
                        Estimated Delivery
                      </p>
                      <p className="text-sm text-charcoal-500">
                        {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
