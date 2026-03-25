import { Check } from 'lucide-react';
import { cn, formatPeso } from '@/lib/utils';
import type { PricingTier } from '@/types';

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div
      className={cn(
        'relative bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden transition-shadow hover:shadow-md',
        tier.highlighted
          ? 'border-2 border-kanto-orange ring-1 ring-kanto-orange/20'
          : 'border border-kanto-cream'
      )}
    >
      {/* Popular badge */}
      {tier.highlighted && (
        <div className="absolute top-0 right-6 -translate-y-0">
          <span className="inline-block bg-kanto-orange text-white text-xs font-bold px-3 py-1 rounded-b-lg">
            Pinaka-popular
          </span>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Tier name */}
        <h3 className="text-lg font-bold text-kanto-brown">{tier.name}</h3>

        {/* Price */}
        <div className="mt-3 mb-2">
          {tier.price === 0 ? (
            <span className="text-4xl font-extrabold text-kanto-brown">Libre</span>
          ) : (
            <>
              <span className="text-4xl font-extrabold text-kanto-brown">
                {formatPeso(tier.price)}
              </span>
              <span className="text-sm text-kanto-gray ml-1">/{tier.period}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-kanto-brown/70 mb-6">{tier.description}</p>

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-kanto-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-kanto-green" />
              </div>
              <span className="text-sm text-kanto-brown/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={cn(
            'mt-6 w-full py-3 rounded-lg font-semibold text-sm transition-colors',
            tier.highlighted
              ? 'bg-kanto-orange text-white hover:bg-kanto-orange/90'
              : 'bg-kanto-cream text-kanto-brown hover:bg-kanto-brown/10'
          )}
        >
          {tier.cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
