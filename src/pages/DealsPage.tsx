import { Zap } from 'lucide-react';
import DealsFeed from '@/components/deals/DealsFeed';

const DealsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-kanto-brown mb-1">
          <Zap className="w-7 h-7 text-kanto-orange fill-kanto-orange" />
          Live na mga Deals
        </h1>
        <p className="text-kanto-gray text-sm">
          Mga real-time na deal mula sa mga tindahan sa inyong barangay
        </p>
      </div>

      <DealsFeed />
    </div>
  );
};

export default DealsPage;
