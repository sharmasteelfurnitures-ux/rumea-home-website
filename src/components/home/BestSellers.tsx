'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

type TabType = 'bestsellers' | 'new-arrivals' | 'all';

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState<TabType>('bestsellers');

  // Filter available products
  const availableProducts = useMemo(() => {
    return products.filter((p) => p.conversion?.inStock && p.seo?.badge !== 'Coming Soon');
  }, []);

  const displayedProducts = useMemo(() => {
    let list = [...availableProducts];

    if (activeTab === 'bestsellers') {
      list = list.filter((p) => p.seo?.badge === 'Best Seller');
    } else if (activeTab === 'new-arrivals') {
      list = list.filter((p) => p.seo?.badge === 'New Arrival' || p.seo?.isNewArrival);
    }

    if (list.length === 0) {
      list = availableProducts;
    }

    return list.slice(0, 4);
  }, [activeTab, availableProducts]);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'bestsellers', label: 'Best sellers' },
    { id: 'new-arrivals', label: 'New arrivals' },
    { id: 'all', label: 'All pieces' },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Architectural headline with brand typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight">
              Most Loved
            </h2>
            <p className="text-sm text-content-muted font-sans mt-2">
              Practical, space-saving essentials for modern Indian apartments.
            </p>
          </div>

          {/* Clean minimal tabs */}
          <div className="flex items-center gap-1.5 border-b border-border self-start sm:self-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 px-3 text-xs sm:text-sm font-sans transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-content-muted hover:text-primary font-normal'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-primary"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Products Grid (2 cols mobile, 4 cols desktop) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {displayedProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 2} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent hover:bg-primary text-primary hover:text-primary-text border border-primary text-xs font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
          >
            <span>Shop all pieces</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
