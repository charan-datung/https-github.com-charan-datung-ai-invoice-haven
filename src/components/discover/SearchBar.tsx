import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onChange: (query: string) => void;
  onNearMeChange?: (nearMe: boolean) => void;
}

const SearchBar = ({ onChange, onNearMeChange }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [nearMe, setNearMe] = useState(false);

  const handleChange = (value: string) => {
    setQuery(value);
    onChange(value);
  };

  const handleNearMeToggle = () => {
    const next = !nearMe;
    setNearMe(next);
    onNearMeChange?.(next);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kanto-gray" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Maghanap ng tindahan..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-kanto-gray-light rounded-xl text-sm text-kanto-brown placeholder:text-kanto-gray focus:outline-none focus:ring-2 focus:ring-kanto-orange/30 focus:border-kanto-orange transition-colors"
        />
      </div>
      <button
        onClick={handleNearMeToggle}
        className={cn(
          'flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors shrink-0',
          nearMe
            ? 'bg-kanto-teal text-white'
            : 'bg-white border border-kanto-gray-light text-kanto-gray hover:border-kanto-teal hover:text-kanto-teal'
        )}
      >
        <MapPin className="w-4 h-4" />
        <span className="hidden sm:inline">Near Me</span>
      </button>
    </div>
  );
};

export default SearchBar;
