'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { Heart, Leaf, Shield, Award, Users, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Every product is selected with the same care we would choose for our own children.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description:
      'We prioritize organic, eco-friendly materials and ethical manufacturing practices.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'All products meet or exceed the highest safety standards and certifications.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'We partner with artisans and brands who share our commitment to excellence.',
  },
]

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: 'Former pediatric nurse and mother of three. Founded Baby Goods Dealer after struggling to find safe, beautiful products.',
    initial: 'S',
  },
  {
    name: 'James Chen',
    role: 'Head of Product',
    bio: 'Product designer with 15 years experience. Father of twins who inspired his passion for baby products.',
    initial: 'J',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Sustainability Director',
    bio: 'Environmental scientist dedicated to making parenting more sustainable for future generations.',
    initial: 'E',
  },
]

const stats = [
  { value: '10,000+', label: 'Happy Families' },
  { value: '500+', label: 'Curated Products' },
  { value: '50+', label: 'Partner Brands' },
  { value: '4.9', label: 'Average Rating' },
]

const certifications = [
  'GOTS Certified Organic',
  'OEKO-TEX Standard 100',
  'CPSC Compliant',
  'B Corp Certified',
  'Climate Neutral',
  'Fair Trade',
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-[120px] bg-cream-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-sage-50 via-cream-50 to-blush-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush-200/20 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 pattern-dots opacity-30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="font-script text-3xl text-sage-500 block mb-4">Our Story</span>
              <h1 className="font-serif text-4xl lg:text-6xl text-charcoal-800 mb-6">
                Where Love Meets
                <span className="block text-sage-600 mt-2">Quality Care</span>
              </h1>
              <div className="decorative-line mx-auto mb-8" />
              <p className="font-sans text-lg text-charcoal-500 leading-relaxed">
                Baby Goods Dealer was born from a simple belief: every child deserves the best,
                and every parent deserves peace of mind. We curate only the finest organic,
                sustainable, and beautifully crafted products for your precious little ones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-script text-2xl text-sage-500 block mb-4">The Beginning</span>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-6">
                  A Mother's Mission
                </h2>
                <div className="space-y-4 font-sans text-charcoal-500 leading-relaxed">
                  <p>
                    In 2020, our founder Sarah Mitchell was preparing for the arrival of her first child.
                    As a pediatric nurse, she knew exactly what to look for in baby products: safety,
                    quality, and materials that wouldn't harm her baby's delicate skin.
                  </p>
                  <p>
                    But finding products that met these standards proved surprisingly difficult.
                    Hours of research, countless product returns, and growing frustration led to
                    a revelation: there had to be a better way.
                  </p>
                  <p>
                    Baby Goods Dealer was born from that frustration. We do the hard work of
                    vetting every product so you don't have to. Every item in our collection
                    meets our rigorous standards for safety, sustainability, and style.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-sage-100 to-cream-100 shadow-soft-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="font-script text-5xl text-sage-400 block mb-4">Founded</span>
                      <span className="font-serif text-6xl text-charcoal-300">2020</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blush-100 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-100 rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-script text-2xl text-sage-500 block mb-2">What We Stand For</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-4">
                Our Values
              </h2>
              <div className="decorative-line mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-soft text-center card-lift"
                  >
                    <div className="w-16 h-16 mx-auto bg-sage-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-sage-600" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal-800 mb-3">{value.title}</h3>
                    <p className="font-sans text-sm text-charcoal-500">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-4xl lg:text-5xl text-sage-600 mb-2">{stat.value}</p>
                  <p className="font-sans text-charcoal-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-cream-50 to-blush-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-script text-2xl text-sage-500 block mb-2">The Team</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-4">
                Meet Our Founders
              </h2>
              <div className="decorative-line mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-soft text-center"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-sage-200 to-blush-200 flex items-center justify-center mb-6">
                    <span className="font-script text-4xl text-sage-600">{member.initial}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-1">{member.name}</h3>
                  <p className="font-sans text-sm text-sage-500 mb-4">{member.role}</p>
                  <p className="font-sans text-sm text-charcoal-500">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="font-script text-2xl text-sage-500 block mb-2">Quality Assured</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-4">
                Our Certifications
              </h2>
              <div className="decorative-line mx-auto mb-6" />
              <p className="font-sans text-charcoal-500 max-w-2xl mx-auto">
                We partner only with brands that meet the highest standards in safety,
                sustainability, and ethical manufacturing.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-sage-50 rounded-full font-sans text-sm text-sage-700"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Love Section */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-800 mb-4">
                Loved by 10,000+ Parents
              </h2>
              <p className="font-sans text-charcoal-500 max-w-2xl mx-auto">
                Our customers are at the heart of everything we do. Their trust inspires us
                to continue curating the very best for their little ones.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-500 text-white font-sans font-medium rounded-full hover:bg-sage-600 transition-colors shadow-soft-lg btn-shine"
              >
                Shop Our Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-charcoal-700 font-sans font-medium rounded-full hover:bg-cream-50 transition-colors shadow-soft border border-sage-100"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
