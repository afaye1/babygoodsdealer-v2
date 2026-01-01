'use client'

import { ReactNode } from 'react'
import { CartProvider } from '@/contexts/CartContext'
import CartDrawer from './CartDrawer'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  )
}
