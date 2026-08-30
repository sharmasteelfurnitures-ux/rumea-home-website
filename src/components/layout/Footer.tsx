import React from 'react';
import Link from 'next/link';
import { MessageCircle, ShieldCheck, Heart, Mail, MapPin, Phone, Instagram, Facebook, Youtube, Truck } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-neutral-300 border-t border-neutral-800 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Thoughtful Furniture for Modern Homes
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed pr-4">
              Handcrafted in India with 100% kiln-dried solid Sheesham hardwood, generational mortise &amp; tenon joinery, and non-toxic satin finishes. Built above carpenter shortcuts and priced below retail showroom markups.
            </p>
            <div className="pt-2 flex items-center space-x-2.5 text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop by Space (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Shop by Space
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
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
                  Study Desks &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors font-medium text-neutral-300">
                  All 20+ Pieces Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Care & Policies (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Care &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! What are your delivery timelines to my city?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Free PAN India Delivery
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! Can you explain the 5-year frame warranty coverage?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  5-Year Structural Warranty
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
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Woodcraft Story &amp; Joinery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Store Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Physical Store & WhatsApp Support (3.5 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
              Store &amp; Customer Care
            </h4>
            
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2 text-neutral-300 leading-snug">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                <span>F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070</span>
              </p>
              
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Store Timing: 10:00 AM – 9:00 PM (All 7 Days)</span>
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <a href="tel:+917291962356" className="flex items-center gap-1.5 text-neutral-300 hover:text-white font-medium">
                  <Phone className="w-3.5 h-3.5" /> +91 72919 62356
                </a>
                <a href="mailto:rumeahome@gmail.com" className="flex items-center gap-1.5 text-neutral-300 hover:text-white">
                  <Mail className="w-3.5 h-3.5" /> rumeahome@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home team! I would like design assistance for my apartment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-md transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Reassurance Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>© {currentYear} Rumea Home. Handcrafted Solid Sheesham Furniture.</p>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" /> SSL 256-bit Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-neutral-300" /> 100% Solid Wood
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-neutral-300" /> Free PAN India Delivery
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
