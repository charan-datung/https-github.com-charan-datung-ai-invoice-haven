import { Recycle } from 'lucide-react';
import MaterialPriceTable from '@/components/junkshop/MaterialPriceTable';
import JunkShopCard from '@/components/junkshop/JunkShopCard';
import { stores } from '@/data/stores';
import PageMeta from '@/components/shared/PageMeta';

const junkShops = stores.filter((store) => store.category === 'junk-shop');

const JunkShopFinderPage = () => {
  return (
    <div className="min-h-screen bg-kanto-cream">
      <PageMeta title="Junk Shop Finder" />
      {/* Header */}
      <div className="bg-gradient-to-br from-kanto-green/10 via-kanto-teal/5 to-kanto-cream pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-kanto-green/20 rounded-xl flex items-center justify-center">
              <Recycle className="w-5 h-5 text-kanto-green" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-kanto-brown">Junk Shop Finder</h1>
          </div>
          <p className="text-kanto-gray text-sm sm:text-base ml-13">
            Hanapin ang pinakamalapit na junk shop at alamin ang presyo ngayon
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Material Price Guide */}
        <section>
          <h2 className="text-xl font-bold text-kanto-brown mb-4">
            Material Price Guide
          </h2>
          <MaterialPriceTable />
        </section>

        {/* Junk Shops Near You */}
        <section>
          <h2 className="text-xl font-bold text-kanto-brown mb-4">
            Junk Shops Near You
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {junkShops.map((shop) => (
              <JunkShopCard key={shop.id} store={shop} />
            ))}
          </div>
          {junkShops.length === 0 && (
            <div className="text-center py-12 text-kanto-gray">
              <Recycle className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Wala pang junk shop na nakalista sa iyong area.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default JunkShopFinderPage;
