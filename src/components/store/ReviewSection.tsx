import { useMemo, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn, getRelativeTime } from '@/lib/utils';
import { reviews } from '@/data/reviews';

interface ReviewSectionProps {
  storeId: string;
}

interface UserReview {
  storeId: string;
  rating: number;
  text: string;
  date: string;
}

function getUserReviews(): UserReview[] {
  try {
    return JSON.parse(localStorage.getItem('kanto-user-reviews') || '[]');
  } catch {
    return [];
  }
}

function saveUserReview(review: UserReview) {
  const existing = getUserReviews().filter((r) => r.storeId !== review.storeId);
  existing.push(review);
  localStorage.setItem('kanto-user-reviews', JSON.stringify(existing));
}

function getUserReviewForStore(storeId: string): UserReview | undefined {
  return getUserReviews().find((r) => r.storeId === storeId);
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

const StarSelector = ({ rating, onChange }: { rating: number; onChange: (r: number) => void }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onChange(star)}
        className="focus:outline-none"
      >
        <Star
          className={cn(
            'w-7 h-7 transition-colors cursor-pointer',
            star <= rating
              ? 'text-kanto-gold fill-kanto-gold'
              : 'text-kanto-gray-light hover:text-kanto-gold/50'
          )}
        />
      </button>
    ))}
  </div>
);

const ReviewSection = ({ storeId }: ReviewSectionProps) => {
  const storeReviews = useMemo(
    () => reviews.filter((r) => r.storeId === storeId),
    [storeId]
  );

  const [userReview, setUserReview] = useState<UserReview | undefined>(undefined);
  const [newRating, setNewRating] = useState(0);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    setUserReview(getUserReviewForStore(storeId));
  }, [storeId]);

  const handleSubmit = () => {
    if (newRating === 0) return;
    const review: UserReview = {
      storeId,
      rating: newRating,
      text: newText,
      date: new Date().toISOString(),
    };
    saveUserReview(review);
    setUserReview(review);
    setNewRating(0);
    setNewText('');
  };

  const allReviews = storeReviews;
  const totalCount = allReviews.length + (userReview ? 1 : 0);
  const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0) + (userReview ? userReview.rating : 0);
  const averageRating = totalCount > 0 ? totalRating / totalCount : 0;

  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-4">Mga Review</h2>

      {/* Review form or submitted review */}
      {userReview ? (
        <div className="bg-kanto-cream/60 rounded-xl p-4 shadow-sm mb-4 border-2 border-kanto-orange/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-kanto-orange/20 rounded-full flex items-center justify-center text-xs font-bold text-kanto-orange">
                Ikaw
              </div>
              <span className="font-medium text-sm text-kanto-brown">
                Ikaw
              </span>
            </div>
            <span className="text-xs text-kanto-gray">
              {getRelativeTime(userReview.date)}
            </span>
          </div>
          <StarDisplay rating={userReview.rating} />
          {userReview.text && (
            <p className="text-sm text-kanto-brown/80 mt-2">{userReview.text}</p>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
          <h3 className="text-sm font-semibold text-kanto-brown mb-3">Mag-review</h3>
          <div className="mb-3">
            <StarSelector rating={newRating} onChange={setNewRating} />
          </div>
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Isulat ang iyong review dito..."
            className="w-full border border-kanto-cream rounded-lg p-3 text-sm text-kanto-brown placeholder:text-kanto-gray/60 focus:outline-none focus:ring-2 focus:ring-kanto-orange/30 resize-none"
            rows={3}
          />
          <button
            onClick={handleSubmit}
            disabled={newRating === 0}
            className={cn(
              'mt-3 px-5 py-2 text-sm font-semibold rounded-lg transition-colors',
              newRating > 0
                ? 'bg-kanto-orange text-white hover:bg-kanto-orange/90'
                : 'bg-kanto-gray-light text-kanto-gray cursor-not-allowed'
            )}
          >
            I-submit ang Review
          </button>
        </div>
      )}

      {/* Rating summary */}
      {totalCount > 0 && (
        <div className="bg-white rounded-xl p-5 shadow-sm mb-4 flex items-center gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-kanto-brown">
              {averageRating.toFixed(1)}
            </div>
            <StarDisplay rating={Math.round(averageRating)} />
            <p className="text-xs text-kanto-gray mt-1">
              {totalCount} reviews
            </p>
          </div>
          <div className="h-16 w-px bg-kanto-gray-light" />
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = allReviews.filter((r) => r.rating === star).length +
                (userReview && userReview.rating === star ? 1 : 0);
              const pct = (count / totalCount) * 100;
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
      )}

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
