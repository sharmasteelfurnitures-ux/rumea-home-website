import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-warm-ivory border-t border-warm-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        
        {/* Block 1: Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80"
                alt="Rumea Home Master Woodcraft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-espresso text-warm-ivory p-4 rounded-2xl shadow-xl hidden sm:block">
              <p className="font-display font-bold text-xs uppercase tracking-wider text-warm-sand">Ethical Sourcing</p>
              <p className="text-xs text-warm-ivory">100% Solid Indian Hardwood</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-muted-olive" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-olive">
                OUR STORY
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso tracking-tight">
              More Than Furniture
            </h2>

            <p className="font-body text-base text-soft-taupe leading-relaxed">
              We started Rumea Home because we believed Indian homes deserved furniture that was both deeply beautiful and completely honest. Honest in solid wood quality. Honest in direct pricing. Honest about where it is crafted and how it will age gracefully over decades.
            </p>

            <p className="font-body text-base text-soft-taupe leading-relaxed">
              From our master carpentry workshops to your living space, every joint, bevel, and surface is engineered to withstand seasonal humidity shifts while creating a calming, clutter-free sanctuary.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-muted-olive transition-colors group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

        </div>

        {/* Block 2: Craft & Engineering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-muted-olive" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-olive">
                OUR CRAFT
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso tracking-tight">
              Better Materials. Greater Details. Happier Homes.
            </h2>

            <p className="font-body text-base text-soft-taupe leading-relaxed">
              Every piece is built with materials that last and details that matter — from the precision mortise and tenon joinery inside a drawer to the tactile richness of the breathable linen you touch every day.
            </p>

            <div className="space-y-3 pt-1 text-sm text-espresso font-body">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-muted-olive flex-shrink-0 mt-0.5" />
                <span><strong>Kiln-Dried Hardwood:</strong> Moisture controlled to 8–10% preventing seasonal warping.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-muted-olive flex-shrink-0 mt-0.5" />
                <span><strong>Mortise & Tenon Joinery:</strong> Generational woodworking joints engineered for multi-decade strength.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-muted-olive flex-shrink-0 mt-0.5" />
                <span><strong>Non-Toxic Sealants:</strong> Child-safe and food-grade satin protective coatings.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                alt="Rumea Home Furniture Material Quality"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
