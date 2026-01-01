'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { RefreshCw, Home, AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Decorative pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-blush-200 rounded-full"
            />

            {/* Icon container */}
            <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blush-100 to-cream-100 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-16 h-16 text-blush-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-serif text-3xl text-charcoal-900 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-charcoal-500 mb-8">
            We're sorry, but something unexpected happened. Don't worry,
            your cart and preferences are safe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900 text-white rounded-full font-medium hover:bg-charcoal-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-charcoal-400"
        >
          If the problem persists, please{' '}
          <Link href="/contact" className="text-sage-600 hover:text-sage-700 underline">
            contact our support team
          </Link>
          .
        </motion.p>
      </div>
    </div>
  )
}
