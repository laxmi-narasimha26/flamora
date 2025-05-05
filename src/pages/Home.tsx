
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

const Home: React.FC = () => {
  const featuredServices = [
    {
      id: 1,
      title: 'Corporate Events',
      description: 'Elegant spaces for meetings, team-building, and corporate functions.',
      imageSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
      to: '/services#corporate',
    },
    {
      id: 2,
      title: 'Team Lunches',
      description: 'Sophisticated dining experiences for your team gatherings.',
      imageSrc: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
      to: '/services#team-lunch',
    },
    {
      id: 3,
      title: 'Celebrations',
      description: 'Make your special occasions memorable with our elegant settings.',
      imageSrc: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac',
      to: '/services#celebrations',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="watercolor-bg py-12 px-4">
          <div className="container max-w-md mx-auto text-center">
            <img 
              src="/src/assets/flamora-logo.svg" 
              alt="Kafe Flamora Logo" 
              className="w-24 h-24 mx-auto mb-6"
            />
            <h1 className="text-3xl font-serif text-flamora-brown mb-2">Kafe Flamora</h1>
            <p className="text-lg font-serif italic mb-4">A Touch of Class</p>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 subtle-shadow">
              <h2 className="text-xl font-serif mb-2">Brewing Soon</h2>
              <p className="text-flamora-purple font-medium mb-6">Now Accepting Bookings For:</p>
              <Button to="/booking" variant="gold" size="lg" fullWidth>
                Book Your Event
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Preview */}
        <section className="py-10 px-4">
          <div className="container">
            <h2 className="text-2xl font-serif text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  to={service.to}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button to="/services" variant="outline">
                View All Services
              </Button>
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
