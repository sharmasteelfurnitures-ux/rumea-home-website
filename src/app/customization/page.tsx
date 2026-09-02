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
    furnitureType: 'Custom Sofa',
    dimensions: '',
    woodPreference: 'Solid Sheesham',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Custom Furniture Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.furnitureType}\nWood: ${formData.woodPreference}\nDimensions: ${formData.dimensions || 'To be discussed'}\nNotes: ${formData.notes || 'None'}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  const steps = [
    {
      icon: Ruler,
      title: '1. Share Space & Dimensions',
      desc: 'Send us your room measurements, architectural blueprints, or a photo/sketch of the furniture piece you desire.',
    },
    {
      icon: Layers,
      title: '2. 3D CAD & Timber Selection',
      desc: 'Our design studio prepares proportional 3D drawings with your choice of 100% solid Sheesham, Teak, or Ash timber finishes.',
    },
    {
      icon: Hammer,
      title: '3. Master Handcrafting',
      desc: 'Generational carpenters hand-shape every mortise & tenon joint in our workshop. We share in-progress photos during build.',
    },
    {
      icon: Truck,
      title: '4. White-Glove Installation',
      desc: 'Delivered directly to your home with free assembly, leveling, and a certified 5-year structural timber warranty.',
    },
  ];

  const examples = [
    {
      title: 'Made-to-Measure L-Shape Sectional',
      category: 'Living Room',
      desc: 'Customized length to fit exact 14-foot living alcove with high-resilience memory foam and solid timber feet.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Solid Teak 8-Seater Dining Suite',
      category: 'Dining Space',
      desc: 'Extended 8-foot monolithic solid timber tabletop with custom bevel edges and matching cane-back chairs.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Floor-to-Ceiling Wardrobe Almirah',
      category: 'Master Bedroom',
      desc: 'Customized interior shelving, soft-close hardware, and natural grain matching across all four solid doors.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#A69B8C] mb-8">
          <Link href="/" className="hover:text-[#2C2926] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#2C2926] font-medium">Bespoke Customization</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-[#2C2926] text-[#F7F4EE] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl mb-16">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 text-[#D8C9B5] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D8C9B5]" />
              <span>Bespoke Workshop Studio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              Furniture Tailored to Your Exact Space
            </h1>
            <p className="text-[#D8C9B5] text-sm sm:text-base mt-4 leading-relaxed">
              Cannot find the exact length for your wall or the right wood stain to match your flooring? Our master woodcrafters build custom solid timber pieces made precisely for your home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I would like to discuss a custom furniture design.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'customization' })}
                className="px-6 py-3.5 bg-[#D8C9B5] hover:bg-[#C9B9A3] text-[#2C2926] text-xs font-semibold rounded-btn transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <a
                href="tel:+917291962356"
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#F7F4EE] border border-white/20 text-xs font-semibold rounded-btn transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D8C9B5]" />
                <span>Call Workshop: +91 72919 62356</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Step Process */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#48563A] block mb-2">
              HOW BESPOKE CRAFT WORKS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2926]">
              From Concept to Your Living Room
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#D8C9B5] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] border border-[#D8C9B5] flex items-center justify-center text-[#48563A] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-medium text-base text-[#2C2926] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#A69B8C] leading-relaxed">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#48563A] block mb-1">
                RECENT WORKSHOP COMMISSIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2926]">
                Crafted for Modern Indian Homes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-[#D8C9B5] shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-[#EAE5DC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2C2926]/90 backdrop-blur-md text-[#F7F4EE] text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-base text-[#2C2926]">{item.title}</h3>
                  <p className="text-xs text-[#A69B8C] mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Consultation Form Card */}
        <div className="bg-white rounded-3xl border border-[#D8C9B5] p-8 sm:p-12 shadow-md max-w-3xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#48563A] block mb-2">
              START YOUR COMMISSION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2926]">
              Request a Custom Sizing Quote
            </h2>
            <p className="text-xs sm:text-sm text-[#A69B8C] mt-1.5">
              Fill in your dimensions or requirements below. Our workshop manager will connect within 30 minutes with 3D options and pricing.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 bg-[#F7F4EE] rounded-2xl border border-[#D8C9B5]">
              <CheckCircle2 className="w-12 h-12 text-[#48563A] mx-auto mb-3" />
              <h3 className="font-serif text-lg text-[#2C2926]">Quote Request Sent!</h3>
              <p className="text-xs text-[#A69B8C] mt-1">Our woodcraft specialist is reviewing your measurements on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C2926] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2926] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C2926] mb-1">Furniture Type</label>
                  <select
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                  >
                    <option value="Custom Sofa">Sofa / Sectional</option>
                    <option value="Platform Bed">Platform Bed / Storage Bed</option>
                    <option value="Dining Table">Dining Table (4/6/8-Seater)</option>
                    <option value="Almirah / Wardrobe">Almirah / Wardrobe Cabinet</option>
                    <option value="Study Desk">Study Desk / Bookshelf</option>
                    <option value="Complete Room Suite">Complete Room Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2926] mb-1">Preferred Solid Timber</label>
                  <select
                    value={formData.woodPreference}
                    onChange={(e) => setFormData({ ...formData, woodPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                  >
                    <option value="Solid Sheesham">Solid Sheesham (Indian Rosewood)</option>
                    <option value="Seasoned Teak Wood">Seasoned Teak Wood</option>
                    <option value="White Ash / Natural Teak Stain">White Ash / Natural Teak Stain</option>
                    <option value="Open to Recommendation">Open to Recommendation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2926] mb-1">Space Dimensions / Target Size</label>
                <input
                  type="text"
                  placeholder="e.g. 7 feet length x 3 feet depth, or 84 x 36 inches"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2926] mb-1">Specific Design Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Any reference design ideas, fabric color preferences, or room layout notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#D8C9B5] rounded-xl text-xs text-[#2C2926] focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-btn transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
                <span>Submit Specification to Workshop via WhatsApp</span>
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-[#D8C9B5]/50 flex items-center justify-center gap-6 text-[11px] text-[#A69B8C]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#48563A]" /> 5-Year Timber Warranty</span>
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
