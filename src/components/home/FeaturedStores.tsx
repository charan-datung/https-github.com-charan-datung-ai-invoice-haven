import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { stores } from '@/data/stores';
import StoreCard from '@/components/shared/StoreCard';

const FeaturedStores = () => {
  const featuredStores = stores.filter((s) => s.featured);

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2D1B0E] sm:text-4xl">
              Mga Tampok na Tindahan
            </h2>
            <p className="mt-1 text-[#2D1B0E]/60">Featured Stores</p>
          </div>
          <Link
            to="/discover"
            className={cn(
              'inline-flex items-center gap-1 text-sm font-semibold text-[#0D7377]',
              'transition-colors hover:text-[#0D7377]/80'
            )}
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {featuredStores.map((store) => (
            <div key={store.id} className="w-72 flex-shrink-0">
              <StoreCard store={store} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
