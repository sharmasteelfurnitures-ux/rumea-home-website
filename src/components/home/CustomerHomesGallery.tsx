'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ArrowRight, MapPin } from 'lucide-react';

export default function CustomerHomesGallery() {
  const customerSpaces = [
    {
      id: 'space-1',
      title: 'Indiranagar, Bengaluru',
      roomType: 'Living Room Suite',
      productName: 'Oslo 3-Seater Sofa',
      slug: 'sofa-oslo-3seater',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-2',
      title: 'Bandra West, Mumbai',
      roomType: 'Master Bedroom',
      productName: 'Kyoto Platform Bed',
      slug: 'bed-kyoto-king',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-3',
      title: 'Vasant Vihar, New Delhi',
      roomType: '6-Seater Dining Space',
      productName: 'Artisan Dining Set',
      slug: 'dining-table-artisan-6s',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-4',
      title: 'Jubilee Hills, Hyderabad',
      roomType: 'Work From Home Study',
      productName: 'Oslo Study Desk',
      slug: 'desk-oslo-study',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> REAL SPACES IN REAL HOMES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-espresso mt-1">
              Styled in Modern Indian Apartments
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-1.5 max-w-xl">
              100% solid Sheesham wood pieces photographed in real homes across Bengaluru, Mumbai, Delhi, and Hyderabad.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-espresso hover:text-antique-gold transition-colors self-start md:self-auto"
          >
            <span>Explore All 20+ Designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Visual Photography Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {customerSpaces.map((space) => (
            <div
              key={space.id}
              className="group relative flex flex-col bg-warm-ivory rounded-card overflow-hidden border border-border-sand shadow-card card-hover"
            >
              {/* 4/3 Aspect Ratio Image Viewport */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-dark">
                <Image
                  src={space.image}
                  alt={`${space.productName} in ${space.title}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Location Badge */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-espresso/80 backdrop-blur-xs text-warm-ivory text-[10px] font-semibold rounded-btn flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-antique-gold" />
                  <span>{space.title}</span>
                </div>
              </div>

              {/* Card Footer with Direct Product Link */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-[10px] uppercase font-bold text-soft-taupe tracking-wider block">
                    {space.roomType}
                  </span>
                  <h3 className="font-serif font-semibold text-xs sm:text-sm text-espresso mt-0.5 truncate">
                    {space.productName}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-border-sand/60 flex items-center justify-between">
                  <Link
                    href={`/products/${space.slug}`}
                    className="text-[11px] font-bold text-antique-gold hover:text-espresso flex items-center gap-1 transition-colors"
                  >
                    <span>Shop Look</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
