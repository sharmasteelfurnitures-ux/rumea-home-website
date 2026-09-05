import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Hammer, 
  Scale, 
  FileText,
  MessageCircle,
  MapPin,
  Truck,
  RotateCcw,
  Check
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Story & Craftsmanship',
  description:
    '100% Solid kiln-dried Sheesham wood furniture for modern Indian homes. Discover why we use zero MDF, mortise & tenon joinery, and honest workshop pricing.',
  openGraph: {
    title: 'Our Story & Craftsmanship',
    description: '100% Solid Sheesham Wood Furniture Handcrafted for Indian Homes.',
    url: 'https://rumeahome.com/about',
  },
};

export default function AboutPage() {
  const brandPillars = [
    {
      icon: Hammer,
      title: '100% Solid Hardwood',
      description: 'Authentic Indian Sheesham (Dalbergia sissoo). We do not use MDF, particle board, or veneer shortcuts in our structural frames.',
    },
    {
      icon: ShieldCheck,
      title: '21-Day Kiln Seasoning',
      description: 'Every plank is dried to 8–10% moisture content to resist monsoon humidity, warping, and joint loosening.',
    },
    {
      icon: Compass,
      title: 'Apartment Proportions',
      description: 'Calculated for modern 2BHK and 3BHK Indian floor plans with generous seating, clean lines, and elevated legs for easy cleaning.',
    },
    {
      icon: Award,
      title: 'Mortise & Tenon Joinery',
      description: 'Interlocking wood joints engineered to hold firm for decades under heavy daily family use without wobbling.',
    },
    {
      icon: Heart,
      title: 'Direct Workshop Pricing',
      description: 'Transparent ₹12,000 to ₹55,000 pricing without exorbitant multi-crore mall showroom markups or middleman commissions.',
    },
  ];

  const legalPolicies = [
    {
      title: '5-Year Structural Frame Warranty',
      content:
        'Every solid Sheesham frame is protected by a 5-Year Warranty against manufacturing defects, termite infestation in seasoned wood, and joint separation. Natural grain variations and knot patterns are authentic characteristics of genuine solid timber.',
      link: '/terms',
      linkText: 'Read Warranty Terms →',
    },
    {
      title: 'Free PAN India Delivery on All Orders',
      content:
        'We provide Free Doorstep Delivery across India on all orders. Items are shipped in heavy-duty 5-ply export packaging with corner foam protectors. Free professional assembly is included across 50+ metro cities.',
      link: '/terms',
      linkText: 'View Delivery Policy →',
    },
    {
      title: '30-Day Doorstep Returns',
      content:
        'If your furniture arrives with transit damage or fails to match your expectations, message our WhatsApp team within 30 days of delivery for a free reverse pickup and prompt replacement or refund.',
      link: '/terms',
      linkText: 'View Return Policy →',
    },
    {
      title: 'Privacy & Consumer Protection',
      content:
        'Your contact details and delivery address are strictly used for order fulfillment and sizing consultation. We never sell or share customer data with third-party telemarketers.',
      link: '/privacy-policy',
      linkText: 'Read Privacy Policy →',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10 text-[#2C2926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Our Story' }]} className="mb-6" />

        {/* 1. Hero Brand Statement */}
        <section className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1F1A16] text-white text-[11px] font-bold uppercase tracking-widest rounded-btn mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97A]" /> OUR STORY &amp; CRAFTSMANSHIP
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F1A16] font-bold tracking-tight leading-tight">
            Furniture built to earn its place in your home.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
            We started Rumea Home after living with flatpack, particle-board furniture that sagged and swelled after two monsoons. Indian homes deserve solid wood furniture that lasts for decades.
          </p>
        </section>

        {/* 2. Narrative & Workshop Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24 bg-white rounded-card p-6 sm:p-10 border border-[#E5DCCE] shadow-xs">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-[#E5DCCE] bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=85"
                alt="Solid Sheesham Wood Joinery"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1F1A16] text-white p-4 rounded-card shadow-lg max-w-xs hidden sm:block border border-white/10">
              <p className="font-serif font-bold text-xs uppercase text-[#C8A97A]">Solid Sheesham Hardwood</p>
              <p className="text-[11px] text-white/90 mt-0.5">
                Seasoned to 8–10% moisture for Indian weather endurance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6914]">
              WHY WE STARTED
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F1A16]">
              Built for Real Indian Living
            </h2>
            <p>
              When furnishing our own apartments, we found two frustrating options: cheap engineered wood that peeled within years, or exorbitant luxury showrooms charging ₹1.5 Lakhs for a single sofa.
            </p>
            <p>
              We chose a different path: <strong>100% Solid Indian Sheesham wood</strong>, seasoned in kilns for 21 days to prevent monsoon warping, assembled with traditional interlocking mortise-and-tenon joinery, and delivered directly from workshop to your home.
            </p>
            <p>
              No retail mall rents, no celebrity marketing costs, and no particle board fillers. Just solid, honest hardwood furniture priced fairly between ₹12,000 and ₹55,000.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#1F1A16] font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero MDF or Veneer
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mortise &amp; Tenon Joinery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 5-Year Frame Warranty
              </span>
            </div>
          </div>
        </section>

        {/* 3. Physical Showroom Trust Section */}
        <section className="mb-20 sm:mb-24 bg-[#FAF7F2] rounded-card p-6 sm:p-10 border border-[#E5DCCE]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#8B6914]">
                <MapPin className="w-3.5 h-3.5" /> PHYSICAL FLAGSHIP STORE
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F1A16]">
                Visit Us in Vasant Kunj, New Delhi
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                We believe buying furniture is a tactile experience. If you are in Delhi NCR, come visit our showroom to touch the timber finishes, inspect joint craftsmanship, and test the cushion comfort in person.
              </p>
              <div className="p-4 bg-white rounded-card border border-[#E5DCCE] text-xs space-y-2 text-neutral-700">
                <p><strong>Address:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070</p>
                <p><strong>Timings:</strong> 10:00 AM – 9:00 PM (Monday – Sunday / All 7 Days)</p>
                <p><strong>Direct Phone &amp; WhatsApp:</strong> +91 72919 62356</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like to book a visit to your Vasant Kunj showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-btn flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book a Showroom Visit on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="w-full py-3 px-5 bg-white border border-[#E5DCCE] hover:border-[#1F1A16] text-[#1F1A16] font-bold text-xs rounded-btn flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>View Full Store Details &amp; Directions &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Five Pillars */}
        <section className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6914]">
              OUR STANDARDS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1F1A16] mt-1">
              The Five Standards of Rumea Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {brandPillars.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-6 rounded-card border border-[#E5DCCE] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-btn bg-[#1F1A16] text-white flex items-center justify-center mb-4 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#C8A97A]" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#1F1A16] mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Trust, Policies & Guarantees */}
        <section className="bg-white rounded-card p-6 sm:p-10 border border-[#E5DCCE] shadow-xs mb-20 sm:mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6914] flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> CONSUMER TRUST &amp; POLICIES
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F1A16] mt-1">
              Clear Policies &amp; Honest Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPolicies.map((pol, idx) => (
              <div key={idx} className="p-5 bg-[#FAF7F2] rounded-card border border-[#E5DCCE] space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#1F1A16] flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#8B6914] flex-shrink-0" />
                    <span>{pol.title}</span>
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1.5">
                    {pol.content}
                  </p>
                </div>
                <div className="pt-2">
                  <Link href={pol.link} className="text-xs font-bold text-[#3D2212] hover:underline">
                    {pol.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Direct CTA Banner */}
        <section className="bg-[#1F1A16] text-white rounded-card p-8 sm:p-12 text-center border border-[#38302A] shadow-md">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white mb-3">
            Ready to Furnish Your Space?
          </h2>
          <p className="text-[#A89F91] text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Browse our solid Sheesham living, bedroom, and dining collections, or message our team directly on WhatsApp for room planning advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 bg-white text-[#1F1A16] text-xs font-bold rounded-btn shadow-xs hover:bg-[#FAF7F2] transition-colors"
            >
              Explore the Collection &rarr;
            </Link>
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing the right pieces for my apartment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-btn shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
