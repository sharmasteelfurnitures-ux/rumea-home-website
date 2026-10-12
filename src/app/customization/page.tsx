'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Ruler, 
  Layers, 
  Hammer, 
  Truck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ShieldCheck
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function CustomizationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    furnitureType: 'Wall-Mounted Shoe Rack',
    dimensions: '',
    materialPreference: 'Powder-Coated Steel (Matte Black)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Space Sizing & Furniture Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.furnitureType}\nMaterial/Finish: ${formData.materialPreference}\nDimensions: ${formData.dimensions || 'To be discussed'}\nNotes: ${formData.notes || 'None'}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  const steps = [
    {
      icon: Ruler,
      title: '1. Share Space & Dimensions',
      desc: 'Send us your room measurements, layout photos, or space constraints via WhatsApp.',
    },
    {
      icon: Layers,
      title: '2. Proportional Fit Guidance',
      desc: 'Our team helps you check walking clearances, door swing room, and the best catalog fits.',
    },
    {
      icon: Hammer,
      title: '3. Finish & Material Advisory',
      desc: 'Get advice on wood tones, fabric palettes, and durable finishes matching your home interior.',
    },
    {
      icon: Truck,
      title: '4. Reliable Doorstep Delivery',
      desc: 'Order conveniently via Amazon India with multi-layer packaging and transit protection.',
    },
  ];

  const examples = [
    {
      title: 'Compact Entryway Organizer Setup',
      category: 'Entryway',
      desc: 'Wall-Mounted 4-Slab Shoe Rack paired with Multi-Hook Coat Stand for narrow apartment foyers.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fold-Flat WFH & Study Station',
      category: 'Home Office & Study',
      desc: '4x2 Multipurpose Folding Table with Heavy-Duty Folding Chair for compact bedrooms and balconies.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Flexible Guest Dining Arrangement',
      category: 'Dining & Living',
      desc: '3x2 Multipurpose Folding Table paired with extra foldaway seating that stows flat behind doors.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-surface-page pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-content-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">Bespoke Customization</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-primary text-primary-text p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl mb-16">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-sand/15 text-sand text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sand" />
              <span>Room Fit &amp; Sizing Advisory</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-primary-text leading-tight">
              Furniture Sized for Your Exact Space
            </h1>
            <p className="text-sand text-sm sm:text-base mt-4 leading-relaxed">
              Unsure if a sofa will fit your living room alcove or if a dining table leaves enough walking clearance? Connect directly with our team for honest dimensional and placement guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I would like advice on furniture sizing for my room.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'customization' })}
                className="px-6 py-3.5 bg-sand hover:bg-sand/80 text-primary text-xs font-semibold rounded-btn transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href="tel:+917291962356"
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-primary-text border border-sand/30 text-xs font-semibold rounded-btn transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sand" />
                <span>Call Support: +91 72919 62356</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Step Process */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-2">
              HOW BESPOKE CRAFT WORKS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary">
              From Concept to Your Living Room
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface rounded-2xl p-6 border border-border shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-page border border-border flex items-center justify-center text-accent mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-medium text-base text-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-content-muted leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Portfolio Highlights */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-1">
                RECENT WORKSHOP COMMISSIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary">
                Crafted for Modern Indian Homes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-surface-page">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-md text-primary-text text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-base text-primary">{item.title}</h3>
                  <p className="text-xs text-content-muted mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Consultation Form Card */}
        <div className="bg-surface rounded-3xl border border-border p-8 sm:p-12 shadow-md max-w-3xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-2">
              START YOUR COMMISSION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary">
              Request a Custom Sizing Quote
            </h2>
            <p className="text-xs sm:text-sm text-content-muted mt-1.5">
              Fill in your dimensions or requirements below. Our workshop manager will connect within 30 minutes with 3D options and pricing.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 bg-surface-page rounded-2xl border border-border">
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-serif text-lg text-primary">Quote Request Sent!</h3>
              <p className="text-xs text-content-muted mt-1">Our woodcraft specialist is reviewing your measurements on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-primary mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-primary mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-primary mb-1">Furniture Type</label>
                  <select
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Wall-Mounted Shoe Rack">Wall-Mounted Shoe Rack (3/4/5 Slab)</option>
                    <option value="Folding Multipurpose Table">Folding Multipurpose Table (3x2 or 4x2)</option>
                    <option value="Heavy-Duty Folding Chair">Heavy-Duty Folding Chair</option>
                    <option value="Multi-Hook Coat Stand">Multi-Hook Metal Coat Stand</option>
                    <option value="Classic 3-Seater Sofa">Rumea Classic 3-Seater Sofa</option>
                    <option value="Complete Apartment Bundle">Complete Apartment Bundle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-primary mb-1">Material &amp; Finish</label>
                  <select
                    value={formData.materialPreference}
                    onChange={(e) => setFormData({ ...formData, materialPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Powder-Coated Steel (Matte Black)">Powder-Coated Steel (Matte Black)</option>
                    <option value="Water-Resistant Melamine Finish">Water-Resistant Melamine Finish</option>
                    <option value="Heavy-Duty Steel Frame">Heavy-Duty Steel Frame</option>
                    <option value="Open to Recommendation">Open to Recommendation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-primary mb-1">Space Dimensions / Target Size</label>
                <input
                  type="text"
                  placeholder="e.g. 7 feet length x 3 feet depth, or 84 x 36 inches"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-primary mb-1">Specific Design Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Any reference design ideas, fabric color preferences, or room layout notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface-page border border-border rounded-xl text-xs text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-primary-text text-xs font-semibold rounded-btn transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-sand" />
                <span>Submit Specification to Workshop via WhatsApp</span>
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-center gap-6 text-[11px] text-content-muted">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> 5-Year Timber Warranty</span>
            <span>•</span>
            <span>Free PAN India Delivery</span>
            <span>•</span>
            <span>Zero Synthetic MDF</span>
          </div>
        </div>

      </div>
    </div>
  );
}
