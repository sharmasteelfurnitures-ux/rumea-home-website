'use client';

import React from 'react';
import { Product } from '@/types/product';
import { MessageCircle, Phone } from 'lucide-react';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

interface StickyMobileBuyBarProps {
  product: Product;
}

export default function StickyMobileBuyBar({ product }: StickyMobileBuyBarProps) {
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
            <span className="font-sans font-bold text-base sm:text-lg text-[#2C2926] tracking-tight">
              ₹{product.pricing.offer.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#A69B8C] line-through font-normal">
              ₹{product.pricing.mrp.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-[10px] text-[#48563A] font-medium truncate">
            {product.pricing.discount}% OFF • Free PAN India Delivery
          </p>
        </div>

        {/* Action CTAs: Phone Icon Button + WhatsApp Main Pill */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+917291962356"
            className="p-2.5 bg-[#F7F4EE] text-[#2C2926] border border-[#D8C9B5] rounded-btn hover:bg-[#D8C9B5]/20 transition-colors flex items-center justify-center"
            aria-label="Call for sizing and customization"
            title="Call Support"
          >
            <Phone className="w-4 h-4 text-[#48563A]" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'pdp-sticky-bar', product_id: product.id, product_name: product.name })}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] text-xs font-semibold rounded-btn shadow-warm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
