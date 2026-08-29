'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  ChevronDown, 
  ChevronRight,
  MessageCircle,
  Truck,
  ArrowRight
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import SearchModal from '@/components/layout/SearchModal';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navItems = [
    {
      name: 'Living Room',
      href: '/rooms/living-room',
      subcategories: [
        { name: '3-Seater Sofas', href: '/products?room=living-room' },
        { name: 'Coffee & Nesting Tables', href: '/products?room=living-room' },
        { name: 'TV Entertainment Units', href: '/products?room=living-room' },
        { name: 'Solid Wood Bookshelves', href: '/products?room=living-room' },
      ],
      featured: {
        title: 'Oslo 3-Seater Sofa',
        tagline: 'Solid Sheesham Hardwood Frame',
        href: '/products/sofa-oslo-3seater',
      },
    },
    {
      name: 'Bedroom',
      href: '/rooms/bedroom',
      subcategories: [
        { name: 'Platform & Storage Beds', href: '/products?room=bedroom' },
        { name: 'King & Queen Beds', href: '/products?room=bedroom' },
        { name: 'Bedside Nightstands', href: '/products?room=bedroom' },
        { name: 'Solid Wood Wardrobes', href: '/products?room=bedroom' },
      ],
      featured: {
        title: 'Kyoto Platform Bed',
        tagline: 'Minimalist Floating Headboard',
        href: '/products/bed-kyoto-king',
      },
    },
    {
      name: 'Dining',
      href: '/rooms/dining-room',
      subcategories: [
        { name: '6-Seater Dining Tables', href: '/products?room=dining-room' },
        { name: '4-Seater Dining Sets', href: '/products?room=dining-room' },
        { name: 'Solid Wood Dining Chairs', href: '/products?room=dining-room' },
        { name: 'Sideboards & Buffets', href: '/products?room=dining-room' },
      ],
      featured: {
        title: 'Artisan 6-Seater Table',
        tagline: 'Hand-rubbed Natural Teak Finish',
        href: '/products/dining-table-artisan-6s',
      },
    },
    {
      name: 'Study & Work',
      href: '/rooms/study',
      subcategories: [
        { name: 'Ergonomic Wooden Desks', href: '/products?room=study' },
        { name: 'Executive Home Office Desks', href: '/products?room=study' },
        { name: 'Modular Bookcases', href: '/products?room=study' },
      ],
      featured: {
        title: 'Oslo Minimalist Study Desk',
        tagline: 'Dual Drawers & Cable Channel',
        href: '/products/desk-oslo-study',
      },
    },
    {
      name: 'Catalogue',
      href: '/products',
      subcategories: [
        { name: 'All 20+ Solid Wood Designs', href: '/products' },
        { name: 'Bestselling Pieces', href: '/products?sort=popular' },
        { name: 'New Arrivals 2026', href: '/products?sort=newest' },
      ],
      featured: {
        title: 'Complete Furniture Catalogue',
        tagline: 'Filter by room, finish & dimensions',
        href: '/products',
      },
    },
  ];

  return (
    <>
      {/* Top Announcement Reassurance Bar */}
      <aside aria-label="Announcement" className="bg-espresso text-warm-ivory text-[11px] sm:text-xs py-2 px-4 border-b border-border-sand/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-warm-sand">
            <Truck className="w-3.5 h-3.5 text-antique-gold flex-shrink-0" />
            <span className="font-medium">Free Pan-India Delivery on orders above ₹15,000</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-warm-sand text-xs">
            <span>5-Year Frame Warranty</span>
            <span>•</span>
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'nav' })}
              className="text-warm-sand hover:text-white transition-colors underline flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-antique-gold" />
              <span>WhatsApp Concierge (9 AM – 9 PM)</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Single Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-border-sand py-2.5'
            : 'bg-warm-ivory border-b border-border-sand py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[48px] md:min-h-[56px] gap-4">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-espresso hover:text-antique-gold focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation with Dropdown Menus */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-xs font-sans font-semibold text-espresso hover:text-antique-gold py-2 transition-colors uppercase tracking-wider"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3 text-soft-taupe group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Card */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-80 bg-white rounded-card shadow-card border border-border-sand p-5 animate-in fade-in zoom-in-95 duration-150 z-50">
                      <p className="text-[10px] uppercase font-bold text-antique-gold tracking-widest mb-3">
                        Shop {item.name}
                      </p>
                      <div className="space-y-1">
                        {item.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-1.5 px-2.5 rounded-btn text-xs font-medium text-espresso hover:bg-warm-ivory hover:text-antique-gold transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>

                      {item.featured && (
                        <div className="mt-4 pt-3 border-t border-border-sand/60">
                          <p className="text-[10px] font-bold uppercase text-soft-taupe tracking-wider">
                            Popular Choice
                          </p>
                          <Link
                            href={item.featured.href}
                            className="mt-1.5 block p-2.5 bg-warm-ivory rounded-card border border-border-sand hover:border-espresso/30 transition-colors"
                          >
                            <p className="font-serif font-bold text-xs text-espresso">{item.featured.title}</p>
                            <p className="text-[11px] text-soft-taupe truncate">{item.featured.tagline}</p>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/about"
                className="text-xs font-sans font-semibold text-espresso hover:text-antique-gold py-2 transition-colors uppercase tracking-wider"
              >
                Our Story
              </Link>
            </nav>

            {/* Right Controls: Predictive Search Trigger + Wishlist + WhatsApp Concierge CTA */}
            <div className="flex items-center space-x-2.5 sm:space-x-3.5">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 py-2 px-3 sm:px-4 bg-white border border-border-sand rounded-btn text-xs text-soft-taupe hover:text-espresso hover:border-espresso/40 shadow-xs transition-all duration-200"
                aria-label="Search furniture collection"
              >
                <Search className="w-3.5 h-3.5 text-antique-gold" />
                <span className="hidden sm:inline">Search furniture...</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/products"
                className="p-2 text-espresso hover:text-antique-gold transition-colors rounded-btn hover:bg-warm-ivory"
                aria-label="View collection"
              >
                <Heart className="w-4 h-4" />
              </Link>

              {/* Primary WhatsApp Concierge Button */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like advice on furniture sizing and options.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-espresso text-warm-ivory hover:bg-espresso/90 text-xs font-semibold rounded-btn shadow-warm transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-warm-sand" />
                <span className="hidden sm:inline">WhatsApp Concierge</span>
                <span className="sm:hidden">Chat</span>
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* Predictive Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-espresso/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-warm-ivory h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-r border-border-sand animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-sand">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-soft-taupe hover:text-espresso rounded-btn"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Button */}
              <div className="mt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchModalOpen(true);
                  }}
                  className="w-full flex items-center gap-2 py-2.5 px-3 bg-white border border-border-sand rounded-btn text-xs text-soft-taupe"
                >
                  <Search className="w-4 h-4 text-antique-gold" />
                  <span>Search all furniture...</span>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-antique-gold px-3 mb-1">
                  Shop by Space
                </p>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-btn text-espresso font-semibold hover:bg-warm-sand/30 transition-colors text-xs"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-soft-taupe" />
                  </Link>
                ))}

                <div className="pt-3 mt-3 border-t border-border-sand/60 space-y-1">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-semibold text-espresso hover:text-antique-gold"
                  >
                    Complete Catalogue &rarr;
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-medium text-espresso hover:text-antique-gold"
                  >
                    Our Story &amp; Craftsmanship
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-medium text-espresso hover:text-antique-gold"
                  >
                    Contact &amp; Assistance
                  </Link>
                </div>
              </nav>
            </div>

            <div className="pt-6 border-t border-border-sand">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'm browsing on mobile and would like advice.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-espresso text-warm-ivory text-xs font-semibold rounded-btn shadow-warm"
              >
                <MessageCircle className="w-4 h-4 text-warm-sand" />
                <span>WhatsApp Furniture Advisor</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
