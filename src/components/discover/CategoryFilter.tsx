import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';


interface CategoryFilterProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
          activeCategory === null
            ? 'bg-kanto-orange text-white'
            : 'bg-kanto-gray-light text-kanto-brown/70 hover:bg-kanto-gray-light/80'
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={cn(
            'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === cat.id
              ? 'bg-kanto-orange text-white'
              : 'bg-kanto-gray-light text-kanto-brown/70 hover:bg-kanto-gray-light/80'
          )}
        >
          {cat.nameTagalog}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
