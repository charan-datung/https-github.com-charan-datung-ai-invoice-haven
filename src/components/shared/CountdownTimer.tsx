import { cn } from '@/lib/utils';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  expiresAt: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

const CountdownTimer = ({ expiresAt }: CountdownTimerProps) => {
  const { hours, minutes, seconds, isExpired, isUrgent } = useCountdown(expiresAt);

  if (isExpired) {
    return (
      <span className="text-sm font-semibold text-kanto-red">
        Tapos na!
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 text-sm font-mono font-semibold tabular-nums',
        isUrgent ? 'text-kanto-red animate-pulse' : 'text-kanto-brown'
      )}
    >
      {pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </span>
  );
};

export default CountdownTimer;
