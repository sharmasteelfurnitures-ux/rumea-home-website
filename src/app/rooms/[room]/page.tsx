import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { roomCategories, getProductsByRoom, getRoomCategoryBySlug } from '@/lib/products';
import { Room } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Lightbulb, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  params: {
    room: string;
  };
}

export async function generateStaticParams() {
  return roomCategories.map((cat) => ({
    room: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const roomCat = getRoomCategoryBySlug(params.room);

  if (!roomCat) {
    return {
      title: 'Room Not Found | Rumea Home',
    };
  }

  return {
    title: `${roomCat.name} Furniture | Rumea Home®`,
    description: roomCat.description,
    openGraph: {
      title: `${roomCat.name} Furniture | Rumea Home®`,
      description: roomCat.description,
      images: [{ url: roomCat.image, width: 1000, height: 600, alt: roomCat.name }],
    },
  };
}

export default function RoomPage({ params }: Props) {
  const roomCat = getRoomCategoryBySlug(params.room);

  if (!roomCat) {
    notFound();
  }

  const roomProducts = getProductsByRoom(roomCat.id as Room);

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb
          items={[
            { label: 'Rooms', href: '/products' },
            { label: roomCat.name },
          ]}
          className="mb-6"
        />

        <div className="relative rounded-3xl overflow-hidden shadow-warm border border-warm-sand/60 mb-12 sm:mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[300px]">
            <Image
              src={roomCat.image}
              alt={roomCat.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/30" />
            
            <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-center max-w-2xl text-warm-ivory">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-sand/20 text-warm-sand text-xs font-bold uppercase tracking-widest rounded-full self-start mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Room Collection
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-warm-ivory tracking-tight">
                Your Perfect {roomCat.name}
              </h1>
              <p className="text-warm-sand/90 text-sm sm:text-base lg:text-lg mt-3 leading-relaxed">
                {roomCat.tagline}. {roomCat.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs text-soft-taupe font-medium">
                  {roomProducts.length} Handcrafted Designs
                </span>
                <span className="text-soft-taupe">•</span>
                <span className="text-xs text-warm-sand font-medium">
                  Solid Sheesham Wood
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-espresso">
                {roomCat.name} Collection
              </h2>
              <p className="text-xs sm:text-sm text-soft-taupe mt-1">
                Showing all {roomProducts.length} pieces designed for {roomCat.name.toLowerCase()} setups.
              </p>
            </div>

            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-espresso hover:text-muted-olive flex items-center gap-1 transition-colors"
            >
              <span>All Rooms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {roomProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {roomCat.tips && roomCat.tips.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-warm-sand/60 shadow-card mb-16">
            <div className="flex items-center gap-2 text-muted-olive font-bold text-xs uppercase tracking-widest mb-2">
              <Lightbulb className="w-4 h-4" /> Space Planning Guide
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso mb-6">
              Expert Tips for Furnishing Your {roomCat.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roomCat.tips.map((tip, idx) => (
                <div key={idx} className="p-4 sm:p-5 bg-warm-ivory rounded-2xl border border-warm-sand/40">
                  <span className="inline-block w-6 h-6 rounded-full bg-muted-olive text-warm-ivory text-xs font-bold text-center leading-6 mb-3">
                    {idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-sm text-espresso mb-1.5">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-soft-taupe leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="bg-ivory-dark/60 rounded-3xl p-8 sm:p-12 text-center border border-warm-sand/50">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso mb-2">
            Need Custom Dimensions for Your {roomCat.name}?
          </h3>
          <p className="text-soft-taupe text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Share your room size and layout with our furniture specialists on WhatsApp for personalized recommendations.
          </p>
          <WhatsAppButton
            message={`Hi! I'm planning my ${roomCat.name} furniture and would like some layout advice.`}
          >
            Chat with {roomCat.name} Specialist
          </WhatsAppButton>
        </div>

      </div>
    </div>
  );
}
