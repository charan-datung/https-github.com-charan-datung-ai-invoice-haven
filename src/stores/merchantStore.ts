import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Store, Product, Deal } from '@/types';

interface MerchantState {
  // Draft store during onboarding
  draftStore: Partial<Store> | null;
  // Merchant's published store
  myStore: Store | null;
  // Merchant's products
  myProducts: Product[];
  // Merchant's deals
  myDeals: Deal[];

  // Onboarding
  setDraftStore: (draft: Partial<Store>) => void;
  publishStore: () => void;

  // Store management
  updateStore: (updates: Partial<Store>) => void;

  // Product management
  addProduct: (product: Product) => void;
  updateProduct: (productId: string, updates: Partial<Product>) => void;
  removeProduct: (productId: string) => void;

  // Deal management
  addDeal: (deal: Deal) => void;
  removeDeal: (dealId: string) => void;

  // Reset
  resetMerchant: () => void;
}

export const useMerchantStore = create<MerchantState>()(
  persist(
    (set, get) => ({
      draftStore: null,
      myStore: null,
      myProducts: [],
      myDeals: [],

      setDraftStore: (draft) => {
        set({ draftStore: { ...get().draftStore, ...draft } });
      },

      publishStore: () => {
        const draft = get().draftStore;
        if (!draft) return;
        const store: Store = {
          id: `store-${Date.now()}`,
          name: draft.name || '',
          tagline: draft.tagline || '',
          description: draft.description || '',
          category: draft.category || 'sari-sari',
          owner: draft.owner || '',
          address: draft.address || '',
          barangay: draft.barangay || '',
          city: draft.city || 'Manila',
          hours: draft.hours || { open: '8:00 AM', close: '8:00 PM', days: 'Mon-Sun' },
          status: 'open',
          rating: 0,
          reviewCount: 0,
          featured: false,
          verified: false,
          tier: 'free',
          paymentMethods: draft.paymentMethods || ['cash'],
          fulfillment: draft.fulfillment || ['pickup'],
          image: '',
          ...draft,
        } as Store;
        set({ myStore: store, draftStore: null });
      },

      updateStore: (updates) => {
        const current = get().myStore;
        if (current) {
          set({ myStore: { ...current, ...updates } });
        }
      },

      addProduct: (product) => {
        set({ myProducts: [...get().myProducts, product] });
      },

      updateProduct: (productId, updates) => {
        set({
          myProducts: get().myProducts.map(p =>
            p.id === productId ? { ...p, ...updates } : p
          ),
        });
      },

      removeProduct: (productId) => {
        set({ myProducts: get().myProducts.filter(p => p.id !== productId) });
      },

      addDeal: (deal) => {
        set({ myDeals: [...get().myDeals, deal] });
      },

      removeDeal: (dealId) => {
        set({ myDeals: get().myDeals.filter(d => d.id !== dealId) });
      },

      resetMerchant: () => {
        set({ draftStore: null, myStore: null, myProducts: [], myDeals: [] });
      },
    }),
    { name: 'kanto-merchant' }
  )
);
