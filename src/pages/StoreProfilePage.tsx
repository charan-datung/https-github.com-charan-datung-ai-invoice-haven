import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Store as StoreIcon, QrCode } from 'lucide-react';
import { stores } from '@/data/stores';
import StoreHeader from '@/components/store/StoreHeader';
import StoreInfo from '@/components/store/StoreInfo';
import ProductGrid from '@/components/store/ProductGrid';
import ReviewSection from '@/components/store/ReviewSection';
import StoreQRCode from '@/components/store/StoreQRCode';

const StoreProfilePage = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const store = stores.find((s) => s.id === storeId);
  const [showQR, setShowQR] = useState(false);

  if (!store) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <StoreIcon className="w-16 h-16 text-kanto-gray/40 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-kanto-brown mb-2">
          Hindi mahanap ang tindahan
        </h1>
        <p className="text-kanto-gray mb-6">
          Mukhang wala itong tindahan na ito o na-delete na.
        </p>
        <Link
          to="/discover"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-kanto-orange text-white font-semibold rounded-xl hover:bg-kanto-orange/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Bumalik sa Discover
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Back button */}
      <Link
        to="/discover"
        className="inline-flex items-center gap-2 text-sm font-medium text-kanto-gray hover:text-kanto-orange transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Bumalik sa Discover
      </Link>

      <StoreHeader store={store} />
      <StoreInfo store={store} />
      <ProductGrid storeId={store.id} />

      {/* QR Code toggle */}
      <div>
        <button
          onClick={() => setShowQR(!showQR)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-kanto-brown text-sm font-semibold rounded-xl shadow-sm hover:bg-kanto-cream transition-colors"
        >
          <QrCode className="w-4 h-4" />
          {showQR ? 'Itago ang QR Code' : 'Ipakita ang QR Code'}
        </button>
        {showQR && (
          <div className="mt-4">
            <StoreQRCode storeId={store.id} storeName={store.name} />
          </div>
        )}
      </div>

      <ReviewSection storeId={store.id} />
    </div>
  );
};

export default StoreProfilePage;
