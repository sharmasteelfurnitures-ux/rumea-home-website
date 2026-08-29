import { useState, useMemo } from 'react';
import { products, getProductBySlug } from '@/lib/products';
import { Product, Room, ProductCategory } from '@/types/product';

export function useProduct(slug?: string) {
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(slug);

  const product = useMemo(() => {
    if (!currentSlug) return undefined;
    return getProductBySlug(currentSlug);
  }, [currentSlug]);

  return {
    product,
    setProductSlug: setCurrentSlug,
  };
}

export function useProductsFilter(initialRoom: string = 'all') {
  const [selectedRoom, setSelectedRoom] = useState<string>(initialRoom);
  const [search, setSearch] = useState<string>('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedRoom !== 'all' && !p.room.includes(selectedRoom as Room)) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.tagline && p.tagline.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedRoom, search]);

  return {
    products: filtered,
    selectedRoom,
    setSelectedRoom,
    search,
    setSearch,
    totalCount: products.length,
    filteredCount: filtered.length,
  };
}
