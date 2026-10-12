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
    <div className="bg-surface-page min-h-screen py-8 sm:py-12 text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Terms of Service' }]}
          className="mb-6"
        />

        {/* Header Statement */}
        <div className="mb-10 text-center sm:text-left border-b border-border pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-text text-[11px] font-bold uppercase tracking-widest rounded-btn mb-3">
            <Scale className="w-3.5 h-3.5 text-sand" /> TRANSPARENT TERMS &amp; POLICIES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-primary font-bold tracking-tight">
            Terms of Service &amp; Policies
          </h1>
          <p className="text-xs sm:text-sm text-content-muted mt-2">
            Last Updated: 2026 • Governed by the Laws of the Republic of India (Jurisdiction: New Delhi)
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-primary leading-relaxed">
          
          {/* 1. Quality Standards */}
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
              <h2 className="font-serif font-bold text-base sm:text-lg text-primary">
                1. Quality Standards &amp; Manufacturing Guarantee
              </h2>
            </div>
            <p className="text-content-muted">
              Every piece of Rumea Home furniture is crafted with honest materials, durable joinery, and careful finishing. We stand behind our product quality and provide dedicated support for any manufacturing or transit concerns:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-surface-page rounded-btn border border-border">
                <p className="font-bold text-xs text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> What Is Covered:
                </p>
                <ul className="text-[11px] text-content-muted space-y-1 mt-1.5 list-disc pl-4">
                  <li>Structural frame integrity and weight-bearing capability</li>
                  <li>Joinery construction and assembly hardware defects</li>
                  <li>Manufacturing defects reported upon delivery inspection</li>
                  <li>Discrepancies against published dimensions (&gt;2 cm variation)</li>
                </ul>
              </div>
              <div className="p-3 bg-surface-page rounded-btn border border-border">
                <p className="font-bold text-xs text-primary flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-content-muted" /> Natural Material Characteristics:
                </p>
                <ul className="text-[11px] text-content-muted space-y-1 mt-1.5 list-disc pl-4">
                  <li>Natural organic grain variations and knot patterns in solid timber</li>
                  <li>Subtle natural tonal variations inherent to handcrafted finishing</li>
                  <li>Normal surface wear, scratches, or spills from daily domestic use</li>
                  <li>Damage resulting from outdoor exposure or water immersion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Delivery & Fulfillment */}
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-primary flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent" /> 2. Delivery &amp; Fulfillment
            </h2>
            <p className="text-content-muted">
              We ensure every shipment is carefully protected for transit across India:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-content-muted">
              <li><strong className="text-primary">Packaging:</strong> Multi-layer heavy-duty corrugated cartons with corner edge protectors and moisture wrapping.</li>
              <li><strong className="text-primary">Amazon Fulfillment:</strong> Orders placed via Amazon India are fulfilled, tracked, and insured through Amazon&apos;s reliable logistics network.</li>
              <li><strong className="text-primary">Inspection:</strong> We recommend inspecting the outer box at the time of delivery before accepting the parcel.</li>
            </ul>
          </div>

          {/* 3. Replacement & Returns */}
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-primary flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-accent" /> 3. Replacements &amp; Returns
            </h2>
            <p className="text-content-muted">
              We want your experience with Rumea Home to be smooth and trustworthy:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-content-muted">
              <li>For purchases made via Amazon India, return and replacement requests are governed by Amazon&apos;s standard furniture return guidelines.</li>
              <li>If any item arrives with transit damage or missing hardware, reach out directly to our WhatsApp support team (+91 72919 62356) with photos for immediate assistance and resolution.</li>
            </ul>
          </div>

          {/* 4. Pricing & GST Compliance */}
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-primary flex items-center gap-2">
              <Hammer className="w-4 h-4 text-accent" /> 4. Pricing, Invoicing &amp; Taxes
            </h2>
            <p className="text-content-muted">
              All prices listed on rumeahome.com and associated channels are <strong className="text-primary">inclusive of 18% GST</strong>. Every order is accompanied by a valid tax invoice compliant with Indian GST laws.
            </p>
          </div>

          {/* 5. Dispute Resolution & Contact */}
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-primary flex items-center gap-2">
              <Scale className="w-4 h-4 text-accent" /> 5. Legal Jurisdiction &amp; Registered Office
            </h2>
            <p className="text-content-muted">
              Any disputes or legal inquiries are governed under the jurisdiction of the competent courts in New Delhi, India.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-content-muted">
              <p><strong className="text-primary">Studio &amp; Registered Office:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070, India</p>
              <p><strong className="text-primary">Support Email:</strong> <a href="mailto:rumeahome@gmail.com" className="text-primary hover:text-accent font-bold underline transition-colors">rumeahome@gmail.com</a></p>
              <p><strong className="text-primary">WhatsApp / Phone:</strong> <a href="tel:+917291962356" className="text-primary hover:text-accent font-bold underline transition-colors">+91 72919 62356</a></p>
            </div>
          </div>

        </div>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
