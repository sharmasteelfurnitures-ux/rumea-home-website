'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShieldCheck, Truck, ShoppingCart, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { Product } from '@/types/product';
import { buildAmazonUrl } from '@/lib/amazon';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackAmazonClick, trackWhatsAppClick } from '@/lib/analytics';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

  const amazonUrl = buildAmazonUrl(product.conversion.amazonAsin, product.name);
  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    price: product.pricing.offer,
    slug: product.slug,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-warm-ivory rounded-card overflow-hidden shadow-2xl border border-border-sand z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-espresso hover:text-antique-gold bg-white/80 backdrop-blur-xs rounded-full shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left: 4/3 Aspect Ratio Image Viewport */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-ivory-dark border border-border-sand">
              <Image
                src={product.images.primary}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-espresso text-warm-ivory text-[10px] font-semibold uppercase tracking-wider rounded-btn">
                100% Solid Sheesham
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-soft-taupe font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-antique-gold" /> 5-Year Frame Warranty
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-antique-gold" /> Free Delivery
              </span>
            </div>
          </div>

          {/* Right: Product Details & CTAs */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-antique-gold">
                {product.category.replace('-', ' ')}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-charcoal mt-0.5 leading-snug">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="font-serif font-bold text-2xl text-espresso">
                  ₹{product.pricing.offer.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-soft-taupe line-through">
                  ₹{product.pricing.mrp.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-antique-gold bg-warm-sand/30 px-2 py-0.5 rounded-btn">
                  {product.pricing.discount}% OFF
                </span>
              </div>

              {/* Tagline / USP */}
              <p className="text-xs text-soft-taupe mt-2 leading-relaxed line-clamp-2">
                {product.tagline || 'Crafted with master mortise & tenon joinery and durable kiln-dried hardwood.'}
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-espresso text-warm-ivory text-xs font-semibold rounded-btn shadow-warm hover:bg-espresso/90 transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-warm-sand" />
                <span>Buy Now on Amazon</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-espresso border border-border-sand text-xs font-semibold rounded-btn hover:bg-warm-sand/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-antique-gold" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="text-center pt-1">
                <Link
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="text-xs font-semibold text-antique-gold hover:text-espresso inline-flex items-center gap-1"
                >
                  <span>View Full Dimensions & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
