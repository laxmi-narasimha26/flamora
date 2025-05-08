
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={cn(
        "group relative rounded-xl overflow-hidden bg-white cursor-pointer transition-all duration-300",
        className
      )}
      onMouseEnter={onMouseEnter}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px rgba(155, 135, 245, 0.15)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4 border-t">
        <h3 className="font-elegant text-xl md:text-2xl truncate">{product.name}</h3>
        <p className="text-flamora-purple font-medium">{product.price}</p>
      </div>
      
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <div className="absolute inset-0 bg-gradient-to-t from-flamora-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </TooltipTrigger>
          <TooltipContent side="right" className="max-w-xs p-2 text-xs">
            <p className="font-script text-base italic">Hover to preview</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default ProductCard;
