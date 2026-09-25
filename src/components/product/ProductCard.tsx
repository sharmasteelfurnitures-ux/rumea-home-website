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
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-[#D8C9B5] overflow-hidden transition-all duration-300 hover:border-[#2C2926]/40 hover:shadow-card">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE7DC]">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images.primary}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </Link>

        {/* Brand badge in Muted Olive */}
        {product.seo?.badge && product.seo.badge !== 'Coming Soon' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-wider rounded-full bg-[#78806A] text-white shadow-xs">
              {product.seo.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Title in Plus Jakarta Sans */}
          <h3 className="font-heading font-semibold text-sm sm:text-base text-[#2C2926] line-clamp-2 leading-snug group-hover:text-[#78806A] transition-colors">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Pricing: Offer Price + Strikethrough MRP */}
          <div className="flex items-baseline gap-2 pt-2.5">
            <span className="font-heading font-bold text-base sm:text-lg text-[#2C2926]">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            {hasDiscount && (
              <span className="text-xs text-[#A69B8C] line-through font-normal">
                ₹{product.pricing.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Dimensions */}
          {product.dimensions?.width?.cm && product.dimensions?.depth?.cm && product.dimensions?.height?.cm && (
            <p className="text-[11px] text-[#78806A] font-medium pt-1">
              {product.dimensions.width.cm} × {product.dimensions.depth.cm} × {product.dimensions.height.cm} cm
            </p>
          )}
        </div>

        {/* Interaction Actions */}
        <div className="pt-4 mt-3 border-t border-[#D8C9B5]/50 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-semibold text-[#6B6962] hover:text-[#2C2926] transition-colors inline-flex items-center gap-1"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-full transition-all shadow-xs hover:shadow-sm"
          >
            <span>Shop on Amazon</span>
            <ExternalLink className="w-3 h-3 text-[#D8C9B5]" />
          </a>
        </div>

      </div>

    </div>
  );
}
