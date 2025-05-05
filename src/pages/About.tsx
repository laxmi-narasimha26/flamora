
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const About: React.FC = () => {
  const values = [
    {
      title: 'Elegance',
      description: 'We believe in creating spaces that blend sophistication with comfort, ensuring every moment spent with us feels special.'
    },
    {
      title: 'Attention to Detail',
      description: 'From the perfect ambient lighting to the subtle flavors in our cuisine, we pay attention to every detail that elevates your experience.'
    },
    {
      title: 'Warm Hospitality',
      description: 'Behind our sophisticated façade lies a heart that beats for genuine, warm hospitality that makes every guest feel valued.'
    },
    {
      title: 'Memorable Experiences',
      description: 'We strive to create not just events, but stories and memories that stay with you long after you\'ve left our space.'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header title="About Us" showBackButton />
      
      <main>
        {/* Hero Section */}
        <section className="watercolor-bg py-12 px-4">
          <div className="container max-w-md mx-auto text-center">
            <h1 className="text-3xl font-serif text-flamora-brown mb-6">Our Story</h1>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 subtle-shadow">
              <p className="mb-4">
                Kafe Flamora was born from a passion to create a space where elegance meets 
                comfort, where business meets leisure, and where every occasion is elevated 
                to something truly special.
              </p>
              <p>
                Located in the heart of Bengaluru, we are crafting a haven for those who 
                appreciate the finer things while maintaining a welcoming, unpretentious atmosphere.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-10 px-4">
          <div className="container max-w-lg mx-auto">
            <h2 className="text-2xl font-serif text-center mb-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-lg subtle-shadow"
                >
                  <h3 className="text-xl font-serif mb-2 text-flamora-purple">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Vision */}
        <section className="py-10 px-4 bg-flamora-neutral-cream">
          <div className="container max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-serif mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              As we prepare to open our doors, our vision is to become Bengaluru's premier 
              destination for elegant gatherings that leave lasting impressions. We aim to 
              create a space where connections are formed, celebrations are elevated, and 
              every visit becomes a cherished memory.
            </p>
            <Button to="/booking" variant="default">
              Be Among the First to Experience Kafe Flamora
            </Button>
          </div>
        </section>
        
        {/* Coming Soon */}
        <section className="py-10 px-4">
          <div className="container max-w-md mx-auto text-center">
            <div className="border-2 border-flamora-gold p-6 rounded-lg">
              <h2 className="text-2xl font-serif mb-2">Brewing Soon</h2>
              <p className="mb-4">
                While our physical space is still in preparation, we're already accepting 
                bookings for future events. Be among the first to experience the Kafe Flamora touch.
              </p>
              <p className="font-medium text-flamora-purple">
                For enquiries, contact Suruchi Sinha at 96869-65935
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
