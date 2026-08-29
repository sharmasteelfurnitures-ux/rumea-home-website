'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
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
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-charcoal hover:text-terracotta transition-colors self-start sm:self-auto"
          >
            <span>Explore All 20+ Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Col Desktop, 2-Col Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        {/* Secondary Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-warm-offwhite border border-border-sand hover:border-charcoal text-charcoal font-sans font-bold text-xs sm:text-sm rounded-btn shadow-subtle hover:bg-white transition-all duration-200"
          >
            <span>Explore All 20+ Handcrafted Pieces</span>
            <ArrowRight className="w-4 h-4 text-terracotta" />
          </Link>
        </div>

      </div>
    </section>
  );
}
