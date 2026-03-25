import { MapPin, Clock, CreditCard } from 'lucide-react';
import type { Store } from '@/types';

interface StoreInfoProps {
  store: Store;
}

const paymentLabels: Record<string, string> = {
  cash: 'Cash',
  gcash: 'GCash',
  maya: 'Maya',
};

const StoreInfo = ({ store }: StoreInfoProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Address */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-kanto-orange" />
          <h3 className="font-semibold text-kanto-brown text-sm">Address</h3>
        </div>
        <p className="text-sm text-kanto-brown/80">{store.address}</p>
        <p className="text-sm font-medium text-kanto-teal mt-1">
          Brgy. {store.barangay}, {store.city}
        </p>
        {store.distance && (
          <p className="text-xs text-kanto-gray mt-2">{store.distance} away</p>
        )}
      </div>

      {/* Hours */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-kanto-orange" />
          <h3 className="font-semibold text-kanto-brown text-sm">Hours</h3>
        </div>
        <p className="text-sm text-kanto-brown/80">
          {store.hours.open} - {store.hours.close}
        </p>
        <p className="text-xs text-kanto-gray mt-1">{store.hours.days}</p>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl p-4 shadow-sm sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5 text-kanto-orange" />
          <h3 className="font-semibold text-kanto-brown text-sm">Payment</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {store.paymentMethods.map((method) => (
            <span
              key={method}
              className="px-2.5 py-1 bg-kanto-cream text-kanto-brown/80 text-xs font-medium rounded-full"
            >
              {paymentLabels[method]}
            </span>
          ))}
        </div>
        {store.gcashNumber && (
          <p className="text-xs text-kanto-gray mt-2">
            GCash: <span className="font-medium text-kanto-brown/70">{store.gcashNumber}</span>
          </p>
        )}
        {store.mayaNumber && (
          <p className="text-xs text-kanto-gray mt-1">
            Maya: <span className="font-medium text-kanto-brown/70">{store.mayaNumber}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default StoreInfo;
