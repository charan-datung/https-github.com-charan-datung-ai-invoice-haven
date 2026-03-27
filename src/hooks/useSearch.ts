import { useState, useMemo } from 'react';
import type { Store, BusinessCategory } from '@/types';
import { stores } from '@/data/stores';

interface UseSearchResult {
  query: string;
  setQuery: (query: string) => void;
  selectedCategory: BusinessCategory | null;
  setSelectedCategory: (category: BusinessCategory | null) => void;
  filteredStores: Store[];
  resultCount: number;
}

export function useSearch(): UseSearchResult {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory | null>(null);

  const filteredStores = useMemo(() => {
    let results = stores;

    if (selectedCategory) {
      results = results.filter((store) => store.category === selectedCategory);
    }

    if (query.trim()) {
      const lowerQuery = query.toLowerCase().trim();
      results = results.filter(
        (store) =>
          store.name.toLowerCase().includes(lowerQuery) ||
          store.tagline.toLowerCase().includes(lowerQuery) ||
          store.description.toLowerCase().includes(lowerQuery) ||
          store.owner.toLowerCase().includes(lowerQuery) ||
          store.barangay.toLowerCase().includes(lowerQuery) ||
          store.category.toLowerCase().includes(lowerQuery)
      );
    }

    return results;
  }, [query, selectedCategory]);

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    filteredStores,
    resultCount: filteredStores.length,
  };
}
