import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, User, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Store } from '@/types';
import CategoryIcon from './CategoryIcon';
import StatusBadge from './StatusBadge';
import StarRating from './StarRating';

interface StoreCardProps {
  store: Store;
}

const categoryGradients: Record<string, string> = {
  'sari-sari': 'from-kanto-orange/80 to-kanto-gold/60',
  'carinderia': 'from-kanto-orange/70 to-red-400/60',
  'wet-market': 'from-kanto-teal/70 to-cyan-400/60',
  'junk-shop': 'from-kanto-green/70 to-emerald-400/60',
  'services': 'from-indigo-500/70 to-purple-400/60',
  'home-based': 'from-kanto-gold/70 to-amber-300/60',
};

const categoryLabels: Record<string, string> = {
  'sari-sari': 'Sari-Sari',
  'carinderia': 'Carinderia',
  'wet-market': 'Wet Market',
  'junk-shop': 'Junk Shop',
  'services': 'Services',
  'home-based': 'Home-Based',
};

function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem('kanto-favorites') || '[]');
  } catch {
    return [];
  }
}

function toggleFavorite(storeId: string): boolean {
  const favs = getFavorites();
  const index = favs.indexOf(storeId);
  if (index >= 0) {
    favs.splice(index, 1);
  } else {
    favs.push(storeId);
  }
  localStorage.setItem('kanto-favorites', JSON.stringify(favs));
  return index < 0;
}

const StoreCard = ({ store }: StoreCardProps) => {
  const gradient = categoryGradients[store.category] || 'from-gray-400 to-gray-300';
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(getFavorites().includes(store.id));
  }, [store.id]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowFav = toggleFavorite(store.id);
    setIsFav(nowFav);
  };

  return (
    <Link
      to={`/store/${store.id}`}
      className={cn(
        'group block bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden',
        'transition-all duration-200 hover:scale-[1.02]'
      )}
    >
      {/* Image area */}
      <div className={cn('relative h-40 bg-gradient-to-br', gradient)}>
        {store.image ? (
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <CategoryIcon category={store.category} size={48} />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <StatusBadge status={store.status} />
        </div>
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label={isFav ? 'Alisin sa Suki' : 'Idagdag sa Suki'}
        >
          <Heart
            className={cn(
              'w-4 h-4 transition-colors',
              isFav ? 'text-red-500 fill-red-500' : 'text-kanto-gray'
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-kanto-brown text-base leading-tight group-hover:text-kanto-orange transition-colors line-clamp-1">
            {store.name}
          </h3>
          <span className="shrink-0 text-xs font-medium bg-kanto-cream text-kanto-brown/70 px-2 py-0.5 rounded-full">
            {categoryLabels[store.category] || store.category}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={store.rating} />
          <span className="text-xs text-kanto-gray">
            ({store.reviewCount})
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-kanto-gray">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {store.owner}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {store.barangay}
          </span>
          {store.distance && (
            <span className="ml-auto text-kanto-teal font-medium">
              {store.distance}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
