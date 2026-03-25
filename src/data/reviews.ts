import type { Review } from '@/types';

export const reviews: Review[] = [
  // Aling Nena's Sari-Sari (ss-001)
  { id: 'r-001', storeId: 'ss-001', author: 'Juan D.', rating: 5, text: 'Laging kumpleto ang paninda ni Aling Nena! Kahit gabi, bukas pa rin.', date: '2026-03-20' },
  { id: 'r-002', storeId: 'ss-001', author: 'Maria L.', rating: 4, text: 'Mabait si Aling Nena, may tiwala pa. Medyo mahal lang yung ibang items.', date: '2026-03-15' },
  { id: 'r-003', storeId: 'ss-001', author: 'Pedro R.', rating: 5, text: 'GCash accepted na! Convenient para sa akin na walang cash palagi.', date: '2026-03-10' },

  // Aling Rosa's Lutong Bahay (cr-001)
  { id: 'r-010', storeId: 'cr-001', author: 'Carlo M.', rating: 5, text: 'Pinaka-masarap na adobo sa buong Santa Cruz! Hindi ka magsisisi.', date: '2026-03-22' },
  { id: 'r-011', storeId: 'cr-001', author: 'Ana S.', rating: 5, text: 'Parang luto ng nanay ko. Malinis din ang kainan. Sulit ang ₱55!', date: '2026-03-18' },
  { id: 'r-012', storeId: 'cr-001', author: 'Bong T.', rating: 4, text: 'Masarap ang sinigang pero minsan mabilis maubos ang ulam. Pumunta kayo ng maaga!', date: '2026-03-12' },
  { id: 'r-013', storeId: 'cr-001', author: 'Liza G.', rating: 5, text: 'Best lechon kawali sa area. Crispy at hindi mataba. Sobrang sarap!', date: '2026-03-05' },

  // Aling Puring's Isda (wm-001)
  { id: 'r-020', storeId: 'wm-001', author: 'Nena C.', rating: 5, text: 'Fresh na fresh talaga ang isda. Pinaka-maganda ang quality sa Divisoria.', date: '2026-03-21' },
  { id: 'r-021', storeId: 'wm-001', author: 'Mang Isko', rating: 5, text: 'Libre pa ang linis at fillet! Saan ka pa? Dito na tayo kay Aling Puring.', date: '2026-03-16' },
  { id: 'r-022', storeId: 'wm-001', author: 'Beth A.', rating: 4, text: 'Maaga lang bukas kaya kailangan pumunta ng madaling araw. Worth it naman!', date: '2026-03-08' },

  // Mang Jun Junk Shop (js-001)
  { id: 'r-030', storeId: 'js-001', author: 'Rodel P.', rating: 4, text: 'Mataas ang patong compared sa ibang junk shop. Tama ang timbang.', date: '2026-03-19' },
  { id: 'r-031', storeId: 'js-001', author: 'Gina V.', rating: 4, text: 'May free pickup sila para sa malalaking dami. Convenient!', date: '2026-03-14' },

  // Ate Malou's Kakanin (hb-001)
  { id: 'r-040', storeId: 'hb-001', author: 'Tita Joy', rating: 5, text: 'Ang sarap ng sapin-sapin ni Ate Malou! Laging pang-handaan ang dating.', date: '2026-03-23' },
  { id: 'r-041', storeId: 'hb-001', author: 'Donna R.', rating: 5, text: 'Puto niya pinakamasarap sa Sampaloc. Bumibili kami every weekend!', date: '2026-03-17' },
  { id: 'r-042', storeId: 'hb-001', author: 'Mark E.', rating: 5, text: 'Perfect for events! Na-order kami para sa birthday, lahat nag-enjoy.', date: '2026-03-09' },

  // Kainan ni Mang Tony (cr-002)
  { id: 'r-050', storeId: 'cr-002', author: 'Kuya Ben', rating: 5, text: 'Busog ka na sa bente! Walang tatalo sa presyo ni Mang Tony.', date: '2026-03-20' },
  { id: 'r-051', storeId: 'cr-002', author: 'Jessa M.', rating: 4, text: 'Sulit ang tapsilog. Masarap at mabilis ang serbisyo.', date: '2026-03-13' },
  { id: 'r-052', storeId: 'cr-002', author: 'Dong L.', rating: 4, text: 'Lagingông dito kasi affordable. Minsan mahaba ang pila pero okay lang.', date: '2026-03-06' },

  // Kuya Eddie's Barbershop (sv-001)
  { id: 'r-060', storeId: 'sv-001', author: 'Jerome B.', rating: 4, text: 'Gwapo ka talaga paglabas! ₱50 lang ang gupit, grabe na ang galing.', date: '2026-03-18' },
  { id: 'r-061', storeId: 'sv-001', author: 'Kevin S.', rating: 5, text: 'Si Kuya Eddie talaga ang pinaka-magaling na barbero sa area. Punta na kayo!', date: '2026-03-11' },

  // Nanay Cely Karinderya (cr-003)
  { id: 'r-070', storeId: 'cr-003', author: 'Tina R.', rating: 5, text: 'Sinigang ni Nanay Cely, walang kupas! Parang luto ng nanay mo talaga.', date: '2026-03-22' },
  { id: 'r-071', storeId: 'cr-003', author: 'Joel M.', rating: 4, text: 'Free sabaw refill! Saan ka pa makakakita nyan? Masarap at mura.', date: '2026-03-15' },
];
