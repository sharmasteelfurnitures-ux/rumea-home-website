'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const amazonUrl = product.conversion?.amazonUrl || 'https://www.amazon.in';
  const hasDiscount = product.pricing.mrp > product.pricing.offer;

  return (
    <div className="group flex flex-col h-full bg-white rounded-xl border border-[#DEDAD1] overflow-hidden transition-all duration-300 hover:border-[#1E1E1B]/30 hover:shadow-sm">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE1]">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images.primary}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </Link>

        {/* One small discreet label only when necessary */}
        {product.seo?.badge && product.seo.badge !== 'Coming Soon' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-wider rounded-md bg-[#1E1E1B] text-[#F7F5F0]">
              {product.seo.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <h3 className="font-sans font-medium text-sm text-[#1E1E1B] line-clamp-2 leading-snug group-hover:text-[#8A684A] transition-colors">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Pricing: Offer Price + Strikethrough MRP */}
          <div className="flex items-baseline gap-2 pt-2">
            <span className="font-sans font-semibold text-base text-[#1E1E1B]">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            {hasDiscount && (
              <span className="text-xs text-[#6B6962] line-through">
                ₹{product.pricing.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Dimensions */}
          {product.dimensions?.width?.cm && product.dimensions?.depth?.cm && product.dimensions?.height?.cm && (
            <p className="text-[11px] text-[#6B6962] font-mono pt-1.5">
              {product.dimensions.width.cm} × {product.dimensions.depth.cm} × {product.dimensions.height.cm} cm
            </p>
          )}
        </div>

        {/* Single Clear Interaction Button: Direct to Amazon India */}
        <div className="pt-4 mt-3 border-t border-[#DEDAD1]/60 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-medium text-[#6B6962] hover:text-[#1E1E1B] transition-colors inline-flex items-center gap-1"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#F7F5F0] hover:bg-[#1E1E1B] text-[#1E1E1B] hover:text-[#F7F5F0] text-xs font-semibold rounded-md border border-[#DEDAD1] hover:border-[#1E1E1B] transition-colors"
          >
            <span>Shop on Amazon</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

    </div>
  );
}
