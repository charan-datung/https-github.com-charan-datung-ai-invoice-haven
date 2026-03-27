import { Store as StoreIcon } from 'lucide-react';
import type { Store } from '@/types';
import StoreCard from '@/components/shared/StoreCard';

interface NeighborhoodFeedProps {
  stores: Store[];
}

const NeighborhoodFeed = ({ stores }: NeighborhoodFeedProps) => {
  if (stores.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <StoreIcon className="w-12 h-12 text-kanto-gray/40 mb-4" />
        <p className="text-kanto-brown font-semibold text-lg mb-1">
          Wala pang tindahan dito
        </p>
        <p className="text-kanto-gray text-sm">
          Subukan ang ibang kategorya o search term
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-kanto-gray mb-4">
        {stores.length} na tindahan ang nahanap
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default NeighborhoodFeed;
