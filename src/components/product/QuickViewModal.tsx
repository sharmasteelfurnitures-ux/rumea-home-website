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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-surface-page rounded-card overflow-hidden shadow-2xl border border-border z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-primary hover:text-accent bg-surface/80 backdrop-blur-xs rounded-full shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left: 4/3 Aspect Ratio Image Viewport */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-surface border border-border">
              <Image
                src={product.images.primary}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary text-primary-text text-[10px] font-semibold uppercase tracking-wider rounded-btn">
                Rumea Home
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-content-muted font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Rust-Resistant Build
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-accent" /> Ships via Amazon India
              </span>
            </div>
          </div>

          {/* Right: Product Details & CTAs */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-accent">
                {product.category.replace('-', ' ')}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-primary mt-0.5 leading-snug">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="font-serif font-bold text-2xl text-primary">
                  ₹{product.pricing.offer.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-content-muted line-through">
                  ₹{product.pricing.mrp.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-accent bg-sand/30 px-2 py-0.5 rounded-btn">
                  {product.pricing.discount}% OFF
                </span>
              </div>

              {/* Tagline / USP */}
              <p className="text-xs text-content-muted mt-2 leading-relaxed line-clamp-2">
                {product.tagline || 'Practical, space-saving furniture for modern Indian homes.'}
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-text text-xs font-semibold rounded-btn shadow-warm hover:bg-primary-hover transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-sand" />
                <span>Buy Now on Amazon</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-surface text-primary border border-border text-xs font-semibold rounded-btn hover:bg-sand/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="text-center pt-1">
                <Link
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="text-xs font-semibold text-accent hover:text-primary inline-flex items-center gap-1"
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
