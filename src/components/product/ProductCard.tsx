'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import Badge from '@/components/ui/Badge';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import QuickViewModal from '@/components/product/QuickViewModal';
import { Star, Eye, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col bg-white rounded-card overflow-hidden border border-border-sand hover:border-espresso/30 shadow-card card-hover">
        
        {/* 4/3 Aspect Ratio Image Container */}
        <div className="relative aspect-[4/3] bg-ivory-dark overflow-hidden">
          <Link href={`/products/${product.slug}`} className="block w-full h-full">
            <Image
              src={product.images.primary}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={priority}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Top Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
            {product.seo.badge && (
              <span className="px-2 py-0.5 bg-espresso text-warm-ivory text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
                {product.seo.badge}
              </span>
            )}
            {product.pricing.discount >= 15 && !product.seo.badge && (
              <span className="px-2 py-0.5 bg-antique-gold text-white text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
                {product.pricing.discount}% OFF
              </span>
            )}
          </div>

          {/* Wishlist Top Right */}
          <div className="absolute top-2.5 right-2.5 z-10 bg-white/90 backdrop-blur-xs rounded-full p-1 shadow-xs hover:bg-white transition-colors">
            <WishlistIcon productName={product.name} className="w-4 h-4 text-soft-taupe group-hover:text-espresso" />
          </div>

          {/* Hover Quick View Trigger Button */}
          <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="w-full py-2 bg-espresso/90 hover:bg-espresso text-warm-ivory text-xs font-semibold rounded-btn shadow-md flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-warm-sand" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Category & Material USP Tag */}
            <div className="flex items-center justify-between text-[10px] text-soft-taupe uppercase tracking-widest font-semibold mb-1">
              <span>{product.category.replace('-', ' ')}</span>
              <span className="text-antique-gold font-bold">100% Solid Sheesham</span>
            </div>

            {/* Title in Serif */}
            <h3 className="font-serif font-semibold text-sm sm:text-base text-espresso line-clamp-2 leading-snug group-hover:text-antique-gold transition-colors">
              <Link href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            </h3>

            {/* Star Rating */}
            <div className="flex items-center gap-1 text-[11px] text-espresso mt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-semibold">{product.seo.rating}</span>
              <span className="text-soft-taupe text-[10px]">({product.seo.reviewCount})</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="pt-2 border-t border-border-sand/60 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-espresso">
                  ₹{product.pricing.offer.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-soft-taupe line-through">
                  ₹{product.pricing.mrp.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[10px] text-antique-gold font-bold">
                Save ₹{(product.pricing.mrp - product.pricing.offer).toLocaleString('en-IN')}
              </p>
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="p-2 text-espresso hover:text-antique-gold rounded-btn hover:bg-warm-ivory transition-colors"
              aria-label={`View details for ${product.name}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  );
}
