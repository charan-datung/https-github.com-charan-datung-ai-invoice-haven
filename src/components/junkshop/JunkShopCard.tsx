import { MapPin, Clock, Phone, Recycle, CheckCircle } from 'lucide-react';
import { cn, formatPeso } from '@/lib/utils';
import type { Store } from '@/types';
import { junkShopPrices } from '@/data/junkshop-prices';

interface JunkShopCardProps {
  store: Store;
}

const statusConfig = {
  open: { label: 'BUKAS', className: 'bg-kanto-green text-white' },
  closed: { label: 'SARADO', className: 'bg-kanto-red text-white' },
  'closing-soon': { label: 'MAGSASARA NA', className: 'bg-kanto-gold text-kanto-brown' },
};

const JunkShopCard = ({ store }: JunkShopCardProps) => {
  const status = statusConfig[store.status];
  const displayMaterials = junkShopPrices.slice(0, 6);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-kanto-green/10 to-kanto-teal/10 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-kanto-green/20 rounded-xl flex items-center justify-center shrink-0">
              <Recycle className="w-6 h-6 text-kanto-green" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-kanto-brown">{store.name}</h3>
                {store.verified && (
                  <CheckCircle className="w-4 h-4 text-kanto-teal shrink-0" />
                )}
              </div>
              <p className="text-sm text-kanto-gray">{store.tagline}</p>
            </div>
          </div>
          <span
            className={cn(
              'shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide',
              status.className
            )}
          >
            {status.label}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4 space-y-2 border-b border-kanto-cream">
        <div className="flex items-center gap-2 text-sm text-kanto-brown/80">
          <MapPin className="w-4 h-4 text-kanto-gray shrink-0" />
          <span>{store.address}, {store.barangay}, {store.city}</span>
          {store.distance && (
            <span className="ml-auto text-kanto-teal font-semibold text-xs">{store.distance}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-kanto-brown/80">
          <Clock className="w-4 h-4 text-kanto-gray shrink-0" />
          <span>{store.hours.open} - {store.hours.close} ({store.hours.days})</span>
        </div>
      </div>

      {/* Materials they buy */}
      <div className="px-5 py-4 border-b border-kanto-cream">
        <h4 className="font-semibold text-sm text-kanto-brown mb-3 flex items-center gap-2">
          <span className="text-kanto-green">&#9679;</span>
          Binibili Namin
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {displayMaterials.map((item) => (
            <div
              key={item.material}
              className="flex items-center justify-between bg-kanto-cream/50 rounded-lg px-3 py-2"
            >
              <span className="text-xs text-kanto-brown truncate mr-2">{item.material}</span>
              <span className="text-xs font-semibold text-kanto-green whitespace-nowrap">
                {formatPeso(item.pricePerKg)}/{item.unit}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-kanto-gray mt-2 text-center">
          At marami pang iba — pumunta para sa kumpletong listahan
        </p>
      </div>

      {/* Contact */}
      <div className="px-5 py-4">
        <h4 className="font-semibold text-sm text-kanto-brown mb-2 flex items-center gap-2">
          <Phone className="w-3.5 h-3.5" />
          Contact Info
        </h4>
        <div className="flex flex-wrap gap-2">
          {store.paymentMethods.includes('gcash') && store.gcashNumber && (
            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">
              GCash: {store.gcashNumber}
            </span>
          )}
          {store.paymentMethods.includes('maya') && store.mayaNumber && (
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium">
              Maya: {store.mayaNumber}
            </span>
          )}
          {store.fulfillment.includes('junk-collection') && (
            <span className="text-xs bg-kanto-orange/10 text-kanto-orange px-3 py-1.5 rounded-full font-medium">
              May Pickup Service
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default JunkShopCard;
