import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  phone: string;
  name: string;
  type: 'customer' | 'merchant';
  avatar?: string;
  barangay?: string;
  city?: string;
  storeId?: string; // if merchant, their store ID
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  otpSent: boolean;
  otpPhone: string;
  login: (phone: string) => void;
  verifyOtp: (otp: string) => boolean;
  setUserProfile: (profile: Partial<User>) => void;
  logout: () => void;
  sendOtp: (phone: string) => void;
}

// Simulated OTP for MVP - always accepts '123456'
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      otpSent: false,
      otpPhone: '',

      sendOtp: (phone: string) => {
        set({ otpSent: true, otpPhone: phone, isLoading: false });
      },

      login: (phone: string) => {
        // For MVP, create user on login
        const user: User = {
          id: `user-${Date.now()}`,
          phone,
          name: '',
          type: 'customer',
          createdAt: new Date().toISOString(),
        };
        set({ user, isAuthenticated: true, otpSent: false, otpPhone: '' });
      },

      verifyOtp: (otp: string) => {
        if (otp === '123456') {
          const phone = get().otpPhone;
          get().login(phone);
          return true;
        }
        return false;
      },

      setUserProfile: (profile: Partial<User>) => {
        const current = get().user;
        if (current) {
          set({ user: { ...current, ...profile } });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, otpSent: false, otpPhone: '' });
      },
    }),
    { name: 'kanto-auth' }
  )
);
