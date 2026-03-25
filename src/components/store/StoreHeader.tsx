import { useState, useEffect } from 'react';
import { BadgeCheck, Package, Truck, MessageCircle, Wrench, Recycle, Phone, MessageSquare, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Store, FulfillmentType } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';
import StarRating from '@/components/shared/StarRating';
import CategoryIcon from '@/components/shared/CategoryIcon';

interface StoreHeaderProps {
  store: Store;
}

const categoryGradients: Record<string, string> = {
  'sari-sari': 'from-kanto-orange to-kanto-gold',
  'carinderia': 'from-kanto-orange to-red-400',
  'wet-market': 'from-kanto-teal to-cyan-400',
  'junk-shop': 'from-kanto-green to-emerald-400',
  'services': 'from-indigo-500 to-purple-400',
  'home-based': 'from-kanto-gold to-amber-300',
};

const categoryLabels: Record<string, string> = {
  'sari-sari': 'Sari-Sari Store',
  'carinderia': 'Carinderia',
  'wet-market': 'Wet Market',
  'junk-shop': 'Junk Shop',
  'services': 'Services',
  'home-based': 'Home-Based Food',
};

const fulfillmentConfig: Record<FulfillmentType, { label: string; icon: React.ElementType }> = {
  'pickup': { label: 'Pickup', icon: Package },
  'self-delivery': { label: 'Delivery', icon: Truck },
  'message-to-arrange': { label: 'Message to Arrange', icon: MessageCircle },
  'service-booking': { label: 'Booking', icon: Wrench },
  'junk-collection': { label: 'Collection', icon: Recycle },
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

const StoreHeader = ({ store }: StoreHeaderProps) => {
  const gradient = categoryGradients[store.category] || 'from-gray-400 to-gray-300';
  const phone = store.gcashNumber || '';
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(getFavorites().includes(store.id));
  }, [store.id]);

  const handleFavorite = () => {
    const nowFav = toggleFavorite(store.id);
    setIsFav(nowFav);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/store/${store.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: store.name, text: store.tagline, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied!');
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Banner */}
      <div className={cn('relative h-48 sm:h-56 bg-gradient-to-br', gradient)}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <CategoryIcon category={store.category} size={120} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-kanto-brown">
            {store.name}
          </h1>
          {store.verified && (
            <BadgeCheck className="w-6 h-6 text-kanto-teal shrink-0 mt-1" />
          )}
          <button
            onClick={handleFavorite}
            className="ml-auto shrink-0 p-2 rounded-full hover:bg-kanto-cream transition-colors"
            aria-label={isFav ? 'Alisin sa Suki' : 'Idagdag sa Suki'}
          >
            <Heart
              className={cn(
                'w-6 h-6 transition-colors',
                isFav ? 'text-red-500 fill-red-500' : 'text-kanto-gray'
              )}
            />
          </button>
        </div>

        <p className="text-kanto-gray text-sm mb-3">
          ni {store.owner}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-kanto-cream text-kanto-brown/80 text-xs font-medium rounded-full">
            <CategoryIcon category={store.category} size={14} />
            {categoryLabels[store.category]}
          </span>
          <StatusBadge status={store.status} />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <StarRating rating={store.rating} />
          <span className="text-sm text-kanto-gray">
            {store.rating.toFixed(1)} ({store.reviewCount} reviews)
          </span>
        </div>

        {store.tagline && (
          <p className="text-kanto-brown/80 text-sm italic mb-4">
            "{store.tagline}"
          </p>
        )}

        {/* Contact buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {phone && (
            <a
              href={`sms:${phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-kanto-teal text-white text-xs font-semibold rounded-lg hover:bg-kanto-teal/90 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Pabulong
            </a>
          )}
          <a
            href="https://m.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Messenger
          </a>
          {phone && (
            <a
              href={`viber://chat?number=${phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-500 text-white text-xs font-semibold rounded-lg hover:bg-purple-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Viber
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-kanto-green text-white text-xs font-semibold rounded-lg hover:bg-kanto-green/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Tawagan
            </a>
          )}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-kanto-cream text-kanto-brown text-xs font-semibold rounded-lg hover:bg-kanto-cream/80 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        {/* Fulfillment badges */}
        <div className="flex flex-wrap gap-2">
          {store.fulfillment.map((type) => {
            const config = fulfillmentConfig[type];
            const Icon = config.icon;
            return (
              <span
                key={type}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-kanto-gray-light text-kanto-brown/70 text-xs font-medium rounded-lg"
              >
                <Icon className="w-3.5 h-3.5" />
                {config.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
