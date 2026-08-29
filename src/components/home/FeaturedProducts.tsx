'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> PROVEN DURABILITY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal mt-1">
              Most Loved by Indian Homeowners
            </h2>
            <p className="text-mid-gray text-sm sm:text-base mt-1.5 max-w-lg">
              Our 8 most requested solid Sheesham wood pieces, rated 4.7+ stars across 1,200+ homes.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-charcoal hover:text-terracotta transition-colors self-start sm:self-auto group"
          >
            <span>Explore All 20+ Pieces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 4-Col Desktop, 2-Col Mobile Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} priority={idx < 4} />
            </motion.div>
          ))}
        </div>

        {/* Secondary Bottom CTA with Hover Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-warm-offwhite border border-border-sand hover:border-charcoal text-charcoal font-sans font-bold text-xs sm:text-sm rounded-btn shadow-subtle hover:bg-white transition-all duration-200 group"
            >
              <span>Explore All 20+ Handcrafted Pieces</span>
              <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
