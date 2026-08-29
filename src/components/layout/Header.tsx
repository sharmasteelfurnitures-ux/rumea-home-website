'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  ShoppingBag, 
  ChevronDown, 
  ChevronRight,
  MessageCircle,
  Sparkles,
  Truck
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import SearchModal from '@/components/layout/SearchModal';
import CategoryNavStrip from '@/components/layout/CategoryNavStrip';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        { name: '3-Seater Sofas', href: '/products?category=sofa' },
        { name: 'Sectional & L-Shape', href: '/products?category=sectional' },
        { name: 'Coffee Tables', href: '/products?category=coffee-table' },
        { name: 'TV Consoles', href: '/products?category=tv-unit' },
        { name: 'Accent Armchairs', href: '/products?category=accent-chair' },
      ],
      featured: {
        title: 'Oslo 3-Seater Sofa',
        tagline: 'Solid Sheesham & High-Resilience Foam',
        href: '/products/sofa-oslo-3seater',
      }
    },
    {
      name: 'Bedroom',
      href: '/rooms/bedroom',
      subcategories: [
        { name: 'Platform Beds', href: '/products?category=bed' },
        { name: 'King & Queen Beds', href: '/products?category=bed' },
        { name: 'Bedside Nightstands', href: '/products?category=nightstand' },
        { name: 'Hardwood Wardrobes', href: '/products?category=wardrobe' },
        { name: 'Dressing Consoles', href: '/products?category=dresser' },
      ],
      featured: {
        title: 'Kyoto Platform Bed',
        tagline: 'Floating Minimalist Headboard',
        href: '/products/bed-kyoto-king',
      }
    },
    {
      name: 'Dining',
      href: '/rooms/dining-room',
      subcategories: [
        { name: '6-Seater Dining Sets', href: '/products?category=dining-table' },
        { name: '4-Seater Dining Tables', href: '/products?category=dining-table' },
        { name: 'Solid Wood Dining Chairs', href: '/products?category=dining-chair' },
        { name: 'Sideboards & Crockery Units', href: '/products?category=sideboard' },
      ],
      featured: {
        title: 'Artisan 6-Seater Dining Table',
        tagline: 'Hand-rubbed Natural Teak Finish',
        href: '/products/dining-table-artisan-6s',
      }
    },
    {
      name: 'Study & Work',
      href: '/rooms/study',
      subcategories: [
        { name: 'Ergonomic Desks', href: '/products?category=study-desk' },
        { name: 'Executive Wooden Desks', href: '/products?category=study-desk' },
        { name: 'Solid Wood Bookshelves', href: '/products?category=bookshelf' },
      ],
      featured: {
        title: 'Oslo Minimalist Study Desk',
        tagline: 'Built-in Cable Management',
        href: '/products/desk-oslo-study',
      }
    },
    {
      name: 'Collections',
      href: '/collections/modern',
      subcategories: [
        { name: 'Scandinavian Modern', href: '/collections/scandinavian' },
        { name: 'Modern Minimalist', href: '/collections/modern' },
        { name: 'Warm Traditional', href: '/collections/traditional' },
      ],
      featured: {
        title: 'Scandinavian Suite',
        tagline: 'Light Teak & Organic Contours',
        href: '/collections/scandinavian',
      }
    },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Announcement" className="bg-espresso text-warm-ivory text-[11px] md:text-xs py-2 px-4 text-center font-body border-b border-warm-sand/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2 text-warm-sand">
            <Truck className="w-3.5 h-3.5 text-muted-olive" />
            <span>Free Pan-India Delivery on orders above ₹15,000</span>
          </div>

          <div className="flex-1 sm:flex-none text-center sm:text-right">
            <a
              href={buildWhatsAppUrl("Hi! I'd like to ask a question about your furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-sand hover:text-warm-ivory transition-colors underline flex items-center justify-center sm:justify-end gap-1.5 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-muted-olive" />
              <span>WhatsApp Concierge: Sizing & Customization</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-warm-sand/40 py-2.5'
            : 'bg-warm-ivory border-b border-warm-sand/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 md:h-12 gap-4">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-espresso hover:text-muted-olive focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation with Mega-Menu Dropdowns (Inspired by Wakefit/Krishna) */}
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
                    className="flex items-center gap-1 text-xs font-body font-semibold text-espresso hover:text-muted-olive py-2 transition-colors uppercase tracking-wider"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3 text-soft-taupe group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-warm-sand p-5 animate-in fade-in zoom-in-95 duration-150 z-50">
                      <p className="text-[10px] uppercase font-bold text-muted-olive tracking-widest mb-3">
                        Shop {item.name}
                      </p>
                      <div className="space-y-1.5">
                        {item.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-1.5 px-2.5 rounded-lg text-xs font-medium text-espresso hover:bg-warm-ivory hover:text-muted-olive transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>

                      {item.featured && (
                        <div className="mt-4 pt-3 border-t border-warm-sand/40">
                          <p className="text-[10px] font-bold uppercase text-soft-taupe tracking-wider">
                            Popular Choice
                          </p>
                          <Link
                            href={item.featured.href}
                            className="mt-1 block p-2 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 transition-colors"
                          >
                            <p className="font-display font-bold text-xs text-espresso">{item.featured.title}</p>
                            <p className="text-[10px] text-soft-taupe truncate">{item.featured.tagline}</p>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/products"
                className="text-xs font-body font-semibold text-espresso hover:text-muted-olive py-2 transition-colors uppercase tracking-wider"
              >
                All Products
              </Link>

              <Link
                href="/about"
                className="text-xs font-body font-semibold text-espresso hover:text-muted-olive py-2 transition-colors uppercase tracking-wider"
              >
                About
              </Link>
            </nav>

            {/* Right Controls: Search + Wishlist + WhatsApp CTA */}
            <div className="flex items-center space-x-2.5 sm:space-x-4">
              
              {/* Search Bar / Trigger (Amazon style) */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 py-2 px-3 sm:px-4 bg-white border border-warm-sand rounded-full text-xs text-soft-taupe hover:text-espresso hover:border-espresso/40 shadow-xs transition-all duration-200"
                aria-label="Search catalogue"
              >
                <Search className="w-3.5 h-3.5 text-muted-olive" />
                <span className="hidden sm:inline">Search furniture...</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/products"
                className="p-2 text-espresso hover:text-muted-olive transition-colors rounded-full hover:bg-white"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
              </Link>

              {/* WhatsApp Quick Link */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted-olive/10 text-muted-olive hover:bg-muted-olive hover:text-warm-ivory text-xs font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Concierge</span>
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* Secondary Category Navigation Strip (Wakefit/Krishna Furniture style) */}
      <CategoryNavStrip />

      {/* Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-warm-ivory h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-r border-warm-sand animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-warm-sand">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-soft-taupe hover:text-espresso rounded-lg"
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
                  className="w-full flex items-center gap-2 py-2.5 px-3 bg-white border border-warm-sand rounded-xl text-xs text-soft-taupe"
                >
                  <Search className="w-4 h-4 text-muted-olive" />
                  <span>Search all furniture...</span>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-olive px-3 mb-1">
                  Shop by Space
                </p>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-espresso font-semibold hover:bg-warm-sand/30 transition-colors text-xs"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-soft-taupe" />
                  </Link>
                ))}

                <div className="pt-3 mt-3 border-t border-warm-sand/40">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-semibold text-espresso hover:text-muted-olive"
                  >
                    Complete Catalogue &rarr;
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-medium text-espresso hover:text-muted-olive"
                  >
                    About Rumea Home
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-xs font-medium text-espresso hover:text-muted-olive"
                  >
                    Contact & Concierge
                  </Link>
                </div>
              </nav>
            </div>

            <div className="pt-6 border-t border-warm-sand">
              <a
                href={buildWhatsAppUrl("Hi! I'm browsing on mobile and would like advice on furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl"
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
