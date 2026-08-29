# RUMEA HOME — MASTER BUILD PROMPT FOR ANTIGRAVITY
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Version: 1.0 | Created for use with Antigravity AI Agent
# 
# HOW TO USE THIS PROMPT:
# 1. Paste the full content of this file as your first message to Antigravity
# 2. Attach the AI_STATE.md file alongside it
# 3. Tell the agent: "Read AI_STATE.md first, then begin building"
# 4. On any restart: "Read AI_STATE.md and continue from where you left off"
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

## 🧠 AGENT OPERATING INSTRUCTIONS (READ BEFORE ANYTHING ELSE)

You are a senior full-stack product engineering team in one agent. Your first action in every session is to read the file `AI_STATE.md`. This is your persistent memory. It tells you exactly where work stopped, what was completed, and what to do next. After reading it, update the QUICK STATUS block, then continue building from the NEXT ACTION field.

After completing every task or component, IMMEDIATELY update `AI_STATE.md`:
- Tick the completed checkbox
- Update QUICK STATUS (current phase, current task, next action)
- Log any new decisions in the Decisions Log
- Log any issues in Known Issues

If your token limit is approaching, finish the current component cleanly, update `AI_STATE.md` to reflect exactly where you stopped and what to do next, then stop. The next session will resume from that point exactly.

Never assume context from conversation history — always derive state from `AI_STATE.md`.

---

## 🎯 PROJECT BRIEF

Build **Rumea Home** — a premium Indian furniture brand website — from scratch as a production-ready Next.js 14 application. This is not a prototype. It must be deployable to Vercel today, discoverable on Google tomorrow, and capable of earning real money through Amazon affiliate clicks and WhatsApp enquiries from day one.

The website serves a precise dual purpose:
1. **Trust builder**: Indian buyers who discover Rumea on Amazon will Google the brand. Finding a professional, warm, deeply detailed brand website immediately validates the brand and increases Amazon conversion rate.
2. **Revenue channel**: The website itself drives traffic to Amazon product pages (affiliate commission) and captures WhatsApp leads for high-value custom enquiries.

A third purpose is dormant but architecturally ready:
3. **Future D2C store**: Every UI slot for cart, wishlist, search, account, and checkout exists structurally but is inactive. Activation requires configuration, not rebuilding.

---

## 🔧 TECH STACK

```bash
# Initialize the project
npx create-next-app@latest rumea-home \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack

cd rumea-home

# Install core dependencies
npm install \
  framer-motion \
  zustand \
  lucide-react \
  @next/font \
  clsx \
  tailwind-merge

# Install dormant Phase 2 dependencies (install now, configure later)
npm install \
  razorpay \
  algoliasearch \
  next-auth \
  resend

# Install dev dependencies
npm install -D \
  @types/node \
  prettier \
  prettier-plugin-tailwindcss
```

---

## 🎨 DESIGN SYSTEM (NEVER DEVIATE FROM THIS)

### Color Palette
```css
/* globals.css — Root variables */
:root {
  --espresso:     #2C2926;  /* Primary — headings, CTAs, nav, footer bg */
  --warm-sand:    #D8C9B5;  /* Secondary — cards, dividers, hover states */
  --warm-ivory:   #F7F4EE;  /* Background — ALL page backgrounds */
  --muted-olive:  #78806A;  /* Accent — badges, tags, icons (SPARINGLY) */
  --soft-taupe:   #A69B8C;  /* Supporting — body text, captions, borders */
  
  /* Derived utility colors */
  --espresso-90: rgba(44, 41, 38, 0.9);
  --espresso-60: rgba(44, 41, 38, 0.6);
  --espresso-10: rgba(44, 41, 38, 0.08);
  --warm-ivory-dark: #F0EBE2;  /* Slightly deeper for section contrast */
}
```

### Tailwind Config Extension
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        espresso:    '#2C2926',
        'warm-sand': '#D8C9B5',
        'warm-ivory':'#F7F4EE',
        'muted-olive':'#78806A',
        'soft-taupe': '#A69B8C',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '24px',
      },
      boxShadow: {
        warm: '0 4px 16px rgba(44, 41, 38, 0.10)',
        card: '0 2px 8px rgba(44, 41, 38, 0.08)',
      },
    },
  },
}
```

### Typography Rules
- **Display/Headlines**: Plus Jakarta Sans, Bold (700) for hero, SemiBold (600) for sections
- **Body/UI**: Inter, Regular (400) for copy, Medium (500) for buttons and labels
- **Uppercase labels**: Letter-spacing 0.10em–0.15em (like "SHOP BY ROOM", "OUR COLLECTIONS")
- **Headlines**: Always in Espresso (#2C2926)
- **Body**: Soft Taupe (#A69B8C) for secondary, Espresso for primary hierarchy
- **NEVER** introduce a third typeface

---

## 📋 COMPLETE BUILD SPECIFICATION

### FILE: `src/app/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

:root {
  --espresso:     #2C2926;
  --warm-sand:    #D8C9B5;
  --warm-ivory:   #F7F4EE;
  --muted-olive:  #78806A;
  --soft-taupe:   #A69B8C;
  --ivory-dark:   #F0EBE2;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Inter', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { 
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--warm-ivory);
  color: var(--espresso);
  font-family: var(--font-body);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--espresso);
  line-height: 1.2;
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--warm-ivory); }
::-webkit-scrollbar-thumb { background: var(--warm-sand); border-radius: 3px; }
```

---

### COMPONENT: Header (`src/components/layout/Header.tsx`)

Build a sticky header with two states: transparent-on-hero (when at top of homepage) and solid-espresso (when scrolled or on inner pages).

**Desktop layout** (left → right):
```
[rumea home™ wordmark] ........... [Living Room] [Bedroom] [Dining] [Collections] [About] ........... [🔍 search] [♡ wishlist] [👤 account] [🛒 cart]
```

**Mobile layout**:
```
[≡ hamburger]   [rumea home™]   [💬 WhatsApp icon]
```

Requirements:
- Logo: "rumea home" in Plus Jakarta Sans, lowercase, Espresso color. "®" superscript in Muted Olive.
- Nav links: Inter Medium 14px, Soft Taupe, hover → Espresso with warm-sand underline
- Right icon cluster: search, wishlist, account, cart — ALL rendered as Lucide icons, all Soft Taupe color, all with aria-label. These are STRUCTURALLY PRESENT but functionally dormant (no click handlers yet, just placeholders).
- Mobile: Hamburger opens a slide-in drawer from left with full nav links + WhatsApp button
- Scroll behavior: `useEffect` + `window.scrollY` listener. Below 80px on homepage: transparent bg, ivory text. Above 80px: bg-espresso, ivory text.
- Announcement bar above header: "🚚 Free Delivery on orders above ₹15,000 | 📞 WhatsApp us for custom enquiries"

---

### COMPONENT: Footer (`src/components/layout/Footer.tsx`)

Dark footer: Espresso background, ivory and warm-sand text.

**4-column desktop layout:**
```
Col 1: Logo + tagline + "More Than Furniture" + social icons (Instagram, Facebook, Pinterest, YouTube)
Col 2: Quick Links (Home, Products, Rooms, Collections, About, Blog)
Col 3: Support (WhatsApp Chat, Email Us, Delivery Info, Returns Policy, Assembly Help, FAQs)  
Col 4: Contact block — WhatsApp number prominent + "Chat with us" button, office city/state
```

**Bottom bar:**
```
© 2025 Rumea Home. All rights reserved. | Privacy Policy | Terms of Service | Sitemap
[Trust badges: SSL secured | Made in India | Secure Payments]
```

Mobile: Stack to single column, accordion for each section.

---

### COMPONENT: MobileNav (`src/components/layout/MobileNav.tsx`)

Fixed bottom tab bar visible ONLY on mobile (hidden on md+):
```
[🏠 Home] [🛋 Products] [🏠 Rooms] [💬 WhatsApp] [☰ More]
```
Active tab: Muted Olive color + small dot indicator below icon.
WhatsApp tab: links to `https://wa.me/91XXXXXXXXXX`

---

### COMPONENT: WhatsApp Float Button (`src/components/ui/WhatsAppButton.tsx`)

Global floating button, fixed bottom-right, 64px circle, Muted Olive background, white WhatsApp icon.
- Mobile: `bottom: 80px` (above mobile nav bar)
- Desktop: `bottom: 32px, right: 32px`
- Pulse animation: gentle scale pulse every 3 seconds to attract attention
- Opens: `https://wa.me/91XXXXXXXXXX?text=Hi! I found your website and I'm interested in your furniture. Can you help me?`
- Should NOT overlap mobile nav bar

---

### PAGE: Homepage (`src/app/page.tsx`)

Build sections in this exact order:

#### Section 1: HERO
Full-viewport hero section. Warm, lifestyle-focused.

Layout (desktop — split): 
- Left 55%: Text content on Warm Ivory background
- Right 45%: Edge-to-edge lifestyle image (Indian living room with warm wood furniture)

Layout (mobile): Full-bleed image behind slight dark overlay, text overlaid.

Text content:
```
EYEBROW (uppercase, Muted Olive, Inter 12px, tracking-widest): "THOUGHTFUL FURNITURE FOR MODERN HOMES"

HEADLINE (Plus Jakarta Sans 700, 56px desktop / 36px mobile, Espresso):
"Homes Build
Brighter Days"

SUBTEXT (Inter 400, 18px desktop / 15px mobile, Soft Taupe):
"Furniture that fits your life — designed for real Indian homes, built to last, and priced to make sense."

CTAs (two buttons, row):
  Primary: [Explore Our Collection →] — Espresso bg, Ivory text, 14px Inter Medium, rounded-lg, px-8 py-4
  Secondary: [Chat on WhatsApp] — Warm Sand bg, Espresso text, same sizing, with WhatsApp icon
```

Bottom of hero: Thin horizontal strip showing 3 material close-ups (wood grain / fabric / botanical leaf) with caption "Materials that age beautifully."

#### Section 2: TRUST BAR
Full-width, Espresso background, Ivory text. 4 trust points in a horizontal row (2×2 grid mobile):

```
🚚 Free Delivery          📦 30-Day Returns       🪵 5-Year Warranty         🇮🇳 Made in India
"On orders above ₹15,000" "Hassle-free returns"   "On all frame structures"  "Crafted with care"
```

#### Section 3: SHOP BY ROOM
6-card grid. Section header:
```
EYEBROW: "DISCOVER BY SPACE"
HEADLINE: "Every Room, Perfectly Furnished"
```

Cards (2×3 grid desktop, 2×3 grid mobile, larger cards):
- Living Room → /rooms/living-room
- Bedroom → /rooms/bedroom
- Dining Room → /rooms/dining-room
- Study & Work → /rooms/study
- Outdoor & Balcony → /rooms/outdoor
- Storage Solutions → /rooms/storage

Card design: Rounded-xl, overflow hidden, lifestyle image fills card, dark gradient overlay at bottom, room name in Plus Jakarta Sans SemiBold Ivory, subtle hover lift (translateY -4px).

#### Section 4: FEATURED PRODUCTS
Section header:
```
EYEBROW: "HANDPICKED FOR YOU"
HEADLINE: "Beautiful Furniture for Real Homes"
```

Horizontal scroll on mobile, 4-column grid on desktop. 8 product cards.

ProductCard specs:
- Warm Ivory card background
- Product image: 4:3 ratio, rounded-lg, hover zoom (scale 1.03)
- Top-right: Wishlist icon (dormant — renders as hollow heart, Soft Taupe)
- Badge (conditional): "BEST SELLER" or "NEW ARRIVAL" in Muted Olive bg, Ivory text, uppercase, 10px Inter
- Product name: Plus Jakarta Sans SemiBold 16px, Espresso, line-clamp-2
- Category tag: Inter 12px, Soft Taupe, uppercase tracking-wide
- Price block: 
  - Offer price: Plus Jakarta Sans Bold 20px, Espresso "₹38,999"
  - MRP strikethrough: Inter 14px, Soft Taupe, line-through "₹45,999"
  - Discount: Muted Olive "15% OFF"
- CTA: [View Details →] — text link, Muted Olive, Inter Medium 13px

#### Section 5: BRAND STORY
Alternating image-text layout, Warm Ivory background. Two blocks:

Block A (image left, text right):
- Image: Craftsman hands working on wood
- Text: 
  - Eyebrow: "OUR STORY"
  - Headline: "More Than Furniture"
  - Body: "We started Rumea Home because we believed Indian homes deserved furniture that was both beautiful and honest. Honest in quality. Honest in pricing. Honest about where it's made and how."
  - Values list: ♡ Warm  ⊘ Modern  ◇ Reliable  ⚇ Thoughtful  ◈ Accessible Premium
  - CTA: [Read Our Story →]

Block B (text left, image right):
- Image: Close-up of fabric/upholstery texture
- Text:
  - Eyebrow: "OUR CRAFT"
  - Headline: "Better Materials. Greater Details. Happier Homes."
  - Body: "Every piece is made with materials that last and details that matter — from the joinery inside a drawer to the texture of the fabric you'll touch every day."

#### Section 6: TESTIMONIALS
Section header:
```
EYEBROW: "REAL HOMES, REAL STORIES"  
HEADLINE: "Good Design Brings Us Together"
```

3 testimonial cards side by side (horizontal scroll mobile):
- Star rating (5 gold stars using ★)
- Review text (2-3 sentences, Indian home context)
- Customer name + city + "Verified Purchase"
- Product they bought (small thumbnail + name)

Sample data to use:
```
1. "The Oslo sofa transformed our living room completely. The quality is genuinely premium — our guests always ask where we got it from." — Priya M., Bangalore — Oslo 3-Seater Sofa

2. "Delivered in 4 days to Hyderabad and assembled within the hour. The sheesham wood is exactly as described — rich and beautiful." — Rahul K., Hyderabad — Cambridge Dining Table

3. "Finally furniture that fits a 2BHK properly. The dimensions were accurate and the customer support on WhatsApp was excellent." — Ananya S., Mumbai — Metro Study Desk
```

#### Section 7: WHATSAPP CTA SECTION
Full-width section, Warm Ivory background with warm-sand left border accent. Centered layout.

```
Icon: WhatsApp logo (SVG) in Muted Olive, 48px
Headline: "Make Room for Better Living."
Sub: "Our furniture experts are on WhatsApp — share your room dimensions, budget and style preferences. We'll help you choose the perfect piece."
CTA Button: [Chat With Our Experts →] — large, Espresso bg, Ivory text
Below button: "Typically replies in under 2 hours · Mon–Sat, 9AM–8PM"
```

#### Section 8: STYLE COLLECTIONS TEASER
3-card collection grid:
- Modern Minimalist → /collections/modern
- Warm Traditional → /collections/traditional  
- Scandinavian → /collections/scandinavian

Large cards, full-bleed imagery, collection name overlaid.

---

### PAGE: Products Listing (`src/app/products/page.tsx`)

**URL**: `/products`

Layout:
- Desktop: 260px fixed sidebar filters + product grid (3 columns)
- Mobile: Sticky filter bar at top (horizontal pills) + 2-column grid

Filters sidebar (desktop) / Filter drawer (mobile):
```
ROOM: [All] [Living Room] [Bedroom] [Dining] [Study] [Outdoor]
PRICE: [Under ₹15K] [₹15K–₹30K] [₹30K–₹50K] [₹50K+] [Custom slider]
STYLE: [Modern] [Traditional] [Scandinavian] [Industrial] [Bohemian]
MATERIAL: [Solid Wood] [Engineered Wood] [Metal] [Upholstered]
SORT BY: [Popularity] [Price: Low to High] [Price: High to Low] [New Arrivals]
```

Results count: "Showing 24 of 48 products" — Inter 14px, Soft Taupe.
Load more: Button at bottom (not infinite scroll — better for SEO).

---

### PAGE: Product Detail Page — PDP (`src/app/products/[slug]/page.tsx`)

This is the most important page. A buyer's decision is made here.

**Layout (Desktop):**
```
Left 55%: Image gallery
Right 45%: Product info + CTAs
Below fold: Specs table | Reviews | Related products
```

**Left: Image Gallery**
- Primary image: Large, 1:1 ratio
- Thumbnail strip below: 5 thumbnails (primary, lifestyle shots, detail shots, dimension diagram)
- Click thumbnail → updates primary image
- Zoom on hover (desktop) / pinch-to-zoom (mobile)
- Image counter: "1 / 5" top right corner

**Right: Product Info**

```
BREADCRUMB: Home > Living Room > Sofas > Oslo 3-Seater Sofa

BADGE ROW: [⭐ 4.5 · 127 reviews] [🏆 Best Seller]

PRODUCT NAME: 
"Oslo 3-Seater Sofa" 
Plus Jakarta Sans Bold 32px desktop / 24px mobile, Espresso

CATEGORY TAG: SOFAS · LIVING ROOM (uppercase, Muted Olive, 12px Inter, tracking-wide)

PRICE BLOCK:
₹38,999   [₹45,999] -15% OFF
Inter Bold 28px Espresso | strikethrough Soft Taupe | badge Muted Olive bg

EMI LINE: No Cost EMI from ₹1,299/month (dormant — shows greyed, "Coming Soon")

FINISH SELECTOR:
"Select Finish:" — Inter Medium 14px Espresso
[Mahogany ✓] [Natural Teak] [Walnut] — pill buttons, selected = Espresso bg Ivory text

QUICK SPECS ROW:
🪵 Solid Sheesham Wood | 📐 210 × 90 × 88 cm | 🚚 Free Delivery | 🛡 5-Yr Warranty

─────────────────────────────────────────

PRIMARY CTA (full width, large):
[🛒 Buy on Amazon →]
Espresso background, Ivory text, Plus Jakarta Sans SemiBold 16px, py-4, rounded-lg
Sub-text below: "Opens Amazon.in · Sold and fulfilled by Rumea Home"

SECONDARY CTA (full width, outlined):
[💬 Enquire on WhatsApp]
Warm Sand background, Espresso text, border-warm-sand, same sizing

DORMANT SLOTS (render but inactive):
[♡ Save to Wishlist] — text link, Soft Taupe — "Coming Soon" tooltip
[+ Add to Cart] — renders as greyed button — "Coming Soon" tooltip

─────────────────────────────────────────

DELIVERY CHECKER:
"Check Delivery to Your Pincode"
[_______] [Check] → shows "Estimated: 3–5 working days" or "Not deliverable"
Small print: "Based on typical delivery timelines. Exact dates shown at checkout on Amazon."

TRUST MINI STRIP:
🔒 Secure Payment  🚚 Free Delivery  📦 Easy Returns  🪵 Quality Assured
```

**Below fold: Product Details Accordion**
```
📐 DIMENSIONS & SPACE PLANNING
  - Width: 210 cm (6'11") | Depth: 90 cm (2'11") | Height: 88 cm (2'11")
  - Seat Height: 43 cm (1'5") | Weight: 65 kg
  - Recommended Room Size: Minimum 12 ft × 14 ft
  - [Download Dimension Diagram PDF]

🪵 MATERIALS & CONSTRUCTION  
  - Frame: Solid Sheesham Wood (Indian Rosewood)
  - Joinery: Mortise & Tenon + Dowel reinforced
  - Upholstery: Premium Leatherette, 0.9mm thickness
  - Foam Density: 32D (high resilience)
  - Finish: UV-resistant lacquer coating

🚚 DELIVERY & ASSEMBLY
  - Metro Cities: 3–5 working days
  - Tier 2 Cities: 5–7 working days
  - Tier 3 Cities: 7–12 working days
  - Assembly: Required. Assembly guide included. Professional assembly available in select cities.

↩ RETURNS & WARRANTY
  - 30-day return policy for manufacturing defects
  - 5-year structural warranty on frame
  - 1-year warranty on upholstery and finish
  - Exclusions: Normal wear, fabric stains, accidental damage

⭐ CUSTOMER REVIEWS
  - Rating summary bar (4.5 → 5 stars, N reviews)
  - Top 3 reviews with customer name, city, verified badge, star rating, review text, helpful votes
  - [See all reviews on Amazon →]
```

---

### DATA: Product Catalogue (`src/data/products.json`)

Create 20 products across these categories:
- 5 Living Room (sofas, coffee tables, TV units)
- 4 Bedroom (beds, wardrobes, side tables)
- 3 Dining Room (dining tables, chairs)
- 3 Study (desks, bookshelves, chairs)
- 3 Storage (shoe racks, cabinets)
- 2 Outdoor (balcony chairs, tables)

For each product, follow the TypeScript Product interface defined in `AI_STATE.md`. Use realistic Indian pricing:
- Sofas: ₹25,000–₹85,000
- Beds: ₹18,000–₹65,000
- Dining tables: ₹20,000–₹55,000
- Desks: ₹8,000–₹25,000
- Storage: ₹5,000–₹18,000

Amazon ASIN placeholders: Use "B0PLACEHOLDER1" through "B0PLACEHOLDER20" — owner will replace with real ASINs.

---

### PAGE: Room Pages (`src/app/rooms/[room]/page.tsx`)

Template for all 6 room pages:
- Hero: Full-bleed lifestyle image of that room, headline "Your Perfect [Room Name]"
- Sub: 2-line description of the room's functional + aesthetic goals
- Product grid: Pre-filtered to that room's products (from products.json room field)
- "Room Planning Tips" sidebar/section: 3 quick tips for furnishing that room (Indian home context)

---

### PAGE: About (`src/app/about/page.tsx`)

Sections:
1. Hero: "We Believe Homes Build Brighter Days" — large, emotional
2. Brand story narrative (3 paragraphs, warm conversational tone)
3. Five Values grid (using the 5 core values with icons)
4. Manufacturing section: "Where It's Made" — Indian craftsmanship story
5. Team (optional placeholder: "A small team passionate about great furniture")
6. CTA: "Explore the Collection" + "Chat on WhatsApp"

---

### PAGE: Contact (`src/app/contact/page.tsx`)

Primary channel: WhatsApp (large prominent button)
Secondary: Email form (simple, just name + email + message → mailto or Formspree)

```
HEADLINE: "Same Values, A Better Tomorrow"
SUB: "We're a small team and we read every message. Reach us on WhatsApp for the fastest response."

WHATSAPP BLOCK (large, warm-sand bg):
  WhatsApp logo + number
  "Chat with us →" button
  "Mon–Sat, 9AM–8PM IST · Typically replies in 1–2 hours"

OR EMAIL BLOCK:
  Simple form: Name | Email | Subject | Message | [Send Message]
  Email: hello@rumeahome.com (placeholder)
```

---

## 🔗 INTEGRATION IMPLEMENTATION

### WhatsApp Helper (`src/lib/whatsapp.ts`)
```typescript
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export function buildWhatsAppUrl(
  message: string = 'Hi! I found your website and I\'m interested in your furniture.'
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildProductWhatsAppUrl(product: {
  name: string;
  price: number;
  slug: string;
}): string {
  const message = `Hi! I'm interested in the *${product.name}* (₹${product.price.toLocaleString('en-IN')}). Can you share more details and expected delivery timeline?\n\nhttps://rumeahome.com/products/${product.slug}`;
  return buildWhatsAppUrl(message);
}
```

### Amazon Helper (`src/lib/amazon.ts`)
```typescript
const AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'rumeahome-21';

export function buildAmazonUrl(asin: string, productName: string): string {
  const baseUrl = `https://www.amazon.in/dp/${asin}`;
  const params = new URLSearchParams({
    tag: AFFILIATE_TAG,
    linkCode: 'ogi',
    utm_source: 'rumea-home',
    utm_medium: 'website',
    utm_campaign: 'pdp-cta',
  });
  return `${baseUrl}?${params.toString()}`;
}
```

### Environment Variables (`.env.local` template)
```bash
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999

# Amazon Associates
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=rumeahome-21

# Google Analytics (Phase 1)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Razorpay (Phase 2 — leave blank for now)
NEXT_PUBLIC_RAZORPAY_KEY=
RAZORPAY_KEY_SECRET=

# Algolia (Phase 2 — leave blank for now)
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=

# Formspree (Contact form)
NEXT_PUBLIC_FORMSPREE_ID=
```

---

## 📱 MOBILE-FIRST REQUIREMENTS (NON-NEGOTIABLE)

Every component must be designed and tested at these breakpoints FIRST:
- 375px (iPhone SE / budget Android — most common in India)
- 390px (iPhone 14)
- 412px (Samsung Galaxy — most common Android size in India)

Then scale up:
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)

### Mobile-specific requirements:
- Touch targets: minimum 44px × 44px (Apple HIG) for all interactive elements
- Fonts: Never below 14px on mobile (Inter body), 24px minimum for product prices
- Sticky header height: 56px mobile, 72px desktop
- Image aspect ratios: Maintained on all screens
- Bottom mobile nav: Present and functional (56px height)
- WhatsApp float: 64px circle, positioned above mobile nav
- Product grid: 2 columns on mobile (never 1 column — wastes discovery opportunity)
- Price always visible without scrolling on product card
- Horizontal scroll carousels: Always with -20px margin and padding to hint at next item

---

## 🏎️ PERFORMANCE REQUIREMENTS

Target Lighthouse scores (mobile):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Implementation requirements:
- All images: `next/image` with WebP, width/height specified, `sizes` attribute
- Hero image: `priority={true}` for LCP
- Font loading: `next/font` with `display: 'swap'`
- Animations: `prefers-reduced-motion` respected
- Critical CSS: Tailwind purging active
- JS bundles: Dynamic imports for below-fold components
- Product images: Lazy loaded below fold

---

## 🔍 SEO IMPLEMENTATION

### Meta Tags (each page)
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://rumeahome.com'),
  title: {
    default: 'Rumea Home® | Thoughtful Furniture for Modern Indian Homes',
    template: '%s | Rumea Home'
  },
  description: 'Premium furniture for Indian homes — sofas, beds, dining tables and more. Free delivery, 5-year warranty, easy returns. Shop on Amazon or enquire on WhatsApp.',
  keywords: ['furniture India', 'sofa online India', 'wooden furniture', 'living room furniture', 'bedroom furniture India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rumea Home',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
}
```

### Product JSON-LD (PDP pages)
```typescript
// On every Product Detail Page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.meta.description,
  "brand": { "@type": "Brand", "name": "Rumea Home" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": product.pricing.offer,
    "availability": product.conversion.inStock ? 
      "https://schema.org/InStock" : 
      "https://schema.org/OutOfStock",
    "url": `https://rumeahome.com/products/${product.slug}`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.seo.rating,
    "reviewCount": product.seo.reviewCount
  }
}
```

---

## 🔒 DORMANT PHASE 2 COMPONENTS

Build these as structurally complete components, but wire ZERO functionality. They must render, look correct, but do nothing when clicked.

### CartSlot (`src/components/dormant/CartSlot.tsx`)
```typescript
// Renders as: Shopping bag icon, Soft Taupe color
// Shows "0" count badge (always 0 in Phase 1)
// onClick: shows tooltip "Shopping cart coming soon! Buy on Amazon for now."
// aria-label: "Shopping cart (coming soon)"
```

### WishlistIcon (`src/components/dormant/WishlistIcon.tsx`)
```typescript
// Renders as: Heart icon outline, Soft Taupe
// onClick: shows tooltip "Wishlists coming soon! WhatsApp us to save your favourites."
```

### SearchBar (`src/components/dormant/SearchBar.tsx`)
```typescript
// Renders as: Search icon, Soft Taupe
// onClick: shows a modal with "Search coming soon" and popular categories to click instead
```

### CheckoutBadgeSidebar (`src/components/dormant/CheckoutBadge.tsx`)
```typescript
// Hidden div (display: none) that contains the secure checkout trust strip
// Will be shown in Phase 2 by removing the hidden class
// Content: SSL badge, Razorpay badge, UPI logo, Visa/Mastercard icons
```

---

## 📊 ANALYTICS IMPLEMENTATION

### GA4 Events to Track
```typescript
// Track every Amazon click
trackEvent('amazon_click', {
  product_id: product.id,
  product_name: product.name,
  product_price: product.pricing.offer,
  product_category: product.category,
});

// Track every WhatsApp click
trackEvent('whatsapp_click', {
  source: 'pdp' | 'floating' | 'homepage' | 'contact',
  product_id: product?.id,
  product_name: product?.name,
});

// Track pincode checks
trackEvent('pincode_check', {
  pincode: pincode,
  result: 'deliverable' | 'not_deliverable',
});

// Track filter usage
trackEvent('filter_applied', {
  filter_type: 'room' | 'price' | 'style' | 'material',
  filter_value: value,
});
```

---

## ✅ DEFINITION OF DONE

The build is complete when:

1. ✅ Homepage loads in under 2.5s on mobile (3G)
2. ✅ All 6 room pages render correct filtered products
3. ✅ All 20 products have functional PDP pages
4. ✅ Amazon CTA links work (with affiliate tag placeholder)
5. ✅ WhatsApp buttons open correct pre-filled messages
6. ✅ Pincode checker works for at least 10 major city codes
7. ✅ Dormant components render but do nothing harmful
8. ✅ Mobile bottom nav is functional and correct
9. ✅ WhatsApp float button appears correctly on all viewports
10. ✅ SEO meta tags present on all pages
11. ✅ Structured data (JSON-LD) on all PDP pages
12. ✅ Sitemap.xml generated
13. ✅ Lighthouse score: 90+ Performance, 95+ Accessibility, 95+ SEO
14. ✅ AI_STATE.md fully updated with all phases checked

---

## 🚦 HOW TO START

Agent, begin now:

1. Read `AI_STATE.md` — confirm you understand the project state
2. Run `npx create-next-app@latest rumea-home [flags above]`
3. Install all dependencies
4. Configure Tailwind with brand tokens
5. Set up globals.css with design tokens
6. Build Header component first (it defines visual language for everything else)
7. Update AI_STATE.md after each component
8. Continue through phases in order

Do not ask for clarification. Make the best decision, build it, document the decision in AI_STATE.md, and continue.

---

*Rumea Home Master Prompt v1.0*  
*Build this once. Build it right. Build it to grow.*
