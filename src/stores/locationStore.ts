import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  barangay: string | null;
  city: string | null;
  isLocating: boolean;
  error: string | null;
  requestLocation: () => void;
  setManualLocation: (barangay: string, city: string) => void;
  clearLocation: () => void;
  getDistanceKm: (storeLat: number, storeLng: number) => number | null;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set, get) => ({
      latitude: null,
      longitude: null,
      barangay: null,
      city: null,
      isLocating: false,
      error: null,

      requestLocation: () => {
        if (!navigator.geolocation) {
          set({ error: 'Hindi supported ang location sa browser mo.' });
          return;
        }
        set({ isLocating: true, error: null });
        navigator.geolocation.getCurrentPosition(
          (position) => {
            set({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              isLocating: false,
              error: null,
            });
          },
          (err) => {
            set({
              isLocating: false,
              error: err.code === 1
                ? 'I-allow mo muna ang location access.'
                : 'Hindi makuha ang location mo. Subukan ulit.',
            });
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );
      },

      setManualLocation: (barangay: string, city: string) => {
        set({ barangay, city, error: null });
      },

      clearLocation: () => {
        set({ latitude: null, longitude: null, barangay: null, city: null, error: null });
      },

      getDistanceKm: (storeLat: number, storeLng: number) => {
        const { latitude, longitude } = get();
        if (latitude === null || longitude === null) return null;

        // Haversine formula
        const R = 6371;
        const dLat = ((storeLat - latitude) * Math.PI) / 180;
        const dLon = ((storeLng - longitude) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((latitude * Math.PI) / 180) *
          Math.cos((storeLat * Math.PI) / 180) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c * 10) / 10;
      },
    }),
    {
      name: 'kanto-location',
      partialize: (state) => ({ barangay: state.barangay, city: state.city }),
    }
  )
);
