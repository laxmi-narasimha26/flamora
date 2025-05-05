
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Elevate your business gatherings with our sophisticated spaces and premium service. Perfect for meetings, presentations, and networking events.',
      details: [
        'Private meeting rooms with elegant setups',
        'State-of-the-art presentation equipment',
        'Customized catering packages with premium coffee service',
        'Flexible seating arrangements for groups of 10-100',
        'Professional staff dedicated to your event',
        'Fast Wi-Fi and tech support available'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070'
    },
    {
      id: 'team-lunch',
      title: 'Team Lunches & Social Events',
      description: 'Foster team spirit and celebrate milestones in our welcoming yet sophisticated dining spaces. Ideal for team-building and departmental gatherings.',
      details: [
        'Reserved seating for small and large teams',
        'Set menu options for efficient service',
        'Relaxed yet elegant atmosphere',
        'Special arrangements for celebrations and milestones',
        'Team-building activities with coffee tasting experiences',
        'Customized packages to fit your budget'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070'
    },
    {
      id: 'celebrations',
      title: 'Private Celebrations',
      description: 'Make your special day extraordinary with our bespoke event packages. We handle every detail so you can focus on making memories.',
      details: [
        'Customized decoration themes',
        'Special cake and pastry arrangements',
        'Photographer recommendations and service',
        'Personalized menu options',
        'Dedicated event coordinator',
        'Full venue rental options available'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2070'
    },
    {
      id: 'workshops',
      title: 'Coffee Workshops & Classes',
      description: 'Share the art and science of coffee with your team or clients. Our workshops combine education with a memorable sensory experience.',
      details: [
        'Barista workshops for all skill levels',
        'Latte art classes',
        'Coffee origin and tasting sessions',
        'Brewing method demonstrations',
        'Custom workshop design for your group',
        'Take-home coffee and equipment packages'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070'
    },
    {
      id: 'popup',
      title: 'Mobile Coffee Bar',
      description: 'Bring our exceptional coffee experience to your location. Our mobile coffee bars add a touch of sophistication to any event.',
      details: [
        'Professional baristas at your service',
        'Custom coffee menu tailored to your event',
        'Elegant setup that complements your venue',
        'Options for indoor or outdoor service',
        'Specialty drinks and signature creations',
        'Full service including equipment, supplies, and cleanup'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1515419771942-11b6aa1500f8?q=80&w=2070'
    },
    {
      id: 'catering',
      title: 'Premium Coffee Catering',
      description: 'Elevate your event with our premium coffee catering service, perfect for conferences, weddings, and special occasions.',
      details: [
        'Custom coffee bars with branded options',
        'Full espresso service with specialty drinks',
        'Cold brew and nitro coffee stations',
        'Accompaniments including pastries and light fare',
        'Environmentally conscious service materials',
        'Flexible packages for events of all sizes'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2089'
    },
    {
      id: 'tastings',
      title: 'Guided Coffee Tastings',
      description: 'Take your guests on a sensory journey with our expertly guided coffee tastings, exploring flavors from around the world.',
      details: [
        'Curated selection of premium single-origin coffees',
        'Educational presentation on coffee growing regions',
        'Professional cupping protocol experience',
        'Flavor note identification exercises',
        'Food pairing recommendations',
        'Take-home tasting journals and coffee samples'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?q=80&w=2069'
    },
    {
      id: 'consulting',
      title: 'Coffee Program Consulting',
      description: 'Upgrade your business\'s coffee offering with our professional consulting services, designed for restaurants, hotels, and offices.',
      details: [
        'Coffee menu development',
        'Equipment selection and setup',
        'Staff training programs',
        'Sourcing and supply chain optimization',
        'Quality control systems',
        'Sustainability practices integration'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header title="Our Services" showBackButton />
      
      <main className="container py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Exceptional Coffee Experiences</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kafe Flamora offers a range of sophisticated event solutions tailored to your needs.
            From corporate gatherings to intimate celebrations, we provide the perfect backdrop
            and exceptional service for your most important moments.
          </p>
        </div>
        
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories.map((category, index) => (
            <motion.section 
              key={category.id} 
              id={category.id} 
              className={`bg-white rounded-lg overflow-hidden subtle-shadow ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}
              variants={itemVariants}
            >
              <div className="md:w-1/2">
                <div className="h-full">
                  <img 
                    src={category.imageSrc} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-serif mb-3">{category.title}</h2>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <h3 className="text-lg font-serif mb-4">What we offer:</h3>
                <ul className="mb-8 space-y-2 grid grid-cols-1 gap-2">
                  {category.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-flamora-purple mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button to="/booking" variant="default">
                    Book This Service
                  </Button>
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>
        
        <div className="mt-16 bg-flamora-neutral-cream rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Custom Event Solutions</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? Our team specializes in creating
            custom experiences tailored to your specific vision and requirements.
            Contact us to discuss your unique event needs.
          </p>
          <Button to="/contact" variant="default">Contact Our Event Team</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
