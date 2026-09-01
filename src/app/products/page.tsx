'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, roomCategories } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { 
  Filter, 
  X, 
  RotateCcw, 
  SlidersHorizontal, 
  Grid2X2, 
  Grid3X3, 
  Star,
  Check
} from 'lucide-react';

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialRoom = searchParams.get('room');
  const searchQuery = searchParams.get('search');

  // Filter States
  const [selectedRooms, setSelectedRooms] = useState<string[]>(
    initialRoom ? [initialRoom] : []
  );
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedMinRating, setSelectedMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [viewMode, setViewMode] = useState<'3col' | '2col'>('3col');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available Filter Options
  const roomOptions = [
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining Room' },
    { id: 'study', label: 'Study & Work' },
    { id: 'storage', label: 'Storage' },
    { id: 'outdoor', label: 'Outdoor' },
  ];

  const styleOptions = [
    { id: 'scandinavian-modern', label: 'Scandinavian Modern' },
    { id: 'modern-minimalist', label: 'Modern Minimalist' },
    { id: 'warm-traditional', label: 'Warm Traditional' },
  ];

  const materialOptions = [
    { id: 'Solid Sheesham Wood', label: 'Solid Sheesham Wood' },
    { id: 'Natural Teak Finish', label: 'Natural Teak Finish' },
    { id: 'Kiln-Dried Hardwood', label: 'Kiln-Dried Hardwood' },
    { id: 'Breathable Linen', label: 'Breathable Linen Upholstery' },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Room match
      if (selectedRooms.length > 0) {
        const hasRoom = p.room.some((r) => selectedRooms.includes(r));
        if (!hasRoom) return false;
      }

      // Style match
      if (selectedStyles.length > 0 && !selectedStyles.includes(p.collection)) {
        return false;
      }

      // Material match
      if (selectedMaterials.length > 0) {
        const matchMat = selectedMaterials.some(
          (m) =>
            p.materials.frame.toLowerCase().includes(m.toLowerCase()) ||
            p.materials.finish.some((f) => m.toLowerCase().includes(f.toLowerCase()))
        );
        if (!matchMat) return false;
      }

      // Rating match
      if (selectedMinRating > 0 && p.seo.rating < selectedMinRating) {
        return false;
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
  }, [selectedRooms, selectedStyles, selectedMaterials, selectedMinRating, maxPrice, searchQuery]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') list.sort((a, b) => a.pricing.offer - b.pricing.offer);
    if (sortBy === 'price-high') list.sort((a, b) => b.pricing.offer - a.pricing.offer);
    if (sortBy === 'rating') list.sort((a, b) => b.seo.rating - a.seo.rating);
    if (sortBy === 'newest') list.sort((a, b) => (b.seo.isNewArrival ? 1 : 0) - (a.seo.isNewArrival ? 1 : 0));
    return list;
  }, [filteredProducts, sortBy]);

  const clearAllFilters = () => {
    setSelectedRooms([]);
    setSelectedStyles([]);
    setSelectedMaterials([]);
    setSelectedMinRating(0);
    setMaxPrice(60000);
  };

  const hasActiveFilters =
    selectedRooms.length > 0 ||
    selectedStyles.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedMinRating > 0 ||
    maxPrice < 60000;

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Catalogue', href: '/products' },
            ...(selectedRooms.length === 1
              ? [{ label: roomOptions.find((r) => r.id === selectedRooms[0])?.label || 'Room' }]
              : []),
          ]}
          className="mb-6"
        />

        {/* Page Header Banner */}
        <div className="mb-8 pb-6 border-b border-border-sand flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
              SOLID SHEESHAM COLLECTION
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-espresso mt-1">
              Handcrafted Furniture Catalogue
            </h1>
            <p className="text-soft-taupe text-sm mt-1 max-w-xl">
              100% kiln-dried solid hardwood pieces engineered for modern Indian apartments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-soft-taupe font-semibold bg-white px-3 py-1.5 rounded-btn border border-border-sand shadow-xs">
              Showing {sortedProducts.length} of {products.length} Pieces
            </span>
          </div>
        </div>

        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filter Panel (Desktop: 3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white rounded-card p-6 border border-border-sand shadow-card space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-border-sand">
              <span className="font-serif font-bold text-base text-espresso flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-antique-gold" /> Filter By
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-antique-gold hover:underline font-semibold"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Price Range Slider */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-espresso block mb-2">
                Max Price: <strong>₹{maxPrice.toLocaleString('en-IN')}</strong>
              </label>
              <input
                type="range"
                min="12000"
                max="60000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-espresso cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-soft-taupe mt-1 font-semibold">
                <span>₹12,000</span>
                <span>₹60,000</span>
              </div>
            </div>

            {/* Room Filter */}
            <div className="pt-3 border-t border-border-sand/60">
              <span className="text-xs font-bold uppercase tracking-wider text-espresso block mb-2.5">
                Room Space
              </span>
              <div className="space-y-2">
                {roomOptions.map((room) => (
                  <label key={room.id} className="flex items-center gap-2 text-xs text-espresso cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedRooms.includes(room.id)}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedRooms([...selectedRooms, room.id]);
                        else setSelectedRooms(selectedRooms.filter((r) => r !== room.id));
                      }}
                      className="rounded-btn text-espresso focus:ring-espresso"
                    />
                    <span>{room.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Design Style Filter */}
            <div className="pt-3 border-t border-border-sand/60">
              <span className="text-xs font-bold uppercase tracking-wider text-espresso block mb-2.5">
                Design Style
              </span>
              <div className="space-y-2">
                {styleOptions.map((style) => (
                  <label key={style.id} className="flex items-center gap-2 text-xs text-espresso cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedStyles.includes(style.id)}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedStyles([...selectedStyles, style.id]);
                        else setSelectedStyles(selectedStyles.filter((s) => s !== style.id));
                      }}
                      className="rounded-btn text-espresso focus:ring-espresso"
                    />
                    <span>{style.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material & Finish Filter */}
            <div className="pt-3 border-t border-border-sand/60">
              <span className="text-xs font-bold uppercase tracking-wider text-espresso block mb-2.5">
                Material &amp; Finish
              </span>
              <div className="space-y-2">
                {materialOptions.map((mat) => (
                  <label key={mat.id} className="flex items-center gap-2 text-xs text-espresso cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat.id)}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedMaterials([...selectedMaterials, mat.id]);
                        else setSelectedMaterials(selectedMaterials.filter((m) => m !== mat.id));
                      }}
                      className="rounded-btn text-espresso focus:ring-espresso"
                    />
                    <span>{mat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Consultation Box */}
            <div className="pt-4 border-t border-border-sand/60">
              <div className="p-3.5 bg-warm-alabaster rounded-card border border-border-sand space-y-2">
                <span className="text-[11px] font-bold text-charcoal block">Need Help Choosing?</span>
                <p className="text-[10px] text-mid-gray leading-snug">
                  Chat with our furniture specialist on WhatsApp for room planning.
                </p>
                <a
                  href="https://wa.me/917291962356?text=Hi%20Rumea%20Home!%20I'd%20like%20help%20choosing%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#48563A] hover:underline"
                >
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

          </aside>

          {/* Right Product Grid Area (Desktop: 9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Control Bar: Sort + Mobile Filter Toggle + Grid Toggle */}
            <div className="bg-white rounded-card p-3 sm:p-4 border border-border-sand shadow-card flex flex-wrap items-center justify-between gap-3">
              
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 bg-warm-ivory text-espresso text-xs font-semibold rounded-btn border border-border-sand"
              >
                <Filter className="w-4 h-4 text-antique-gold" />
                <span>Filters {hasActiveFilters ? '(Active)' : ''}</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-soft-taupe hidden sm:inline">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-warm-ivory border border-border-sand text-espresso font-semibold text-xs rounded-btn py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-espresso cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>

              {/* Grid Column Toggle */}
              <div className="hidden sm:flex items-center gap-1 border border-border-sand rounded-btn p-0.5 bg-warm-ivory">
                <button
                  onClick={() => setViewMode('3col')}
                  className={`p-1.5 rounded-btn ${viewMode === '3col' ? 'bg-white text-espresso shadow-xs' : 'text-soft-taupe hover:text-espresso'}`}
                  aria-label="3 column grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('2col')}
                  className={`p-1.5 rounded-btn ${viewMode === '2col' ? 'bg-white text-espresso shadow-xs' : 'text-soft-taupe hover:text-espresso'}`}
                  aria-label="2 column grid"
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Active Filter Pills (if any) */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-soft-taupe">Active Filters:</span>
                {selectedRooms.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-espresso text-xs rounded-full border border-border-sand shadow-xs font-medium"
                  >
                    {roomOptions.find((o) => o.id === r)?.label}
                    <button onClick={() => setSelectedRooms(selectedRooms.filter((x) => x !== r))}>
                      <X className="w-3 h-3 text-soft-taupe hover:text-espresso" />
                    </button>
                  </span>
                ))}

                {selectedStyles.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-espresso text-xs rounded-full border border-border-sand shadow-xs font-medium"
                  >
                    {styleOptions.find((o) => o.id === s)?.label}
                    <button onClick={() => setSelectedStyles(selectedStyles.filter((x) => x !== s))}>
                      <X className="w-3 h-3 text-soft-taupe hover:text-espresso" />
                    </button>
                  </span>
                ))}

                {maxPrice < 60000 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-espresso text-xs rounded-full border border-border-sand shadow-xs font-medium">
                    Under ₹{maxPrice.toLocaleString('en-IN')}
                    <button onClick={() => setMaxPrice(60000)}>
                      <X className="w-3 h-3 text-soft-taupe hover:text-espresso" />
                    </button>
                  </span>
                )}

                <button
                  onClick={clearAllFilters}
                  className="text-xs text-antique-gold font-bold underline ml-1"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-card border border-border-sand p-8">
                <p className="font-serif text-2xl text-espresso mb-2">No pieces found</p>
                <p className="text-xs text-soft-taupe max-w-sm mx-auto mb-6">
                  No furniture pieces match your selected filter criteria. Try adjusting price or room filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-espresso text-warm-ivory text-xs font-semibold rounded-btn shadow-warm"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-4 sm:gap-6 ${
                  viewMode === '3col'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {sortedProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} priority={idx < 6} />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-espresso/60 backdrop-blur-xs" onClick={() => setMobileFilterOpen(false)} />
          <div className="relative w-4/5 max-w-xs bg-warm-ivory h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-r border-border-sand">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-sand">
                <span className="font-serif font-bold text-base text-espresso">Filter Collection</span>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1.5 text-soft-taupe">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Price Filter */}
              <div className="py-4 border-b border-border-sand/60">
                <span className="text-xs font-bold uppercase text-espresso block mb-2">
                  Max Price: ₹{maxPrice.toLocaleString('en-IN')}
                </span>
                <input
                  type="range"
                  min="12000"
                  max="60000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-espresso"
                />
              </div>

              {/* Mobile Rooms */}
              <div className="py-4 border-b border-border-sand/60">
                <span className="text-xs font-bold uppercase text-espresso block mb-2">Room</span>
                <div className="space-y-2">
                  {roomOptions.map((r) => (
                    <label key={r.id} className="flex items-center gap-2 text-xs text-espresso">
                      <input
                        type="checkbox"
                        checked={selectedRooms.includes(r.id)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedRooms([...selectedRooms, r.id]);
                          else setSelectedRooms(selectedRooms.filter((x) => x !== r.id));
                        }}
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border-sand">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-espresso text-warm-ivory font-bold text-xs rounded-btn shadow-warm"
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

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-warm-ivory py-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-serif text-xl text-espresso">Loading collection...</p>
          </div>
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
