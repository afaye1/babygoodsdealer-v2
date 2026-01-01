'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { ChevronDown, SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Sample products data
const allProducts = [
  { id: '1', name: 'Organic Cotton Swaddle Set', price: 48, originalPrice: 65, rating: 4.9, reviews: 128, image: '', category: 'Nursery', badge: 'Best Seller', colors: ['#f3bdb5', '#d4dbc9', '#fef9f0'] },
  { id: '2', name: 'Wooden Stacking Rainbow', price: 35, rating: 4.8, reviews: 94, image: '', category: 'Toys', colors: ['#f2d68f', '#b5c2a4', '#ea9488'] },
  { id: '3', name: 'Bamboo Feeding Set', price: 42, rating: 4.7, reviews: 76, image: '', category: 'Feeding', badge: 'New', colors: ['#d4dbc9', '#fef9f0'] },
  { id: '4', name: 'Linen Crib Sheet', price: 58, rating: 4.9, reviews: 112, image: '', category: 'Nursery', colors: ['#f3bdb5', '#d4dbc9', '#f5d9ae'] },
  { id: '5', name: 'Organic Baby Bodysuit Pack', price: 36, rating: 4.6, reviews: 89, image: '', category: 'Clothing', colors: ['#fef9f0', '#d4dbc9'] },
  { id: '6', name: 'Wooden Rattle Set', price: 28, rating: 4.8, reviews: 67, image: '', category: 'Toys', badge: 'Sale' },
  { id: '7', name: 'Muslin Burp Cloths (5-Pack)', price: 32, rating: 4.7, reviews: 145, image: '', category: 'Feeding' },
  { id: '8', name: 'Organic Cotton Blanket', price: 55, rating: 4.9, reviews: 203, image: '', category: 'Nursery', badge: 'Best Seller' },
  { id: '9', name: 'Baby Milestone Cards', price: 24, rating: 4.5, reviews: 56, image: '', category: 'Gifts' },
  { id: '10', name: 'Teething Ring Set', price: 18, rating: 4.6, reviews: 78, image: '', category: 'Toys' },
  { id: '11', name: 'Portable Diaper Caddy', price: 45, rating: 4.7, reviews: 92, image: '', category: 'Travel' },
  { id: '12', name: 'Organic Baby Lotion', price: 22, rating: 4.8, reviews: 134, image: '', category: 'Care' },
]

const categories = ['All', 'Nursery', 'Feeding', 'Clothing', 'Toys', 'Travel', 'Gifts', 'Care']
const priceRanges = ['All Prices', 'Under $25', '$25 - $50', '$50 - $100', 'Over $100']
const ageGroups = ['All Ages', '0-3 months', '3-6 months', '6-12 months', '1-2 years', '2+ years']
const brands = ['All Brands', 'Little Dreamers', 'Organic Baby Co', 'Woodland Wonders', 'Pure Start']
const sortOptions = ['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Best Rated', 'Most Popular']

export default function ProductsPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All Ages')
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [sortBy, setSortBy] = useState('Featured')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false
    // Add more filter logic as needed
    return true
  })

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <>
      <Header />

      <main className="pt-[120px] pb-20 bg-cream-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <span className="font-script text-2xl text-sage-500 block mb-2">Explore</span>
            <h1 className="font-serif text-4xl lg:text-5xl text-charcoal-800 mb-4">
              Our Collection
            </h1>
            <div className="decorative-line mx-auto mb-6" />
            <p className="font-sans text-charcoal-500 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium baby products,
              handpicked for quality, safety, and style.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-[140px]">
                <h3 className="font-serif text-lg text-charcoal-800 mb-6">Filters</h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-sage-100 text-sage-700 font-medium'
                            : 'text-charcoal-500 hover:bg-sage-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => setSelectedPriceRange(range)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedPriceRange === range
                            ? 'bg-sage-100 text-sage-700 font-medium'
                            : 'text-charcoal-500 hover:bg-sage-50'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age Group Filter */}
                <div className="mb-6">
                  <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Age Group</h4>
                  <div className="space-y-2">
                    {ageGroups.map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAgeGroup(age)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedAgeGroup === age
                            ? 'bg-sage-100 text-sage-700 font-medium'
                            : 'text-charcoal-500 hover:bg-sage-50'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedBrand === brand
                            ? 'bg-sage-100 text-sage-700 font-medium'
                            : 'text-charcoal-500 hover:bg-sage-50'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedPriceRange('All Prices')
                    setSelectedAgeGroup('All Ages')
                    setSelectedBrand('All Brands')
                  }}
                  className="w-full py-2 border border-sage-200 text-sage-600 font-sans text-sm rounded-lg hover:bg-sage-50 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white rounded-2xl shadow-soft p-4">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-sage-50 rounded-lg text-sage-700"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="font-sans text-sm">Filters</span>
                </button>

                {/* Results count */}
                <p className="font-sans text-sm text-charcoal-500">
                  Showing {paginatedProducts.length} of {filteredProducts.length} products
                </p>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-sage-50 border-none rounded-lg px-4 py-2 pr-10 font-sans text-sm text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-sage-300"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" />
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {/* Empty state */}
              {paginatedProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="font-serif text-2xl text-charcoal-600 mb-4">No products found</p>
                  <p className="font-sans text-charcoal-400 mb-6">Try adjusting your filters</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All')
                      setSelectedPriceRange('All Prices')
                      setSelectedAgeGroup('All Ages')
                      setSelectedBrand('All Brands')
                    }}
                    className="px-6 py-3 bg-sage-500 text-white rounded-full font-sans text-sm hover:bg-sage-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-charcoal-500 hover:text-sage-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-sans text-sm transition-colors ${
                        currentPage === i + 1
                          ? 'bg-sage-500 text-white'
                          : 'bg-white shadow-soft text-charcoal-600 hover:bg-sage-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-charcoal-500 hover:text-sage-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-soft-xl p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-charcoal-800">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-charcoal-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile filter content - same as desktop */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-sage-100 text-sage-700 font-medium'
                          : 'text-charcoal-500 hover:bg-sage-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedPriceRange(range)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedPriceRange === range
                          ? 'bg-sage-100 text-sage-700 font-medium'
                          : 'text-charcoal-500 hover:bg-sage-50'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age Group */}
              <div>
                <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Age Group</h4>
                <div className="space-y-2">
                  {ageGroups.map((age) => (
                    <button
                      key={age}
                      onClick={() => setSelectedAgeGroup(age)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedAgeGroup === age
                          ? 'bg-sage-100 text-sage-700 font-medium'
                          : 'text-charcoal-500 hover:bg-sage-50'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div>
                <h4 className="font-sans text-sm font-medium text-charcoal-700 mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedBrand === brand
                          ? 'bg-sage-100 text-sage-700 font-medium'
                          : 'text-charcoal-500 hover:bg-sage-50'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply button */}
            <div className="mt-8 space-y-3">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-sage-500 text-white rounded-full font-sans text-sm hover:bg-sage-600 transition-colors"
              >
                Apply Filters
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedPriceRange('All Prices')
                  setSelectedAgeGroup('All Ages')
                  setSelectedBrand('All Brands')
                }}
                className="w-full py-3 border border-sage-200 text-sage-600 rounded-full font-sans text-sm hover:bg-sage-50 transition-colors"
              >
                Clear All
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  )
}
