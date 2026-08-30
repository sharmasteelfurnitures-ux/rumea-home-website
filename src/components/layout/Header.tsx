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

  // Mouse position tracking for interactive WhatsApp button color change
  const [waMousePos, setWaMousePos] = useState({ x: 50, y: 50 });
  const [isWaHovered, setIsWaHovered] = useState(false);

  const handleWaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setWaMousePos({ x, y });
  };

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
            <span className="font-medium">Free PAN India Delivery on All Orders</span>
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
              <span>WhatsApp (10 AM – 9 PM)</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Single Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-card border-b border-border-sand py-2.5'
            : 'bg-warm-ivory border-b border-border-sand py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[48px] md:min-h-[56px] gap-3 xl:gap-6">
            
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

            {/* Brand Logo with generous breathing room */}
            <div className="flex-shrink-0 flex items-center mr-4 md:mr-8 xl:mr-10">
              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation with Dropdown Menus (Single-line, non-wrapping) */}
            <nav className="hidden lg:flex items-center flex-nowrap space-x-4 xl:space-x-6 flex-shrink-0">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[13px] font-sans font-medium text-espresso hover:text-terracotta py-2 px-1 transition-colors whitespace-nowrap"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-soft-taupe group-hover:rotate-180 transition-transform duration-200" />
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
                className="text-[13px] font-sans font-medium text-espresso hover:text-terracotta py-2 px-1 transition-colors whitespace-nowrap"
              >
                Our Story
              </Link>
            </nav>

            {/* Right Controls: Search + Wishlist + Interactive Mouse-Tracking WhatsApp Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="h-10 flex items-center gap-2 px-3 sm:px-4 bg-white border border-border-sand rounded-btn text-xs text-soft-taupe hover:text-espresso hover:border-espresso/40 shadow-xs transition-all duration-200"
                aria-label="Search furniture collection"
              >
                <Search className="w-3.5 h-3.5 text-antique-gold" />
                <span className="hidden sm:inline">Search furniture...</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/products"
                className="h-10 w-10 flex items-center justify-center text-espresso hover:text-antique-gold transition-colors rounded-btn hover:bg-warm-ivory border border-border-sand/40 hover:border-border-sand shadow-xs"
                aria-label="View collection"
              >
                <Heart className="w-4 h-4" />
              </Link>

              {/* 🌟 LUXURY INTERACTIVE WHATSAPP BUTTON WITH DYNAMIC MOUSE-DRAG COLOR SHIFT */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like advice on furniture sizing and options.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                onMouseEnter={() => setIsWaHovered(true)}
                onMouseLeave={() => setIsWaHovered(false)}
                onMouseMove={handleWaMouseMove}
                style={{
                  background: isWaHovered
                    ? `radial-gradient(circle at ${waMousePos.x}% ${waMousePos.y}%, #25D366 0%, #128C7E 45%, #0B4F45 100%)`
                    : 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                }}
                className="h-10 relative inline-flex items-center gap-2 px-4 sm:px-5 text-white text-xs sm:text-sm font-semibold rounded-btn shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-200 overflow-hidden border border-emerald-400/30 group select-none"
              >
                {/* Dynamic Radial Spotlight Reflection */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${waMousePos.x}% ${waMousePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                  }}
                />

                {/* Animated Pulsing Green Online Radar Dot */}
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-white/50"></span>
                </span>

                <MessageCircle className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                <span className="tracking-wide">WhatsApp</span>
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
                  className="p-1 text-espresso hover:text-antique-gold focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-border-sand/40 pb-3">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-sm font-semibold text-espresso hover:text-antique-gold py-1"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-soft-taupe" />
                    </Link>
                    <div className="mt-2 pl-3 space-y-2">
                      {item.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-xs text-soft-taupe hover:text-espresso"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/about"
                  className="block text-sm font-semibold text-espresso hover:text-antique-gold py-2"
                >
                  Our Story
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-semibold text-espresso hover:text-antique-gold py-2"
                >
                  Contact &amp; Showroom
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-border-sand">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#128C7E] text-white text-xs font-bold rounded-btn shadow-md hover:bg-[#075E54] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
