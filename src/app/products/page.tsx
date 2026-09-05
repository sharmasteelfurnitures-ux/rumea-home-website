'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { 
  SlidersHorizontal, 
  Grid2X2, 
  Grid3X3, 
  Sparkles,
  Compass,
  X,
  Check
} from 'lucide-react';

type CategoryFilter = 'all' | 'sofa' | 'bed' | 'dining' | 'coffee-table' | 'tv-unit' | 'study' | 'storage';

const categoryTabs: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Pieces' },
  { id: 'sofa', label: 'Sofas' },
  { id: 'bed', label: 'Beds' },
  { id: 'dining', label: 'Dining Sets' },
  { id: 'coffee-table', label: 'Coffee Tables' },
  { id: 'tv-unit', label: 'TV Units' },
  { id: 'study', label: 'Study Desks' },
  { id: 'storage', label: 'Storage & Wardrobes' },
];

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get('category');
  const paramRoom = searchParams.get('room');
  const searchQuery = searchParams.get('search');

  // Active Category Tab
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryFilter>(() => {
    if (paramCategory) {
      if (paramCategory === 'sofa' || paramCategory === 'sofas') return 'sofa';
      if (paramCategory === 'bed' || paramCategory === 'beds') return 'bed';
      if (paramCategory.includes('dining')) return 'dining';
      if (paramCategory.includes('coffee')) return 'coffee-table';
      if (paramCategory.includes('tv')) return 'tv-unit';
      if (paramCategory === 'desk' || paramCategory.includes('study')) return 'study';
      if (paramCategory.includes('storage') || paramCategory.includes('wardrobe') || paramCategory.includes('shoe')) return 'storage';
    }
    return 'all';
  });

  // Additional Filter States
  const [selectedRooms, setSelectedRooms] = useState<string[]>(paramRoom ? [paramRoom] : []);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(80000);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [viewMode, setViewMode] = useState<'3col' | '2col'>('3col');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available Filter Options
  const roomOptions = [
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining Room' },
    { id: 'study', label: 'Study & Work' },
  ];

  const finishOptions = [
    { id: 'Natural Teak', label: 'Natural Teak' },
    { id: 'Walnut', label: 'Rich Walnut' },
    { id: 'Mahogany', label: 'Warm Mahogany' },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Finish/Material match
      if (selectedMaterials.length > 0) {
        const matchesFinish = p.materials.finish.some((f) => selectedMaterials.includes(f));
        if (!matchesFinish) return false;
      }
      // Category Tab Filter
      if (activeCategoryTab !== 'all') {
        if (activeCategoryTab === 'sofa' && p.category !== 'sofa') return false;
        if (activeCategoryTab === 'bed' && p.category !== 'bed') return false;
        if (activeCategoryTab === 'dining' && p.category !== 'dining-table') return false;
        if (activeCategoryTab === 'coffee-table' && p.category !== 'coffee-table') return false;
        if (activeCategoryTab === 'tv-unit' && p.category !== 'tv-unit') return false;
        if (activeCategoryTab === 'study' && p.category !== 'desk') return false;
        if (
          activeCategoryTab === 'storage' &&
          !['storage-cabinet', 'wardrobe', 'shoe-rack', 'bookshelf', 'nightstand'].includes(p.category)
        ) {
          return false;
        }
      }

      // Room match
      if (selectedRooms.length > 0) {
        const hasRoom = p.room.some((r) => selectedRooms.includes(r));
        if (!hasRoom) return false;
      }

      // Price match
      if (p.pricing.offer > maxPrice) {
        return false;
      }

      // Search match
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchSearch =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.room.some((r) => r.toLowerCase().includes(q));
        if (!matchSearch) return false;
      }

      return true;
    });
  }, [activeCategoryTab, selectedRooms, maxPrice, searchQuery]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') list.sort((a, b) => a.pricing.offer - b.pricing.offer);
    if (sortBy === 'price-high') list.sort((a, b) => b.pricing.offer - a.pricing.offer);
    if (sortBy === 'newest') list.sort((a, b) => (b.seo.isNewArrival ? 1 : 0) - (a.seo.isNewArrival ? 1 : 0));
    return list;
  }, [filteredProducts, sortBy]);

  const clearAllFilters = () => {
    setActiveCategoryTab('all');
    setSelectedRooms([]);
    setMaxPrice(80000);
  };

  const hasActiveFilters =
    activeCategoryTab !== 'all' ||
    selectedRooms.length > 0 ||
    maxPrice < 80000;

  return (
    <div className="bg-[#F7F4EE] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'Catalogue', href: '/products' },
            ...(activeCategoryTab !== 'all'
              ? [{ label: categoryTabs.find((t) => t.id === activeCategoryTab)?.label || 'Category' }]
              : []),
          ]}
          className="mb-6"
        />

        {/* Page Header Banner */}
        <div className="mb-6 pb-6 border-b border-[#D8C9B5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#48563A] flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 100% SOLID SHEESHAM TIMBER
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-medium tracking-tight">
              Handcrafted Furniture Catalogue
            </h1>
            <p className="text-[#A69B8C] text-xs sm:text-sm mt-1.5 max-w-xl">
              Kiln-dried solid hardwood furniture with mortise &amp; tenon joinery for modern Indian homes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-[#2C2926] font-semibold bg-white px-4 py-2 rounded-btn border border-[#D8C9B5] shadow-xs">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>
        </div>

        {/* Horizontal Category Filter Tabs Bar */}
        <div className="mb-8 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {categoryTabs.map((tab) => {
              const isActive = activeCategoryTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategoryTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2C2926] text-[#F7F4EE] shadow-xs'
                      : 'bg-white text-[#2C2926] hover:bg-white/80 border border-[#D8C9B5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Control Bar: Sort + Room Filter Pills + Grid Toggle */}
        <div className="mb-6 bg-white rounded-card p-3 sm:p-4 border border-[#D8C9B5] shadow-xs flex flex-wrap items-center justify-between gap-3">
          
          {/* Quick Room Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[11px] uppercase font-semibold text-[#A69B8C] mr-1 hidden sm:inline">
              Room:
            </span>
            <button
              onClick={() => setSelectedRooms([])}
              className={`px-3 py-1.5 text-xs font-medium rounded-btn transition-all ${
                selectedRooms.length === 0
                  ? 'bg-[#48563A] text-white shadow-2xs'
                  : 'bg-[#F7F4EE] text-[#2C2926] hover:bg-white border border-[#D8C9B5]'
              }`}
            >
              All Rooms
            </button>
            {roomOptions.map((r) => {
              const isSelected = selectedRooms.includes(r.id);
              return (
                <button
                  key={r.id}
                  onClick={() => {
                    if (isSelected) setSelectedRooms([]);
                    else setSelectedRooms([r.id]);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-btn whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#48563A] text-white shadow-2xs'
                      : 'bg-[#F7F4EE] text-[#2C2926] hover:bg-white border border-[#D8C9B5]'
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#A69B8C] hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F7F4EE] border border-[#D8C9B5] text-[#2C2926] font-medium text-xs rounded-btn py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-[#2C2926] cursor-pointer"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Grid Column Toggle */}
            <div className="hidden sm:flex items-center gap-1 border border-[#D8C9B5] rounded-btn p-0.5 bg-[#F7F4EE]">
              <button
                onClick={() => setViewMode('3col')}
                className={`p-1.5 rounded-btn cursor-pointer ${viewMode === '3col' ? 'bg-white text-[#2C2926] shadow-2xs' : 'text-[#A69B8C] hover:text-[#2C2926]'}`}
                aria-label="3 or 4 column grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('2col')}
                className={`p-1.5 rounded-btn cursor-pointer ${viewMode === '2col' ? 'bg-white text-[#2C2926] shadow-2xs' : 'text-[#A69B8C] hover:text-[#2C2926]'}`}
                aria-label="2 column grid"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-card border border-[#D8C9B5] p-8">
            <Compass className="w-8 h-8 text-[#A69B8C] mx-auto mb-2" />
            <p className="font-serif text-2xl text-[#2C2926] mb-2">No products found</p>
            <p className="text-xs text-[#A69B8C] max-w-sm mx-auto mb-6">
              Try selecting another category filter or reset to browse all pieces.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-[#2C2926] text-[#F7F4EE] text-xs font-medium rounded-btn shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-4 sm:gap-6 ${
              viewMode === '3col'
                ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3'
            }`}
          >
            {sortedProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 6} />
            ))}
          </div>
        )}

      </div>

      {/* Mobile Filter & Sort Bottom Sheet Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-[#2C2926]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative w-full max-h-[85vh] bg-[#F7F4EE] rounded-t-3xl shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-t border-[#D8C9B5] animate-in slide-in-from-bottom duration-300">
            <div>
              {/* Header with Close */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8C9B5]">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2C2926]">Filter &amp; Sort</h3>
                  <p className="text-[11px] text-[#A69B8C]">Refine furniture specifications</p>
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-2 text-[#2C2926] hover:text-[#48563A] rounded-full hover:bg-white/80"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Sort Options */}
              <div className="py-4 border-b border-[#D8C9B5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C2926] block mb-2.5">
                  Sort By
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'popular', label: 'Popularity' },
                    { id: 'price-low', label: 'Price: Low-High' },
                    { id: 'price-high', label: 'Price: High-Low' },
                    { id: 'newest', label: 'Newest' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSortBy(opt.id)}
                      className={`py-2 px-3 text-xs font-medium rounded-btn border text-center transition-all ${
                        sortBy === opt.id
                          ? 'bg-[#2C2926] text-[#F7F4EE] border-[#2C2926] shadow-xs'
                          : 'bg-white text-[#2C2926] border-[#D8C9B5]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Filter */}
              <div className="py-4 border-b border-[#D8C9B5]/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2C2926]">
                    Max Price
                  </span>
                  <span className="text-xs font-bold text-[#48563A]">
                    ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80000"
                  step="2000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#2C2926] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#A69B8C] mt-1 font-medium">
                  <span>₹0</span>
                  <span>₹80,000</span>
                </div>
              </div>

              {/* Mobile Wood Finish Filter */}
              <div className="py-4 border-b border-[#D8C9B5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C2926] block mb-2.5">
                  Wood Finish
                </span>
                <div className="space-y-2">
                  {finishOptions.map((finish) => (
                    <label key={finish.id} className="flex items-center gap-2.5 text-xs text-[#2C2926] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(finish.id)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedMaterials([...selectedMaterials, finish.id]);
                          else setSelectedMaterials(selectedMaterials.filter((m) => m !== finish.id));
                        }}
                        className="rounded text-[#2C2926] focus:ring-[#2C2926]"
                      />
                      <span>{finish.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Rooms */}
              <div className="py-4 border-b border-[#D8C9B5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C2926] block mb-2.5">
                  Room Category
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {roomOptions.map((r) => {
                    const isChecked = selectedRooms.includes(r.id);
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => {
                          if (isChecked) setSelectedRooms(selectedRooms.filter((x) => x !== r.id));
                          else setSelectedRooms([...selectedRooms, r.id]);
                        }}
                        className={`py-2 px-3 text-xs font-medium rounded-btn border text-left flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#48563A] text-white border-[#48563A]'
                            : 'bg-white text-[#2C2926] border-[#D8C9B5]'
                        }`}
                      >
                        <span>{r.label}</span>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Clear + Apply */}
            <div className="pt-4 mt-2 border-t border-[#D8C9B5] flex gap-3">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="w-1/3 py-3 bg-white border border-[#D8C9B5] text-[#2C2926] font-medium text-xs rounded-btn"
                >
                  Reset
                </button>
              )}
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 bg-[#2C2926] text-[#F7F4EE] font-bold text-xs rounded-btn shadow-warm"
              >
                Apply Filters ({sortedProducts.length} Pieces)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom-Right WhatsApp Trigger */}
      <WhatsAppFloatingButton />
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <div className="h-4 w-48 bg-[#E6E0D5] rounded animate-pulse mb-6" />

        {/* Banner Skeleton */}
        <div className="mb-8 pb-6 border-b border-[#D8C9B5] space-y-3">
          <div className="h-3 w-32 bg-[#E6E0D5] rounded animate-pulse" />
          <div className="h-8 w-72 bg-[#E6E0D5] rounded animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-[#E6E0D5] rounded animate-pulse" />
        </div>

        {/* Grid Skeleton (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <div className="aspect-[4/3] w-full rounded-2xl sm:rounded-3xl bg-[#E6E0D5] animate-pulse" />
              <div className="h-4 w-3/4 bg-[#E6E0D5] rounded animate-pulse mt-1" />
              <div className="h-3 w-1/2 bg-[#E6E0D5] rounded animate-pulse" />
              <div className="h-5 w-1/3 bg-[#E6E0D5] rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductGridSkeleton />}>
      <ProductsPageContent />
    </Suspense>
  );
}
