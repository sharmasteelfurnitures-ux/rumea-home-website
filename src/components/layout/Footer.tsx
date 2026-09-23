import React from 'react';
import Link from 'next/link';
import { MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'Shop all', href: '/products' },
    { label: 'Entryway', href: '/products?category=shoe-rack' },
    { label: 'Tables', href: '/products?category=folding-table' },
    { label: 'Seating', href: '/products?category=seating' },
    { label: 'Work & Study', href: '/products?category=folding-table' },
  ];

  const helpLinks = [
    { label: 'Room-fit assistance', href: '/#fit-assistance' },
    { label: 'Shipping', href: '/terms' },
    { label: 'Returns', href: '/terms' },
    { label: 'Assembly', href: '/contact' },
    { label: 'Contact', href: '/contact' },
  ];

  const companyLinks = [
    { label: 'About Rumea', href: '/about' },
    { label: 'Why Rumea', href: '/about' },
    { label: '360° Studio Experience', href: '/experience' },
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <footer className="bg-[#242421] text-[#F7F5F0] border-t border-[#383833] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#383833]">
          
          {/* Column 1: Brand & Sizing Mission (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs text-[#A8A59D] font-sans leading-relaxed max-w-sm pt-1">
              Practical, well-built furniture for everyday Indian homes. Sized for real apartments — narrow hallways, compact rooms, and everyday living.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-[#F7F5F0] text-xs font-medium transition-colors border border-white/10"
              >
                <span>Store on Amazon India</span>
                <ExternalLink className="w-3 h-3 text-[#DEDAD1]" />
              </a>

              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing the right size for my space.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#DEDAD1] hover:text-white transition-colors py-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 72919 62356</span>
              </a>
            </div>
          </div>

          {/* Column 2: Shop (2.5 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#DEDAD1]">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A59D]">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F7F5F0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help (2.5 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#DEDAD1]">
              Help
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A59D]">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F7F5F0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#DEDAD1]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A59D]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F7F5F0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A59D]">
          <p>© {currentYear} Rumea Home. Practical furniture for Indian apartments.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F7F5F0] transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-[#F7F5F0] transition-colors">
              Terms &amp; conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
