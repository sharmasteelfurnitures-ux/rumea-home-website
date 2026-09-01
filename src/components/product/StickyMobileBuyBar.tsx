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
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#D8C9B5] px-4 py-2.5 shadow-[0_-4px_16px_rgba(44,41,38,0.08)]">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        
        {/* Price & Discount Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif font-semibold text-lg text-[#2C2926] tracking-tight">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#A69B8C] line-through font-normal">
              ₹{product.pricing.mrp.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-[10px] text-[#48563A] font-medium truncate">
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
            className="p-2.5 bg-[#F7F4EE] text-[#2C2926] border border-[#D8C9B5] rounded-btn hover:bg-[#D8C9B5]/20 transition-colors flex items-center justify-center"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#48563A]" />
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
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2C2926] text-[#F7F4EE] text-xs font-medium rounded-btn shadow-warm hover:bg-[#3D3632] active:scale-95 transition-all"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-[#D8C9B5]" />
            <span>Buy on Amazon</span>
          </a>
        </div>

      </div>
    </div>
  );
}
