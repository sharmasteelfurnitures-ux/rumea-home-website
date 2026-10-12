'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const hasDiscount = product.pricing.mrp > product.pricing.offer;

  // Resolve secondary image for seamless hover crossfade (if available)
  const secondaryImage = useMemo(() => {
    if (product.images.lifestyle && product.images.lifestyle.length > 0 && product.images.lifestyle[0] !== product.images.primary) {
      return product.images.lifestyle[0];
    }
    if (product.images.gallery && product.images.gallery.length > 1 && product.images.gallery[1] !== product.images.primary) {
      return product.images.gallery[1];
    }
    return null;
  }, [product.images]);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col h-full focus:outline-hidden cursor-pointer"
    >
      {/* Product Image: Clean Square Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F0EBE2] border border-[#E8E4DA]/80 transition-all duration-300 group-hover:border-[#D8C9B5] group-hover:shadow-xs">
        {/* Primary Image */}
        <Image
          src={product.images.primary}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className={`object-cover object-center transition-all duration-700 ease-out ${
            secondaryImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
          }`}
        />

        {/* Secondary / Lifestyle Hover Image */}
        {secondaryImage && (
          <Image
            src={secondaryImage}
            alt={`${product.name} lifestyle`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Minimalist Brand Badge (e.g. Best Seller) */}
        {product.seo?.badge && product.seo.badge !== 'Coming Soon' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-wider rounded-full bg-[#2C2926]/90 backdrop-blur-xs text-[#F7F4EE]">
              {product.seo.badge}
            </span>
          </div>
        )}

        {/* Subtle Desktop Hover Indicator */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#2C2926] text-white shadow-md">
          <ArrowUpRight className="w-4 h-4 text-[#F7F4EE]" />
        </div>
      </div>

      {/* Product Details (Clean architectural typography below image) */}
      <div className="pt-3.5 pb-1 px-0.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Product Title */}
          <h3 className="font-heading font-semibold text-[15px] sm:text-base text-[#2C2926] leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#78806A]">
            {product.name}
          </h3>

          {/* Minimal Finish / Category Subtitle */}
          {product.materials?.selectedFinish && (
            <p className="text-[11px] sm:text-xs text-[#A69B8C] font-sans mt-0.5 line-clamp-1">
              {product.materials.selectedFinish}
            </p>
          )}
        </div>

        {/* Clean Minimalist Price Row */}
        <div className="flex items-baseline gap-2 pt-2 mt-auto">
          <span className="text-xs sm:text-sm font-sans text-[#A69B8C]">From</span>
          <span className="font-sans font-medium text-sm sm:text-base text-[#2C2926]">
            ₹{product.pricing.offer.toLocaleString('en-IN')}
          </span>
          {hasDiscount && (
            <span className="text-xs text-[#A69B8C] line-through font-normal">
              ₹{product.pricing.mrp.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
