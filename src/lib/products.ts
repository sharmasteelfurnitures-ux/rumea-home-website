import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import testimonialsData from '@/data/testimonials.json';
import { Product, Room, ProductCategory, Testimonial } from '@/types/product';
import { RoomCategory } from '@/types/category';

export const products: Product[] = productsData as Product[];
export const roomCategories: RoomCategory[] = categoriesData as RoomCategory[];
export const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  const featured = products.filter((p) => p.seo.isFeatured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return products.slice(0, limit);
}

export function getProductsByRoom(room: Room): Product[] {
  return products.filter((p) => p.room.includes(room));
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(
    (p) => p.collection.toLowerCase() === collectionSlug.toLowerCase()
  );
}

export function getRelatedProducts(currentProduct: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== currentProduct.id &&
        (p.category === currentProduct.category ||
          p.room.some((r) => currentProduct.room.includes(r)) ||
          p.collection === currentProduct.collection)
    )
    .slice(0, limit);
}

export function getRoomCategoryBySlug(slug: string): RoomCategory | undefined {
  return roomCategories.find((c) => c.slug === slug || c.id === slug);
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
