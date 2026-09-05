import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { ShieldCheck, Lock, Eye, MessageCircle, MapPin } from 'lucide-react';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our commitment to your privacy and personal data protection. Transparent, compliant, and zero-spam policy for Rumea Home buyers.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Data security, privacy protection, and transparent customer communication policies at Rumea Home.',
    url: 'https://rumeahome.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 text-[#2C2926]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Privacy Policy' }]}
          className="mb-6"
        />

        {/* Header Statement */}
        <div className="mb-10 text-center sm:text-left border-b border-[#E5DCCE] pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1F1A16] text-white text-[11px] font-bold uppercase tracking-widest rounded-btn mb-3">
            <Lock className="w-3.5 h-3.5 text-[#C8A97A]" /> DATA PRIVACY &amp; SECURITY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1F1A16] font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Last Updated: August 2026 • Compliant with Information Technology Act (2000) &amp; Consumer Protection (E-Commerce) Rules
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#C8A97A]" /> 1. Information We Collect
            </h2>
            <p>
              When you browse our catalogue, contact our team on WhatsApp, or book a showroom visit, we may collect the following details strictly to assist you:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li><strong>Contact Details:</strong> Your name, phone/WhatsApp number, and email address.</li>
              <li><strong>Delivery Information:</strong> Your 6-digit delivery pincode, full delivery address, and floor/elevator details for furniture transit.</li>
              <li><strong>Order &amp; Sizing Requests:</strong> Floor plan dimensions, custom finish preferences, and product inquiries.</li>
            </ul>
          </div>

          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A97A]" /> 2. How We Use Your Information
            </h2>
            <p>
              We use your information exclusively for operational fulfillment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>Coordinating Free Doorstep Delivery and free assembly with our logistics partners.</li>
              <li>Providing real-time sizing advice, finish photographs, and dispatch updates on WhatsApp.</li>
              <li>Validating your 5-Year Structural Frame Warranty against manufacturing defects.</li>
              <li><strong>Zero Spam Guarantee:</strong> We do not sell, rent, trade, or share your contact details with external third-party telemarketers or ad brokers.</li>
            </ul>
          </div>

          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C8A97A]" /> 3. Payment Security &amp; Marketplace Transactions
            </h2>
            <p>
              When you purchase Rumea Home furniture through our marketplace channels (such as Amazon India), your payment details (credit cards, debit cards, UPI, net banking) are processed directly by Amazon&apos;s PCI-DSS compliant secure payment gateway. Rumea Home never stores or has access to your financial credentials.
            </p>
          </div>

          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#C8A97A]" /> 4. WhatsApp Communication Policy
            </h2>
            <p>
              By initiating a message to Rumea Home on WhatsApp (+91 72919 62356), you opt-in to receive direct assistance regarding your furniture requirements, delivery updates, and sizing queries. You can request to stop or delete your conversation at any time by simply typing &quot;STOP&quot;.
            </p>
          </div>

          <div className="bg-white rounded-card p-6 sm:p-8 border border-[#E5DCCE] shadow-xs space-y-3">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#1F1A16] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A97A]" /> 5. Contact Our Privacy Officer
            </h2>
            <p>
              If you have any questions or wish to request data correction or removal, contact us directly:
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-neutral-600">
              <p><strong>Physical Address:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070, India</p>
              <p><strong>Email:</strong> <a href="mailto:rumeahome@gmail.com" className="text-[#3D2212] font-bold underline">rumeahome@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+917291962356" className="text-[#3D2212] font-bold underline">+91 72919 62356</a></p>
            </div>
          </div>

        </div>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
