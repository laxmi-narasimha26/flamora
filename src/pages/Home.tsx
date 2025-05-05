
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import FeaturedProduct from '@/components/FeaturedProduct';
import { products, categoryFilters } from '@/data/products';
import { Coffee, ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products.find(p => p.featured) || products[0]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredProducts.length));
  };

  useEffect(() => {
    // Reset visible count when category changes
    setVisibleCount(12);
  }, [selectedCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-flamora-neutral-cream/20">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-flamora-purple-light/10 -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container max-w-5xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="/src/assets/flamora-logo.svg" 
                  alt="Kafe Flamora Logo" 
                  className="w-24 h-24 mx-auto md:mx-0 mb-4"
                />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-serif text-flamora-brown mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Kafe Flamora
              </motion.h1>
              <motion.p 
                className="text-xl font-serif italic mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A Touch of Class
              </motion.p>
              <motion.p 
                className="text-muted-foreground mb-8 max-w-md mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Discover our curated selection of premium coffee beans, brewing equipment, and elegant merchandise.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button to="/services" variant="outline">
                  <Coffee size={16} />
                  Our Services
                </Button>
                <Button to="/booking" variant="default">
                  <ShoppingBag size={16} />
                  Shop Now
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 subtle-shadow">
                <h2 className="text-xl font-serif mb-2 flex items-center justify-center gap-2">
                  <Sparkles size={18} className="text-flamora-gold" />
                  Brewing Soon
                </h2>
                <p className="text-flamora-purple font-medium mb-6">Now Accepting Bookings For:</p>
                <Button to="/booking" variant="gold" size="lg" fullWidth>
                  Book Your Event
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Products Section */}
        <section className="py-12 px-4">
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-10">
              {/* Left Column: Products Grid */}
              <div className="md:w-2/3">
                <div className="mb-8">
                  <motion.h2 
                    className="text-2xl font-serif mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Products
                  </motion.h2>
                  
                  {/* Category Filter */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {categoryFilters.map((category, index) => (
                      <motion.button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-flamora-purple text-white'
                            : 'bg-flamora-neutral-cream hover:bg-flamora-purple/20'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {category.label}
                      </motion.button>
                    ))}
                  </motion.div>
                  
                  {/* Products Grid */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={selectedCategory} // Re-animate when category changes
                  >
                    {filteredProducts.slice(0, visibleCount).map(product => (
                      <motion.div key={product.id} variants={item}>
                        <ProductCard 
                          product={product}
                          onMouseEnter={() => setSelectedProduct(product)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Show More Button */}
                  {visibleCount < filteredProducts.length && (
                    <motion.div 
                      className="text-center mt-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button 
                        variant="outline" 
                        onClick={handleShowMore}
                      >
                        Show More
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Right Column: Featured Product */}
              <div className="md:w-1/3 relative">
                <div className="sticky top-24">
                  <FeaturedProduct product={selectedProduct} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ambiance Teaser */}
        <section className="py-16 px-4 bg-flamora-purple/5 mt-12">
          <motion.div 
            className="container max-w-lg mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Experience Elegance</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Step into a world where sophisticated ambiance meets exquisite service.
              Kafe Flamora is crafted to provide the perfect backdrop for your most
              important moments.
            </p>
            <Button to="/about" variant="default">
              Learn More
            </Button>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
