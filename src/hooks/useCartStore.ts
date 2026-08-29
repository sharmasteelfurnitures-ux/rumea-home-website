import { create } from 'zustand';
import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFinish: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, selectedFinish: string, quantity?: number) => void;
  removeItem: (productId: string, selectedFinish: string) => void;
  updateQuantity: (productId: string, selectedFinish: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (product, selectedFinish, quantity = 1) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.id === product.id && i.selectedFinish === selectedFinish
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id && i.selectedFinish === selectedFinish
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, { product, selectedFinish, quantity }] };
    });
  },
  removeItem: (productId, selectedFinish) => {
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.id === productId && i.selectedFinish === selectedFinish)
      ),
    }));
  },
  updateQuantity: (productId, selectedFinish, quantity) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId && i.selectedFinish === selectedFinish
          ? { ...i, quantity: Math.max(1, quantity) }
          : i
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  getTotalItems: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get().items.reduce(
      (acc, item) => acc + item.product.pricing.offer * item.quantity,
      0
    );
  },
}));
