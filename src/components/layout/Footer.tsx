import React from 'react';
import Link from 'next/link';
import { MessageCircle, ShieldCheck, Heart, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppDisplayNumber } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-warm-ivory border-t border-warm-sand/20 pt-14 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs text-warm-sand/90 font-medium tracking-wide uppercase">
              Thoughtful Furniture for Modern Homes
            </p>
            <p className="text-xs text-soft-taupe leading-relaxed">
              Designed for real Indian homes, built with honest materials, and priced to make sense. More than furniture — we build for the moments you share.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-warm-sand">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-warm-ivory/10 hover:bg-warm-sand hover:text-espresso transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-warm-ivory/10 hover:bg-warm-sand hover:text-espresso transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-warm-ivory/10 hover:bg-warm-sand hover:text-espresso transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-warm-sand mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-soft-taupe">
              <li>
                <Link href="/" className="hover:text-warm-ivory transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-warm-ivory transition-colors">
                  All Furniture Catalogue
                </Link>
              </li>
              <li>
                <Link href="/rooms/living-room" className="hover:text-warm-ivory transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/bedroom" className="hover:text-warm-ivory transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/rooms/dining-room" className="hover:text-warm-ivory transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/study" className="hover:text-warm-ivory transition-colors">
                  Study & Work From Home
                </Link>
              </li>
              <li>
                <Link href="/collections/modern" className="hover:text-warm-ivory transition-colors">
                  Style Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-warm-ivory transition-colors">
                  Our Story & Craftsmanship
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Trust */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-warm-sand mb-4">
              Care & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-soft-taupe">
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! I have a question about delivery timelines.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-ivory transition-colors flex items-center gap-1.5"
                >
                  <span>Free Pan-India Delivery Info</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! I want to understand your 5-year warranty policy.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-ivory transition-colors"
                >
                  5-Year Frame Warranty
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! What is your return & exchange policy?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-ivory transition-colors"
                >
                  30-Day Easy Returns
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hi! Can I get assembly assistance for my order?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-ivory transition-colors"
                >
                  Assembly Guidance & Service
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-warm-ivory transition-colors">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <span className="inline-block mt-2 px-2.5 py-1 bg-muted-olive/30 border border-muted-olive/50 text-[11px] text-warm-ivory rounded">
                  🇮🇳 100% Made in India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Concierge */}
          <div className="bg-warm-ivory/5 border border-warm-sand/20 rounded-2xl p-5 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-warm-sand">
              WhatsApp Concierge
            </h4>
            <p className="text-xs text-soft-taupe">
              Speak directly with our furniture experts for custom dimensions, fabric swatches, or delivery queries.
            </p>
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home team! I would like help selecting furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-muted-olive hover:bg-muted-olive/80 text-warm-ivory text-xs font-medium rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="text-[11px] text-soft-taupe space-y-1 pt-1">
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Mon–Sat, 9 AM – 8 PM IST</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-warm-sand" />
                <span>hello@rumeahome.com</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-warm-sand" />
                <span>Bengaluru & New Delhi, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Trust Badges */}
        <div className="pt-8 mt-8 border-t border-warm-sand/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-soft-taupe">
          <div className="flex items-center flex-wrap gap-2 text-center md:text-left">
            <p>© {currentYear} Rumea Home. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <span className="text-[11px] text-warm-sand/80">Thoughtful Furniture for Modern Homes™</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-muted-olive" /> SSL 256-bit Secure
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-warm-sand" /> Crafted in India
            </span>
            <span>•</span>
            <span>Amazon Verified Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
