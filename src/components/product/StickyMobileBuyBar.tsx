'use client';

import React from 'react';
import { Product } from '@/types/product';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick, trackAmazonClick } from '@/lib/analytics';

interface StickyMobileBuyBarProps {
  product: Product;
}

export default function StickyMobileBuyBar({ product }: StickyMobileBuyBarProps) {
  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    price: product.pricing.offer,
    slug: product.slug,
  });

  const isComingSoon = product.seo?.badge === 'Coming Soon';
  const amazonUrl = product.conversion?.amazonUrl;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#D8C9B5] px-3 sm:px-4 py-2.5 shadow-[0_-4px_16px_rgba(44,41,38,0.08)]">
      <div className="flex items-center justify-between gap-2.5 max-w-lg mx-auto">
        
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
            {product.pricing.discount}% OFF • Free Delivery
          </p>
        </div>

        {/* Action CTAs: Olive Green WhatsApp Fit Advice + Dark Brown Amazon Purchase */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'pdp-sticky-bar', product_id: product.id, product_name: product.name })}
            className="p-2.5 bg-[#78806A] hover:bg-[#68705B] text-white rounded-full shadow-xs active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Ask about room fit on WhatsApp"
            title="WhatsApp Room Fit Check"
          >
            <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
          </a>

          {!isComingSoon && amazonUrl ? (
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
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-full shadow-xs active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Shop on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D8C9B5]" />
            </a>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'pdp-sticky-bar', product_id: product.id, product_name: product.name })}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#78806A] hover:bg-[#68705B] text-white text-xs font-semibold rounded-full shadow-warm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Inquire on WhatsApp</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
