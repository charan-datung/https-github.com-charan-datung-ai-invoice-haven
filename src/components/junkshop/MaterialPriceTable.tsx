import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn, formatPeso } from '@/lib/utils';
import { junkShopPrices } from '@/data/junkshop-prices';

const trendConfig = {
  up: { icon: TrendingUp, color: 'text-kanto-green', label: 'Pataas' },
  down: { icon: TrendingDown, color: 'text-kanto-red', label: 'Pababa' },
  stable: { icon: Minus, color: 'text-kanto-gray', label: 'Stable' },
};

const MaterialPriceTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-kanto-brown text-white">
              <th className="text-left px-4 py-3 font-semibold">Material</th>
              <th className="text-right px-4 py-3 font-semibold">Presyo per Kilo</th>
              <th className="text-center px-4 py-3 font-semibold">Trend</th>
            </tr>
          </thead>
          <tbody>
            {junkShopPrices.map((item, index) => {
              const trend = trendConfig[item.trend];
              const TrendIcon = trend.icon;

              return (
                <tr
                  key={item.material}
                  className={cn(
                    'border-b border-kanto-cream last:border-b-0 transition-colors hover:bg-kanto-cream/50',
                    index % 2 === 0 ? 'bg-white' : 'bg-kanto-cream/30'
                  )}
                >
                  <td className="px-4 py-3 font-medium text-kanto-brown">
                    {item.material}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-kanto-brown">
                    {formatPeso(item.pricePerKg)}
                    <span className="text-kanto-gray font-normal text-xs ml-1">/{item.unit}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className={cn('flex items-center justify-center gap-1', trend.color)}>
                      <TrendIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">{trend.label}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 bg-kanto-cream/50 text-xs text-kanto-gray text-center">
        Mga presyo ay batay sa average ng mga junk shop sa Metro Manila. Nag-iiba-iba depende sa lokasyon.
      </div>
    </div>
  );
};

export default MaterialPriceTable;
