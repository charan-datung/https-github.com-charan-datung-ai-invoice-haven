import { useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  storeId: string;
}

const ProductGrid = ({ storeId }: ProductGridProps) => {
  const storeProducts = useMemo(
    () => products.filter((p) => p.storeId === storeId),
    [storeId]
  );

  // Carinderia and home-based use "Menu", others use "Mga Produkto"
  const isFood = storeProducts.some((p) =>
    ['ulam', 'silog', 'dessert', 'kakanin', 'extras'].includes(p.category)
  );
  const sectionTitle = isFood ? 'Menu' : 'Mga Produkto';

  if (storeProducts.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-4">{sectionTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {storeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
