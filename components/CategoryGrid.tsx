'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Nursery',
    slug: 'nursery',
    description: 'Create a dreamy sanctuary',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&auto=format&fit=crop&q=80',
    productCount: 124,
    color: 'bg-sage-100',
    borderRadius: 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]',
  },
  {
    id: 2,
    name: 'Strollers',
    slug: 'strollers',
    description: 'Adventures await',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&auto=format&fit=crop&q=80',
    productCount: 48,
    color: 'bg-blush-100',
    borderRadius: 'rounded-[70%_30%_30%_70%/60%_60%_40%_40%]',
  },
  {
    id: 3,
    name: 'Car Seats',
    slug: 'car-seats',
    description: 'Safety meets comfort',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
    productCount: 36,
    color: 'bg-cream-200',
    borderRadius: 'rounded-[40%_60%_60%_40%/60%_30%_70%_40%]',
  },
  {
    id: 4,
    name: 'Clothing',
    slug: 'clothing',
    description: 'Adorable & comfortable',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
    productCount: 256,
    color: 'bg-gold-100',
    borderRadius: 'rounded-[60%_40%_30%_70%/50%_60%_40%_50%]',
  },
  {
    id: 5,
    name: 'Toys',
    slug: 'toys',
    description: 'Learn through play',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80',
    productCount: 189,
    color: 'bg-blush-100',
    borderRadius: 'rounded-[50%_50%_40%_60%/40%_60%_40%_60%]',
  },
  {
    id: 6,
    name: 'Feeding',
    slug: 'feeding',
    description: 'Mealtime essentials',
    image: 'https://images.unsplash.com/photo-1584839400972-24e0f9c3de94?w=600&auto=format&fit=crop&q=80',
    productCount: 98,
    color: 'bg-sage-100',
    borderRadius: 'rounded-[70%_30%_50%_50%/30%_50%_50%_70%]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function CategoryGrid() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 rounded-full text-sm font-medium mb-4">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal-900 mb-4">
            Shop Our <span className="font-script text-sage-400">Collections</span>
          </h2>
          <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
            Discover thoughtfully curated categories designed to meet every need of your growing family.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link
                href={`/categories/${category.slug}`}
                className="group block relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-500"
              >
                {/* Background color accent */}
                <div className={`absolute inset-0 ${category.color} opacity-50`} />

                {/* Image Container with Organic Shape */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-4 ${category.borderRadius} overflow-hidden transition-transform duration-700 group-hover:scale-105`}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-500" />
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-charcoal-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 pt-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-charcoal-900 group-hover:text-sage-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-charcoal-500 text-sm mt-1">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-sm text-charcoal-400 font-medium bg-white/80 px-3 py-1 rounded-full">
                      {category.productCount} items
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-charcoal-700 font-medium hover:text-sage-600 transition-colors group"
          >
            View All Categories
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
