import React from 'react';
import Link from 'next/link';
import { MessageCircle, ShieldCheck, Heart, Mail, MapPin, Instagram, Facebook, Youtube, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E180D] text-warm-ivory border-t border-[#522E19] pt-16 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Brand Philosophy */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs text-warm-sand font-bold tracking-widest uppercase">
              Thoughtful Furniture for Modern Homes
            </p>
            <p className="text-xs text-warm-sand/80 leading-relaxed">
              Handcrafted in India with 100% kiln-dried solid Sheesham hardwood, generational mortise &amp; tenon joinery, and non-toxic satin finishes. Built above carpenter shortcuts and priced below retail showroom markups.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-warm-sand">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-btn bg-white/10 hover:bg-antique-gold hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-btn bg-white/10 hover:bg-antique-gold hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-btn bg-white/10 hover:bg-antique-gold hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Rooms & Collections */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-200/90 mb-4">
              Shop by Space
            </h4>
            <ul className="space-y-2.5 text-xs text-warm-sand/80">
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
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-200/90 mb-4">
              Care &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-warm-sand/80">
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
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-antique-gold/20 border border-antique-gold/60 text-[11px] text-amber-200 rounded-btn font-bold">
                  🇮🇳 100% Handcrafted in India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Box (Rich Wood Surface #3D2212) */}
          <div className="bg-[#3D2212] border border-[#5A351D] rounded-card p-5 space-y-3 shadow-lg">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-200">
              WhatsApp
            </h4>
            <p className="text-xs text-warm-sand/80 leading-relaxed">
              Consult our woodcraft designers for room blueprints, custom timber finishes, or live order tracking.
            </p>
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home team! I would like design assistance for my apartment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-btn transition-colors shadow-md hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="text-[11px] text-warm-sand/70 space-y-1 pt-1">
              <p className="flex items-center gap-1.5 font-medium text-warm-sand">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Mon–Sat, 9:00 AM – 9:00 PM IST</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-warm-sand" />
                <span>hello@rumeahome.com</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-warm-sand" />
                <span>Bengaluru &amp; New Delhi, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Reassurance & Copyright Bar */}
        <div className="pt-8 border-t border-[#522E19] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-sand/70">
          <div className="flex items-center flex-wrap gap-2 text-center md:text-left">
            <p>© {currentYear} Rumea Home. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <span className="text-[11px] text-warm-sand/90">Thoughtful Furniture for Modern Homes</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-antique-gold" /> SSL 256-bit Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-warm-sand" /> Solid Sheesham
            </span>
            <span>•</span>
            <span>Amazon Verified Merchant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
