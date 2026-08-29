'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { roomCategories } from '@/lib/products';

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
              CURATED BY ROOM
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-espresso mt-1">
              Shop by Space
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-1.5 max-w-lg">
              Engineered for standard 2BHK &amp; 3BHK Indian floor plans with smart space-saving proportions.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-espresso hover:text-antique-gold transition-colors self-start sm:self-auto"
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Room Grid (4/3 aspect ratio, 8px radius, hover zoom) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {roomCategories.map((room) => (
            <Link
              key={room.id}
              href={`/rooms/${room.slug}`}
              className="group relative flex flex-col bg-white rounded-card overflow-hidden border border-border-sand shadow-card card-hover"
            >
              {/* 4/3 Aspect Ratio Image */}
              <div className="relative aspect-[4/3] bg-ivory-dark overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-warm-ivory">
                  <span className="text-[10px] uppercase font-bold text-warm-sand tracking-wider">
                    {room.itemCount} Designs
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-warm-ivory mt-0.5 group-hover:text-warm-sand transition-colors">
                    {room.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
