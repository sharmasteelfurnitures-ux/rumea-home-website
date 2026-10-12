'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { products } from '@/lib/products';
import { ArrowRight, Sparkles, Flame, Grid, Compass } from 'lucide-react';

type TabType = 'bestsellers' | 'new-arrivals' | 'all';
type RoomFilter = 'all' | 'storage' | 'study' | 'dining-room' | 'living-room';

export default function NewArrivalsAndBestSellers() {
  const [activeTab, setActiveTab] = useState<TabType>('bestsellers');
  const [activeRoom, setActiveRoom] = useState<RoomFilter>('all');

  // Filter products based on active tab and room
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Strict Tab Filter
    if (activeTab === 'bestsellers') {
      list = list.filter((p) => p.seo.badge === 'Best Seller');
    } else if (activeTab === 'new-arrivals') {
      list = list.filter((p) => p.seo.badge === 'New Arrival' || p.seo.isNewArrival);
    }

    // Room Filter
    if (activeRoom !== 'all') {
      list = list.filter((p) => p.room.includes(activeRoom as any));
    }

    return list.slice(0, 8);
  }, [activeTab, activeRoom]);

  const tabs: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'bestsellers', label: 'Best Sellers', icon: Flame },
    { id: 'new-arrivals', label: 'New Arrivals', icon: Sparkles },
    { id: 'all', label: 'All Pieces', icon: Grid },
  ];

  const roomFilters: { id: RoomFilter; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'storage', label: 'Entryway' },
    { id: 'study', label: 'Study & Work' },
    { id: 'dining-room', label: 'Dining' },
    { id: 'living-room', label: 'Living' },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-page subtle-grain-texture border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> EVERYDAY LIVING ESSENTIALS
            </span>
            <AnimatedHeading
              text="Practical Essentials for Everyday Living"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-tight"
            />
            <p className="text-content-muted text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Space-saving shoe storage, foldable tables, and sturdy seating proportioned for 2BHK and 3BHK flats.
            </p>
          </div>

          {/* Primary View Switcher: Best Sellers / New Arrivals / All Curated */}
          <div className="flex items-center gap-1.5 p-1.5 bg-surface border border-border rounded-xl shadow-xs self-start lg:self-end">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'text-primary-text'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillTab"
                      className="absolute inset-0 bg-primary rounded-lg shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sand' : 'text-accent'}`} />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Room Filter Pills */}
        <div className="flex items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-border/60 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 flex-nowrap">
            <span className="text-[11px] uppercase tracking-wider text-content-muted font-medium mr-1 hidden sm:inline-block">
              Filter:
            </span>
            {roomFilters.map((rf) => {
              const isSelected = activeRoom === rf.id;
              return (
                <button
                  key={rf.id}
                  onClick={() => setActiveRoom(rf.id)}
                  className={`px-3.5 py-1.5 rounded-btn text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? 'bg-accent text-accent-text shadow-2xs'
                      : 'bg-surface border border-border text-primary hover:border-primary'
                  }`}
                >
                  {rf.label}
                </button>
              );
            })}
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap group ml-auto"
          >
            <span>Explore All Pieces</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Col Desktop, 2-Col Mobile Product Grid */}
        <div className="pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeRoom}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                >
                  <ProductCard product={product} priority={idx < 4} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-surface rounded-card border border-border p-8">
              <Compass className="w-8 h-8 text-content-muted mx-auto mb-2" />
              <p className="font-serif text-lg text-primary">No products found in this category</p>
              <p className="text-xs text-content-muted mt-1">Try selecting another room filter or reset to &apos;All Items&apos;.</p>
              <button
                onClick={() => setActiveRoom('all')}
                className="mt-4 px-4 py-2 bg-primary text-primary-text rounded-btn text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA Banner with Workshop Direct Value Proposition */}
        <ScrollReveal delay={100}>
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-surface rounded-2xl border border-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif font-medium text-lg sm:text-xl text-primary">
                Looking for specific dimensions or floor plan advice?
              </p>
              <p className="text-xs sm:text-sm text-content-muted mt-1">
                Rust-Resistant Build • Easy Assembly • Sized for Indian Homes • Ships via Amazon India
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/products"
                className="btn-fill-anim w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-text text-xs font-medium rounded-btn transition-colors shadow-xs"
              >
                <span className="relative z-10">Browse Full Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 text-sand relative z-10" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
