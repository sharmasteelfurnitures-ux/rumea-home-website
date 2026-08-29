import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="py-16 md:py-24 bg-ivory-dark/40 border-y border-warm-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-olive mb-2">
              HANDPICKED FOR YOU
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso">
              Beautiful Furniture for Real Homes
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-2 max-w-xl">
              Our most celebrated pieces — handcrafted from kiln-dried hardwood and designed to elevate everyday life.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-muted-olive transition-colors group"
          >
            <span>View All Products ({featured.length}+)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-espresso text-warm-ivory text-sm font-medium rounded-xl shadow-sm"
          >
            <span>Explore Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
