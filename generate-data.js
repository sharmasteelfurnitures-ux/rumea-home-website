const fs = require('fs');

const products = [
  {
    id: "sofa-oslo-3seater",
    slug: "sofa-oslo-3seater",
    name: "Oslo 3-Seater Solid Sheesham Wood Sofa",
    category: "sofa",
    room: ["living-room"],
    collection: "scandinavian",
    collectionName: "Scandinavian Modern",
    tagline: "Minimalist Nordic profile with handcrafted Indian wood joinery",
    pricing: {
      mrp: 45999,
      offer: 38999,
      discount: 15,
      emi: { minAmount: 1299, months: 30, provider: "No Cost EMI" }
    },
    images: {
      primary: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
      ],
      lifestyle: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"],
      detail: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"],
      dimensions: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
    },
    dimensions: {
      width: { cm: 210, ft: "6'11\"" },
      depth: { cm: 90, ft: "2'11\"" },
      height: { cm: 88, ft: "2'11\"" },
      seatHeight: { cm: 43, ft: "1'5\"" },
      weight: 65,
      assemblyRequired: true,
      recommendedRoomSize: "Minimum 12 ft x 14 ft"
    },
    materials: {
      frame: "Solid Sheesham Wood (Indian Rosewood)",
      upholstery: "High-Resilience Linen Blend / Premium Leatherette",
      finish: ["Walnut", "Natural Teak", "Mahogany"],
      selectedFinish: "Natural Teak",
      joinery: "Mortise & Tenon with Dowel Reinforcement",
      foamDensity: "32D High-Resilience PU Foam",
      coating: "UV & Moisture Resistant Polyurethane Lacquer"
    },
    features: [
      "Kiln-dried solid Sheesham wood frame designed against warping",
      "Ergonomic angled backrest with high-density layered cushioning",
      "Removable & washable zipper cushion covers",
      "Heavy-gauge sinuous s-spring suspension for long-lasting bounce",
      "100% termite & borer resistant treated hardwood"
    ],
    meta: {
      title: "Oslo 3-Seater Solid Sheesham Wood Sofa | Rumea Home",
      description: "Shop the Oslo 3-Seater Sofa crafted from kiln-dried solid Sheesham wood. Free delivery across India, 5-year warranty, and easy returns.",
      keywords: ["sofa 3 seater", "sheesham wood sofa", "scandinavian sofa india", "living room sofa"]
    },
    conversion: {
      amazonUrl: "https://www.amazon.in/dp/B0PLACEHOLDER1?tag=rumeahome-21&linkCode=ogi&utm_source=rumea-home&utm_medium=website&utm_campaign=pdp-cta",
      amazonAsin: "B0PLACEHOLDER1",
      whatsappMessage: "Hi! I am interested in the Oslo 3-Seater Sofa (₹38,999). Can you share finish swatches and delivery date for my pincode?",
      inStock: true,
      deliveryDays: { metro: "3-5 working days", tier2: "5-7 working days", tier3: "7-10 working days" }
    },
    seo: { badge: "Best Seller", rating: 4.8, reviewCount: 142, isFeatured: true, isNewArrival: false }
  }
];

fs.writeFileSync('src/data/products.json', JSON.stringify(products, null, 2));
