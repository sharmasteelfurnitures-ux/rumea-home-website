# 🏠 RUMEA HOME — AI AGENT STATE FILE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# READ THIS FIRST EVERY TIME YOU START OR RESUME WORK
# This file is your memory. Update it IMMEDIATELY after every 
# change, decision, or completed task. Never let it go stale.
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ⚡ QUICK STATUS (Update this block after every session)

```
LAST UPDATED     : 2026-08-29 12:42 IST
CURRENT PHASE    : Phase 10 — Pushed to GitHub Repository (Main Branch)
CURRENT TASK     : Codebase synced with https://github.com/sharmasteelfurnitures-ux/rumea-home-website.git
LAST COMPLETED   : Git push to origin/main successful (83 files, 17,686 lines committed)
NEXT ACTION      : Connect Vercel to repository for 24/7 automated deployment
BLOCKER          : None
SESSION COUNT    : 1
```

---

## 🎯 PROJECT OVERVIEW

**Brand:** Rumea Home™ ("rumea home" all lowercase in wordmark)  
**Tagline:** "Thoughtful Furniture for Modern Homes"  
**Brand Line:** "More Than Furniture"  
**Type:** Indian furniture e-commerce brand website  
**Target Market:** Indian online buyers, mobile-first (70%+ mobile traffic)  
**Revenue Strategy:** Phase 1 = Amazon referral traffic + WhatsApp enquiries. Phase 2 = Full D2C checkout.

### Business Goals (Priority Order)
1. Build brand trust for Amazon shoppers (ROPO behaviour)
2. Drive Amazon product page clicks
3. Capture WhatsApp enquiry leads
4. Eventually convert to full D2C with Razorpay/UPI/EMI/COD

### Competitive Intelligence (Do NOT clone, use as benchmark)
- Pepperfry → marketplace discovery patterns
- Urban Ladder → clean modern layout
- WoodenStreet → material detail depth
- Wakefit → warmth and conversion copy
- Royal Oak → price-forward presentation
- IKEA India → room-based navigation
- Saraf Furniture → material storytelling

---

## 🏗️ TECH STACK DECISIONS

```
Framework        : Next.js 14 (App Router)
Styling          : Tailwind CSS + custom CSS variables
Fonts            : Plus Jakarta Sans (headings) + Inter (body) — Google Fonts
Icons            : Lucide React
Images           : Next/Image with optimization
Animations       : Framer Motion (light, purposeful)
State            : Zustand (lightweight, future cart-ready)
CMS/Data         : JSON files (Phase 1) → migrate to Sanity/Contentful (Phase 2)
Deployment       : Vercel (free tier → Pro on scale)
Analytics        : Vercel Analytics + Google Analytics 4 ready
WhatsApp         : wa.me deep link integration
Amazon           : UTM-tagged affiliate links
Payment (dormant): Razorpay SDK installed but not activated
Search (dormant) : Algolia client installed but not activated
```

### Why These Choices
- **Next.js 14**: SSG for product pages = perfect SEO + fast load. ISR for future CMS integration.
- **JSON CMS**: Owner can edit products without dev. Future-proof to real CMS.
- **Tailwind**: Rapid UI iteration, mobile-first utility classes.
- **Zustand**: Cart state when Phase 2 activates — zero refactor needed.
- **Vercel**: Free SSL, edge CDN, instant deploys from git.

---

## 🎨 DESIGN TOKENS (Lock these — never deviate)

```css
/* Brand Colors */
--espresso    : #2C2926  /* Primary: headings, CTAs, nav, footer */
--warm-sand   : #D8C9B5  /* Secondary: cards, dividers, hover states */
--warm-ivory  : #F7F4EE  /* Background: ALL page backgrounds */
--muted-olive : #78806A  /* Accent: badges, tags, icons (SPARINGLY) */
--soft-taupe  : #A69B8C  /* Body text, captions, borders */

/* Typography */
--font-display: 'Plus Jakarta Sans', sans-serif  /* Headings */
--font-body   : 'Inter', sans-serif              /* Body, UI */

/* Spacing Scale */
--space-xs: 0.25rem   /* 4px  */
--space-sm: 0.5rem    /* 8px  */
--space-md: 1rem      /* 16px */
--space-lg: 1.5rem    /* 24px */
--space-xl: 2rem      /* 32px */
--space-2xl: 3rem     /* 48px */
--space-3xl: 4rem     /* 64px */

/* Border Radius (soft, never hard corners) */
--radius-sm: 4px
--radius-md: 8px  
--radius-lg: 12px
--radius-xl: 16px

/* Shadows (warm, no harsh drop shadows) */
--shadow-sm: 0 1px 3px rgba(44,41,38,0.08)
--shadow-md: 0 4px 12px rgba(44,41,38,0.10)
--shadow-lg: 0 8px 24px rgba(44,41,38,0.12)
```

### Absolute Design Rules
- ❌ NEVER use #FFFFFF as background
- ❌ NEVER use #000000 for text
- ❌ NEVER add a third typeface
- ❌ NEVER use bright/neon accents
- ❌ NEVER use hard geometric layouts
- ❌ NEVER add heavy drop shadows or glossy effects
- ✅ ALWAYS use Warm Ivory (#F7F4EE) as page background
- ✅ ALWAYS use Espresso (#2C2926) for headings
- ✅ Use Muted Olive SPARINGLY (accent only)
- ✅ Soft, rounded corners throughout

---

## 📁 PROJECT FILE STRUCTURE

```
rumea-home/
├── AI_STATE.md                    ← YOU ARE HERE (update always)
├── MASTER_PROMPT.md               ← The full build prompt
├── package.json
├── next.config.js
├── tailwind.config.js
├── .env.local                     ← WhatsApp number, Amazon affiliate tag
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg               ← Social share image
│   └── images/
│       ├── hero/                  ← Hero section images
│       ├── products/              ← Product images (category/slug/)
│       ├── rooms/                 ← Room inspiration images
│       └── brand/                 ← Brand story images
│
├── src/
│   ├── app/                       ← Next.js App Router
│   │   ├── layout.tsx             ← Root layout (fonts, meta)
│   │   ├── page.tsx               ← Homepage
│   │   ├── globals.css            ← Design tokens + base styles
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx           ← All Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx       ← Product Detail Page (PDP)
│   │   │
│   │   ├── rooms/
│   │   │   └── [room]/
│   │   │       └── page.tsx       ← Room-based discovery
│   │   │
│   │   ├── collections/
│   │   │   └── [collection]/
│   │   │       └── page.tsx       ← Style collections
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx           ← Brand story
│   │   │
│   │   └── contact/
│   │       └── page.tsx           ← WhatsApp + email
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         ← Nav, search slot, cart slot, logo
│   │   │   ├── Footer.tsx         ← Links, trust badges, social
│   │   │   └── MobileNav.tsx      ← Bottom tab bar for mobile
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx           ← Full-bleed hero section
│   │   │   ├── CategoryGrid.tsx   ← Shop by Room
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BrandStory.tsx     ← "More Than Furniture" section
│   │   │   ├── TrustBar.tsx       ← Delivery, returns, quality badges
│   │   │   ├── Testimonials.tsx   ← Social proof
│   │   │   ├── WhatsAppCTA.tsx    ← Float + inline CTA
│   │   │   └── InstagramFeed.tsx  ← UGC slot (static for Phase 1)
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx    ← Grid card with hover
│   │   │   ├── ProductGrid.tsx    ← Responsive grid container
│   │   │   ├── ProductImages.tsx  ← Lightbox image gallery
│   │   │   ├── ProductInfo.tsx    ← Title, price, specs, CTA
│   │   │   ├── ProductSpecs.tsx   ← Dimensions (cm + ft), materials
│   │   │   ├── DeliveryChecker.tsx ← Pincode delivery date check
│   │   │   ├── AmazonCTA.tsx      ← Primary buy CTA → Amazon
│   │   │   └── RelatedProducts.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── WhatsAppButton.tsx ← Floating + inline variants
│   │   │   ├── PriceDisplay.tsx   ← Price with MRP strikethrough
│   │   │   ├── TrustBadge.tsx
│   │   │   └── Breadcrumb.tsx
│   │   │
│   │   └── dormant/               ← Built but not active (Phase 2)
│   │       ├── CartSlot.tsx       ← Renders as empty icon
│   │       ├── WishlistIcon.tsx   ← Renders as empty icon  
│   │       ├── SearchBar.tsx      ← Renders as inactive icon
│   │       ├── AccountIcon.tsx    ← Renders as inactive icon
│   │       └── CheckoutBadge.tsx  ← Hidden trust badge strip
│   │
│   ├── data/
│   │   ├── products.json          ← Product catalogue
│   │   ├── categories.json        ← Room + style categories
│   │   └── testimonials.json      ← Customer reviews
│   │
│   ├── lib/
│   │   ├── products.ts            ← Data fetching helpers
│   │   ├── amazon.ts              ← Amazon UTM link builder
│   │   ├── whatsapp.ts            ← WhatsApp message builder
│   │   └── analytics.ts           ← GA4 event helpers
│   │
│   ├── hooks/
│   │   ├── useProduct.ts
│   │   └── usePincode.ts          ← Delivery date checking
│   │
│   └── types/
│       ├── product.ts
│       └── category.ts
│
└── docs/
    ├── PHASE_2_CHECKLIST.md       ← What to activate for D2C
    ├── BRAND_GUIDE.md             ← Design token reference
    └── CONTENT_GUIDE.md           ← How to add products/content
```

---

## 📋 BUILD PHASES & TASK TRACKER

### PHASE 0: Setup (Est. 30 min)
- [x] 0.1 Initialize Next.js 14 project
- [x] 0.2 Install dependencies (Tailwind, Framer Motion, Zustand, Lucide)
- [x] 0.3 Configure Tailwind with brand tokens
- [x] 0.4 Set up Google Fonts (Plus Jakarta Sans + Inter)
- [x] 0.5 Create globals.css with design tokens
- [x] 0.6 Set up folder structure
- [x] 0.7 Configure .env.local template

### PHASE 1: Core Layout & Navigation (Est. 1 hr)
- [x] 1.1 Root layout.tsx with meta, fonts, og tags
- [x] 1.2 Header — desktop (logo + nav + dormant icons)
- [x] 1.3 Header — mobile (hamburger + logo + WhatsApp icon)
- [x] 1.4 Mobile bottom tab navigation
- [x] 1.5 Footer — links, trust, social, WhatsApp
- [x] 1.6 WhatsApp floating button (global)

### PHASE 2: Homepage (Est. 2 hr)
- [x] 2.1 Hero section — full-bleed, emotional, CTA
- [x] 2.2 Trust bar — delivery, returns, material quality
- [x] 2.3 Shop by Room — 6-category grid
- [x] 2.4 Featured products — curated 8-product row
- [x] 2.5 Brand story section — "More Than Furniture"
- [x] 2.6 Testimonials — 3 customer reviews with star ratings
- [x] 2.7 WhatsApp inline CTA section
- [x] 2.8 Material close-up / brand texture strip

### PHASE 3: Product Data & Catalogue (Est. 1 hr)
- [x] 3.1 Define Product TypeScript interface
- [x] 3.2 Create 20-product sample JSON catalogue
- [x] 3.3 Product listing page with filters (room, price, style)
- [x] 3.4 ProductCard component with hover state
- [x] 3.5 Sort + filter UI (mobile drawer + desktop sidebar)

### PHASE 4: Product Detail Page — PDP (Est. 2 hr)
- [x] 4.1 Image gallery with zoom/lightbox
- [x] 4.2 Product title, price (MRP + offer), discount badge
- [x] 4.3 Dimensions display (cm AND feet/inches)
- [x] 4.4 Material & finish specs
- [x] 4.5 Delivery date checker (pincode input)
- [x] 4.6 Amazon Buy Now CTA (primary, prominent)
- [x] 4.7 WhatsApp enquiry CTA (secondary)
- [x] 4.8 Product features / USP bullets
- [x] 4.9 Related products carousel
- [x] 4.10 Dormant slots: Add to Cart, Wishlist (Phase 2)

### PHASE 5: Room & Collection Pages (Est. 1 hr)
- [x] 5.1 Room page template (Living Room, Bedroom, etc.)
- [x] 5.2 Room hero with lifestyle imagery
- [x] 5.3 Filtered product grid by room
- [x] 5.4 Collection pages (Modern, Traditional, Scandinavian)

### PHASE 6: Brand & Trust Pages (Est. 45 min)
- [x] 6.1 About page — brand story, values, craftsmanship
- [x] 6.2 Contact page — WhatsApp primary + email form
- [x] 6.3 Trust signals throughout (badges, certifications)

### PHASE 7: SEO & Performance (Est. 45 min)
- [x] 7.1 Dynamic meta tags per page/product
- [x] 7.2 Structured data (JSON-LD) for products
- [x] 7.3 Sitemap.xml generation
- [x] 7.4 robots.txt
- [x] 7.5 Image optimization (WebP, lazy loading)
- [x] 7.6 Core Web Vitals optimization

### PHASE 8: Analytics & Tracking (Est. 30 min)
- [x] 8.1 GA4 setup + event tracking
- [x] 8.2 Amazon click tracking (UTM)
- [x] 8.3 WhatsApp click tracking
- [x] 8.4 Vercel Analytics

### PHASE 9: Phase 2 Dormant Infrastructure (Est. 1 hr)
- [x] 9.1 Cart slot components (visible but inactive)
- [x] 9.2 Wishlist icon (visible but inactive)
- [x] 9.3 Search bar slot (icon present, no function)
- [x] 9.4 Account icon (present, no auth yet)
- [x] 9.5 Checkout badge strip (hidden, ready to show)
- [x] 9.6 Razorpay SDK installed (not configured)
- [x] 9.7 Zustand cart store (built, not connected to UI)

### PHASE 10: Testing, Brand Kit & Advanced E-Commerce Architecture (Completed)
- [x] 10.1 Mobile responsiveness audit (320px → 1440px)
- [x] 10.2 Cross-browser check & 44px touch targets
- [x] 10.3 Lighthouse audit readiness (unoptimized image remote patterns, font preload)
- [x] 10.4 Vercel deploy ready (npm run build 38/38 static routes validated)
- [x] 10.5 Custom domain setup guide
- [x] 10.6 Official Brand Kit Design System Integration (60/30/10 palette, Plus Jakarta Sans & Inter)
- [x] 10.7 Wakefit & Krishna Furniture Mega-Menu Navigation + Horizontal Category Rail
- [x] 10.8 Amazon-Style Live Predictive Search Modal (`SearchModal.tsx`)
- [x] 10.9 Amazon-Style Multi-Angle Image Gallery with Hover Magnifier Zoom (`AmazonImageGallery.tsx`)
- [x] 10.10 Amazon-Style Deal Savings Callout & Expandable No-Cost EMI Calculator (`ProductInfo.tsx`)
- [x] 10.11 Amazon-Style Frequently Bought Together Bundle Builder (`FrequentlyBoughtTogether.tsx`)
- [x] 10.12 Amazon-Style 5-Star Customer Rating Distribution Bar Chart (`RatingBreakdown.tsx`)
- [x] 10.13 Amazon-Style Customer Q&A Accordion (`ProductFAQ.tsx`)
- [x] 10.14 Wooden Street "Will It Fit in Your Room?" Sizing & Doorway Guide (`RoomFitGuide.tsx`)
- [x] 10.15 Wooden Street Solid Hardwood Care & Longevity Guide (`WoodCareGuide.tsx`)
- [x] 10.16 Wooden Street Real Customer Apartment Showcase Gallery (`CustomerHomesGallery.tsx`)
- [x] 10.17 Mobile Sticky Bottom Buy Bar (`StickyMobileBuyBar.tsx`)

---

## 📦 PRODUCT CATALOGUE SCHEMA

```typescript
interface Product {
  id: string                    // "sofa-oslo-3seater"
  slug: string                  // URL: /products/sofa-oslo-3seater
  name: string                  // "Oslo 3-Seater Sofa"
  category: ProductCategory     // "sofa" | "bed" | "dining-table" etc.
  room: Room[]                  // ["living-room"] (can be multiple)
  collection: string            // "scandinavian-modern"
  
  pricing: {
    mrp: number                 // ₹45,999 (original)
    offer: number               // ₹38,999 (current)
    discount: number            // 15 (percentage)
    emi: {
      minAmount: number         // ₹1,299
      months: number            // 30
      provider: string          // "No Cost EMI"
    }
  }
  
  images: {
    primary: string             // Hero image URL
    gallery: string[]           // All product images
    lifestyle: string[]         // In-room context shots
    detail: string[]            // Close-up material shots
    dimensions: string          // Dimension diagram image
  }
  
  dimensions: {
    width: { cm: number; ft: string }     // { cm: 210, ft: "6'11\"" }
    depth: { cm: number; ft: string }     // { cm: 90, ft: "2'11\"" }
    height: { cm: number; ft: string }    // { cm: 88, ft: "2'11\"" }
    seatHeight: { cm: number; ft: string }
    weight: number                         // kg
    assemblyRequired: boolean
  }
  
  materials: {
    frame: string               // "Solid Sheesham Wood"
    upholstery?: string         // "Premium Leatherette"
    finish: string[]            // ["Mahogany", "Natural Teak", "Walnut"]
    selectedFinish: string      // Default selected
  }
  
  features: string[]            // USP bullet points
  
  meta: {
    title: string               // SEO title
    description: string         // SEO description
    keywords: string[]
  }
  
  conversion: {
    amazonUrl: string           // Full Amazon URL with affiliate tag
    amazonAsin: string          // B0XXXXXXXX
    whatsappMessage: string     // Pre-filled WhatsApp message
    inStock: boolean
    deliveryDays: {
      metro: string             // "3-5 days"
      tier2: string             // "5-7 days"
      tier3: string             // "7-10 days"
    }
  }
  
  seo: {
    badge?: string              // "Best Seller" | "New Arrival" | "Limited Stock"
    rating: number              // 4.5
    reviewCount: number         // 127
    isFeatured: boolean
    isNewArrival: boolean
  }
}
```

---

## 🔗 INTEGRATION SPECS

### WhatsApp Integration
```
Base URL: https://wa.me/91XXXXXXXXXX
Message format: "Hi! I'm interested in [Product Name] - ₹[Price]. Can you share more details and delivery timeline to [City]?"
Float button: Fixed bottom-right, 56px, Olive color
Mobile: Opens WhatsApp app directly
Desktop: Opens WhatsApp Web
```

### Amazon Integration  
```
Link format: https://www.amazon.in/dp/[ASIN]?tag=[AFFILIATE_TAG]&linkCode=ogi
UTM tracking: ?utm_source=rumea-home&utm_medium=website&utm_campaign=pdp-cta
Track clicks: GA4 event → amazon_click { product_id, product_name, price }
```

### Pincode Delivery Checker
```
Phase 1: Static lookup from pincodes.json (metro/tier2/tier3 classification)
Phase 2: Shiprocket API integration
Metro cities: Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad
Tier 2: All state capitals + major cities
```

---

## 🧭 KEY PAGES & CONTENT

### Homepage Sections (in order)
1. **Hero** — Emotional headline, lifestyle image, CTA to products
2. **Trust Bar** — "Free Delivery | 30-Day Returns | 5-Year Warranty | Made in India"
3. **Shop by Room** — Living Room, Bedroom, Dining, Study, Outdoor, Storage
4. **Featured Products** — 8 curated products, horizontal scroll mobile
5. **Brand Story** — "More Than Furniture" with material close-ups
6. **Testimonials** — 3 verified customer reviews
7. **WhatsApp CTA** — "Have Questions? We're on WhatsApp"
8. **Style Collections** — Modern, Traditional, Scandinavian
9. **Instagram UGC** — Static grid (Phase 1), live feed (Phase 2)

### Brand Voice Lines (USE EXACTLY AS WRITTEN)
- "Homes Build Brighter Days"
- "Make Room for Better Living."
- "Beautiful Furniture for Real Homes"
- "Good Design Brings Us Together"
- "Same Values, A Better Tomorrow"
- "Better Materials. Greater Details. Happier Homes."

### Five Core Values (use in About/Trust sections)
- ♡  Warm
- ⊘  Modern  
- ◇  Reliable
- ⚇  Thoughtful
- ◈  Accessible Premium

---

## ⚠️ CRITICAL RULES FOR AI AGENT

1. **Read this file FIRST** before every session
2. **Update this file IMMEDIATELY** after completing any task — tick the checkbox, update QUICK STATUS
3. **Never skip phases** — complete in order unless explicitly told otherwise
4. **Mobile-first ALWAYS** — design and test mobile before desktop
5. **Never use white backgrounds** — always Warm Ivory (#F7F4EE)
6. **Never use black text** — always Espresso (#2C2926)
7. **Dormant components** — build them structurally complete but non-functional
8. **Amazon links** — always use UTM parameters + affiliate tag placeholder
9. **WhatsApp** — always pre-fill message with product context
10. **If token limit approaching** — finish current component, update AI_STATE.md, stop cleanly
11. **If restarting** — read AI_STATE.md first, check QUICK STATUS, continue from NEXT ACTION
12. **Commit message format** — "phase-X.X: [description]" for every file change

---

## 🚀 PHASE 2 ACTIVATION CHECKLIST
(Future reference — do NOT build yet, just note)

When ready to go full D2C:
- [ ] Activate CartSlot component → connect to Zustand store
- [ ] Activate WishlistIcon → localStorage persistence
- [ ] Activate SearchBar → Algolia index setup
- [ ] Configure Razorpay → add env keys
- [ ] Build /cart route
- [ ] Build /checkout route
- [ ] Build /account route with auth (NextAuth + Google/Phone OTP)
- [ ] Enable EMI display on PDP
- [ ] COD toggle in delivery checker
- [ ] Order confirmation email (Resend.com)
- [ ] Shiprocket API for live delivery dates

---

## 📝 DECISIONS LOG
(Agent: add entries here whenever you make an architectural decision)

| Date | Decision | Reason |
|------|----------|--------|
| Init | Next.js 14 over Remix | Better static generation for product SEO, larger ecosystem |
| Init | JSON over Headless CMS | Simpler Phase 1, owner-editable, zero cost, easy CMS migration |
| Init | Tailwind over styled-components | Utility-first = faster iteration + smaller bundle |
| Init | Framer Motion over CSS animations | More natural easing, orchestrated sequences, better mobile feel |
| Init | Vercel over Netlify | Better Next.js integration (same company), edge functions, image optimization |
| Init | Zustand over Redux | Smaller bundle, simpler API, perfect for future cart state |
| Brand | Strict Brand Guidelines | Warm Ivory (#F7F4EE) base + Espresso (#2C2926) + Sand + Olive accents |
| Bench | Wakefit & Krishna Mega-Menu | Immediate multi-room category discovery with icons and spotlights |
| Bench | Amazon-Style PDP Elements | Hover zoom, deal price callout, 5-star bar charts, bundle recommendations |
| Bench | Wooden Street Room & Care Guides | Accurate doorway clearance sizing check, real customer homes, hardwood care |

---

## 🐛 KNOWN ISSUES & NOTES
(Agent: track any issues here)

| Issue | Status | Notes |
|-------|--------|-------|
| None | Resolved | All 38/38 static routes and dev server verified |

---

*Last updated by: Lead Product Architect*  
*Status: Production Ready*
