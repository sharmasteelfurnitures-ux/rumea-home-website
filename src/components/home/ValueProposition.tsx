'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white border-y border-[#DEDAD1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] tracking-tight">
            Made for your measurements.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6962] font-sans mt-3 leading-relaxed">
            Proportioned to the inch for real Indian apartments — narrow hallways, tight balconies, and compact study corners.
          </p>
        </div>

        {/* 2 Large Side-by-Side Architectural Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Shoe Storage */}
          <Link
            href="/products?category=shoe-rack"
            className="group block relative rounded-2xl overflow-hidden border border-[#DEDAD1] bg-[#F7F4EE] transition-all duration-300 hover:border-[#2C2926] hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-[#EBE7DF]">
              <Image
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
                alt="Slim wall-mounted shoe rack in compact Indian apartment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-white/95 text-[#2C2926] backdrop-blur-xs shadow-xs">
                  Slim Entryway Storage
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-[#2C2926] mb-2 group-hover:text-[#7A6B5D] transition-colors">
                  Wall-Mounted Shoe Racks
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6962] font-sans leading-relaxed mb-4">
                  Ultra-slim 5.9″ depth that fits behind doors and narrow hallway corridors without blocking everyday walkways.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#2C2926] group-hover:text-[#7A6B5D] transition-colors pt-2">
                <span>Explore shoe storage</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>

          {/* Card 2: Folding Tables */}
          <Link
            href="/products?category=folding-table"
            className="group block relative rounded-2xl overflow-hidden border border-[#DEDAD1] bg-[#F7F4EE] transition-all duration-300 hover:border-[#2C2926] hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-[#EBE7DF]">
              <Image
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85"
                alt="Space-saving folding table for dining and study"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-white/95 text-[#2C2926] backdrop-blur-xs shadow-xs">
                  Space-Saving Tables
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-[#2C2926] mb-2 group-hover:text-[#7A6B5D] transition-colors">
                  Folding Multipurpose Tables
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6962] font-sans leading-relaxed mb-4">
                  Sturdy work and dining tables with quick-collapse mechanisms that fold completely flat when guests come over.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#2C2926] group-hover:text-[#7A6B5D] transition-colors pt-2">
                <span>Explore folding tables</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
