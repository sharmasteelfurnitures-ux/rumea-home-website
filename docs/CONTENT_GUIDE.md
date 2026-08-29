# Rumea Home — Content & Product Addition Guide

## Adding or Editing Products
All product data is stored in `src/data/products.json`. Each product conforms to the `Product` TypeScript interface in `src/types/product.ts`.

### Image Paths
Images can be local (e.g. `/images/products/slug/primary.jpg` inside `public/`) or remote URLs (e.g. Amazon CDN or Unsplash).

### Amazon ASIN
Update `"amazonAsin": "B0REALASIN"` and the `"amazonUrl"` will automatically generate with your associate tag.
