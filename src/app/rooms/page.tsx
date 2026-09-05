import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { roomCategories } from '@/lib/products';
import { Sparkles, ArrowRight, Sofa, Bed, UtensilsCrossed, Laptop, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Room Furniture Collections',
  description:
    'Explore handcrafted solid Sheesham wood furniture suites for your living room, bedroom, dining room, and study. Mortise and tenon joinery with free pan-India delivery.',
  openGraph: {
    title: 'Room Furniture Collections',
    description: 'Explore handcrafted solid Sheesham wood furniture suites for every room.',
    url: 'https://rumeahome.com/rooms',
  },
};

export default function RoomsHubPage() {
  const roomIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'living-room': Sofa,
    'bedroom': Bed,
    'dining-room': UtensilsCrossed,
    'study': Laptop,
    'storage': Package,
  };

  return (
    <div className="bg-[#F7F4EE] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Rooms' }]} className="mb-6" />

        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#48563A] inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> CURATED ROOM SUITES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2926] font-medium tracking-tight">
            Furnish Your Home By Room
          </h1>
          <p className="text-[#A69B8C] text-sm sm:text-base mt-3 leading-relaxed">
            Coordinated solid Sheesham hardwood collections tailored for modern Indian apartments. 
            Zero MDF, kiln-dried seasoned timber, and generational mortise &amp; tenon joinery.
          </p>
        </div>

        {/* 4 Large Editorial Room Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {roomCategories.map((room) => {
            const Icon = roomIcons[room.slug] || Sofa;
            return (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D8C9B5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2C2926]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating Pill on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#2C2926]/85 backdrop-blur-md text-[#F7F4EE] text-xs font-medium border border-white/15 flex items-center gap-1.5 shadow-md">
                      <Icon className="w-3.5 h-3.5 text-[#D8C9B5]" />
                      <span>{room.name}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="font-serif text-xl sm:text-2xl font-medium drop-shadow-sm">
                      {room.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-xs sm:text-sm text-[#A69B8C] leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8C9B5]/50">
                    <span className="text-xs font-semibold text-[#48563A]">
                      Explore {room.name} Collection
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7F4EE] group-hover:bg-[#2C2926] text-[#2C2926] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="bg-[#2C2926] text-[#F7F4EE] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-[#D8C9B5]/30 shadow-lg mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
            Need Help With Room Layout &amp; Sizing?
          </h2>
          <p className="text-xs sm:text-sm text-[#D8C9B5]/90 max-w-lg mx-auto mb-6 leading-relaxed">
            Send your floor plan, room dimensions, or photos directly to our woodcraft consultants on WhatsApp for free customized guidance.
          </p>
          <a
            href="https://wa.me/917291962356?text=Hi%20Rumea%20Home!%20I'd%20like%20guidance%20on%20room%20layout%20and%20furniture%20sizing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] text-xs sm:text-sm font-semibold rounded-btn transition-colors shadow-md"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#D8C9B5]" />
          </a>
        </div>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
