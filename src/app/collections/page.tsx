import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Collections | Rumea Home',
  description:
    'Explore curated furniture collections designed for modern Indian apartment living. Space-saving designs, durable finishes, and functional minimalism.',
  openGraph: {
    title: 'Furniture Collections | Rumea Home',
    description: 'Explore curated furniture collections designed for modern Indian apartment living.',
    url: 'https://rumeahome.com/collections',
  },
};

const collections = [
  {
    slug: 'scandinavian',
    name: 'Scandinavian Modern',
    tagline: 'Nordic lightness meets smart Indian apartment living',
    description:
      'Clean organic contours, tapered silhouettes, and light warm finishes designed for airy, clutter-free spaces.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    link: '/collections/scandinavian',
  },
  {
    slug: 'modern',
    name: 'Modern Minimalist',
    tagline: 'Functional simplicity and architectural balance',
    description:
      'Fluted textures, hidden storage, and floating silhouettes tailored for contemporary urban apartments.',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=80',
    link: '/collections/modern',
  },
  {
    slug: 'traditional',
    name: 'Warm Traditional',
    tagline: 'Rich heritage tones with everyday durability',
    description:
      'Deep walnut and mahogany grains, durable hardware, and timeless accents crafted for daily comfort.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    link: '/collections/traditional',
  },
];

export default function CollectionsHubPage() {
  return (
    <main className="bg-[#F7F4EE] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Collections' }]} className="mb-6" />

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5D] inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> CURATED DESIGN STYLES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C2926] font-normal tracking-tight">
            Furniture Collections
          </h1>
          <p className="text-[#6B6962] text-sm sm:text-base mt-3 leading-relaxed">
            Cohesive furniture aesthetics tailored for everyday Indian homes. Explore our signature design collections.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={col.link}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DEDAD1] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2C2926]">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="font-serif text-xl sm:text-2xl font-normal drop-shadow-sm">
                    {col.name}
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6B5D] mb-1.5">
                    {col.tagline}
                  </p>
                  <p className="text-xs text-[#6B6962] leading-relaxed line-clamp-3">
                    {col.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DEDAD1] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2C2926] group-hover:text-[#7A6B5D] transition-colors">
                    Explore Collection
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F7F5F0] group-hover:bg-[#2C2926] text-[#2C2926] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <WhatsAppFloatingButton />
    </main>
  );
}
