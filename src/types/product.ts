export type ProductCategory = 
  | 'sofa' 
  | 'coffee-table' 
  | 'tv-unit' 
  | 'accent-chair' 
  | 'bed' 
  | 'wardrobe' 
  | 'nightstand' 
  | 'dining-table' 
  | 'dining-chair' 
  | 'desk' 
  | 'bookshelf' 
  | 'office-chair' 
  | 'shoe-rack' 
  | 'storage-cabinet' 
  | 'balcony-chair' 
  | 'outdoor-table';

export type Room = 
  | 'living-room' 
  | 'bedroom' 
  | 'dining-room' 
  | 'study' 
  | 'storage' 
  | 'outdoor';

export interface ProductPricing {
  mrp: number;
  offer: number;
  discount: number;
  emi: {
    minAmount: number;
    months: number;
    provider: string;
  };
}

export interface ProductImages {
  primary: string;
  gallery: string[];
  lifestyle: string[];
  detail: string[];
  dimensions: string;
}

export interface DimensionMetric {
  cm: number;
  ft: string;
}

export interface ProductDimensions {
  width: DimensionMetric;
  depth: DimensionMetric;
  height: DimensionMetric;
  seatHeight?: DimensionMetric;
  weight: number;
  assemblyRequired: boolean;
  recommendedRoomSize?: string;
}

export interface ProductMaterials {
  frame: string;
  upholstery?: string;
  finish: string[];
  selectedFinish: string;
  joinery?: string;
  foamDensity?: string;
  coating?: string;
}

export interface ProductConversion {
  amazonUrl: string;
  amazonAsin: string;
  whatsappMessage: string;
  inStock: boolean;
  deliveryDays: {
    metro: string;
    tier2: string;
    tier3: string;
  };
}

export interface ProductSEO {
  badge?: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNewArrival: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  room: Room[];
  collection: string;
  collectionName?: string;
  tagline?: string;
  pricing: ProductPricing;
  images: ProductImages;
  dimensions: ProductDimensions;
  materials: ProductMaterials;
  features: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  conversion: ProductConversion;
  seo: ProductSEO;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  reviewText: string;
  verified: boolean;
  productName: string;
  productSlug: string;
  productImage: string;
}
