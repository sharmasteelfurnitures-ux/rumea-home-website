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
  ArrowRight,
  Phone,
  Clock
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
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const hasVisited = sessionStorage.getItem('rumea_visited');
      if (!hasVisited && !mediaQuery.matches) {
        setIsFirstVisit(true);
        sessionStorage.setItem('rumea_visited', 'true');
      }

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 60);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
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
      name: 'Study',
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
      {/* Top Announcement Reassurance Bar (Smooth Marquee Ticker) */}
      <aside
        aria-label="Announcement"
        style={{ backgroundColor: 'rgba(61, 34, 18, 0.94)' }}
        className="w-full text-[#F7F4EE] text-[11px] sm:text-xs py-2 px-0 border-b border-[#D8C9B5]/30 shadow-xs relative z-40 overflow-hidden select-none"
      >
        <div className="w-full flex items-center justify-between">
          
          {/* Seamless Marquee Ticker (Continuous loop at 40px/s) */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-ticker flex items-center whitespace-nowrap">
              <div className="flex items-center gap-6 px-4">
                <span>Free PAN India Delivery on All Orders</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>5-Year Frame Warranty</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>30-Day Doorstep Returns</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>Zero MDF / Zero Veneer</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>100% Solid Kiln-Dried Sheesham</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>Free PAN India Delivery on All Orders</span>
                <span className="text-[#D8C9B5]/40">·</span>
              </div>
              <div className="flex items-center gap-6 px-4" aria-hidden="true">
                <span>Free PAN India Delivery on All Orders</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>5-Year Frame Warranty</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>30-Day Doorstep Returns</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>Zero MDF / Zero Veneer</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>100% Solid Kiln-Dried Sheesham</span>
                <span className="text-[#D8C9B5]/40">·</span>
                <span>Free PAN India Delivery on All Orders</span>
                <span className="text-[#D8C9B5]/40">·</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct Support & Phone Access */}
          <div className="hidden md:flex items-center gap-3.5 pr-4 pl-3 bg-gradient-to-l from-[rgba(61,34,18,0.96)] via-[rgba(61,34,18,0.92)] to-transparent z-10 flex-shrink-0 text-xs">
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'nav' })}
              className="text-[#F7F4EE] hover:text-[#D8C9B5] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
              title="Chat with Rumea Support on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D8C9B5]" />
              <span>Support (10 AM – 9 PM)</span>
            </a>

            <span className="text-[#D8C9B5]/40">•</span>

            <a
              href="tel:+917291962356"
              className="text-[#F7F4EE] hover:text-[#D8C9B5] transition-colors flex items-center gap-1.5 font-semibold tracking-wide cursor-pointer"
              title="Call Rumea Home Support"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8C9B5]" />
              <span>+91 72919 62356</span>
            </a>
          </div>

        </div>
      </aside>

      {/* Main Single Sticky Header with Smooth Frosted Glass Transition */}
      <header
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 252, 248, 0.85)' : '#F7F4EE',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid #D8C9B5',
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease, padding 300ms ease',
        }}
        className={`sticky top-0 z-50 w-full ${
          isScrolled ? 'shadow-xs py-2.5' : 'py-3.5'
        }`}
      >
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[54px] md:min-h-[64px]">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#2C2926] hover:text-[#48563A] focus:outline-none cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Center: Luxury Brand Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-3 xl:mx-6 gap-1 xl:gap-2.5 2xl:gap-4">
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
                      className={`inline-flex items-center gap-1 text-[13px] xl:text-sm font-sans font-medium py-2 px-2.5 xl:px-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? 'text-[#48563A] font-semibold bg-[#48563A]/8'
                          : 'text-[#2C2926] hover:text-[#48563A] hover:bg-[#2C2926]/4'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-[#48563A]' : 'text-[#A69B8C]'}`} />
                    </Link>

                    {/* Dropdown Card */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#F7F4EE] rounded-2xl shadow-2xl border border-[#D8C9B5] p-5 animate-in fade-in zoom-in-95 duration-150 z-50 mt-1">
                        <p className="text-[10px] uppercase font-bold text-[#48563A] tracking-widest mb-3">
                          Shop {item.name}
                        </p>
                        <div className="space-y-1">
                          {item.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2 px-3 rounded-xl text-xs font-medium text-[#2C2926] hover:bg-white hover:text-[#48563A] hover:shadow-2xs transition-all"
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
                              className="mt-1.5 block p-3 bg-white rounded-xl border border-[#D8C9B5] hover:border-[#2C2926]/40 transition-colors shadow-2xs"
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
                className={`text-[13px] xl:text-sm font-sans font-medium py-2 px-2.5 xl:px-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                  pathname === '/customization'
                    ? 'text-[#48563A] font-semibold bg-[#48563A]/8'
                    : 'text-[#2C2926] hover:text-[#48563A] hover:bg-[#2C2926]/4'
                }`}
              >
                Customization
              </Link>

              <Link
                href="/blog"
                className={`text-[13px] xl:text-sm font-sans font-medium py-2 px-2.5 xl:px-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                  pathname.startsWith('/blog')
                    ? 'text-[#48563A] font-semibold bg-[#48563A]/8'
                    : 'text-[#2C2926] hover:text-[#48563A] hover:bg-[#2C2926]/4'
                }`}
              >
                Blog
              </Link>

              <Link
                href="/about"
                className={`text-[13px] xl:text-sm font-sans font-medium py-2 px-2.5 xl:px-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                  pathname === '/about'
                    ? 'text-[#48563A] font-semibold bg-[#48563A]/8'
                    : 'text-[#2C2926] hover:text-[#48563A] hover:bg-[#2C2926]/4'
                }`}
              >
                About
              </Link>
            </nav>

            {/* Right: Search + Wishlist + Animated Olive Green WhatsApp CTA */}
            <div className="flex items-center gap-2 flex-shrink-0">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="h-10 px-3 xl:px-3.5 bg-white/80 hover:bg-white border border-[#D8C9B5] rounded-full text-xs font-medium text-[#2C2926] hover:border-[#48563A] focus:border-[#48563A] focus:outline-none transition-all duration-200 flex items-center gap-2 shadow-2xs group cursor-pointer"
                aria-label="Search furniture collection"
              >
                <Search className="w-3.5 h-3.5 text-[#2C2926] group-hover:text-[#48563A] transition-colors" />
                <span className="hidden xl:inline text-[#A69B8C] group-hover:text-[#2C2926] transition-colors">Search...</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/products"
                className="h-10 w-10 flex items-center justify-center text-[#2C2926] hover:text-[#48563A] hover:border-[#48563A] transition-all duration-200 rounded-full bg-white/80 hover:bg-white border border-[#D8C9B5] shadow-2xs"
                aria-label="View collection"
              >
                <Heart className="w-4 h-4" />
              </Link>

              {/* Luxury Olive Green WhatsApp CTA with Fluid Shimmer & Live Motion */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like advice on furniture sizing and options.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'nav' })}
                className="relative group h-10 px-4 sm:px-5 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 overflow-hidden flex-shrink-0 cursor-pointer border border-[#3B4730]"
                title="Chat with our woodcraft designers on WhatsApp"
              >
                {/* Shimmer Light Sweep Motion */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

                {/* Animated Pulsing Status Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8C9B5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8C9B5]" />
                </span>

                <MessageCircle className="w-4 h-4 text-[#D8C9B5] transition-transform duration-200 group-hover:scale-110" />
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
                  About
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
