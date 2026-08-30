import React from 'react';
import Link from 'next/link';
import { MessageCircle, ShieldCheck, Heart, Mail, MapPin, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181412] text-[#EAE2D8] border-t border-[#332A24] pt-16 pb-20 md:pb-12 relative overflow-hidden">
      
      {/* Subtle Warm Amber Atmospheric Reflection */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Brand Philosophy & Social Links */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-[11px] text-amber-200/90 font-semibold tracking-widest uppercase">
              Thoughtful Furniture for Modern Homes
            </p>
            <p className="text-xs text-[#B8AAA0] leading-relaxed">
              Handcrafted in India with 100% kiln-dried solid Sheesham hardwood, generational mortise &amp; tenon joinery, and non-toxic satin finishes. Built above carpenter shortcuts and priced below retail showroom markups.
            </p>
            <div className="pt-2 flex items-center space-x-2.5 text-[#B8AAA0]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-btn bg-[#241D19] border border-[#3A2F28] hover:border-amber-400/50 hover:text-amber-200 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-btn bg-[#241D19] border border-[#3A2F28] hover:border-amber-400/50 hover:text-amber-200 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-btn bg-[#241D19] border border-[#3A2F28] hover:border-amber-400/50 hover:text-amber-200 transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Rooms & Collections */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.18em] text-[#E8DEC8] mb-4">
              Shop by Space
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89C92]">
              <li>
                <Link href="/products" className="hover:text-white transition-colors font-medium">
                  Complete Catalogue (All 20+ Pieces)
                </Link>
              </li>
              <li>
                <Link href="/rooms/living-room" className="hover:text-white transition-colors">
                  Living Room Suites
                </Link>
              </li>
              <li>
                <Link href="/rooms/bedroom" className="hover:text-white transition-colors">
                  Bedroom &amp; Platform Beds
                </Link>
              </li>
              <li>
                <Link href="/rooms/dining-room" className="hover:text-white transition-colors">
                  Dining Sets &amp; Sideboards
                </Link>
              </li>
              <li>
                <Link href="/rooms/study" className="hover:text-white transition-colors">
                  Study Desks &amp; Work From Home
                </Link>
              </li>
              <li>
                <Link href="/collections/scandinavian" className="hover:text-white transition-colors">
                  Scandinavian Modern Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Woodcraft Story &amp; Joinery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care, Guarantees & Policies */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.18em] text-[#E8DEC8] mb-4">
              Care &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89C92]">
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! What are your delivery timelines to my city?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Free Pan-India Delivery Info (₹15,000+)
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! Can you explain the 5-year frame warranty coverage?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  5-Year Structural Frame Warranty
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! What is the 30-day return policy?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  30-Day Doorstep Returns
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Customer Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Privacy Policy &amp; Terms of Service
                </Link>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-400/10 border border-amber-400/40 text-[11px] text-amber-200 rounded-btn font-semibold">
                  🇮🇳 100% Handcrafted in India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Consultation Card */}
          <div className="bg-[#221B17] border border-[#3E322A] rounded-card p-5 space-y-3.5 shadow-xl">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.18em] text-[#E8DEC8] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> WhatsApp
            </h4>
            <p className="text-xs text-[#B8AAA0] leading-relaxed">
              Consult our woodcraft designers for room blueprints, custom timber finishes, or live order tracking.
            </p>
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home team! I would like design assistance for my apartment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-btn transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="text-[11px] text-[#A89C92] space-y-1.5 pt-1 border-t border-[#3A2F28]/60">
              <p className="flex items-center gap-1.5 font-medium text-amber-200/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Mon–Sat, 9:00 AM – 9:00 PM IST</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B8AAA0]" />
                <span>hello@rumeahome.com</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B8AAA0]" />
                <span>Bengaluru &amp; New Delhi, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Reassurance & Copyright Bar */}
        <div className="pt-8 border-t border-[#2E241E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E8278]">
          <div className="flex items-center flex-wrap gap-2 text-center md:text-left">
            <p>© {currentYear} Rumea Home. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <span className="text-[11px] text-[#A89C92]">Thoughtful Furniture for Modern Homes</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-[#A89C92]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> SSL 256-bit Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#A89C92]">
              <Heart className="w-3.5 h-3.5 text-terracotta" /> Solid Sheesham
            </span>
            <span>•</span>
            <span>Amazon Verified Merchant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
