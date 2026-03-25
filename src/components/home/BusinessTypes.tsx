import { Link } from 'react-router-dom';
import {
  Store,
  UtensilsCrossed,
  Fish,
  Recycle,
  Wrench,
  Home,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';

const iconMap: Record<string, React.ElementType> = {
  Store,
  UtensilsCrossed,
  Fish,
  Recycle,
  Wrench,
  Home,
};

const BusinessTypes = () => {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[#2D1B0E] sm:text-4xl">
          Sino ang Nasa Kanto?
        </h2>
        <p className="mt-2 text-center text-[#2D1B0E]/60">
          Who&apos;s on Kanto?
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Store;
            return (
              <Link
                key={cat.id}
                to={`/discover?category=${cat.id}`}
                className={cn(
                  'flex flex-col items-center rounded-xl p-6 text-center',
                  'transition-transform hover:scale-105 hover:shadow-md',
                  cat.color
                )}
              >
                <Icon className="h-10 w-10" />
                <h3 className="mt-3 text-sm font-bold">{cat.name}</h3>
                <p className="text-xs opacity-70">{cat.nameTagalog}</p>
                <span className="mt-2 text-lg font-extrabold">{cat.count}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
