import { Store, UtensilsCrossed, Fish, Recycle, Wrench, Home } from 'lucide-react';
import type { BusinessCategory } from '@/types';

interface CategoryIconProps {
  category: BusinessCategory;
  size?: number;
}

const iconMap: Record<BusinessCategory, React.ElementType> = {
  'sari-sari': Store,
  'carinderia': UtensilsCrossed,
  'wet-market': Fish,
  'junk-shop': Recycle,
  'services': Wrench,
  'home-based': Home,
};

const colorMap: Record<BusinessCategory, string> = {
  'sari-sari': 'text-kanto-orange',
  'carinderia': 'text-red-500',
  'wet-market': 'text-kanto-teal',
  'junk-shop': 'text-kanto-green',
  'services': 'text-indigo-500',
  'home-based': 'text-kanto-gold',
};

const CategoryIcon = ({ category, size = 24 }: CategoryIconProps) => {
  const Icon = iconMap[category] || Store;
  const color = colorMap[category] || 'text-kanto-gray';

  return <Icon className={color} size={size} />;
};

export default CategoryIcon;
