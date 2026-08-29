'use client';

import React from 'react';
import { Product } from '@/types/product';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { buildAmazonUrl } from '@/lib/amazon';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackAmazonClick, trackWhatsAppClick } from '@/lib/analytics';

interface StickyMobileBuyBarProps {
  product: Product;
}

export default function StickyMobileBuyBar({ product }: StickyMobileBuyBarProps) {
  const amazonUrl = buildAmazonUrl(product.conversion.amazonAsin, product.name);
  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    price: product.pricing.offer,
    slug: product.slug,
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-warm-sand/80 px-4 py-3 shadow-[0_-4px_16px_rgba(44,41,38,0.08)]">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        {/* Price & Discount Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-lg text-espresso tracking-tight">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-soft-taupe line-through">
              ₹{product.pricing.mrp.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-[10px] text-muted-olive font-semibold truncate">
            {product.pricing.discount}% OFF • Free Delivery
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
            className="p-3 bg-warm-sand text-espresso rounded-xl hover:bg-warm-sand/80 transition-colors flex items-center justify-center"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-espresso" />
          </a>

          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackAmazonClick({
                id: product.id,
                name: product.name,
                price: product.pricing.offer,
                category: product.category,
              })
            }
            className="px-5 py-3 bg-espresso text-warm-ivory font-display font-bold text-xs sm:text-sm rounded-xl shadow-warm flex items-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform"
          >
            <ShoppingCart className="w-4 h-4 text-warm-sand" />
            <span>Buy on Amazon</span>
          </a>
        </div>
      </div>
    </div>
  );
}
