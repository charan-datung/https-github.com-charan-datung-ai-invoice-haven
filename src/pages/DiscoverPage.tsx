import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { stores } from '@/data/stores';
import type { BusinessCategory } from '@/types';
import LiveDealsBanner from '@/components/discover/LiveDealsBanner';
import SearchBar from '@/components/discover/SearchBar';
import CategoryFilter from '@/components/discover/CategoryFilter';
import NeighborhoodFeed from '@/components/discover/NeighborhoodFeed';

const DiscoverPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = searchParams.get('category') as BusinessCategory | null;

  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCategory = !activeCategory || store.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        store.name.toLowerCase().includes(query) ||
        store.tagline.toLowerCase().includes(query) ||
        store.owner.toLowerCase().includes(query) ||
        store.barangay.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <LiveDealsBanner />

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-kanto-brown mb-1">
          Tuklasin ang Iyong Barangay
        </h1>
        <p className="text-kanto-gray text-sm">
          Mga tindahan at serbisyo malapit sa iyo
        </p>
      </div>

      <SearchBar onChange={setSearchQuery} />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <NeighborhoodFeed stores={filteredStores} />
    </div>
  );
};

export default DiscoverPage;
