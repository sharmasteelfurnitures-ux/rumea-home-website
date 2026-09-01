'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';
import { Product } from '@/types/product';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <>
      <div className="group flex flex-col h-full transition-all duration-300">
        
        {/* Large Prominent Hero Photo Container */}
        <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EBE7DF] shadow-xs">
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

          {/* Top Right Badge Pill: Strictly Best Seller / New Arrival / Popular */}
          {product.seo?.badge && (
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
              <span
                className={`px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-xs backdrop-blur-xs ${
                  product.seo.badge === 'Best Seller'
                    ? 'bg-[#48563A] text-white'
                    : product.seo.badge === 'New Arrival'
                    ? 'bg-[#2C2926] text-[#F7F4EE]'
                    : 'bg-[#5A524C] text-[#F7F4EE]'
                }`}
              >
                {product.seo.badge}
              </span>
            </div>
          )}

          {/* Top Left Wishlist Heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 bg-white/90 backdrop-blur-xs rounded-full p-1.5 sm:p-2 shadow-xs hover:bg-white transition-all hover:scale-110"
            aria-label="Save to wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                isWishlisted ? 'fill-[#48563A] text-[#48563A]' : 'text-[#2C2926]'
              }`}
            />
          </button>

          {/* Desktop Hover Quick View Button */}
          <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="w-full py-2.5 bg-[#2C2926]/90 hover:bg-[#2C2926] text-[#F7F4EE] text-xs font-semibold rounded-xl shadow-lg flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-[#D8C9B5]" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Clean Typography Directly Below Photo (Zero Nested Boxes) */}
        <div className="mt-2.5 sm:mt-3 flex flex-col space-y-1">
          
          {/* Title */}
          <h3 className="font-sans font-medium text-xs sm:text-sm text-[#2C2926] line-clamp-2 leading-snug group-hover:text-[#48563A] transition-colors">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Pricing: Offer Price + Strikethrough MRP + % Off */}
          <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 pt-0.5">
            <span className="font-sans font-bold text-sm sm:text-base text-[#2C2926]">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            {product.pricing.mrp > product.pricing.offer && (
              <span className="text-[11px] sm:text-xs text-[#A69B8C] line-through font-normal">
                ₹{product.pricing.mrp.toLocaleString('en-IN')}
              </span>
            )}
            {product.pricing.discount > 0 && (
              <span className="text-[11px] sm:text-xs font-bold text-[#48563A]">
                {product.pricing.discount}% Off
              </span>
            )}
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
