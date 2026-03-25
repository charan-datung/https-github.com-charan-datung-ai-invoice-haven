import { cn } from '@/lib/utils';
import type { StoreStatus } from '@/types';

interface StatusBadgeProps {
  status: StoreStatus;
}

const statusConfig: Record<StoreStatus, { label: string; className: string }> = {
  open: {
    label: 'Bukas',
    className: 'bg-kanto-green/15 text-kanto-green',
  },
  closed: {
    label: 'Sarado',
    className: 'bg-kanto-red/15 text-kanto-red',
  },
  'closing-soon': {
    label: 'Pagsasara na',
    className: 'bg-kanto-gold/20 text-kanto-gold',
  },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        config.className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
