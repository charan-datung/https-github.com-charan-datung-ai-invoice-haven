import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => {
          const fill = Math.min(1, Math.max(0, rating - i));
          return (
            <span key={i} className="relative inline-block w-4 h-4">
              {/* Empty star (background) */}
              <Star className="absolute inset-0 w-4 h-4 text-kanto-gray-light" />
              {/* Filled star (foreground with clip) */}
              {fill > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  <Star
                    className={cn('w-4 h-4 fill-kanto-gold text-kanto-gold')}
                  />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs font-medium text-kanto-brown/70 ml-0.5">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
