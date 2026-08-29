import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/types/product';
import { getRelatedProducts } from '@/lib/products';

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const related = getRelatedProducts(product, 4);

  if (related.length === 0) return null;

  return (
    <section className="pt-16 mt-16 border-t border-warm-sand/60">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-olive mb-1">
          COMPLETE THE SPACE
        </p>
        <h3 className="font-display font-bold text-2xl text-espresso">
          Related & Complementary Furniture
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {related.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
