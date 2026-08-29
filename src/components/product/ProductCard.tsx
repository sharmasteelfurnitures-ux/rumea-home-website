'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, Sparkles, Heart } from 'lucide-react';
import { Product } from '@/types/product';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const timberFinishes = [
  { name: 'Natural Teak', color: '#B37D4E', bgClass: 'bg-[#B37D4E]' },
  { name: 'Warm Honey', color: '#C88A3F', bgClass: 'bg-[#C88A3F]' },
  { name: 'Dark Walnut', color: '#4A2E1B', bgClass: 'bg-[#4A2E1B]' },
];

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState('Natural Teak');
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-card overflow-hidden border border-border-sand flex flex-col h-full transition-all duration-300 hover:shadow-card hover:-translate-y-1">
        
        {/* Top Media Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm-alabaster">
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

          {/* Badge */}
          {product.seo?.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="px-2.5 py-1 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
                {product.seo.badge}
              </span>
            </div>
          )}

          {/* Wishlist Top Right */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-2.5 right-2.5 z-10 bg-white/90 backdrop-blur-xs rounded-full p-1.5 shadow-xs hover:bg-white transition-colors"
            aria-label="Save to wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? 'fill-terracotta text-terracotta' : 'text-mid-gray group-hover:text-charcoal'
              }`}
            />
          </button>

          {/* Hover Quick View Trigger Button */}
          <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="w-full py-2 bg-charcoal/95 hover:bg-charcoal text-white text-xs font-bold rounded-btn shadow-md flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Category & Material USP Tag */}
            <div className="flex items-center justify-between text-[10px] text-mid-gray uppercase tracking-widest font-semibold mb-1">
              <span>{product.category.replace('-', ' ')}</span>
              <span className="text-terracotta font-bold">100% Solid Sheesham</span>
            </div>

            {/* Title in Serif */}
            <h3 className="font-serif font-semibold text-sm sm:text-base text-charcoal line-clamp-2 leading-snug group-hover:text-terracotta transition-colors">
              <Link href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            </h3>

            {/* Timber Finish Swatches (Wooden Street Style) */}
            <div className="flex items-center gap-1.5 mt-2.5 pt-1">
              <span className="text-[10px] text-mid-gray mr-0.5">Finish:</span>
              {timberFinishes.map((finish) => (
                <button
                  key={finish.name}
                  onClick={() => setSelectedFinish(finish.name)}
                  title={finish.name}
                  className={`w-3.5 h-3.5 rounded-full ${finish.bgClass} transition-all duration-150 relative ${
                    selectedFinish === finish.name
                      ? 'ring-2 ring-offset-1 ring-charcoal scale-110'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`Select ${finish.name} finish`}
                />
              ))}
              <span className="text-[10px] text-charcoal font-medium ml-1 truncate">
                {selectedFinish}
              </span>
            </div>
          </div>

          {/* Price Block */}
          <div className="pt-2.5 border-t border-border-sand/60 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-charcoal">
                  ₹{product.pricing.offer.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-mid-gray line-through">
                  ₹{product.pricing.mrp.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[10px] text-emerald-700 font-bold">
                Save ₹{(product.pricing.mrp - product.pricing.offer).toLocaleString('en-IN')} Direct
              </p>
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="p-2 text-charcoal hover:text-terracotta rounded-btn hover:bg-warm-alabaster transition-colors"
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
