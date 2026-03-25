import { BadgeCheck, Package, Truck, MessageCircle, Wrench, Recycle } from 'lucide-react';
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

const StoreHeader = ({ store }: StoreHeaderProps) => {
  const gradient = categoryGradients[store.category] || 'from-gray-400 to-gray-300';

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
