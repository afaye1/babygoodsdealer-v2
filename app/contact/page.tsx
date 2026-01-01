'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Package } from 'lucide-react'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team',
    detail: 'Available 9am - 6pm EST',
    action: 'Start Chat',
    color: 'bg-sage-50 text-sage-600',
    iconBg: 'bg-sage-100',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get a response within 24h',
    detail: 'hello@babygoodsdealer.com',
    action: 'Send Email',
    color: 'bg-blush-50 text-blush-600',
    iconBg: 'bg-blush-100',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak to our team',
    detail: '+1 (555) 123-4567',
    action: 'Call Now',
    color: 'bg-gold-50 text-gold-600',
    iconBg: 'bg-gold-100',
  },
]

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day hassle-free return policy on all unused items in original packaging. Simply contact us and we\'ll arrange a prepaid return label.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee. Free shipping on orders over $75.',
  },
  {
    question: 'Are your products safe for babies?',
    answer: 'Absolutely! All our products meet or exceed safety standards. We only partner with trusted brands known for quality and safety certifications.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrap option at checkout and include your message.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />

      <main className="pt-[120px] bg-cream-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sage-100 via-cream-100 to-blush-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blush-200 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="font-script text-2xl text-sage-500 block mb-2">Get in Touch</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-4">
                We&apos;d Love to Hear From You
              </h1>
              <div className="decorative-line mx-auto mb-6" />
              <p className="text-charcoal-600 text-lg max-w-xl mx-auto">
                Have a question about an order? Need product recommendations? Our friendly team is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${method.color} rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 ${method.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal-900 mb-1">{method.title}</h3>
                    <p className="text-charcoal-500 text-sm mb-2">{method.description}</p>
                    <p className="font-medium text-charcoal-700 mb-4">{method.detail}</p>
                    <button className="text-sm font-medium underline underline-offset-4 hover:no-underline transition-all">
                      {method.action} →
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl lg:text-3xl text-charcoal-900 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-sage-50 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-sage-600" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal-900 mb-2">Message Sent!</h3>
                    <p className="text-charcoal-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sage-600 font-medium underline underline-offset-4 hover:no-underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select a topic...</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="return">Returns & Exchanges</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you today?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info & FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* Store Info */}
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-4">Visit Our Store</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sage-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-800">Location</p>
                        <p className="text-charcoal-500 text-sm">123 Baby Lane, Suite 100<br />New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sage-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-800">Hours</p>
                        <p className="text-charcoal-500 text-sm">Mon - Sat: 10am - 7pm<br />Sun: 11am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-4">Quick Help</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/shipping" className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl hover:bg-sage-50 transition-colors">
                      <Package className="w-5 h-5 text-sage-600" />
                      <span className="text-sm font-medium text-charcoal-700">Track Order</span>
                    </a>
                    <a href="/returns" className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl hover:bg-sage-50 transition-colors">
                      <Package className="w-5 h-5 text-sage-600" />
                      <span className="text-sm font-medium text-charcoal-700">Returns</span>
                    </a>
                    <a href="/faqs" className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl hover:bg-sage-50 transition-colors">
                      <HelpCircle className="w-5 h-5 text-sage-600" />
                      <span className="text-sm font-medium text-charcoal-700">FAQs</span>
                    </a>
                    <a href="/size-guide" className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl hover:bg-sage-50 transition-colors">
                      <HelpCircle className="w-5 h-5 text-sage-600" />
                      <span className="text-sm font-medium text-charcoal-700">Size Guide</span>
                    </a>
                  </div>
                </div>

                {/* FAQ Preview */}
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-4">Common Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-charcoal-800 font-medium hover:text-sage-600 transition-colors">
                          {faq.question}
                          <span className="text-sage-500 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="text-charcoal-500 text-sm mt-2 pb-2 border-b border-sage-100">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
