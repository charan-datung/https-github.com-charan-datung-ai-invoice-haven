import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Review } from '@/types';

interface ReviewState {
  userReviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getUserReviewForStore: (storeId: string) => Review | undefined;
  getReviewsForStore: (storeId: string) => Review[];
}

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      userReviews: [],

      addReview: (review) => {
        const newReview: Review = {
          ...review,
          id: `user-review-${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
        };
        // Replace existing review for same store if exists
        const filtered = get().userReviews.filter(r => r.storeId !== review.storeId);
        set({ userReviews: [...filtered, newReview] });
      },

      getUserReviewForStore: (storeId) => {
        return get().userReviews.find(r => r.storeId === storeId);
      },

      getReviewsForStore: (storeId) => {
        return get().userReviews.filter(r => r.storeId === storeId);
      },
    }),
    { name: 'kanto-reviews' }
  )
);
