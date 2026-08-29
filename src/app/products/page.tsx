'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { products } from '@/lib/products';
import { Room } from '@/types/product';
import { Filter, SlidersHorizontal, X, Search, Check } from 'lucide-react';
import { trackFilterApplied } from '@/lib/analytics';

export default function ProductsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(12);

  const rooms: { id: string; label: string }[] = [
    { id: 'all', label: 'All Rooms' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining Room' },
    { id: 'study', label: 'Study & Work' },
    { id: 'storage', label: 'Storage' },
    { id: 'outdoor', label: 'Outdoor' },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-15k', label: 'Under ₹15,000', min: 0, max: 15000 },
    { id: '15k-30k', label: '₹15,000 – ₹30,000', min: 15000, max: 30000 },
    { id: '30k-50k', label: '₹30,000 – ₹50,000', min: 30000, max: 50000 },
    { id: 'above-50k', label: '₹50,000+', min: 50000, max: 999999 },
  ];

  const styles = [
    { id: 'all', label: 'All Styles' },
    { id: 'scandinavian', label: 'Scandinavian' },
    { id: 'modern', label: 'Modern Minimalist' },
    { id: 'traditional', label: 'Warm Traditional' },
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Popularity & Rating' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'New Arrivals' },
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Room match
      if (selectedRoom !== 'all' && !item.room.includes(selectedRoom as Room)) {
        return false;
      }

      // Price match
      if (selectedPriceRange !== 'all') {
        const range = priceRanges.find((p) => p.id === selectedPriceRange);
        if (range && range.min !== undefined && range.max !== undefined && (item.pricing.offer < range.min || item.pricing.offer > range.max)) {
          return false;
        }
      }

      // Style match
      if (selectedStyle !== 'all' && item.collection !== selectedStyle) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTagline = item.tagline?.toLowerCase().includes(q) || false;
        if (!matchesName && !matchesCategory && !matchesTagline) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricing.offer - b.pricing.offer;
      if (sortBy === 'price-high') return b.pricing.offer - a.pricing.offer;
      if (sortBy === 'newest') return (b.seo.isNewArrival ? 1 : 0) - (a.seo.isNewArrival ? 1 : 0);
      // default: popularity / rating
      return b.seo.rating * b.seo.reviewCount - a.seo.rating * a.seo.reviewCount;
    });
  }, [selectedRoom, selectedPriceRange, selectedStyle, sortBy, searchQuery]);

  const activeFilterCount =
    (selectedRoom !== 'all' ? 1 : 0) +
    (selectedPriceRange !== 'all' ? 1 : 0) +
    (selectedStyle !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetFilters = () => {
    setSelectedRoom('all');
    setSelectedPriceRange('all');
    setSelectedStyle('all');
    setSearchQuery('');
  };

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Furniture Catalogue' }]} className="mb-4" />

        {/* Page Title & Intro */}
        <div className="mb-8">
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-espresso tracking-tight">
            Furniture for Real Indian Homes
          </h1>
          <p className="text-soft-taupe text-sm sm:text-base mt-2 max-w-2xl">
            Thoughtfully engineered solid wood furniture designed for everyday living, comfort, and decades of durability.
          </p>
        </div>

        {/* Top Control Bar: Search + Mobile Filter Trigger + Sort */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-warm-sand/50 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search bar inside catalog */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sofas, beds, dining tables, desks..."
              className="w-full pl-10 pr-4 py-2.5 bg-warm-ivory/60 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso placeholder-soft-taupe focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
            />
            <Search className="w-4 h-4 text-soft-taupe absolute left-3.5 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-soft-taupe hover:text-espresso"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-4 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-warm-sand text-espresso text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 flex-1 sm:flex-none justify-end">
              <span className="text-xs text-soft-taupe hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2.5 px-3 bg-warm-ivory/60 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso font-medium focus:outline-none focus:ring-2 focus:ring-espresso"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Pill Strip */}
        {activeFilterCount > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-soft-taupe font-medium mr-1">Active Filters:</span>
            {selectedRoom !== 'all' && (
              <button
                onClick={() => setSelectedRoom('all')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-warm-sand/40 hover:bg-warm-sand text-espresso rounded-full text-xs font-medium transition-colors"
              >
                <span>Room: {rooms.find((r) => r.id === selectedRoom)?.label}</span>
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedPriceRange !== 'all' && (
              <button
                onClick={() => setSelectedPriceRange('all')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-warm-sand/40 hover:bg-warm-sand text-espresso rounded-full text-xs font-medium transition-colors"
              >
                <span>Price: {priceRanges.find((p) => p.id === selectedPriceRange)?.label}</span>
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedStyle !== 'all' && (
              <button
                onClick={() => setSelectedStyle('all')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-warm-sand/40 hover:bg-warm-sand text-espresso rounded-full text-xs font-medium transition-colors"
              >
                <span>Style: {styles.find((s) => s.id === selectedStyle)?.label}</span>
                <X className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={resetFilters}
              className="text-xs text-muted-olive underline hover:text-espresso ml-2 font-medium"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Grid + Desktop Sidebar Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar (260px approx / 3 cols) */}
          <aside aria-label="Product Filters" className="hidden md:block md:col-span-3 bg-white p-6 rounded-2xl border border-warm-sand/50 shadow-card space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-warm-sand/40">
              <h3 className="font-display font-bold text-sm text-espresso uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-olive" /> Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-muted-olive hover:underline font-medium"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Room Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-3">
                Room Category
              </h4>
              <div className="space-y-1.5">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setSelectedRoom(room.id);
                      trackFilterApplied('room', room.id);
                    }}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg flex items-center justify-between transition-colors ${
                      selectedRoom === room.id
                        ? 'bg-espresso text-warm-ivory font-semibold'
                        : 'text-espresso/80 hover:bg-warm-sand/30'
                    }`}
                  >
                    <span>{room.label}</span>
                    {selectedRoom === room.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 border-t border-warm-sand/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-3">
                Budget / Price
              </h4>
              <div className="space-y-1.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => {
                      setSelectedPriceRange(range.id);
                      trackFilterApplied('price', range.id);
                    }}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg flex items-center justify-between transition-colors ${
                      selectedPriceRange === range.id
                        ? 'bg-espresso text-warm-ivory font-semibold'
                        : 'text-espresso/80 hover:bg-warm-sand/30'
                    }`}
                  >
                    <span>{range.label}</span>
                    {selectedPriceRange === range.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Collection Filter */}
            <div className="pt-4 border-t border-warm-sand/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-3">
                Design Style
              </h4>
              <div className="space-y-1.5">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setSelectedStyle(style.id);
                      trackFilterApplied('style', style.id);
                    }}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg flex items-center justify-between transition-colors ${
                      selectedStyle === style.id
                        ? 'bg-espresso text-warm-ivory font-semibold'
                        : 'text-espresso/80 hover:bg-warm-sand/30'
                    }`}
                  >
                    <span>{style.label}</span>
                    {selectedStyle === style.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Assurance Box */}
            <div className="pt-4 border-t border-warm-sand/30 bg-warm-ivory/60 p-3 rounded-xl text-[11px] text-soft-taupe leading-relaxed">
              <p className="font-semibold text-espresso mb-1">🛡️ The Rumea Promise</p>
              <p>Free pan-India delivery, 5-year frame warranty, and easy 30-day returns on all items.</p>
            </div>
          </aside>

          {/* Right Product Grid (9 cols) */}
          <main className="col-span-1 md:col-span-9">
            {/* Results Count Bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-soft-taupe font-medium">
                Showing <span className="font-semibold text-espresso">{Math.min(displayCount, filteredProducts.length)}</span> of{' '}
                <span className="font-semibold text-espresso">{filteredProducts.length}</span> pieces
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-warm-sand/50 shadow-card">
                <p className="text-3xl mb-3">🛋️</p>
                <h3 className="font-display font-bold text-lg text-espresso mb-2">No matching furniture found</h3>
                <p className="text-soft-taupe text-xs max-w-md mx-auto mb-6">
                  Try adjusting your search terms or clearing selected room and price filters to view our full collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {/* Product Grid: 2 columns on mobile, 3 columns on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.slice(0, displayCount).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                {displayCount < filteredProducts.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setDisplayCount((prev) => prev + 12)}
                      className="px-8 py-3.5 bg-white border border-warm-sand text-espresso hover:bg-espresso hover:text-warm-ivory text-sm font-semibold rounded-xl shadow-sm transition-all duration-200"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-4/5 max-w-xs bg-warm-ivory h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-warm-sand">
                <h3 className="font-display font-bold text-base text-espresso flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-olive" /> Filter Catalogue
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-soft-taupe hover:text-espresso"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Room */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-2">
                  Room Category
                </p>
                <div className="space-y-1">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-lg flex items-center justify-between ${
                        selectedRoom === room.id
                          ? 'bg-espresso text-warm-ivory font-semibold'
                          : 'text-espresso hover:bg-warm-sand/30'
                      }`}
                    >
                      <span>{room.label}</span>
                      {selectedRoom === room.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div className="mt-5 pt-4 border-t border-warm-sand/40">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-2">
                  Budget
                </p>
                <div className="space-y-1">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-lg flex items-center justify-between ${
                        selectedPriceRange === range.id
                          ? 'bg-espresso text-warm-ivory font-semibold'
                          : 'text-espresso hover:bg-warm-sand/30'
                      }`}
                    >
                      <span>{range.label}</span>
                      {selectedPriceRange === range.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Style */}
              <div className="mt-5 pt-4 border-t border-warm-sand/40">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-2">
                  Style
                </p>
                <div className="space-y-1">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-lg flex items-center justify-between ${
                        selectedStyle === style.id
                          ? 'bg-espresso text-warm-ivory font-semibold'
                          : 'text-espresso hover:bg-warm-sand/30'
                      }`}
                    >
                      <span>{style.label}</span>
                      {selectedStyle === style.id && <Check className="w-3.5 h-3.5 text-warm-sand" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-warm-sand space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl shadow"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2.5 text-soft-taupe text-xs font-medium hover:text-espresso"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
