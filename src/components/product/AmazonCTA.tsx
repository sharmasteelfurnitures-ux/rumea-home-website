'use client';

import React from 'react';
import { ShoppingCart, ExternalLink, ShieldCheck } from 'lucide-react';
import { buildAmazonUrl } from '@/lib/amazon';
import { trackAmazonClick } from '@/lib/analytics';
import { Product } from '@/types/product';

interface AmazonCTAProps {
  product: Product;
  className?: string;
}

export default function AmazonCTA({ product, className = '' }: AmazonCTAProps) {
  const amazonUrl = buildAmazonUrl(product.conversion.amazonAsin, product.name);

  const handleClick = () => {
    trackAmazonClick({
      id: product.id,
      name: product.name,
      price: product.pricing.offer,
      category: product.category,
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <a
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-espresso text-warm-ivory font-display font-semibold text-base md:text-lg rounded-xl shadow-warm hover:bg-espresso/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
      >
        <ShoppingCart className="w-5 h-5 text-warm-sand" />
        <span>Buy Now on Amazon</span>
        <ExternalLink className="w-4 h-4 text-warm-sand/80 group-hover:translate-x-0.5 transition-transform" />
      </a>
      <p className="text-[11px] text-center text-soft-taupe flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-muted-olive" />
        <span>Opens Amazon.in · Official warranty & fulfilled by Rumea Home</span>
      </p>
    </div>
  );
}
