'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Tag, ShoppingBag } from 'lucide-react';

export default function ShopTheLook() {
  const roomBundles = [
    {
      id: 'scandi-living',
      title: 'The Scandinavian Living Room Suite',
      subtitle: 'Complete setup for 2BHK/3BHK living rooms with warm natural teak tones.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      pieces: [
        { name: 'Oslo 3-Seater Sofa', price: 38999, slug: 'sofa-oslo-3seater' },
        { name: 'Kyoto Solid Coffee Table', price: 14999, slug: 'table-kyoto-coffee' },
        { name: 'Nordic Low-Profile TV Console', price: 21999, slug: 'tv-nordic-console' },
      ],
      bundleDiscount: 7500,
      roomHref: '/rooms/living-room',
    },
    {
      id: 'kyoto-bedroom',
      title: 'The Kyoto Solid Timber Sanctuary',
      subtitle: 'Generational king-size platform bed with dual matching nightstands.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      pieces: [
        { name: 'Kyoto King Size Platform Bed', price: 42999, slug: 'bed-kyoto-king' },
        { name: 'Artisan Solid Nightstand (Pair)', price: 16999, slug: 'nightstand-artisan-pair' },
        { name: 'Nordic 4-Drawer Wardrobe Dresser', price: 28999, slug: 'dresser-nordic-4d' },
      ],
      bundleDiscount: 8500,
      roomHref: '/rooms/bedroom',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const bundle = roomBundles[activeTab];

  const totalIndividualPrice = bundle.pieces.reduce((acc, curr) => acc + curr.price, 0);
  const bundlePrice = totalIndividualPrice - bundle.bundleDiscount;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-alabaster text-charcoal border border-border-sand text-[11px] font-bold uppercase tracking-widest rounded-btn mb-3">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" /> COORDINATED ROOM SETS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Shop The Complete Room Look
            </h2>
            <p className="text-mid-gray text-sm sm:text-base mt-2 max-w-xl">
              Designer-coordinated solid Sheesham suites designed to fit harmoniously in modern Indian layouts with instant bundle savings.
            </p>
          </div>

          {/* Room Tabs */}
          <div className="flex items-center gap-2 bg-warm-alabaster p-1 rounded-btn border border-border-sand">
            {roomBundles.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-xs font-bold rounded-btn transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-white text-charcoal shadow-xs'
                    : 'text-mid-gray hover:text-charcoal'
                }`}
              >
                {b.title.split(' ')[1]} Set
              </button>
            ))}
          </div>
        </div>

        {/* Room Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-offwhite rounded-card border border-border-sand p-6 sm:p-8 shadow-card">
          
          {/* Left: Lifestyle Photo (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-btn overflow-hidden border border-border-sand shadow-inner bg-warm-alabaster">
            <Image
              src={bundle.image}
              alt={bundle.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-charcoal/90 text-white text-[11px] font-bold px-3 py-1 rounded-btn backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
              <Tag className="w-3.5 h-3.5 text-amber-300" /> Save ₹{bundle.bundleDiscount.toLocaleString('en-IN')} on Bundle
            </div>
          </div>

          {/* Right: Bundle Details & Included Pieces (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-charcoal leading-snug">
                {bundle.title}
              </h3>
              <p className="text-mid-gray text-xs sm:text-sm mt-1.5 leading-relaxed">
                {bundle.subtitle}
              </p>
            </div>

            {/* Included Pieces List */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal block">
                Included in This 3-Piece Suite:
              </span>
              {bundle.pieces.map((piece, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-white rounded-btn border border-border-sand text-xs shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span className="font-semibold text-charcoal">{piece.name}</span>
                  </div>
                  <span className="text-mid-gray font-serif">₹{piece.price.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            {/* Pricing Summary */}
            <div className="pt-4 border-t border-border-sand/70 space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-mid-gray block">Coordinated Suite Price:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif font-bold text-2xl text-charcoal">
                      ₹{bundlePrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-mid-gray line-through">
                      ₹{totalIndividualPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-btn">
                  Save ₹{bundle.bundleDiscount.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href={bundle.roomHref}
                  className="flex-1 py-3 px-6 bg-terracotta hover:bg-[#b54a34] text-white font-bold text-xs rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Complete Suite</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
