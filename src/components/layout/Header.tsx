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
      <aside aria-label="Announcement" className="bg-[#2C2926] text-[#F7F4EE] text-[11px] sm:text-xs py-2 px-4 border-b border-[#D8C9B5]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#D8C9B5]">
            <Truck className="w-3.5 h-3.5 text-[#D8C9B5] flex-shrink-0" />
            <span className="font-medium">Free PAN India Delivery on All Orders</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#D8C9B5] text-xs">
            <span>5-Year Frame Warranty</span>
            <span className="text-[#A69B8C]">•</span>
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'nav' })}
              className="text-[#D8C9B5] hover:text-[#F7F4EE] transition-colors underline flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#48563A]" />
              <span>WhatsApp (10 AM – 9 PM)</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Single Sticky Header */}
      <header
        style={{ backgroundColor: isScrolled ? '#FFFFFF' : '#F7F4EE' }}
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b border-[#D8C9B5] ${
          isScrolled ? 'shadow-xs py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[48px] md:min-h-[56px] gap-3 xl:gap-6">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#2C2926] hover:text-[#48563A] focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center mr-4 md:mr-8 xl:mr-10">
              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-nowrap space-x-2 xl:space-x-4 flex-shrink-0">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-sans font-medium py-2 px-3 rounded-btn transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-[#48563A] border-b border-[#48563A]'
                          : 'text-[#2C2926] hover:text-[#48563A]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#A69B8C] group-hover:rotate-180 group-hover:text-[#48563A] transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Card */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 bg-[#F7F4EE] rounded-card shadow-xl border border-[#D8C9B5] p-5 animate-in fade-in zoom-in-95 duration-150 z-50">
                        <p className="text-[10px] uppercase font-bold text-[#48563A] tracking-widest mb-3">
                          Shop {item.name}
                        </p>
                        <div className="space-y-1">
                          {item.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2 px-3 rounded-btn text-xs font-medium text-[#2C2926] hover:bg-white hover:text-[#48563A] hover:shadow-2xs transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>

                        {item.featured && (
                          <div className="mt-4 pt-3 border-t border-[#D8C9B5]">
                            <p className="text-[10px] font-bold uppercase text-[#A69B8C] tracking-wider">
                              Popular Choice
                            </p>
                            <Link
                              href={item.featured.href}
                              className="mt-1.5 block p-3 bg-white rounded-card border border-[#D8C9B5] hover:border-[#2C2926]/40 transition-colors shadow-2xs"
                            >
                              <p className="font-serif font-bold text-xs text-[#2C2926]">{item.featured.title}</p>
                              <p className="text-[11px] text-[#A69B8C] truncate">{item.featured.tagline}</p>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/customization"
                className={`text-sm font-sans font-medium py-2 px-3 rounded-btn transition-colors whitespace-nowrap ${
                  pathname === '/customization' ? 'text-[#48563A] border-b border-[#48563A]' : 'text-[#2C2926] hover:text-[#48563A]'
                }`}
              >
                Customization
              </Link>

              <Link
                href="/blog"
                className={`text-sm font-sans font-medium py-2 px-3 rounded-btn transition-colors whitespace-nowrap ${
                  pathname.startsWith('/blog') ? 'text-[#48563A] border-b border-[#48563A]' : 'text-[#2C2926] hover:text-[#48563A]'
                }`}
              >
                Blog
              </Link>

              <Link
                href="/about"
                className={`text-sm font-sans font-medium py-2 px-3 rounded-btn transition-colors whitespace-nowrap ${
                  pathname === '/about' ? 'text-[#48563A] border-b border-[#48563A]' : 'text-[#2C2926] hover:text-[#48563A]'
                }`}
              >
                Our Story
              </Link>
            </nav>

            {/* Right Controls: Search + Wishlist + WhatsApp Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="h-10 flex items-center gap-2 px-3.5 sm:px-4 bg-[#F7F4EE] border border-[#D8C9B5] rounded-btn text-xs font-medium text-[#2C2926] hover:border-[#48563A] focus:border-[#48563A] focus:outline-none transition-all duration-200"
                aria-label="Search furniture collection"
              >
                <Search className="w-3.5 h-3.5 text-[#2C2926]" />
                <span className="hidden sm:inline text-[#A69B8C]">Search furniture...</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/products"
                className="h-10 w-10 flex items-center justify-center text-[#2C2926] hover:text-[#48563A] hover:border-[#2C2926] transition-all rounded-btn bg-[#F7F4EE] border border-[#D8C9B5]"
                aria-label="View collection"
              >
                <Heart className="w-4 h-4 text-[#2C2926]" />
              </Link>

              {/* TYPE 2 / NAV WhatsApp CTA Button */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like advice on furniture sizing and options.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="h-10 relative inline-flex items-center gap-2 px-4 sm:px-5 bg-transparent border border-[#2C2926] text-[#2C2926] hover:bg-[#2C2926] hover:text-[#F7F4EE] text-xs sm:text-sm font-medium rounded-btn transition-all duration-200 select-none group"
              >
                <MessageCircle className="w-4 h-4 text-[#48563A] group-hover:text-[#F7F4EE] transition-colors" />
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
            className="fixed inset-0 bg-[#2C2926]/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-[#F7F4EE] h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 border-r border-[#D8C9B5] animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D8C9B5]">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#2C2926] hover:text-[#48563A] focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-[#D8C9B5]/40 pb-3">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-sm font-medium text-[#2C2926] hover:text-[#48563A] py-1"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#A69B8C]" />
                    </Link>
                    <div className="mt-2 pl-3 space-y-2">
                      {item.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-xs text-[#A69B8C] hover:text-[#2C2926]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/customization"
                  className="block text-sm font-medium text-[#2C2926] hover:text-[#48563A] py-2"
                >
                  Customization
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm font-medium text-[#2C2926] hover:text-[#48563A] py-2"
                >
                  Blog &amp; Design Journal
                </Link>
                <Link
                  href="/about"
                  className="block text-sm font-medium text-[#2C2926] hover:text-[#48563A] py-2"
                >
                  Our Story
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-medium text-[#2C2926] hover:text-[#48563A] py-2"
                >
                  Contact &amp; Experience Store
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D8C9B5]">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2C2926] text-[#F7F4EE] hover:bg-[#3D3632] text-xs font-medium rounded-btn shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#48563A]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
