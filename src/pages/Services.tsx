
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Elevate your business gatherings with our sophisticated spaces and premium service. Perfect for meetings, presentations, and networking events.',
      details: [
        'Private meeting rooms with elegant setups',
        'State-of-the-art presentation equipment',
        'Customized catering packages',
        'Flexible seating arrangements'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952'
    },
    {
      id: 'team-lunch',
      title: 'Team Lunches',
      description: 'Foster team spirit and celebrate milestones in our welcoming yet sophisticated dining spaces. Ideal for team-building and departmental gatherings.',
      details: [
        'Reserved seating for small and large teams',
        'Set menu options for efficient service',
        'Relaxed yet elegant atmosphere',
        'Special arrangements for celebrations'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf'
    },
    {
      id: 'celebrations',
      title: 'Lavish Birthday Parties',
      description: 'Make your special day extraordinary with our bespoke birthday packages. We handle every detail so you can focus on making memories.',
      details: [
        'Customized decoration themes',
        'Special cake arrangements',
        'Photographer recommendations',
        'Personalized menu options'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac'
    },
    {
      id: 'events',
      title: 'Elegant Get-Togethers',
      description: 'Whether it\'s a reunion, anniversary, or just a special gathering of friends, our elegant setting provides the perfect backdrop for your memorable moments.',
      details: [
        'Intimate seating arrangements',
        'Ambient lighting and music',
        'Custom menu curation',
        'Private spaces for conversations'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header title="Our Services" showBackButton />
      
      <main className="container py-6">
        <div className="text-center mb-8">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kafe Flamora offers a range of sophisticated event solutions tailored to your needs.
            Explore our services and find the perfect setting for your occasion.
          </p>
        </div>
        
        <div className="space-y-12">
          {serviceCategories.map((category) => (
            <section 
              key={category.id} 
              id={category.id} 
              className="bg-white rounded-lg overflow-hidden subtle-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={category.imageSrc} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-3">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <h3 className="text-lg font-serif mb-2">What we offer:</h3>
                <ul className="mb-6 space-y-2">
                  {category.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-flamora-gold mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Button to="/booking" variant="default">
                  Book This Service
                </Button>
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
