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

  // Tindahan ni Mang Bert (ss-002)
  { id: 'r-080', storeId: 'ss-002', author: 'Lorna D.', rating: 4, text: 'Pinakamura talaga dito sa area. Laging may tingi-tingi pa.', date: '2026-03-18' },
  { id: 'r-081', storeId: 'ss-002', author: 'Rico S.', rating: 5, text: 'Mang Bert is the best! Maaga bukas, gabi pa rin nakabukas. Super convenient.', date: '2026-03-12' },
  { id: 'r-082', storeId: 'ss-002', author: 'Cherry M.', rating: 3, text: 'Okay naman but minsan kulang yung stocks. Sana mag-add pa ng items.', date: '2026-03-08' },

  // Ate Lhyn Store (ss-003)
  { id: 'r-085', storeId: 'ss-003', author: 'Dennis T.', rating: 4, text: 'May GCash at Maya! Convenient lalo pag walang barya. Mabilis pa mag-load.', date: '2026-03-20' },
  { id: 'r-086', storeId: 'ss-003', author: 'Grace P.', rating: 3, text: 'Sarado na sila ng 9 PM eh. Sana mag-extend ng hours, pero okay naman ang tinda.', date: '2026-03-14' },

  // Mang Domeng Gulay (wm-002)
  { id: 'r-090', storeId: 'wm-002', author: 'Nita C.', rating: 4, text: 'Fresh na fresh ang gulay! Galing talaga Benguet. Sulit ang presyo.', date: '2026-03-21' },
  { id: 'r-091', storeId: 'wm-002', author: 'Mang Rudy', rating: 5, text: 'Dito lang kami bumibili ng kangkong at sitaw. Laging crispy at green pa.', date: '2026-03-15' },
  { id: 'r-092', storeId: 'wm-002', author: 'Sonia L.', rating: 3, text: 'Kailangan maaga pumunta kasi mabilis maubos ang magagandang gulay.', date: '2026-03-09' },

  // Ate Beth Karne (wm-003)
  { id: 'r-095', storeId: 'wm-003', author: 'Mang Caloy', rating: 5, text: 'Quality meat talaga. Custom cuts pa! Hindi ka madadaya sa timbang.', date: '2026-03-19' },
  { id: 'r-096', storeId: 'wm-003', author: 'Josie R.', rating: 4, text: 'Mahal konti compared sa iba pero sulit sa quality. Walang taba!', date: '2026-03-13' },
  { id: 'r-097', storeId: 'wm-003', author: 'Letty V.', rating: 4, text: 'Sarado lang tuwing Monday. Very reliable for restaurant supply namin.', date: '2026-03-07' },

  // EcoRecycle Hub (js-002)
  { id: 'r-100', storeId: 'js-002', author: 'Allan G.', rating: 5, text: 'Transparent ang timbang, may price board pa! Modern na junk shop talaga.', date: '2026-03-22' },
  { id: 'r-101', storeId: 'js-002', author: 'Mylene A.', rating: 4, text: 'Tumatanggap ng e-waste dito! Finally may maayos na pagtatapunan ng luma kong phone.', date: '2026-03-16' },

  // Mang Pepeng's Repair Shop (sv-002)
  { id: 'r-105', storeId: 'sv-002', author: 'Ronnie B.', rating: 5, text: 'Na-ayos yung phone ko na sinabi ng ibang shop na sira na! Si Mang Pepeng talaga ang expert.', date: '2026-03-20' },
  { id: 'r-106', storeId: 'sv-002', author: 'Marites C.', rating: 4, text: 'May 30-day warranty pa! Sulit at maayos ang trabaho. Medyo matagal lang pag marami.', date: '2026-03-14' },
  { id: 'r-107', storeId: 'sv-002', author: 'Tony G.', rating: 3, text: 'Okay naman yung repair pero minsan kailangan bumalik pa for follow-up. Fair price naman.', date: '2026-03-06' },

  // Ate Joy's Laundry Hub (sv-003)
  { id: 'r-110', storeId: 'sv-003', author: 'Karen S.', rating: 4, text: 'Mabango at malinis ang labada. May pick-up at delivery pa! ₱65 lang per load.', date: '2026-03-19' },
  { id: 'r-111', storeId: 'sv-003', author: 'Vince D.', rating: 3, text: 'Medyo matagal minsan yung turnaround pero quality naman. Self-service option is nice.', date: '2026-03-11' },

  // Nanay Linda's Pandesal (hb-002)
  { id: 'r-115', storeId: 'hb-002', author: 'Fe M.', rating: 5, text: 'Mainit na pandesal every morning! Ang sarap ng ube flavor, paborito ng mga bata namin.', date: '2026-03-23' },
  { id: 'r-116', storeId: 'hb-002', author: 'Totoy R.', rating: 4, text: 'Best pandesal sa Santa Mesa. Laging pumipila kami ng umaga. Spanish bread din masarap!', date: '2026-03-17' },
  { id: 'r-117', storeId: 'hb-002', author: 'Mely A.', rating: 5, text: 'Perfect for bulk orders! Nag-order kami 200 pcs for fiesta, lahat nagustuhan.', date: '2026-03-10' },

  // Chef Arnel's Kitchen (hb-003)
  { id: 'r-120', storeId: 'hb-003', author: 'Gigi L.', rating: 5, text: 'Restaurant quality talaga! Yung caldereta niya, parang five-star hotel ang lasa. Sobrang worth it.', date: '2026-03-21' },
  { id: 'r-121', storeId: 'hb-003', author: 'Jun T.', rating: 4, text: 'Kailangan mag-preorder one day before pero sulit naman. Crispy pata is the best!', date: '2026-03-15' },
  { id: 'r-122', storeId: 'hb-003', author: 'Alma S.', rating: 4, text: 'Former hotel chef daw si Chef Arnel and you can really taste the difference. Highly recommended!', date: '2026-03-09' },
];
