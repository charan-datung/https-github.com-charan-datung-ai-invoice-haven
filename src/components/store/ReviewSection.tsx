import { useMemo } from 'react';
import { Star } from 'lucide-react';
import { cn, getRelativeTime } from '@/lib/utils';
import { reviews } from '@/data/reviews';

interface ReviewSectionProps {
  storeId: string;
}

const StarDisplay = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={cn(
          'w-4 h-4',
          star <= rating
            ? 'text-kanto-gold fill-kanto-gold'
            : 'text-kanto-gray-light'
        )}
      />
    ))}
  </div>
);

const ReviewSection = ({ storeId }: ReviewSectionProps) => {
  const storeReviews = useMemo(
    () => reviews.filter((r) => r.storeId === storeId),
    [storeId]
  );

  if (storeReviews.length === 0) return null;

  const averageRating =
    storeReviews.reduce((sum, r) => sum + r.rating, 0) / storeReviews.length;

  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-4">Mga Review</h2>

      {/* Rating summary */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-4 flex items-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-kanto-brown">
            {averageRating.toFixed(1)}
          </div>
          <StarDisplay rating={Math.round(averageRating)} />
          <p className="text-xs text-kanto-gray mt-1">
            {storeReviews.length} reviews
          </p>
        </div>
        <div className="h-16 w-px bg-kanto-gray-light" />
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = storeReviews.filter((r) => r.rating === star).length;
            const pct = (count / storeReviews.length) * 100;
            return (
              <div key={star} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-kanto-gray">{star}</span>
                <div className="flex-1 h-1.5 bg-kanto-gray-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-kanto-gold rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-3">
        {storeReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-kanto-cream rounded-full flex items-center justify-center text-xs font-bold text-kanto-brown">
                  {review.author.charAt(0)}
                </div>
                <span className="font-medium text-sm text-kanto-brown">
                  {review.author}
                </span>
              </div>
              <span className="text-xs text-kanto-gray">
                {getRelativeTime(review.date)}
              </span>
            </div>
            <StarDisplay rating={review.rating} />
            <p className="text-sm text-kanto-brown/80 mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
