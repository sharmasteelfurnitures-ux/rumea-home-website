import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { roomCategories } from '@/lib/products';

export default function CategoryGrid() {
  const livingRoom = roomCategories.find((r) => r.id === 'living-room') || roomCategories[0];
  const bedroom = roomCategories.find((r) => r.id === 'bedroom') || roomCategories[1];
  const dining = roomCategories.find((r) => r.id === 'dining-room') || roomCategories[2];
  const study = roomCategories.find((r) => r.id === 'study') || roomCategories[3];
  const storage = roomCategories.find((r) => r.id === 'storage') || roomCategories[4];
  const outdoor = roomCategories.find((r) => r.id === 'outdoor') || roomCategories[5];

  return (
    <section className="py-16 md:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-olive">
              DISCOVER BY SPACE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso mt-1">
              Every Room, Perfectly Furnished
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-2 max-w-xl">
              Curated solid wood furniture designed for the proportions and rhythms of modern Indian spaces.
            </p>
          </div>

          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-espresso hover:text-muted-olive flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Card 1: Large Featured (Living Room) — 7 cols */}
          <Link
            href={`/rooms/${livingRoom.slug}`}
            className="group relative md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[360px] rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <Image
              src={livingRoom.image}
              alt={livingRoom.name}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
            
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="p-2.5 rounded-full bg-warm-ivory/20 backdrop-blur-md text-warm-ivory group-hover:bg-warm-sand group-hover:text-espresso transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-warm-sand">
                  {livingRoom.itemCount} Designs Available
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-warm-ivory mt-1 group-hover:text-warm-sand transition-colors">
                  {livingRoom.name}
                </h3>
                <p className="text-xs sm:text-sm text-soft-taupe/90 mt-1 max-w-md">
                  {livingRoom.tagline}
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Bedroom — 5 cols */}
          <Link
            href={`/rooms/${bedroom.slug}`}
            className="group relative md:col-span-5 aspect-[4/3] md:aspect-auto md:min-h-[360px] rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <Image
              src={bedroom.image}
              alt={bedroom.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
            
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="p-2.5 rounded-full bg-warm-ivory/20 backdrop-blur-md text-warm-ivory group-hover:bg-warm-sand group-hover:text-espresso transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-warm-sand">
                  {bedroom.itemCount} Designs Available
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-ivory mt-1 group-hover:text-warm-sand transition-colors">
                  {bedroom.name}
                </h3>
                <p className="text-xs text-soft-taupe/90 mt-1">
                  {bedroom.tagline}
                </p>
              </div>
            </div>
          </Link>

          {/* Bottom Row: 4 Cards (3 cols each) */}
          {[dining, study, storage, outdoor].map((room) => (
            <Link
              key={room.id}
              href={`/rooms/${room.slug}`}
              className="group relative md:col-span-3 aspect-[4/4] rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
              
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-warm-ivory/20 backdrop-blur-md text-warm-ivory group-hover:bg-warm-sand group-hover:text-espresso transition-colors duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-warm-sand">
                    {room.itemCount} Designs
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-warm-ivory mt-0.5 group-hover:text-warm-sand transition-colors">
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
