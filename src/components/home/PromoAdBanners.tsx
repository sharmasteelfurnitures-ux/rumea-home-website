'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Truck } from 'lucide-react';

interface PromoBanner {
  id: string;
  badge: string;
  badgeBg: string;
  title: string;
  tagline: string;
  startingPrice: string;
  image: string;
  imageAlt: string;
  href: string;
}

const promoBanners: PromoBanner[] = [
  {
    id: 'metal-shoe-rack',
    badge: 'UPTO 45% OFF',
    badgeBg: 'bg-[#9E471D]', // Warm Rust
    title: 'METAL SHOE RACK',
    tagline: 'Clutter-Free Entryways, Heavy Duty',
    startingPrice: '2,499',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern Metal and Solid Wood Shoe Rack',
    href: '/products?category=storage',
  },
  {
    id: 'sofa-3-seater',
    badge: 'UPTO 50% OFF',
    badgeBg: 'bg-[#556B2F]', // Olive Green
    title: 'SOFA 3 SEATER',
    tagline: 'Sink-In Velvet & Kiln-Dried Solid Sheesham',
    startingPrice: '28,999',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Oslo 3-Seater Solid Sheesham Wood Sofa',
    href: '/products/sofa-oslo-3seater',
  },
  {
    id: 'bar-chairs',
    badge: 'UPTO 40% OFF',
    badgeBg: 'bg-[#9E471D]', // Warm Rust
    title: 'BAR CHAIRS',
    tagline: 'Ergonomic Height for Counters & Island Bars',
    startingPrice: '4,499',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Solid Wood Ergonomic Counter Bar Stool',
    href: '/products?category=chairs',
  },
];

export default function PromoAdBanners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 md:py-12 bg-[#F7F4EE] border-t border-[#D8C9B5] overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Carousel / Responsive Grid Container */}
        <div className="relative group">
          
          {/* Left Arrow (Visible on mobile/tablet) */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D8C9B5] shadow-md flex items-center justify-center text-[#2C2926] hover:bg-[#F7F4EE] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer lg:hidden"
            aria-label="Previous promo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow (Visible on mobile/tablet) */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D8C9B5] shadow-md flex items-center justify-center text-[#2C2926] hover:bg-[#F7F4EE] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer lg:hidden"
            aria-label="Next promo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Track / Desktop 3-Card Grid */}
          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible scroll-smooth pb-2 pt-1 no-scrollbar snap-x snap-mandatory"
          >
            {promoBanners.map((banner) => (
              <Link
                key={banner.id}
                href={banner.href}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-auto snap-center group/card relative rounded-2xl bg-[#F4EFE6] border border-[#D8C9B5]/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row min-h-[200px]"
              >
                {/* Left Side: Content & Discount */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between z-10">
                  <div>
                    {/* Discount Pill Badge */}
                    <span
                      className={`inline-block ${banner.badgeBg} text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md shadow-2xs`}
                    >
                      {banner.badge}
                    </span>

                    {/* Title */}
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#2C2926] mt-3 tracking-tight">
                      {banner.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-[#6E645A] mt-1 font-medium leading-snug line-clamp-2">
                      {banner.tagline}
                    </p>
                  </div>

                  {/* Price & Delivery Callout */}
                  <div className="mt-4 pt-2">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6E645A] font-medium">
                      Starting From
                    </p>
                    <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#2C2926] tracking-tight">
                      ₹{banner.startingPrice}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#48563A] uppercase tracking-wide mt-0.5 flex items-center gap-1">
                      <Truck className="w-3 h-3 text-[#48563A]" /> FREE Delivery Available
                    </p>
                  </div>
                </div>

                {/* Right Side: Product Lifestyle Cutout / Imagery */}
                <div className="relative w-full sm:w-[48%] h-44 sm:h-auto overflow-hidden bg-gradient-to-t sm:bg-gradient-to-r from-[#F4EFE6] via-transparent to-transparent flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={banner.image}
                    alt={banner.imageAlt}
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Soft studio shadow overlay at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
