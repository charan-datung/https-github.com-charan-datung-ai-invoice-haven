import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn, formatPeso } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

interface InquiryItem {
  productId: string;
  storeId: string;
  name: string;
  price: number;
  unit?: string;
  quantity: number;
}

function getInquiryItems(): InquiryItem[] {
  try {
    return JSON.parse(localStorage.getItem('kanto-inquiry-items') || '[]');
  } catch {
    return [];
  }
}

function setInquiryItems(items: InquiryItem[]) {
  localStorage.setItem('kanto-inquiry-items', JSON.stringify(items));
}

function getItemQuantity(productId: string): number {
  const items = getInquiryItems();
  const item = items.find((i) => i.productId === productId);
  return item ? item.quantity : 0;
}

function updateItemQuantity(product: Product, delta: number): number {
  const items = getInquiryItems();
  const index = items.findIndex((i) => i.productId === product.id);
  if (index >= 0) {
    items[index].quantity += delta;
    if (items[index].quantity <= 0) {
      items.splice(index, 1);
      setInquiryItems(items);
      return 0;
    }
    setInquiryItems(items);
    return items[index].quantity;
  } else if (delta > 0) {
    items.push({
      productId: product.id,
      storeId: product.storeId,
      name: product.name,
      price: product.price,
      unit: product.unit,
      quantity: delta,
    });
    setInquiryItems(items);
    return delta;
  }
  return 0;
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
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(getItemQuantity(product.id));
  }, [product.id]);

  const handleAdd = () => {
    const newQty = updateItemQuantity(product, 1);
    setQuantity(newQty);
  };

  const handleRemove = () => {
    const newQty = updateItemQuantity(product, -1);
    setQuantity(newQty);
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-sm overflow-hidden transition-opacity',
        !product.available && 'opacity-60'
      )}
    >
      {/* Image placeholder */}
      <div className={cn('h-32 flex items-center justify-center relative', bgColor)}>
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
           product.category === 'household' ? '🧹' :
           product.category === 'load' ? '📱' :
           product.category === 'snacks' ? '🍪' :
           product.category === 'extras' ? '🍚' :
           product.category === 'paper' ? '📰' :
           product.category === 'plastic' ? '🧴' :
           '📦'}
        </span>
        {quantity > 0 && (
          <span className="absolute top-2 right-2 w-6 h-6 bg-kanto-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
            {quantity}
          </span>
        )}
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
            quantity === 0 ? (
              <button
                onClick={handleAdd}
                className="inline-flex items-center gap-1 px-3 py-1 bg-kanto-orange text-white text-xs font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
              >
                <Plus className="w-3 h-3" />
                Idagdag
              </button>
            ) : (
              <div className="inline-flex items-center gap-1">
                <button
                  onClick={handleRemove}
                  className="w-7 h-7 flex items-center justify-center bg-kanto-cream text-kanto-brown rounded-lg hover:bg-kanto-cream/80 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-7 text-center text-sm font-semibold text-kanto-brown">
                  {quantity}
                </span>
                <button
                  onClick={handleAdd}
                  className="w-7 h-7 flex items-center justify-center bg-kanto-orange text-white rounded-lg hover:bg-kanto-orange/90 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            )
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
