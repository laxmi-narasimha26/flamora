
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import FeaturedProduct from '@/components/FeaturedProduct';
import { products, categoryFilters } from '@/data/products';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Coffee, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products.find(p => p.featured) || products[0]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredProducts.length));
  };

  useEffect(() => {
    // Reset visible count when category changes
    setVisibleCount(6);
  }, [selectedCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="watercolor-bg py-12 px-4">
          <div className="container max-w-5xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/src/assets/flamora-logo.svg" 
                alt="Kafe Flamora Logo" 
                className="w-20 h-20 mx-auto md:mx-0 mb-4"
              />
              <h1 className="text-4xl font-serif text-flamora-brown mb-2">Kafe Flamora</h1>
              <p className="text-lg font-serif italic mb-4">A Touch of Class</p>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto md:mx-0">
                Discover our curated selection of premium coffee beans, brewing equipment, and elegant merchandise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button to="/services" variant="outline">
                  <Coffee size={16} />
                  Our Services
                </Button>
                <Button to="/booking" variant="default">
                  <ShoppingBag size={16} />
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 subtle-shadow">
                <h2 className="text-xl font-serif mb-2">Brewing Soon</h2>
                <p className="text-flamora-purple font-medium mb-6">Now Accepting Bookings For:</p>
                <Button to="/booking" variant="gold" size="lg" fullWidth>
                  Book Your Event
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-10 px-4">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column: Products Grid */}
              <div className="md:w-3/5">
                <div className="mb-8">
                  <h2 className="text-2xl font-serif mb-4">Our Products</h2>
                  
                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categoryFilters.map(category => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-flamora-purple text-white'
                            : 'bg-flamora-neutral-cream hover:bg-flamora-purple/20'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Products Grid */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
                    <div className="text-center mt-8">
                      <Button 
                        variant="outline" 
                        onClick={handleShowMore}
                      >
                        Show More
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column: Featured Product */}
              <div className="md:w-2/5">
                <FeaturedProduct product={selectedProduct} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Ambiance Teaser */}
        <section className="py-10 px-4 bg-flamora-neutral-cream">
          <div className="container max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-serif mb-4">Experience Elegance</h2>
            <p className="text-muted-foreground mb-6">
              Step into a world where sophisticated ambiance meets exquisite service.
              Kafe Flamora is crafted to provide the perfect backdrop for your most
              important moments.
            </p>
            <Button to="/about" variant="default">
              Learn More
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
