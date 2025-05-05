
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
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
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
      </HoverCardTrigger>
      <HoverCardContent 
        side="right" 
        align="start" 
        className="w-80 p-0 bg-white/80 backdrop-blur-sm shadow-xl border-flamora-purple/20"
      >
        <div className="flex flex-col">
          <div className="relative aspect-video overflow-hidden rounded-t-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-flamora-purple text-white px-2 py-1 rounded-full text-xs">
              {product.category}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-serif text-xl mb-1">{product.name}</h3>
            <p className="text-flamora-purple font-bold mb-2">{product.price}</p>
            <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
            {product.funFact && (
              <div className="bg-flamora-neutral-cream p-2 rounded-md text-xs italic">
                <span className="font-bold">Fun fact:</span> {product.funFact}
              </div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProductCard;
