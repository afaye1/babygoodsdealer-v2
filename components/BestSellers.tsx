'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ShoppingBag, Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Organic Cotton Onesie Set',
    price: 48,
    originalPrice: 65,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80',
    badge: 'Bestseller',
    badgeColor: 'bg-gold-400',
  },
  {
    id: 2,
    name: 'Deluxe Travel Stroller',
    price: 399,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&auto=format&fit=crop&q=80',
    badge: 'New',
    badgeColor: 'bg-sage-400',
  },
  {
    id: 3,
    name: 'Bamboo Swaddle Blanket',
    price: 34,
    rating: 5.0,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=80',
    badge: 'Bestseller',
    badgeColor: 'bg-gold-400',
  },
  {
    id: 4,
    name: 'Wooden Activity Gym',
    price: 129,
    originalPrice: 159,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1584839400972-24e0f9c3de94?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Convertible Crib',
    price: 549,
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&auto=format&fit=crop&q=80',
    badge: 'New',
    badgeColor: 'bg-sage-400',
  },
  {
    id: 6,
    name: 'Silicone Feeding Set',
    price: 42,
    rating: 4.8,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Ergonomic Baby Carrier',
    price: 189,
    originalPrice: 229,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=80',
    badge: 'Bestseller',
    badgeColor: 'bg-gold-400',
  },
  {
    id: 8,
    name: 'Plush Animal Collection',
    price: 28,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface BestSellersProps {
  title?: string;
}

export default function BestSellers({ title }: BestSellersProps) {
  const displayTitle = title || 'Best Sellers';
  const isCustomTitle = !!title;

  return (
    <section className="py-20 sm:py-28 bg-cream-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            {!isCustomTitle && (
              <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
                Top Picks
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal-900">
              {isCustomTitle ? displayTitle : (
                <>Best <span className="font-script text-sage-400">Sellers</span></>
              )}
            </h2>
          </div>
          <Link
            href="/shop/bestsellers"
            className="inline-flex items-center gap-2 text-charcoal-700 font-medium hover:text-sage-600 transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link href={`/products/${product.id}`} className="group block">
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-cream-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1 ${product.badgeColor} text-white text-xs font-medium rounded-full`}>
                        {product.badge}
                      </span>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <button
                        className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-blush-50 transition-colors"
                        aria-label={`Add ${product.name} to wishlist`}
                      >
                        <Heart className="w-4 h-4 text-charcoal-600 hover:text-blush-500" />
                      </button>
                      <button
                        className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-sage-50 transition-colors"
                        aria-label={`Quick add ${product.name} to cart`}
                      >
                        <ShoppingBag className="w-4 h-4 text-charcoal-600 hover:text-sage-600" />
                      </button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-full py-2.5 bg-white text-charcoal-900 rounded-full text-sm font-medium hover:bg-sage-50 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                      <span className="text-sm font-medium text-charcoal-800">{product.rating}</span>
                      <span className="text-sm text-charcoal-400">({product.reviews})</span>
                    </div>

                    {/* Name */}
                    <h3 className="font-medium text-charcoal-900 group-hover:text-sage-600 transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-serif font-semibold text-charcoal-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-charcoal-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
