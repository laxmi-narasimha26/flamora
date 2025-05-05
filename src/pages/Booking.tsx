
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Calendar, Phone } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, we would send this data to a server
    setSubmitted(true);
  };
  
  const eventTypes = [
    { value: '', label: 'Select event type' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'team-lunch', label: 'Team Lunch' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'get-together', label: 'Get Together' },
    { value: 'other', label: 'Other' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen pb-20">
        <Header title="Booking" showBackButton />
        
        <main className="container py-10 px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg p-8 subtle-shadow text-center">
            <div className="w-16 h-16 bg-flamora-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-flamora-purple h-8 w-8" />
            </div>
            
            <h2 className="text-2xl font-serif mb-4">Booking Received!</h2>
            <p className="mb-6 text-muted-foreground">
              Thank you for your interest in Kafe Flamora. We've received your booking request 
              and our team will get back to you within 24 hours to confirm details.
            </p>
            
            <div className="bg-flamora-neutral-cream p-4 rounded-lg mb-6">
              <p className="font-medium">Have questions? Contact our booking manager:</p>
              <div className="flex items-center justify-center mt-2">
                <Phone size={18} className="text-flamora-purple mr-2" />
                <span>Suruchi Sinha: 96869-65935</span>
              </div>
            </div>
            
            <Button to="/" variant="default">
              Return to Home
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <Header title="Book an Event" showBackButton />
      
      <main className="container py-6 px-4">
        <div className="max-w-md mx-auto">
          <p className="text-center text-muted-foreground mb-6">
            Complete the form below to reserve Kafe Flamora for your upcoming event. 
            We'll contact you shortly to confirm the details.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 subtle-shadow">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                />
              </div>
              
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-1">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                >
                  {eventTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-1">
                  Estimated Number of Guests <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-flamora-purple"
                  placeholder="Tell us about any specific requirements for your event..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <Button type="submit" variant="gold" fullWidth size="lg">
                Submit Booking Request
              </Button>
            </div>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>For immediate assistance, please contact:</p>
              <p className="font-medium mt-1">Suruchi Sinha: 96869-65935</p>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
