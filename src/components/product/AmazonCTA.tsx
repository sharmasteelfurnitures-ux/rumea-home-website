'use client';

import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Product } from '@/types/product';

interface AmazonCTAProps {
  product: Product;
  className?: string;
}

export default function AmazonCTA({ product, className = '' }: AmazonCTAProps) {
  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    price: product.pricing.offer,
    slug: product.slug,
  });

  const handleClick = () => {
    trackWhatsAppClick({
      source: 'amazon-cta-fallback',
      product_id: product.id,
      product_name: product.name,
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] font-sans font-semibold text-base md:text-lg rounded-xl shadow-warm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 text-[#D8C9B5]" />
        <span>Enquire &amp; Order on WhatsApp</span>
      </a>
      <p className="text-[11px] text-center text-[#A69B8C] flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#48563A]" />
        <span>Direct Workshop Pricing · 5-Year Frame Warranty · Free PAN India Delivery</span>
      </p>
    </div>
  );
}
