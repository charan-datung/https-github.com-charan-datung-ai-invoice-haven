import { useState, useMemo } from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { deals } from '@/data/deals';
import { categories } from '@/data/categories';

import DealCard from './DealCard';

const DealsFeed = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeDeals = useMemo(() => {
    const now = new Date().getTime();
    return deals
      .filter((deal) => {
        const notExpired = new Date(deal.expiresAt).getTime() > now;
        const matchesCategory = !activeCategory || deal.storeCategory === activeCategory;
        return notExpired && matchesCategory;
      })
      .sort(
        (a, b) =>
          new Date(a.expiresAt).getTime() - new Date(b.expiresAt).getTime()
      );
  }, [activeCategory]);

  // Only show categories that have deals
  const dealCategories = useMemo(() => {
    const cats = new Set(deals.map((d) => d.storeCategory));
    return categories.filter((c) => cats.has(c.id));
  }, []);

  return (
    <div className="space-y-6">
      {/* Category filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === null
              ? 'bg-kanto-orange text-white'
              : 'bg-kanto-gray-light text-kanto-brown/70 hover:bg-kanto-gray-light/80'
          )}
        >
          Lahat
        </button>
        {dealCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === cat.id
                ? 'bg-kanto-orange text-white'
                : 'bg-kanto-gray-light text-kanto-brown/70 hover:bg-kanto-gray-light/80'
            )}
          >
            {cat.nameTagalog}
          </button>
        ))}
      </div>

      {/* Deals grid */}
      {activeDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Zap className="w-12 h-12 text-kanto-gray/40 mb-4" />
          <p className="text-kanto-brown font-semibold text-lg mb-1">
            Walang live deals ngayon
          </p>
          <p className="text-kanto-gray text-sm">
            Bumalik mamaya para sa mga bagong deals!
          </p>
        </div>
      )}
    </div>
  );
};

export default DealsFeed;
