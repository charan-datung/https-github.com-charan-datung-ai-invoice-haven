import type { Product } from '@/types';

export const products: Product[] = [
  // Aling Nena's Sari-Sari (ss-001)
  { id: 'p-001', storeId: 'ss-001', name: 'Lucky Me! Pancit Canton', description: 'Original flavor instant noodles', price: 12, image: '', available: true, category: 'noodles', unit: 'pack' },
  { id: 'p-002', storeId: 'ss-001', name: 'Bear Brand Powdered Milk', description: 'Fortified powdered milk drink 33g', price: 15, image: '', available: true, category: 'beverages', unit: 'sachet' },
  { id: 'p-003', storeId: 'ss-001', name: 'Coca-Cola Mismo', description: 'Ice-cold Coca-Cola 295ml', price: 15, image: '', available: true, category: 'beverages', unit: 'bottle' },
  { id: 'p-004', storeId: 'ss-001', name: 'Tide Powder Detergent', description: 'Laundry detergent sachet 80g', price: 10, image: '', available: true, category: 'household', unit: 'sachet' },
  { id: 'p-005', storeId: 'ss-001', name: 'Smart Load', description: 'E-load for Smart/TNT/Sun', price: 0, image: '', available: true, category: 'load', unit: 'starts at ₱10' },
  { id: 'p-006', storeId: 'ss-001', name: 'Skyflakes Crackers', description: 'Classic saltine crackers 25g', price: 5, image: '', available: false, category: 'snacks', unit: 'pack' },

  // Aling Rosa's Lutong Bahay (cr-001)
  { id: 'p-010', storeId: 'cr-001', name: 'Adobo Rice Meal', description: 'Classic pork adobo na pinalambot sa suka at toyo', price: 55, image: '', available: true, category: 'ulam', unit: 'meal' },
  { id: 'p-011', storeId: 'cr-001', name: 'Sinigang na Baboy', description: 'Sour pork soup with vegetables, sampaloc based', price: 60, image: '', available: true, category: 'ulam', unit: 'meal' },
  { id: 'p-012', storeId: 'cr-001', name: 'Lechon Kawali', description: 'Crispy deep-fried pork belly, served with atchara', price: 75, image: '', available: true, category: 'ulam', unit: 'meal' },
  { id: 'p-013', storeId: 'cr-001', name: 'Ginisang Gulay', description: 'Stir-fried mixed vegetables', price: 35, image: '', available: true, category: 'ulam', unit: 'meal' },
  { id: 'p-014', storeId: 'cr-001', name: 'Extra Rice', description: 'Additional cup of steamed rice', price: 10, image: '', available: true, category: 'extras', unit: 'cup' },
  { id: 'p-015', storeId: 'cr-001', name: 'Halo-Halo', description: 'Shaved ice dessert with beans, fruits, and leche flan', price: 45, image: '', available: false, category: 'dessert', unit: 'cup' },

  // Aling Puring's Isda (wm-001)
  { id: 'p-020', storeId: 'wm-001', name: 'Bangus (Milkfish)', description: 'Fresh bangus, medium size, cleaned', price: 180, image: '', available: true, category: 'fish', unit: 'kg' },
  { id: 'p-021', storeId: 'wm-001', name: 'Tilapia', description: 'Fresh tilapia from Laguna, 3-4 pcs/kg', price: 140, image: '', available: true, category: 'fish', unit: 'kg' },
  { id: 'p-022', storeId: 'wm-001', name: 'Galunggong', description: 'Round scad, perfect for frying', price: 160, image: '', available: true, category: 'fish', unit: 'kg' },
  { id: 'p-023', storeId: 'wm-001', name: 'Hipon (Shrimp)', description: 'Medium-sized fresh shrimp', price: 320, image: '', available: false, category: 'seafood', unit: 'kg' },

  // Mang Jun Junk Shop (js-001)
  { id: 'p-030', storeId: 'js-001', name: 'Scrap Metal (Mixed)', description: 'We buy all types of scrap metal', price: 25, image: '', available: true, category: 'metals', unit: 'per kg' },
  { id: 'p-031', storeId: 'js-001', name: 'Newspaper / Old Paper', description: 'Diyaryo, magazines, old books', price: 8, image: '', available: true, category: 'paper', unit: 'per kg' },
  { id: 'p-032', storeId: 'js-001', name: 'PET Bottles', description: 'Clean plastic bottles (water/softdrink)', price: 12, image: '', available: true, category: 'plastic', unit: 'per kg' },
  { id: 'p-033', storeId: 'js-001', name: 'Copper Wire', description: 'Stripped or unstripped copper wire', price: 380, image: '', available: true, category: 'metals', unit: 'per kg' },

  // Ate Malou's Kakanin (hb-001)
  { id: 'p-040', storeId: 'hb-001', name: 'Puto (White)', description: 'Steamed rice cake, soft and fluffy, 6 pcs', price: 30, image: '', available: true, category: 'kakanin', unit: 'box' },
  { id: 'p-041', storeId: 'hb-001', name: 'Kutsinta', description: 'Steamed brown rice cake with niyog, 6 pcs', price: 30, image: '', available: true, category: 'kakanin', unit: 'box' },
  { id: 'p-042', storeId: 'hb-001', name: 'Sapin-Sapin', description: 'Layered glutinous rice cake, colorful and sweet', price: 50, image: '', available: true, category: 'kakanin', unit: 'slice' },
  { id: 'p-043', storeId: 'hb-001', name: 'Bibingka', description: 'Baked rice cake with salted egg and cheese', price: 40, image: '', available: false, category: 'kakanin', unit: 'piece' },

  // Kainan ni Mang Tony (cr-002)
  { id: 'p-050', storeId: 'cr-002', name: 'Tapsilog', description: 'Tapa, sinangag, at itlog', price: 45, image: '', available: true, category: 'silog', unit: 'meal' },
  { id: 'p-051', storeId: 'cr-002', name: 'Longsilog', description: 'Longganisa, sinangag, at itlog', price: 40, image: '', available: true, category: 'silog', unit: 'meal' },
  { id: 'p-052', storeId: 'cr-002', name: 'Hotsilog', description: 'Hotdog, sinangag, at itlog', price: 35, image: '', available: true, category: 'silog', unit: 'meal' },
  { id: 'p-053', storeId: 'cr-002', name: 'Plain Rice', description: 'Bagong saing na kanin', price: 10, image: '', available: true, category: 'extras', unit: 'cup' },
];
