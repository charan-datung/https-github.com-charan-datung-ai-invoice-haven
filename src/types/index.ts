export type BusinessCategory = 'sari-sari' | 'carinderia' | 'wet-market' | 'junk-shop' | 'services' | 'home-based';
export type StoreStatus = 'open' | 'closed' | 'closing-soon';
export type PaymentMethod = 'cash' | 'gcash' | 'maya';
export type FulfillmentType = 'pickup' | 'self-delivery' | 'message-to-arrange' | 'service-booking' | 'junk-collection';

export interface Store {
  id: string;
  name: string;
  category: BusinessCategory;
  tagline: string;
  description: string;
  owner: string;
  image: string;
  address: string;
  barangay: string;
  city: string;
  status: StoreStatus;
  hours: { open: string; close: string; days: string };
  rating: number;
  reviewCount: number;
  paymentMethods: PaymentMethod[];
  gcashNumber?: string;
  mayaNumber?: string;
  featured: boolean;
  verified: boolean;
  tier: 'free' | 'plus' | 'pro';
  fulfillment: FulfillmentType[];
  distance?: string;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  category: string;
  unit?: string;
}

export interface Deal {
  id: string;
  storeId: string;
  storeName: string;
  storeCategory: BusinessCategory;
  title: string;
  description: string;
  originalPrice?: number;
  dealPrice: number;
  expiresAt: string;
  image: string;
  urgencyLevel: 'low' | 'medium' | 'high';
}

export interface Review {
  id: string;
  storeId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface JunkShopMaterial {
  material: string;
  pricePerKg: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface CategoryInfo {
  id: BusinessCategory;
  name: string;
  nameTagalog: string;
  icon: string;
  color: string;
  count: string;
}
