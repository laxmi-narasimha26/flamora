
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from './ProductCard';
import Button from './Button';
import { Sparkles } from 'lucide-react';

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
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25 
        }}
        className="bg-white/95 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-flamora-purple/5"
      >
        <div className="aspect-video overflow-hidden">
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            initial={{ scale: 1.05, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <motion.h2 
              className="font-serif text-2xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.name}
            </motion.h2>
            <motion.span 
              className="text-flamora-purple font-bold text-xl"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.price}
            </motion.span>
          </div>
          
          <motion.p 
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.description}
          </motion.p>
          
          {product.funFact && (
            <motion.div 
              className="bg-flamora-neutral-cream p-3 rounded-lg mb-6 text-sm italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-flamora-gold" />
                <span className="font-bold">Fun fact:</span> 
              </div>
              <p className="mt-1">{product.funFact}</p>
            </motion.div>
          )}
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" to="/services">Learn More</Button>
            <Button to="/booking">Order Now</Button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeaturedProduct;
