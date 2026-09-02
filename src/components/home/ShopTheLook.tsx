'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronRight, ShoppingBag } from 'lucide-react';

interface HotspotProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  discountPercent: number;
  slug: string;
  image: string;
  // Pin coordinate percentage on image (0 to 100)
  pinX: number;
  pinY: number;
  // Popup card orientation preference
  popupAlign?: 'left' | 'right' | 'top' | 'bottom';
}

interface RoomScene {
  id: string;
  title: string;
  roomType: string;
  image: string;
  description: string;
  bundleDiscount: number;
  products: HotspotProduct[];
}

export default function ShopTheLook() {
  const roomScenes: RoomScene[] = [
    {
      id: 'living-room-scandi',
      title: 'The Scandinavian Living Room Look',
      roomType: 'Living Room',
      description: 'Coordinated solid Sheesham living ensemble — featuring our 3-seater sofa, low coffee table, and slatted almirah console.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85',
      bundleDiscount: 7500,
      products: [
        {
          id: 'sofa-oslo',
          name: 'Oslo 3-Seater Solid Sheesham Sofa',
          category: 'Sofa',
          price: 38999,
          mrp: 45999,
          discountPercent: 15,
          slug: 'sofa-oslo-3seater',
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
          pinX: 42,
          pinY: 66,
          popupAlign: 'top',
        },
        {
          id: 'table-kyoto',
          name: 'Kyoto Solid Wood Low Coffee Table',
          category: 'Coffee Table',
          price: 14499,
          mrp: 18999,
          discountPercent: 23,
          slug: 'table-kyoto-coffee',
          image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=400&q=80',
          pinX: 68,
          pinY: 82,
          popupAlign: 'top',
        },
        {
          id: 'almirah-nordic',
          name: 'Nordic Slatted TV Console & Almirah',
          category: 'Storage Almirah',
          price: 26999,
          mrp: 32999,
          discountPercent: 18,
          slug: 'tv-nordic-console',
          image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80',
          pinX: 82,
          pinY: 38,
          popupAlign: 'left',
        },
      ],
    },
    {
      id: 'bedroom-sanctuary',
      title: 'The Kyoto Solid Timber Bedroom Look',
      roomType: 'Bedroom',
      description: 'Harmonious master sanctuary — king platform bed, artisan bedside table, and handcrafted storage almirah.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85',
      bundleDiscount: 8500,
      products: [
        {
          id: 'bed-zenith',
          name: 'Zenith King Size Solid Wood Bed',
          category: 'King Bed',
          price: 43999,
          mrp: 54999,
          discountPercent: 20,
          slug: 'bed-zenith-king',
          image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
          pinX: 52,
          pinY: 68,
          popupAlign: 'top',
        },
        {
          id: 'nightstand-aero',
          name: 'Artisan Solid Wood Bedside Table',
          category: 'Nightstand',
          price: 8499,
          mrp: 11999,
          discountPercent: 29,
          slug: 'table-kyoto-coffee',
          image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=400&q=80',
          pinX: 20,
          pinY: 74,
          popupAlign: 'right',
        },
        {
          id: 'wardrobe-dresser',
          name: 'Nordic 4-Door Wardrobe Almirah',
          category: 'Wardrobe Almirah',
          price: 48999,
          mrp: 62999,
          discountPercent: 22,
          slug: 'tv-nordic-console',
          image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80',
          pinX: 86,
          pinY: 42,
          popupAlign: 'left',
        },
      ],
    },
  ];

  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>('sofa-oslo');

  const currentScene = roomScenes[activeSceneIdx];
  const activeProduct = currentScene.products.find((p) => p.id === activeHotspotId) || currentScene.products[0];

  const totalPrice = currentScene.products.reduce((acc, p) => acc + p.price, 0);
  const bundlePrice = totalPrice - currentScene.bundleDiscount;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F4EE] border-t border-[#D8C9B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#48563A]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#48563A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#48563A]" /> INTERACTIVE ROOM EXPERIENCE
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2926] font-normal tracking-tight">
              Shop The Complete Look
            </h2>
            <p className="text-[#A69B8C] text-xs sm:text-sm mt-1.5 max-w-xl">
              Hover or tap on the circle spots in the room to explore matched solid wood pieces, prices, and bundle savings.
            </p>
          </div>

          {/* Room Selector Tabs */}
          <div className="flex items-center gap-2 bg-white/80 p-1.5 rounded-xl border border-[#D8C9B5] shadow-xs">
            {roomScenes.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => {
                  setActiveSceneIdx(idx);
                  setActiveHotspotId(scene.products[0]?.id || null);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeSceneIdx === idx
                    ? 'bg-[#2C2926] text-[#F7F4EE] shadow-xs'
                    : 'text-[#2C2926] hover:text-[#48563A]'
                }`}
              >
                {scene.roomType}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Room Canvas + Product Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: The Interactive Image Canvas (8 cols on desktop) */}
          <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#2C2926] border border-[#D8C9B5] shadow-xl select-none group">
            
            {/* Background Lifestyle Image */}
            <Image
              src={currentScene.image}
              alt={currentScene.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-center"
            />
            
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

            {/* Room Title Floating Pill (Top Left) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 bg-[#2C2926]/90 backdrop-blur-md text-[#F7F4EE] text-[11px] sm:text-xs font-medium rounded-full border border-white/10 shadow-md">
                {currentScene.title}
              </span>
            </div>

            {/* Hotspot Pins Overlay */}
            {currentScene.products.map((item) => {
              const isActive = activeHotspotId === item.id;
              const savings = item.mrp - item.price;

              return (
                <div
                  key={item.id}
                  className="absolute z-30"
                  style={{ left: `${item.pinX}%`, top: `${item.pinY}%` }}
                >
                  {/* The Interactive Hotspot Circle Spot */}
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    
                    {/* Pulsating Outer Ripple Ring */}
                    <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                    
                    {/* Hotspot Button (IKEA Style) */}
                    <button
                      onClick={() => setActiveHotspotId(isActive ? null : item.id)}
                      onMouseEnter={() => setActiveHotspotId(item.id)}
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border-2 ${
                        isActive
                          ? 'bg-[#2C2926] border-[#D8C9B5] scale-125 ring-4 ring-[#48563A]/40'
                          : 'bg-black/65 border-white hover:scale-110 hover:bg-black/85'
                      }`}
                      aria-label={`Explore ${item.name}`}
                    >
                      {/* Center Inner Dot */}
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive ? 'bg-[#D8C9B5]' : 'bg-white'
                        }`}
                      />
                    </button>

                    {/* Pop-up Card (IKEA Style) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92, y: 6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute z-40 w-52 sm:w-60 bg-white rounded-xl shadow-2xl border border-[#D8C9B5] p-3 sm:p-3.5 text-left ${
                            item.popupAlign === 'left'
                              ? 'right-full mr-3 top-1/2 -translate-y-1/2'
                              : item.popupAlign === 'right'
                              ? 'left-full ml-3 top-1/2 -translate-y-1/2'
                              : 'bottom-full mb-3 left-1/2 -translate-x-1/2'
                          }`}
                        >
                          <Link href={`/products/${item.slug}`} className="block group/card">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#48563A]">
                                  {item.category}
                                </span>
                                <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#2C2926] leading-tight group-hover/card:text-[#48563A] transition-colors mt-0.5 line-clamp-2">
                                  {item.name}
                                </h4>
                              </div>
                              <div className="p-1 rounded-full bg-[#F7F4EE] text-[#2C2926] group-hover/card:bg-[#2C2926] group-hover/card:text-white transition-colors flex-shrink-0 mt-0.5">
                                <ChevronRight className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* Price Block (IKEA Style) */}
                            <div className="mt-2.5 pt-2 border-t border-[#D8C9B5]/50">
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-xs text-[#A69B8C]">Rs.</span>
                                <span className="font-sans font-bold text-base sm:text-lg text-[#2C2926]">
                                  {item.price.toLocaleString('en-IN')}
                                </span>
                              </div>
                              
                              {/* Discount Highlight */}
                              <p className="text-[11px] font-bold text-[#48563A] mt-0.5">
                                {item.discountPercent}% off, save Rs.{savings.toLocaleString('en-IN')}
                              </p>
                              
                              <p className="text-[10px] text-[#A69B8C]">
                                Regular price: Rs.{item.mrp.toLocaleString('en-IN')}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Right: Selected Product Highlight & Complete Bundle Offer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Active Selected Product Card */}
            <div className="bg-white rounded-2xl border border-[#D8C9B5] p-5 shadow-sm">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A69B8C]">
                Spotlighted Furniture Piece
              </span>
              
              <div className="flex items-center gap-3.5 mt-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F7F4EE] flex-shrink-0 border border-[#D8C9B5]/60">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#2C2926] line-clamp-2 leading-tight">
                    {activeProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-bold text-sm text-[#2C2926]">
                      ₹{activeProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#A69B8C] line-through">
                      ₹{activeProduct.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D8C9B5]/50 flex items-center justify-between">
                <span className="text-[11px] text-[#48563A] font-semibold">
                  100% Solid Kiln-Dried Sheesham
                </span>
                <Link
                  href={`/products/${activeProduct.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C2926] hover:text-[#48563A] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Complete 3-Piece Room Bundle Savings Card */}
            <div className="bg-[#2C2926] text-[#F7F4EE] rounded-2xl p-5 border border-[#D8C9B5]/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8C9B5]">
                  Bundle &amp; Save More
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#48563A] text-white text-[10px] font-bold">
                  Extra ₹{currentScene.bundleDiscount.toLocaleString('en-IN')} Off
                </span>
              </div>

              <div>
                <p className="text-xs text-[#D8C9B5]/90">
                  Buy all 3 matching solid wood room pieces together:
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-serif text-2xl font-normal text-white">
                    ₹{bundlePrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#A69B8C] line-through">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* 3 Pieces List */}
              <div className="space-y-1.5 text-xs text-[#D8C9B5]/90 pt-1">
                {currentScene.products.map((p) => (
                  <div key={p.id} className="flex items-center justify-between text-[11px]">
                    <span className="truncate pr-2">✓ {p.name}</span>
                    <span className="text-white font-medium whitespace-nowrap">₹{p.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="w-full py-3 bg-[#D8C9B5] hover:bg-[#C9B9A3] text-[#2C2926] text-xs font-semibold rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#2C2926]" />
                <span>Inquire Room Set on WhatsApp</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
