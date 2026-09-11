import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Scale, ShieldCheck, Truck, RotateCcw, Hammer, FileText, CheckCircle2 } from 'lucide-react';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Terms of Service & Policies',
  description:
    'Transparent terms of service, craftsmanship quality standards, delivery guidelines, and customer support for Rumea Home.',
  openGraph: {
    title: 'Terms of Service & Policies',
    description: 'Quality standards, fulfillment, and customer support terms for Rumea Home.',
    url: 'https://rumeahome.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 text-[#2C2926]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Terms of Service' }]}
          className="mb-6"
        />

        {/* Header Statement */}
        <div className="mb-10 text-center sm:text-left border-b border-[#E5DCCE] pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1F1A16] text-white text-[11px] font-bold uppercase tracking-widest rounded-btn mb-3">
            <Scale className="w-3.5 h-3.5 text-[#C8A97A]" /> TRANSPARENT TERMS &amp; POLICIES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1F1A16] font-bold tracking-tight">
            Terms of Service &amp; Policies
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Last Updated: 2026 • Governed by the Laws of the Republic of India (Jurisdiction: New Delhi)
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          {/* 1. Quality Standards */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8B6914] flex-shrink-0" />
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16]">
                1. Quality Standards &amp; Manufacturing Guarantee
              </h2>
            </div>
            <p>
              Every piece of Rumea Home furniture is crafted with honest materials, durable joinery, and careful finishing. We stand behind our product quality and provide dedicated support for any manufacturing or transit concerns:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#FAF7F2] rounded-btn border border-[#E5DCCE]">
                <p className="font-bold text-xs text-[#1F1A16] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> What Is Covered:
                </p>
                <ul className="text-[11px] text-neutral-600 space-y-1 mt-1.5 list-disc pl-4">
                  <li>Structural frame integrity and weight-bearing capability</li>
                  <li>Joinery construction and assembly hardware defects</li>
                  <li>Manufacturing defects reported upon delivery inspection</li>
                  <li>Discrepancies against published dimensions (&gt;2 cm variation)</li>
                </ul>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-btn border border-[#E5DCCE]">
                <p className="font-bold text-xs text-[#1F1A16] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-neutral-500" /> Natural Material Characteristics:
                </p>
                <ul className="text-[11px] text-neutral-600 space-y-1 mt-1.5 list-disc pl-4">
                  <li>Natural organic grain variations and knot patterns in solid timber</li>
                  <li>Subtle natural tonal variations inherent to handcrafted finishing</li>
                  <li>Normal surface wear, scratches, or spills from daily domestic use</li>
                  <li>Damage resulting from outdoor exposure or water immersion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Delivery & Fulfillment */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C8A97A]" /> 2. Delivery &amp; Fulfillment
            </h2>
            <p>
              We ensure every shipment is carefully protected for transit across India:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li><strong>Packaging:</strong> Multi-layer heavy-duty corrugated cartons with corner edge protectors and moisture wrapping.</li>
              <li><strong>Amazon Fulfillment:</strong> Orders placed via Amazon India are fulfilled, tracked, and insured through Amazon&apos;s reliable logistics network.</li>
              <li><strong>Inspection:</strong> We recommend inspecting the outer box at the time of delivery before accepting the parcel.</li>
            </ul>
          </div>

          {/* 3. Replacement & Returns */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#C8A97A]" /> 3. Replacements &amp; Returns
            </h2>
            <p>
              We want your experience with Rumea Home to be smooth and trustworthy:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>For purchases made via Amazon India, return and replacement requests are governed by Amazon&apos;s standard furniture return guidelines.</li>
              <li>If any item arrives with transit damage or missing hardware, reach out directly to our WhatsApp support team (+91 72919 62356) with photos for immediate assistance and resolution.</li>
            </ul>
          </div>

          {/* 4. Pricing & GST Compliance */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Hammer className="w-4 h-4 text-[#C8A97A]" /> 4. Pricing, Invoicing &amp; Taxes
            </h2>
            <p>
              All prices listed on rumeahome.com and associated channels are <strong>inclusive of 18% GST</strong>. Every order is accompanied by a valid tax invoice compliant with Indian GST laws.
            </p>
          </div>

          {/* 5. Dispute Resolution & Contact */}
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C8A97A]" /> 5. Legal Jurisdiction &amp; Registered Office
            </h2>
            <p>
              Any disputes or legal inquiries are governed under the jurisdiction of the competent courts in New Delhi, India.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-neutral-600">
              <p><strong>Studio &amp; Registered Office:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070, India</p>
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
