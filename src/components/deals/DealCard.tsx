import { Link } from 'react-router-dom';
import { cn, formatPeso } from '@/lib/utils';
import { useCountdown } from '@/hooks/useCountdown';
import type { Deal } from '@/types';
import CategoryIcon from '@/components/shared/CategoryIcon';

interface DealCardProps {
  deal: Deal;
}

const urgencyLabels: Record<string, { text: string; className: string }> = {
  high: { text: 'Maubos na!', className: 'bg-kanto-red/15 text-kanto-red' },
  medium: { text: 'Konti na lang!', className: 'bg-kanto-gold/20 text-kanto-gold' },
  low: { text: 'May oras pa', className: 'bg-kanto-green/15 text-kanto-green' },
};

const categoryBg: Record<string, string> = {
  'sari-sari': 'bg-orange-50',
  'carinderia': 'bg-red-50',
  'wet-market': 'bg-cyan-50',
  'junk-shop': 'bg-green-50',
  'services': 'bg-indigo-50',
  'home-based': 'bg-amber-50',
};

const CountdownTimer = ({ expiresAt }: { expiresAt: string }) => {
  const { hours, minutes, seconds, isExpired, isUrgent } = useCountdown(expiresAt);

  if (isExpired) {
    return (
      <span className="text-xs font-semibold text-kanto-red">Tapos na!</span>
    );
  }

  return (
    <div className={cn('flex items-center gap-1 text-xs font-mono font-bold', isUrgent ? 'text-kanto-red' : 'text-kanto-brown')}>
      {hours > 0 && (
        <>
          <span className="bg-kanto-brown/10 px-1.5 py-0.5 rounded">{String(hours).padStart(2, '0')}</span>
          <span>:</span>
        </>
      )}
      <span className="bg-kanto-brown/10 px-1.5 py-0.5 rounded">{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span className="bg-kanto-brown/10 px-1.5 py-0.5 rounded">{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

const UrgencyBadge = ({ level }: { level: string }) => {
  const config = urgencyLabels[level] || urgencyLabels.low;
  return (
    <span className={cn('inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold', config.className)}>
      {config.text}
    </span>
  );
};

const DealCard = ({ deal }: DealCardProps) => {
  const bg = categoryBg[deal.storeCategory] || 'bg-gray-50';

  return (
    <Link
      to={`/store/${deal.storeId}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-200 hover:scale-[1.02]"
    >
      {/* Image area */}
      <div className={cn('relative h-36 flex items-center justify-center', bg)}>
        <CategoryIcon category={deal.storeCategory} size={48} />
        <div className="absolute top-3 right-3">
          <UrgencyBadge level={deal.urgencyLevel} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <CategoryIcon category={deal.storeCategory} size={16} />
          <span className="text-xs text-kanto-gray font-medium truncate">
            {deal.storeName}
          </span>
        </div>

        <h3 className="font-bold text-kanto-brown text-sm leading-snug mb-3 line-clamp-2 group-hover:text-kanto-orange transition-colors">
          {deal.title}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-3">
          {deal.originalPrice && (
            <span className="text-xs text-kanto-gray line-through">
              {formatPeso(deal.originalPrice)}
            </span>
          )}
          <span className="text-lg font-bold text-kanto-orange">
            {formatPeso(deal.dealPrice)}
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-kanto-gray">Natitira:</span>
          <CountdownTimer expiresAt={deal.expiresAt} />
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
