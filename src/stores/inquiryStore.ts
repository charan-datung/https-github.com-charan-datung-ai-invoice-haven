import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface InquiryItem {
  productId: string;
  productName: string;
  storeId: string;
  storeName: string;
  quantity: number;
  price: number;
  unit: string;
}

interface InquiryState {
  items: InquiryItem[];
  addItem: (item: Omit<InquiryItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearStore: (storeId: string) => void;
  clearAll: () => void;
  getStoreItems: (storeId: string) => InquiryItem[];
  getTotalForStore: (storeId: string) => number;
  getItemCount: () => number;
}

export const useInquiryStore = create<InquiryState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find(i => i.productId === item.productId);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, quantity: 1 }] });
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter(i => i.productId !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map(i =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        });
      },

      clearStore: (storeId) => {
        set({ items: get().items.filter(i => i.storeId !== storeId) });
      },

      clearAll: () => {
        set({ items: [] });
      },

      getStoreItems: (storeId) => {
        return get().items.filter(i => i.storeId === storeId);
      },

      getTotalForStore: (storeId) => {
        return get().items
          .filter(i => i.storeId === storeId)
          .reduce((sum, i) => sum + i.price * i.quantity, 0);
      },

      getItemCount: () => {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
    }),
    { name: 'kanto-inquiry' }
  )
);
