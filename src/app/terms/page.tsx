import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Scale, ShieldCheck, Truck, RotateCcw, Hammer, FileText, CheckCircle2 } from 'lucide-react';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Terms of Service & Warranty Policy | Rumea Home',
  description:
    'Transparent terms of service, 5-Year Structural Frame Warranty terms, Free PAN India Delivery, and 30-Day Doorstep Return guidelines for Rumea Home.',
  openGraph: {
    title: 'Terms of Service & Warranty | Rumea Home',
    description: '5-Year Frame Warranty, Delivery, and Return terms for solid Sheesham furniture.',
    url: 'https://rumeahome.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 text-[#2C2926]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
          className="mb-6"
        />

        {/* Header Statement */}
        <div className="mb-10 text-center sm:text-left border-b border-[#E5DCCE] pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1F1A16] text-white text-[11px] font-bold uppercase tracking-widest rounded-btn mb-3">
            <Scale className="w-3.5 h-3.5 text-[#C8A97A]" /> HONEST TERMS &amp; WARRANTY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1F1A16] font-bold tracking-tight">
            Terms of Service &amp; Guarantees
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Last Updated: August 2026 • Governed by the Laws of the Republic of India (Jurisdiction: New Delhi)
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          {/* 1. 5-Year Warranty */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8B6914] flex-shrink-0" />
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16]">
                1. 5-Year Structural Frame Warranty
              </h2>
            </div>
            <p>
              Every piece of Rumea Home furniture is crafted from 100% solid kiln-dried Sheesham wood. We provide a 5-Year Warranty from the date of delivery covering:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#FAF7F2] rounded-btn border border-[#E5DCCE]">
                <p className="font-bold text-xs text-[#1F1A16] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> What Is Covered:
                </p>
                <ul className="text-[11px] text-neutral-600 space-y-1 mt-1.5 list-disc pl-4">
                  <li>Structural frame integrity and weight-bearing capability</li>
                  <li>Mortise &amp; tenon joinery separation or loosening</li>
                  <li>Termite and wood borer resistance in seasoned timber</li>
                  <li>Manufacturing defects in hardware or hinges</li>
                </ul>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-btn border border-[#E5DCCE]">
                <p className="font-bold text-xs text-[#1F1A16] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-neutral-500" /> Natural Wood Characteristics:
                </p>
                <ul className="text-[11px] text-neutral-600 space-y-1 mt-1.5 list-disc pl-4">
                  <li>Natural organic grain variations and knot patterns</li>
                  <li>Minor seasonal micro-expansion due to regional humidity</li>
                  <li>Normal surface wear, scratches, or spills from daily use</li>
                  <li>Damage from improper outdoor exposure or water immersion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Free Delivery & Transit */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C8A97A]" /> 2. Free PAN India Delivery &amp; Assembly
            </h2>
            <p>
              We provide <strong>Free PAN India Delivery on All Orders</strong> with zero hidden shipping fees or surprise surcharges:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li><strong>Packaging:</strong> Heavy-duty 5-ply export-grade corrugated boxes with high-density corner foam protectors.</li>
              <li><strong>Transit Insurance:</strong> All shipments are 100% transit-insured against accidental handling or transit damage.</li>
              <li><strong>Assembly:</strong> Free doorstep assembly provided across 50+ metro cities within 24–48 hours of item arrival.</li>
            </ul>
          </div>

          {/* 3. 30-Day Doorstep Returns */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#C8A97A]" /> 3. 30-Day Doorstep Return Policy
            </h2>
            <p>
              We want you to feel completely confident about your furniture investment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>If the piece arrives with transit damage, manufacturing defects, or does not match product specifications, report it to our WhatsApp team within 30 days of delivery.</li>
              <li>We arrange a free doorstep reverse pickup directly from your address.</li>
              <li>You can choose an immediate replacement piece or a 100% refund with zero restocking penalties.</li>
            </ul>
          </div>

          {/* 4. Pricing & GST Compliance */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Hammer className="w-4 h-4 text-[#C8A97A]" /> 4. Pricing, Invoicing &amp; Taxes
            </h2>
            <p>
              All prices listed on rumeahome.com and our marketplace storefronts are <strong>inclusive of 18% GST</strong>. Every order is issued with a valid tax invoice compliant with Indian GST laws.
            </p>
          </div>

          {/* 5. Dispute Resolution & Contact */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C8A97A]" /> 5. Legal Jurisdiction &amp; Support
            </h2>
            <p>
              Any disputes or legal inquiries are governed under the jurisdiction of the competent courts in New Delhi, India.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-neutral-600">
              <p><strong>Flagship Showroom:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070, India</p>
              <p><strong>Support Email:</strong> <a href="mailto:rumeahome@gmail.com" className="text-[#3D2212] font-bold underline">rumeahome@gmail.com</a></p>
              <p><strong>WhatsApp / Phone:</strong> <a href="tel:+917291962356" className="text-[#3D2212] font-bold underline">+91 72919 62356</a></p>
            </div>
          </div>

        </div>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
