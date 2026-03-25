import { Zap, Award, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const boostOptions = [
  {
    id: 'boost-post',
    name: 'Boost Post',
    price: '₱49–99',
    unit: 'per boost',
    description:
      'Push your deal to the top of the neighborhood feed for 3 hours. Perfect for flash sales and limited offers.',
    icon: Zap,
    color: 'text-kanto-orange',
    bgColor: 'bg-kanto-orange/10',
  },
  {
    id: 'featured-store',
    name: 'Featured Store',
    price: '₱299–699',
    unit: '/week',
    description:
      'Appear at the top of your category in barangay search results. Great for consistent visibility and building trust.',
    icon: Award,
    color: 'text-kanto-gold',
    bgColor: 'bg-kanto-gold/10',
  },
  {
    id: 'promo-campaign',
    name: 'Promo Campaign',
    price: '₱199–499',
    unit: 'per campaign',
    description:
      'Create a timed deal with push notification to nearby followers. Best for events, holidays, and grand openings.',
    icon: Bell,
    color: 'text-kanto-teal',
    bgColor: 'bg-kanto-teal/10',
  },
];

const BoostPanel = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-2">Boost Your Store</h2>
      <p className="text-sm text-kanto-gray mb-6">
        Palakasin ang visibility ng iyong negosyo. Pumili ng boost option na akma sa budget mo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boostOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div
              key={option.id}
              className="bg-white rounded-xl shadow-sm border border-kanto-cream hover:border-kanto-orange/30 hover:shadow-md transition-all flex flex-col"
            >
              <div className="p-6 flex-1">
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                    option.bgColor
                  )}
                >
                  <Icon className={cn('w-6 h-6', option.color)} />
                </div>
                <h3 className="text-lg font-bold text-kanto-brown mb-1">{option.name}</h3>
                <div className="mb-3">
                  <span className="text-xl font-bold text-kanto-orange">{option.price}</span>
                  <span className="text-sm text-kanto-gray ml-1">{option.unit}</span>
                </div>
                <p className="text-sm text-kanto-brown/70 leading-relaxed">
                  {option.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-2.5 bg-kanto-orange text-white text-sm font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors">
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoostPanel;
