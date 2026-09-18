'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { Sparkles, ArrowRight, ChevronRight, ShoppingBag, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

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
      id: 'entryway-living-setup',
      title: 'The Clutter-Free Entryway Setup',
      roomType: 'Entryway',
      description: 'A clean, space-saving entryway setup proportioned for Indian apartments — wall-mounted shoe storage, multi-hook coat stand, and sturdy folding seating.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=85',
      bundleDiscount: 600,
      products: [
        {
          id: 'shoe-rack-4',
          name: 'Wall-Mounted Metal Shoe Rack (4 Slab)',
          category: 'Shoe Storage',
          price: 2299,
          mrp: 3699,
          discountPercent: 38,
          slug: 'shoe-rack-4slab',
          image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80',
          pinX: 42,
          pinY: 60,
          popupAlign: 'top',
        },
        {
          id: 'coat-stand',
          name: 'Multi-Hook Metal Coat & Clothes Stand',
          category: 'Coat Stand',
          price: 1599,
          mrp: 2499,
          discountPercent: 36,
          slug: 'coat-stand-metal',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
          pinX: 72,
          pinY: 45,
          popupAlign: 'left',
        },
        {
          id: 'folding-chair',
          name: 'Heavy-Duty Folding Metal Chair',
          category: 'Chairs',
          price: 1399,
          mrp: 2199,
          discountPercent: 36,
          slug: 'chair-folding-metal',
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
          pinX: 25,
          pinY: 72,
          popupAlign: 'right',
        },
      ],
    },
    {
      id: 'multipurpose-work-dining',
      title: 'The Space-Saving Work & Dining Setup',
      roomType: 'Work & Dining',
      description: 'Adaptive living for 2BHK flats — multipurpose folding table and heavy-duty folding chairs that set up quickly and fold away when not in use.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=85',
      bundleDiscount: 700,
      products: [
        {
          id: 'table-folding-4x2',
          name: 'Folding Multipurpose Table (4x2 ft)',
          category: 'Folding Table',
          price: 2599,
          mrp: 4199,
          discountPercent: 38,
          slug: 'table-folding-particle-board-4x2',
          image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80',
          pinX: 52,
          pinY: 65,
          popupAlign: 'top',
        },
        {
          id: 'chair-folding-dining',
          name: 'Heavy-Duty Folding Metal Chair',
          category: 'Chairs',
          price: 1399,
          mrp: 2199,
          discountPercent: 36,
          slug: 'chair-folding-metal',
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
          pinX: 22,
          pinY: 68,
          popupAlign: 'right',
        },
        {
          id: 'coat-stand-work',
          name: 'Multi-Hook Metal Coat & Clothes Stand',
          category: 'Coat Stand',
          price: 1599,
          mrp: 2499,
          discountPercent: 36,
          slug: 'coat-stand-metal',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
          pinX: 82,
          pinY: 42,
          popupAlign: 'left',
        },
      ],
    },
  ];

  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>('shoe-rack-4');

  const currentScene = roomScenes[activeSceneIdx];
  const activeProduct = currentScene.products.find((p) => p.id === activeHotspotId) || currentScene.products[0];

  const totalPrice = currentScene.products.reduce((acc, p) => acc + p.price, 0);
  const bundlePrice = totalPrice - currentScene.bundleDiscount;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F4EE] subtle-grain-texture border-t border-[#D8C9B5]">
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
            <AnimatedHeading
              text="Shop The Complete Look"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2926] font-normal tracking-tight"
            />
            <p className="text-[#A69B8C] text-xs sm:text-sm mt-1.5 max-w-xl">
              Tap or hover on any point in the room to explore individual pieces, exact dimensions, and how they harmonize together.
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

            {/* Warm amber overlay that fades to opacity: 0 over 800ms on viewport entry */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#B4783C]/35 pointer-events-none z-[5]"
            />
            
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none z-[6]" />

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
                    
                    {/* Pulsating Outer Gentle Aura Ring */}
                    <div className="absolute -inset-1.5 rounded-full bg-white/30 animate-ping pointer-events-none" />
                    <div className="absolute -inset-1 rounded-full bg-[#48563A]/25 animate-pulse pointer-events-none" />
                    
                    {/* Hotspot Button: Min 48x48px Touch Target */}
                    <button
                      onClick={() => setActiveHotspotId(isActive ? null : item.id)}
                      onMouseEnter={() => setActiveHotspotId(item.id)}
                      className={`relative w-12 h-12 min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#2C2926] border-[#D8C9B5] scale-110 ring-4 ring-[#48563A]/40'
                          : 'bg-black/70 border-white hover:scale-105 hover:bg-black/90'
                      }`}
                      aria-label={`Explore ${item.name}`}
                    >
                      {/* Center Inner Dot */}
                      <span
                        className={`w-3.5 h-3.5 rounded-full transition-colors ${
                          isActive ? 'bg-[#D8C9B5]' : 'bg-white'
                        }`}
                      />
                    </button>

                    {/* Pop-up Card (IKEA Style with Mobile Touch Close & Viewport Clamping) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92, y: 6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute z-40 w-52 sm:w-60 bg-white rounded-xl shadow-2xl border border-[#D8C9B5] p-3 sm:p-3.5 text-left ${
                            item.pinY > 50 ? 'bottom-full mb-3' : 'top-full mt-3'
                          } ${
                            item.pinX > 65
                              ? 'right-0 sm:right-auto sm:right-full sm:mr-3 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto sm:mb-0'
                              : item.pinX < 35
                              ? 'left-0 sm:left-auto sm:left-full sm:ml-3 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto sm:mb-0'
                              : 'left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2'
                          }`}
                        >
                          {/* Mobile Dismiss 'X' Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspotId(null);
                            }}
                            className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#2C2926] text-[#F7F4EE] rounded-full flex items-center justify-center hover:bg-[#48563A] transition-colors shadow-md z-10 cursor-pointer"
                            aria-label="Close product card"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>

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
                <span className="text-[11px] text-[#48563A] font-medium">
                  Considered Living
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

            {/* Coordinated Room Set Card */}
            <div className="bg-[#2C2926] text-[#F7F4EE] rounded-2xl p-5 border border-[#D8C9B5]/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8C9B5]">
                  Coordinated Set
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#48563A] text-white text-[10px] font-medium">
                  Complete Room
                </span>
              </div>

              <div>
                <p className="text-xs text-[#D8C9B5]/90">
                  Total for all 3 coordinated pieces:
                </p>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="font-serif text-2xl font-normal text-white">
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

              <a
                href={buildWhatsAppUrl(`Hi Rumea Home! I'm interested in the ${currentScene.title} set. Can you share dimensions and delivery details?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill-anim w-full py-3 bg-[#D8C9B5] text-[#2C2926] text-xs font-semibold rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#2C2926] relative z-10" />
                <span className="relative z-10">Inquire Full Set on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
