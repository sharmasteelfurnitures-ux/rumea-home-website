'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import Badge from '@/components/ui/Badge';
import PriceDisplay from '@/components/ui/PriceDisplay';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import { ArrowRight, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-warm-sand/60 hover:border-warm-sand shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Standardized 4:3 Image Container */}
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
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.seo.badge && (
            <Badge variant="olive" className="shadow-sm text-[10px]">
              {product.seo.badge}
            </Badge>
          )}
          {product.pricing.discount >= 20 && !product.seo.badge && (
            <Badge variant="sand" className="shadow-sm text-[10px]">
              {product.pricing.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Wishlist Button Top Right */}
        <div className="absolute top-2.5 right-2.5 z-10 bg-white/90 backdrop-blur-xs rounded-full shadow-sm hover:bg-white transition-colors">
          <WishlistIcon productName={product.name} className="w-4 h-4 text-soft-taupe group-hover:text-espresso" />
        </div>

        {/* Subtle Rating Pill */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-espresso/80 backdrop-blur-xs text-warm-ivory rounded-md flex items-center gap-1 text-[10px] font-medium">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{product.seo.rating}</span>
          <span className="text-warm-sand/80">({product.seo.reviewCount})</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Finish Header */}
          <div className="flex items-center justify-between text-[11px] text-soft-taupe uppercase tracking-widest font-body font-semibold mb-1.5">
            <span>{product.category.replace('-', ' ')}</span>
            <span className="text-muted-olive capitalize font-normal text-[10px] truncate max-w-[100px]">
              {product.materials.selectedFinish}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-display font-semibold text-sm sm:text-base text-espresso line-clamp-2 leading-snug group-hover:text-muted-olive transition-colors mb-3">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
        </div>

        <div>
          {/* Price Display */}
          <div className="pt-1 mb-3">
            <PriceDisplay
              offerPrice={product.pricing.offer}
              mrp={product.pricing.mrp}
              discount={product.pricing.discount}
              size="md"
            />
          </div>

          {/* Action Link */}
          <div className="pt-2.5 border-t border-warm-sand/30 flex items-center justify-between">
            <span className="text-[11px] text-soft-taupe hidden sm:inline">
              🚚 Free Pan-India Delivery
            </span>
            <Link
              href={`/products/${product.slug}`}
              className="text-xs font-semibold text-muted-olive group-hover:text-espresso flex items-center gap-1 transition-colors ml-auto"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
