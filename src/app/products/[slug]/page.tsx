import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductBySlug } from '@/lib/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AmazonImageGallery from '@/components/product/AmazonImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductSpecs from '@/components/product/ProductSpecs';
import FrequentlyBoughtTogether from '@/components/product/FrequentlyBoughtTogether';
import RatingBreakdown from '@/components/product/RatingBreakdown';
import ProductFAQ from '@/components/product/ProductFAQ';
import RoomFitGuide from '@/components/product/RoomFitGuide';
import WoodCareGuide from '@/components/product/WoodCareGuide';
import RelatedProducts from '@/components/product/RelatedProducts';
import StickyMobileBuyBar from '@/components/product/StickyMobileBuyBar';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Rumea Home',
    };
  }

  return {
    title: `${product.name} | Rumea Home®`,
    description: product.meta.description,
    keywords: product.meta.keywords,
    openGraph: {
      title: `${product.name} | Rumea Home®`,
      description: product.meta.description,
      images: [
        {
          url: product.images.primary,
          width: 1000,
          height: 800,
          alt: product.name,
        },
      ],
      type: 'website',
      url: `https://rumeahome.com/products/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.meta.description,
    image: [product.images.primary, ...(product.images.gallery || [])],
    brand: {
      '@type': 'Brand',
      name: 'Rumea Home',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.pricing.offer,
      priceValidUntil: '2027-12-31',
      availability: product.conversion.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://rumeahome.com/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Rumea Home',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.seo.rating,
      reviewCount: product.seo.reviewCount,
    },
  };

  const roomName = product.room[0]
    ? product.room[0].charAt(0).toUpperCase() + product.room[0].slice(1).replace('-', ' ')
    : 'Catalogue';

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10 pb-28 lg:pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb
          items={[
            { label: 'Products', href: '/products' },
            { label: roomName, href: `/rooms/${product.room[0] || 'living-room'}` },
            { label: product.name },
          ]}
          className="mb-6"
        />

        {/* Main Product View: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Amazon-Grade Multi-Angle Image Gallery with Hover Zoom */}
          <div className="lg:col-span-7">
            <AmazonImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column (5 cols): Pricing, Swatches, No-Cost EMI, Delivery & Buy Actions */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>

        </div>

        {/* Technical Specifications Table */}
        <div className="mt-14 max-w-4xl">
          <ProductSpecs product={product} />
        </div>

        {/* Room Sizing & Doorway Clearance Guide (Wooden Street Style) */}
        <RoomFitGuide product={product} />

        {/* Amazon-Style Frequently Bought Together / Bundle Builder */}
        <FrequentlyBoughtTogether product={product} />

        {/* Amazon-Style 5-Star Customer Rating Distribution Bar Chart */}
        <RatingBreakdown
          rating={product.seo.rating}
          reviewCount={product.seo.reviewCount}
        />

        {/* Solid Hardwood Care & Longevity Guide (Wooden Street Style) */}
        <WoodCareGuide />

        {/* Amazon-Style Customer Q&A / FAQs Accordion */}
        <ProductFAQ productName={product.name} />

        {/* Related Products / Complete the Suite Carousel */}
        <RelatedProducts product={product} />

      </div>

      {/* Sticky Mobile Buy Bar for thumb-reach purchase actions */}
      <StickyMobileBuyBar product={product} />
    </div>
  );
}
