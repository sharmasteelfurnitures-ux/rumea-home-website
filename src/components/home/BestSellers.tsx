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
  const smoothEase = [0.16, 1, 0.3, 1];

  // Filter out any coming-soon or unpurchasable products
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

    // Fallback if filter returns less than 4 items: show available items
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Simple Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806A] block mb-2">
              CURATED CATALOGUE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2C2926] font-bold tracking-tight">
              Everyday pieces, thoughtfully designed.
            </h2>
          </div>

          {/* Simple Clean Tabs with Animated Underline */}
          <div className="flex items-center gap-1.5 border-b border-[#DEDAD1] self-start sm:self-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2.5 px-3 text-xs sm:text-sm font-sans transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#2C2926] font-semibold'
                      : 'text-[#6B6962] hover:text-[#2C2926] font-normal'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-[#2C2926]"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 4 Products Grid with Staggered Entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: smoothEase }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Products Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent hover:bg-[#2C2926] border border-[#DEDAD1] hover:border-[#2C2926] text-[#2C2926] hover:text-[#F7F5F0] text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
