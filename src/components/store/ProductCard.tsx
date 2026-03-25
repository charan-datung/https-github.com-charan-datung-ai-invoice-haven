import { cn, formatPeso } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  noodles: 'bg-orange-100',
  beverages: 'bg-blue-100',
  household: 'bg-purple-100',
  load: 'bg-teal-100',
  snacks: 'bg-yellow-100',
  ulam: 'bg-red-100',
  extras: 'bg-gray-100',
  dessert: 'bg-pink-100',
  fish: 'bg-cyan-100',
  seafood: 'bg-teal-100',
  metals: 'bg-zinc-200',
  paper: 'bg-amber-100',
  plastic: 'bg-green-100',
  kakanin: 'bg-purple-100',
  silog: 'bg-orange-100',
};

const ProductCard = ({ product }: ProductCardProps) => {
  const bgColor = categoryColors[product.category] || 'bg-kanto-gray-light';

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-sm overflow-hidden transition-opacity',
        !product.available && 'opacity-60'
      )}
    >
      {/* Image placeholder */}
      <div className={cn('h-32 flex items-center justify-center', bgColor)}>
        <span className="text-3xl">
          {product.category === 'ulam' ? '🍛' :
           product.category === 'fish' ? '🐟' :
           product.category === 'seafood' ? '🦐' :
           product.category === 'kakanin' ? '🍡' :
           product.category === 'silog' ? '🍳' :
           product.category === 'beverages' ? '🥤' :
           product.category === 'noodles' ? '🍜' :
           product.category === 'metals' ? '♻️' :
           product.category === 'dessert' ? '🍧' :
           '📦'}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <h4 className="font-semibold text-kanto-brown text-sm leading-tight mb-1 line-clamp-1">
          {product.name}
        </h4>
        <p className="text-xs text-kanto-gray line-clamp-2 mb-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            {product.price > 0 ? (
              <span className="text-kanto-orange font-bold text-sm">
                {formatPeso(product.price)}
              </span>
            ) : (
              <span className="text-kanto-teal font-medium text-xs">
                {product.unit}
              </span>
            )}
            {product.price > 0 && product.unit && (
              <span className="text-xs text-kanto-gray ml-1">/ {product.unit}</span>
            )}
          </div>

          {product.available ? (
            <span className="flex items-center gap-1 text-xs text-kanto-green">
              <span className="w-2 h-2 bg-kanto-green rounded-full" />
              Available
            </span>
          ) : (
            <span className="text-xs font-medium text-kanto-red">
              Ubos na
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
