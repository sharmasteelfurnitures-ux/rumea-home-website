import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsByCollection } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Sparkles, ArrowRight } from 'lucide-react';

const collectionsData: Record<
  string,
  {
    name: string;
    tagline: string;
    description: string;
    image: string;
    philosophy: string;
  }
> = {
  scandinavian: {
    name: 'Scandinavian Modern',
    tagline: 'Nordic lightness meets Indian Sheesham craftsmanship',
    description: 'Clean organic contours, tapered silhouettes, and light warm teak finishes designed for airy, clutter-free spaces.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    philosophy: 'Inspired by Nordic functionalism and translated through solid Indian timber, this collection celebrates organic simplicity, functional utility, and soft warm textures that invite relaxation.',
  },
  modern: {
    name: 'Modern Minimalist',
    tagline: 'Functional simplicity and architectural balance',
    description: 'Fluted textures, hidden storage, and floating silhouettes tailored for contemporary urban apartments.',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=80',
    philosophy: 'Stripping away excess to focus on geometric proportion and superior joinery. Every drawer, ledge, and surface serves a defined purpose in keeping living spaces serene and organized.',
  },
  traditional: {
    name: 'Warm Traditional',
    tagline: 'Rich heritage tones with heirloom longevity',
    description: 'Deep walnut and mahogany grains, antique brass hardware, and hand-carved accents crafted for generations.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    philosophy: 'A tribute to classical Indian carpentry traditions. Robust timber sections, intricate fluted paneling, and hand-rubbed oil finishes that develop a deeper patina year after year.',
  },
};

interface Props {
  params: {
    collection: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(collectionsData).map((key) => ({
    collection: key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const col = collectionsData[params.collection.toLowerCase()];

  if (!col) {
    return {
      title: 'Collection Not Found | Rumea Home',
    };
  }

  return {
    title: `${col.name} Collection | Rumea Home®`,
    description: col.description,
    openGraph: {
      title: `${col.name} Collection | Rumea Home®`,
      description: col.description,
      images: [{ url: col.image, width: 1200, height: 600, alt: col.name }],
    },
  };
}

export default function CollectionPage({ params }: Props) {
  const colKey = params.collection.toLowerCase();
  const col = collectionsData[colKey];

  if (!col) {
    notFound();
  }

  const colProducts = getProductsByCollection(colKey);

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb
          items={[
            { label: 'Collections', href: '/products' },
            { label: col.name },
          ]}
          className="mb-6"
        />

        <div className="relative rounded-3xl overflow-hidden shadow-warm border border-warm-sand/60 mb-12 sm:mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[320px]">
            <Image
              src={col.image}
              alt={col.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/30" />
            
            <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-center max-w-2xl text-warm-ivory">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-sand/20 text-warm-sand text-xs font-bold uppercase tracking-widest rounded-full self-start mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Style Philosophy
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-warm-ivory tracking-tight">
                {col.name}
              </h1>
              <p className="text-warm-sand/90 text-sm sm:text-base lg:text-lg mt-3 leading-relaxed">
                {col.tagline}
              </p>
              <p className="text-xs sm:text-sm text-soft-taupe/90 mt-2 max-w-xl">
                {col.philosophy}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-espresso">
                {col.name} Designs
              </h2>
              <p className="text-xs sm:text-sm text-soft-taupe mt-1">
                Showing {colProducts.length} coordinated pieces in this aesthetic.
              </p>
            </div>

            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-espresso hover:text-muted-olive flex items-center gap-1 transition-colors"
            >
              <span>All Collections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {colProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-warm-sand/60 shadow-card">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso mb-2">
            Looking for Customization in the {col.name} Style?
          </h3>
          <p className="text-soft-taupe text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Our interior experts can help customize finishes, wood tones, and sizing to match your home&apos;s architectural palette.
          </p>
          <WhatsAppButton
            message={`Hi! I'm interested in the ${col.name} collection and want advice on coordinating pieces.`}
          >
            Consult with Style Advisor
          </WhatsAppButton>
        </div>

      </div>
    </div>
  );
}
