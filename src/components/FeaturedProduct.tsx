
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from './ProductCard';
import Button from './Button';

interface FeaturedProductProps {
  product: Product | null;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  if (!product) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="sticky top-32 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-flamora-purple/10"
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-serif text-2xl">{product.name}</h2>
            <span className="text-flamora-purple font-bold text-xl">{product.price}</span>
          </div>
          
          <p className="text-muted-foreground mb-4">{product.description}</p>
          
          {product.funFact && (
            <div className="bg-flamora-neutral-cream p-3 rounded-lg mb-6 text-sm italic">
              <span className="font-bold">Fun fact:</span> {product.funFact}
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" to="/services">Learn More</Button>
            <Button to="/booking">Order Now</Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeaturedProduct;
