
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured?: boolean;
  funFact?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  onMouseEnter?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className, onMouseEnter }) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        className
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-3 border-t">
        <h3 className="font-serif text-lg truncate">{product.name}</h3>
        <p className="text-flamora-purple font-medium">{product.price}</p>
      </div>
      <div className="absolute inset-0 bg-flamora-purple-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProductCard;
