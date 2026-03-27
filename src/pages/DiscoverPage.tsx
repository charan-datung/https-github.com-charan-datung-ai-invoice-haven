import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { stores } from '@/data/stores';
import type { BusinessCategory } from '@/types';
import LiveDealsBanner from '@/components/discover/LiveDealsBanner';
import SearchBar from '@/components/discover/SearchBar';
import CategoryFilter from '@/components/discover/CategoryFilter';
import NeighborhoodFeed from '@/components/discover/NeighborhoodFeed';
import PageMeta from '@/components/shared/PageMeta';

function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem('kanto-favorites') || '[]');
  } catch {
    return [];
  }
}

const DiscoverPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const activeCategory = searchParams.get('category') as BusinessCategory | null;

  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredStores = useMemo(() => {
    const favorites = getFavorites();
    return stores.filter((store) => {
      const matchesCategory = !activeCategory || store.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        store.name.toLowerCase().includes(query) ||
        store.tagline.toLowerCase().includes(query) ||
        store.owner.toLowerCase().includes(query) ||
        store.barangay.toLowerCase().includes(query);
      const matchesFavorites = !showFavoritesOnly || favorites.includes(store.id);
      return matchesCategory && matchesSearch && matchesFavorites;
    });
  }, [activeCategory, searchQuery, showFavoritesOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <PageMeta title="Discover Stores" />
      <LiveDealsBanner />

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-kanto-brown mb-1">
          Tuklasin ang Iyong Barangay
        </h1>
        <p className="text-kanto-gray text-sm">
          Mga tindahan at serbisyo malapit sa iyo
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <SearchBar onChange={setSearchQuery} />
        </div>
        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className={cn(
            'shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors',
            showFavoritesOnly
              ? 'bg-red-50 text-red-500 border-2 border-red-200'
              : 'bg-white text-kanto-brown border-2 border-kanto-cream hover:border-kanto-orange/30'
          )}
        >
          <Heart
            className={cn(
              'w-4 h-4',
              showFavoritesOnly ? 'fill-red-500 text-red-500' : 'text-kanto-gray'
            )}
          />
          <span className="hidden sm:inline">Mga Suki Ko</span>
        </button>
      </div>
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <NeighborhoodFeed stores={filteredStores} />
    </div>
  );
};

export default DiscoverPage;
