import React from 'react';
import Hero from '@/components/home/Hero';
import ShopByCategory from '@/components/home/ShopByCategory';
import CustomFurnitureBanner from '@/components/home/CustomFurnitureBanner';
import NewArrivalsAndBestSellers from '@/components/home/NewArrivalsAndBestSellers';
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

      {/* 2. Shop by Category (12 Categories with 3D Motion Physics) */}
      <ShopByCategory />

      {/* 2.5 Bespoke Workshop Ad Banner (Customized Furniture Solutions) */}
      <CustomFurnitureBanner />

      {/* 3. New Arrivals & Best Sellers (Interactive Tabs & Filters) */}
      <NewArrivalsAndBestSellers />

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
