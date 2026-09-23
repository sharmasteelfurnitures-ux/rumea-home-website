import React from 'react';
import type { Metadata } from 'next';
import Product360Viewer from '@/components/product/Product360Viewer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { ArrowLeft, Box, Sparkles, Smartphone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '360° Studio & AR Experience | Rumea Home',
  description:
    'Inspect Rumea Home practical furniture in full 360° orbit and augmented reality (AR) before you buy. Sized for real Indian apartments.',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Breadcrumb items={[{ label: '360° Experience' }]} />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6962] hover:text-[#1E1E1B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Furniture</span>
          </Link>
        </div>

        {/* Page Hero */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5D] inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> INTERACTIVE 3D STUDIO
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C2926] font-normal tracking-tight">
            Inspect Every Detail in 360°
          </h1>
          <p className="text-[#6B6962] text-sm sm:text-base mt-3 leading-relaxed">
            Rotate, zoom, and inspect heavy-gauge powder-coated steel frames, joints, and finishes from any perspective. On mobile devices, tap &quot;AR View&quot; to project the piece directly into your room.
          </p>
        </div>

        {/* 360 Studio Viewer Component */}
        <div className="rounded-2xl overflow-hidden border border-[#DEDAD1] bg-white shadow-xs">
          <Product360Viewer />
        </div>

        {/* Informational Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white rounded-xl border border-[#DEDAD1]">
            <Box className="w-5 h-5 text-[#7A6B5D] mb-3" />
            <h3 className="font-sans font-semibold text-sm text-[#2C2926]">True-to-Scale Dimensions</h3>
            <p className="text-xs text-[#6B6962] mt-1.5 leading-relaxed">
              Every 3D model is built using exact millimeter blueprints to reflect real entryway clearance and floor footprints.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#DEDAD1]">
            <Smartphone className="w-5 h-5 text-[#7A6B5D] mb-3" />
            <h3 className="font-sans font-semibold text-sm text-[#2C2926]">Instant Room Projection</h3>
            <p className="text-xs text-[#6B6962] mt-1.5 leading-relaxed">
              Supported on iOS (AR Quick Look) and Android (Scene Viewer). See how the piece fits beside your doorway or desk.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#DEDAD1]">
            <CheckCircle className="w-5 h-5 text-[#48563A] mb-3" />
            <h3 className="font-sans font-semibold text-sm text-[#2C2926]">Need Dimensional Help?</h3>
            <p className="text-xs text-[#6B6962] mt-1.5 leading-relaxed">
              Send your room photo or lift measurements to our WhatsApp team for quick, honest sizing confirmation before ordering.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
