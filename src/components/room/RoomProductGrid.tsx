'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';
import { SlidersHorizontal, ArrowUpDown, X, Check, Sparkles } from 'lucide-react';

interface RoomProductGridProps {
  products: Product[];
  roomName: string;
}

export default function RoomProductGrid({ products, roomName }: RoomProductGridProps) {
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(80000);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const finishOptions = [
    { id: 'Natural Teak', label: 'Natural Teak' },
    { id: 'Walnut', label: 'Walnut' },
    { id: 'Mahogany', label: 'Mahogany' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Popularity' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedFinishes.length > 0) {
        const matchFinish = selectedFinishes.some((finish) =>
          p.materials.finish.some((f) => f.toLowerCase().includes(finish.toLowerCase()))
        );
        if (!matchFinish) return false;
      }

      if (p.pricing.offer > maxPrice) {
        return false;
      }

      return true;
    });
  }, [products, selectedFinishes, maxPrice]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') list.sort((a, b) => a.pricing.offer - b.pricing.offer);
    if (sortBy === 'price-high') list.sort((a, b) => b.pricing.offer - a.pricing.offer);
    if (sortBy === 'popular') list.sort((a, b) => (b.seo.rating || 0) - (a.seo.rating || 0));
    if (sortBy === 'newest') list.sort((a, b) => (b.seo.isNewArrival ? 1 : 0) - (a.seo.isNewArrival ? 1 : 0));
    return list;
  }, [filteredProducts, sortBy]);

  const clearAllFilters = () => {
    setSelectedFinishes([]);
    setMaxPrice(80000);
  };

  const hasActiveFilters = selectedFinishes.length > 0 || maxPrice < 80000;
  const activeFilterCount = (selectedFinishes.length > 0 ? selectedFinishes.length : 0) + (maxPrice < 80000 ? 1 : 0);

  const toggleFinish = (finish: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish) ? prev.filter((f) => f !== finish) : [...prev, finish]
    );
  };

  return (
    <div className="mb-16">
      {/* Sticky Bar for Mobile & Desktop Filter Controls */}
      <div className="sticky top-16 z-30 bg-warm-ivory/95 backdrop-blur-md py-3.5 px-4 rounded-2xl border border-warm-sand/50 shadow-sm mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-espresso text-warm-ivory rounded-xl text-xs font-semibold shadow-sm hover:bg-espresso/90 transition-all active:scale-95"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-warm-sand text-espresso rounded-full text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <span className="text-xs text-soft-taupe font-medium hidden sm:inline">
              Showing <strong className="text-espresso font-semibold">{sortedProducts.length}</strong> of {products.length} {roomName} pieces
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-soft-taupe hidden sm:block" />
              <span className="text-xs text-soft-taupe font-medium hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-warm-sand/70 rounded-xl px-3 py-1.5 text-xs text-espresso font-medium focus:outline-none focus:ring-1 focus:ring-muted-olive cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Pill Row */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-warm-sand/40">
            <span className="text-[11px] text-soft-taupe font-medium">Active:</span>
            {selectedFinishes.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-warm-sand/80 text-espresso rounded-lg text-xs font-medium"
              >
                {f}
                <button
                  onClick={() => toggleFinish(f)}
                  className="text-soft-taupe hover:text-espresso"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {maxPrice < 80000 && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-warm-sand/80 text-espresso rounded-lg text-xs font-medium">
                Under ₹{maxPrice.toLocaleString('en-IN')}
                <button
                  onClick={() => setMaxPrice(80000)}
                  className="text-soft-taupe hover:text-espresso"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs text-muted-olive hover:underline font-medium ml-1"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-warm-sand/60 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-espresso uppercase tracking-wider">
                Filter Selection
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-muted-olive hover:underline font-medium"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center text-xs font-medium text-espresso mb-2">
                <span>Max Price</span>
                <span className="font-bold text-muted-olive">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="80000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-muted-olive cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-soft-taupe mt-1">
                <span>₹0</span>
                <span>₹80,000</span>
              </div>
            </div>

            {/* Wood Finish Filter */}
            <div>
              <h4 className="text-xs font-semibold text-espresso uppercase tracking-wider mb-3">
                Wood Finish
              </h4>
              <div className="space-y-2">
                {finishOptions.map((opt) => {
                  const isChecked = selectedFinishes.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleFinish(opt.id)}
                      className="w-full flex items-center justify-between text-xs py-1.5 text-left text-espresso hover:text-muted-olive transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-espresso border-espresso text-warm-ivory'
                              : 'border-warm-sand bg-warm-ivory'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{opt.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Product Listing Grid */}
        <div className="lg:col-span-3">
          {sortedProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-warm-sand/60">
              <Sparkles className="w-8 h-8 text-soft-taupe mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-espresso mb-1">
                No products match these filters
              </h3>
              <p className="text-xs text-soft-taupe mb-5 max-w-sm mx-auto">
                Try adjusting the price slider or clearing wood finish selections.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 bg-espresso text-warm-ivory rounded-xl text-xs font-bold hover:bg-espresso/90 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer (Bottom Sheet) */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-warm-sand/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-espresso" />
                <h3 className="font-display font-bold text-base text-espresso">Filters</h3>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 rounded-full hover:bg-warm-sand/20 text-soft-taupe hover:text-espresso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center text-sm font-medium text-espresso mb-2">
                  <span>Price Range</span>
                  <span className="font-bold text-muted-olive">
                    Up to ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-muted-olive cursor-pointer"
                />
                <div className="flex justify-between text-xs text-soft-taupe mt-1">
                  <span>₹0</span>
                  <span>₹80,000</span>
                </div>
              </div>

              {/* Wood Finish Filter */}
              <div>
                <h4 className="text-xs font-semibold text-espresso uppercase tracking-wider mb-3">
                  Wood Finish
                </h4>
                <div className="space-y-3">
                  {finishOptions.map((opt) => {
                    const isChecked = selectedFinishes.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleFinish(opt.id)}
                        className="w-full flex items-center justify-between text-sm py-1.5 text-left text-espresso"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-espresso border-espresso text-warm-ivory'
                                : 'border-warm-sand bg-warm-ivory'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span>{opt.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-warm-sand/50 bg-warm-ivory flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-warm-sand rounded-xl text-xs font-bold text-espresso hover:bg-white transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 bg-espresso text-warm-ivory rounded-xl text-xs font-bold hover:bg-espresso/90 transition-colors shadow-sm"
              >
                Show Results ({sortedProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
