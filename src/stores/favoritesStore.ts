import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favoriteStoreIds: string[];
  toggleFavorite: (storeId: string) => void;
  isFavorite: (storeId: string) => boolean;
  getFavoriteCount: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteStoreIds: [],

      toggleFavorite: (storeId: string) => {
        const current = get().favoriteStoreIds;
        if (current.includes(storeId)) {
          set({ favoriteStoreIds: current.filter(id => id !== storeId) });
        } else {
          set({ favoriteStoreIds: [...current, storeId] });
        }
      },

      isFavorite: (storeId: string) => {
        return get().favoriteStoreIds.includes(storeId);
      },

      getFavoriteCount: () => {
        return get().favoriteStoreIds.length;
      },
    }),
    { name: 'kanto-favorites' }
  )
);
