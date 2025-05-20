import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Headphones } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact & Support</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here to help! Reach out to our team for inquiries, support, or to get started with 
              Planet Konnect services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="backdrop-blur-md bg-white/5 border border-white/20 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your Full Name" 
                      className="backdrop-blur-md bg-white/5 border border-white/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your Email Address" 
                      className="backdrop-blur-md bg-white/5 border border-white/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="Your Phone Number" 
                      className="backdrop-blur-md bg-white/5 border border-white/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Message Subject" 
                      className="backdrop-blur-md bg-white/5 border border-white/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="backdrop-blur-md bg-white/5 border border-white/20 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-blue-gradient hover:opacity-90 animate-pulse-grow hover-grow"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="backdrop-blur-md bg-white/5 border border-white/20 p-8 shadow-lg hover-grow">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-planetOrange/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-planetOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">0717021891</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-planetBlue/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-planetBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@jadeempire.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="backdrop-blur-md bg-white/5 border border-white/20 p-8 shadow-lg hover-grow">
                <h2 className="text-2xl font-bold mb-6">Customer Support Hours</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    Emergency technical support available 24/7 for Home Broadband customers.
                  </p>
                  <a 
                    href="https://wa.me/254717021891" 
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors hover-grow w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Headphones className="mr-2" size={16} />
                    <span>WhatsApp Support</span>
                  </a>
                </div>
              </Card>
              
              <Card className="backdrop-blur-md bg-white/5 border border-white/20 p-8 shadow-lg hover-grow">
                <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Check our frequently asked questions for quick answers to common queries.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-planetBlue text-planetBlue hover:bg-planetBlue/10"
                  asChild
                >
                  <a href="/faq">Visit FAQs</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
