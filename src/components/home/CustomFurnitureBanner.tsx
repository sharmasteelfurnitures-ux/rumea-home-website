'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Ruler, Sparkles, ShieldCheck, Check, ArrowRight, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function CustomFurnitureBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');

  const handleCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Rumea Home! I would like to request a callback for customized furniture.\nName: ${name || 'Customer'}\nPhone: ${phone || 'Not provided'}\nRequirement: ${requirement || 'Custom sizing & design consultation'}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setModalOpen(false);
  };

  const directWhatsAppUrl = getWhatsAppUrl(
    'Hi Rumea Home! I am looking for customized solid wood furniture for my home. Can we discuss bespoke sizes, finishes, and estimates?'
  );

  return (
    <>
      <section className="py-8 sm:py-12 bg-[#F7F4EE] subtle-grain-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Ad Banner Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#2C2926] border border-[#D8C9B5] shadow-2xl">
            
            {/* Background Lifestyle Image with Amber Overlay Reveal */}
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
                  alt="Customized Solid Sheesham Furniture by Rumea Home"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover object-right lg:object-center"
                />

                {/* Warm amber overlay that fades to opacity: 0 over 800ms on viewport entry */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 bg-[#B4783C]/35 pointer-events-none z-[5]"
                />

                {/* Dark Gradient Wash: dense on the left for crisp typography readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C2926] via-[#2C2926]/95 sm:via-[#2C2926]/85 to-[#2C2926]/30 z-[6]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2926]/80 via-transparent to-transparent sm:hidden z-[6]" />
              </div>
            </div>

            {/* Content Container (Grid Layout) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              
              {/* Left Column: Value Prop & Actions (8 cols on desktop) */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#D8C9B5]" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#D8C9B5] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D8C9B5]" /> THE RUMEA STANDARD • CONSIDERED LIVING
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F4EE] leading-tight tracking-tight">
                  Furniture Designed for <span className="text-[#D8C9B5] italic font-serif">Real Indian</span> Homes
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm lg:text-base text-[#D8C9B5]/90 max-w-2xl leading-relaxed font-sans">
                  Every piece is shaped around everyday domestic reality — elevated legs for effortless floor cleaning, compact footprints that preserve hallway walking space, and exact dimensions so there are never any surprises.
                </p>

                {/* 3 Quick Value Badges */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-btn bg-white/10 backdrop-blur-xs border border-white/15 text-white text-[11px] sm:text-xs font-medium">
                    <Ruler className="w-3.5 h-3.5 text-[#D8C9B5]" />
                    <span>Exact cm &amp; ft Measurements</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-btn bg-white/10 backdrop-blur-xs border border-white/15 text-white text-[11px] sm:text-xs font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D8C9B5]" />
                    <span>Elevated Floor Clearance</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-btn bg-white/10 backdrop-blur-xs border border-white/15 text-white text-[11px] sm:text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8C9B5]" />
                    <span>2BHK &amp; 3BHK Proportions</span>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  
                  {/* Phone Call Card Button */}
                  <a
                    href="tel:+917291962356"
                    className="btn-fill-anim inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white text-[#2C2926] hover:bg-[#F7F4EE] rounded-btn font-sans font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md group"
                  >
                    <Phone className="w-4 h-4 text-[#48563A] group-hover:scale-110 transition-transform relative z-10" />
                    <span className="relative z-10">+91 72919 62356</span>
                  </a>

                  {/* Request Sizing Advice Button */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-fill-anim inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D8C9B5] text-[#2C2926] rounded-btn font-sans font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md"
                  >
                    <span className="relative z-10">Check Room Fit</span>
                    <ArrowRight className="w-4 h-4 text-[#2C2926] relative z-10" />
                  </button>

                  {/* Direct WhatsApp Consultation Link */}
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill-anim inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-transparent border border-[#D8C9B5]/40 hover:border-[#D8C9B5] text-[#F7F4EE] rounded-btn text-xs sm:text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D8C9B5] relative z-10" />
                    <span className="relative z-10">Chat on WhatsApp</span>
                  </a>

                </div>

              </div>

              {/* Right Column: Sizing Reassurance Card (4 cols on desktop) */}
              <div className="hidden lg:flex lg:col-span-4 justify-end">
                <div className="p-5 rounded-2xl bg-[#2C2926]/90 backdrop-blur-md border border-[#D8C9B5]/40 shadow-xl max-w-xs space-y-3 text-[#F7F4EE]">
                  <div className="flex items-center justify-between border-b border-[#D8C9B5]/30 pb-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8C9B5]">The Fit Promise</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#48563A] text-white text-[10px] font-medium">Doorway &amp; Lift Fit</span>
                  </div>
                  <p className="font-serif text-sm text-white font-medium leading-snug">
                    Unsure if a sofa or bed frame will clear your hallway or lift?
                  </p>
                  <p className="text-[11px] text-[#D8C9B5]/80">
                    Send your room or doorway dimensions on WhatsApp. We provide honest sizing advice before you purchase.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Quick Request Callback Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-[#F7F4EE] rounded-2xl border border-[#D8C9B5] p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#2C2926] hover:bg-black/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#48563A]">Sizing &amp; Room Fit</span>
              <h3 className="font-serif font-medium text-2xl text-[#2C2926] mt-1">Check Room &amp; Doorway Fit</h3>
              <p className="text-xs text-[#A69B8C] mt-1">
                Share your room measurements or furniture query for direct, honest sizing guidance.
              </p>
            </div>

            <form onSubmit={handleCustomWhatsApp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-[#2C2926] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8C9B5] rounded-btn text-xs text-[#2C2926] focus:outline-none focus:border-[#48563A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2926] mb-1">Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8C9B5] rounded-btn text-xs text-[#2C2926] focus:outline-none focus:border-[#48563A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2926] mb-1">Room or Furniture Details</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Living room size is 12x14 ft. Looking for sofa that leaves comfortable walking space."
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8C9B5] rounded-btn text-xs text-[#2C2926] focus:outline-none focus:border-[#48563A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] font-medium text-xs rounded-btn flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Ask Sizing Advice on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#D8C9B5]" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
