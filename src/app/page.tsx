import React from 'react';
import Hero from '@/components/home/Hero';
import ShopByCategory from '@/components/home/ShopByCategory';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ShopTheLook from '@/components/home/ShopTheLook';
import SolidWoodVsMdf from '@/components/home/SolidWoodVsMdf';
import CraftStory from '@/components/home/CraftStory';
import CustomerHomesGallery from '@/components/home/CustomerHomesGallery';
import WhatsAppConcierge from '@/components/home/WhatsAppConcierge';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Showcase Carousel + Quick Category Bar + Trust Strip */}
      <Hero />

      {/* 2. Shop by Category (10 Categories with Quick Avatar Rail & Interactive Filters) */}
      <ShopByCategory />

      {/* 3. Bestsellers (8 Pieces with Interactive Timber Finish Swatches) */}
      <FeaturedProducts />

      {/* 4. Shop The Complete Room Look (Home Centre / Urban Ladder Style Bundles) */}
      <ShopTheLook />

      {/* 5. Solid Sheesham vs Cheap MDF Matrix (Urbanwood / Wooden Street Education) */}
      <SolidWoodVsMdf />

      {/* 6. Craft Story (Kiln-Dried Hardwood, Mortise & Tenon, Non-Toxic Finish) */}
      <CraftStory />

      {/* 7. Real Homes Across India (4-City Metro Lookbook) */}
      <CustomerHomesGallery />

      {/* 8. WhatsApp Concierge Room Sizing Consultation */}
      <WhatsAppConcierge />

      {/* 9. Floating Bottom-Right WhatsApp Trigger */}
      <WhatsAppFloatingButton />
    </>
  );
}
