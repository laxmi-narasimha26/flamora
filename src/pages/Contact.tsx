
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ContactItem from '@/components/ContactItem';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header title="Contact Us" showBackButton />
      
      <main className="container py-6 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg overflow-hidden subtle-shadow mb-8">
            {/* Map Placeholder */}
            <div className="h-48 bg-flamora-purple/20 flex items-center justify-center">
              <MapPin size={32} className="text-flamora-purple" />
              <span className="ml-2 font-medium">Map loading...</span>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-4">Visit Us</h2>
              
              <div className="space-y-2 border-b border-border pb-4 mb-4">
                <ContactItem
                  icon={MapPin}
                  label="Address"
                  value="Kafe Flamora, Ground Floor, 174 I, Second Main, AECS Layout, Singasandra Block B, Bengaluru 560068"
                  href="https://maps.google.com/?q=AECS+Layout+Singasandra+Block+B+Bengaluru"
                />
              </div>
              
              <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
              
              <div className="space-y-2 border-b border-border pb-4 mb-4">
                <ContactItem
                  icon={Phone}
                  label="Booking Manager"
                  value="Suruchi Sinha: 96869-65935"
                  href="tel:9686965935"
                />
                
                <ContactItem
                  icon={Mail}
                  label="Email Us"
                  value="hello@kafeflamora.com"
                  href="mailto:hello@kafeflamora.com"
                />
              </div>
              
              <h2 className="text-2xl font-serif mb-4">Opening Hours</h2>
              
              <div className="space-y-2">
                <ContactItem
                  icon={Clock}
                  label="Coming Soon"
                  value="We're brewing something special. Stay tuned for our opening hours!"
                />
              </div>
              
              <div className="mt-6">
                <Button to="/booking" variant="default" fullWidth>
                  Book an Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
