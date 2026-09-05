import React from 'react';
import Link from 'next/link';
import { 
  MessageCircle, 
  ShieldCheck, 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  Truck, 
  RotateCcw, 
  Award,
  ArrowRight,
  Clock
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2926] text-[#F7F4EE] border-t border-[#2C2926] pt-0 pb-12">
      
      {/* 1. Top Reassurance Value Strip */}
      <div className="border-b border-[#D8C9B5]/15 bg-[#2C2926] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D8C9B5] text-[#2C2926] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Truck className="w-5 h-5 text-[#2C2926]" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-xs sm:text-sm text-[#F7F4EE]">Free PAN India Delivery</h4>
                <p className="text-[11px] text-[#A69B8C] mt-0.5">On all orders with professional transit packing</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D8C9B5] text-[#2C2926] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#2C2926]" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-xs sm:text-sm text-[#F7F4EE]">5-Year Frame Warranty</h4>
                <p className="text-[11px] text-[#A69B8C] mt-0.5">100% Solid Kiln-Dried Sheesham Timber</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D8C9B5] text-[#2C2926] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <RotateCcw className="w-5 h-5 text-[#2C2926]" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-xs sm:text-sm text-[#F7F4EE]">30-Day Doorstep Returns</h4>
                <p className="text-[11px] text-[#A69B8C] mt-0.5">Zero hassle reverse pickup &amp; replacement</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D8C9B5] text-[#2C2926] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Award className="w-5 h-5 text-[#2C2926]" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-xs sm:text-sm text-[#F7F4EE]">Zero MDF / Zero Veneer</h4>
                <p className="text-[11px] text-[#A69B8C] mt-0.5">Authentic master woodcraft made in India</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Navigation & Store Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D8C9B5]/15">
          
          {/* Column 1: Brand & Craft Philosophy (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#D8C9B5]">
              Thoughtful Furniture for Modern Homes
            </p>
            <p className="text-xs text-[#A69B8C] leading-relaxed pr-4">
              Handcrafted in India with 100% kiln-dried solid Sheesham hardwood, generational mortise &amp; tenon joinery, and non-toxic satin finishes. Built above carpenter shortcuts and priced below retail showroom markups.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-[#A69B8C]">
              <a
                href="https://instagram.com/rumeahome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @rumeahome"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D8C9B5] hover:text-[#D8C9B5] flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/rumeahome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook @rumeahome"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D8C9B5] hover:text-[#D8C9B5] flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@rumeahome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube @rumeahome"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D8C9B5] hover:text-[#D8C9B5] flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop by Space (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-medium uppercase tracking-[0.05em] text-[#D8C9B5]">
              Shop by Space
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A69B8C]">
              <li>
                <Link href="/rooms/living-room" className="hover:text-[#D8C9B5] hover:underline transition-colors flex items-center gap-1 group">
                  <span>Living Room Suites</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/bedroom" className="hover:text-[#D8C9B5] hover:underline transition-colors flex items-center gap-1 group">
                  <span>Bedroom &amp; Platform Beds</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/dining-room" className="hover:text-[#D8C9B5] hover:underline transition-colors flex items-center gap-1 group">
                  <span>Dining Sets &amp; Tables</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/study" className="hover:text-[#D8C9B5] hover:underline transition-colors flex items-center gap-1 group">
                  <span>Study Desks &amp; Work</span>
                </Link>
              </li>
              <li>
                <Link href="/collections/scandinavian" className="hover:text-[#D8C9B5] hover:underline transition-colors flex items-center gap-1 group">
                  <span>Scandinavian Collection</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="font-medium text-[#F7F4EE] hover:text-[#D8C9B5] transition-colors inline-flex items-center gap-1 pt-1">
                  <span>View All 20+ Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Care, Guarantees & Policies (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-medium uppercase tracking-[0.05em] text-[#D8C9B5]">
              Care &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A69B8C]">
              <li>
                <Link href="/terms" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  Free PAN India Delivery
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  5-Year Frame Warranty
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  30-Day Doorstep Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  Privacy Policy &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  Our Woodcraft Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D8C9B5] hover:underline transition-colors">
                  Experience Store &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Physical Store & WhatsApp Assistance (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 bg-white/5 border border-[#D8C9B5]/15 rounded-card p-5 sm:p-6 shadow-2xs">
            <h4 className="font-serif text-sm font-medium uppercase tracking-[0.05em] text-[#D8C9B5]">
              Experience Store &amp; WhatsApp Support
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#A69B8C]">
              <div className="flex items-start gap-2 text-[#F7F4EE]">
                <MapPin className="w-4 h-4 text-[#D8C9B5] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                <span>Experience Store Hours: 10:00 AM – 9:00 PM (All 7 Days)</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                <a href="tel:+917291962356" className="text-[#D8C9B5] hover:text-[#F7F4EE] font-medium transition-colors">
                  +91 72919 62356
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                <a href="mailto:rumeahome@gmail.com" className="text-[#D8C9B5] hover:text-[#F7F4EE] font-medium transition-colors">
                  rumeahome@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home team! I would like design assistance for my apartment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-transparent border border-[#D8C9B5] text-[#D8C9B5] hover:bg-[#D8C9B5]/10 text-xs font-medium rounded-btn transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Bar: Copyright & Reassurance Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A69B8C]">
          <div className="flex items-center flex-wrap gap-2 text-center sm:text-left">
            <p>© {currentYear} Rumea Home. Handcrafted Solid Sheesham Hardwood.</p>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacy-policy" className="hover:underline hover:text-[#D8C9B5]">Privacy Policy</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/terms" className="hover:underline hover:text-[#D8C9B5]">Terms &amp; Warranty</Link>
          </div>

          <div className="flex items-center gap-4 text-[#A69B8C] text-[11px] font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8C9B5]" /> SSL 256-bit Encrypted
            </span>
            <span className="text-[#48563A]">•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#48563A]" /> 100% Solid Wood
            </span>
            <span className="text-[#48563A]">•</span>
            <span>Made in India 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
