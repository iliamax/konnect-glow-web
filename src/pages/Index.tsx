
import React from 'react';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PackageShowcase from '@/components/PackageShowcase';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Speed, Support } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background particles */}
      <Particles />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Planet Konnect?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing reliable, affordable internet solutions for all Kenyans, 
              with plans starting from as low as Ksh 10.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 hover:shadow-lg transition-shadow hover-grow">
              <div className="bg-planetOrange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Speed className="h-7 w-7 text-planetOrange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Fast Connections</h3>
              <p className="text-center text-muted-foreground">
                Experience high-speed internet with reliable connections that keep you connected when you need it most.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 hover:shadow-lg transition-shadow hover-grow">
              <div className="bg-planetBlue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Support className="h-7 w-7 text-planetBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">24/7 Support</h3>
              <p className="text-center text-muted-foreground">
                Our dedicated support team is available around the clock to assist you with any connectivity issues.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 hover:shadow-lg transition-shadow hover-grow">
              <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-7 w-7 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Affordable Plans</h3>
              <p className="text-center text-muted-foreground">
                Choose from a wide range of plans to match your budget, with options starting from just Ksh 10.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Showcase */}
      <PackageShowcase />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-blue-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying reliable internet across Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-planetOrange hover:bg-white/90 hover-grow">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover-grow">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied customers across Nairobi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-planetOrange/20 flex items-center justify-center">
                  <span className="text-planetOrange font-bold">JM</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">John Mwangi</h4>
                  <p className="text-xs text-muted-foreground">Small Business Owner</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Planet Konnect provides stable internet for my business at an affordable price. Their customer service is exceptional!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-planetBlue/20 flex items-center justify-center">
                  <span className="text-planetBlue font-bold">SW</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Wanjiku</h4>
                  <p className="text-xs text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "As a student, the affordable hotspot packages have been perfect for my online studies. Fast and reliable!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-bold">DK</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">David Kamau</h4>
                  <p className="text-xs text-muted-foreground">Family Home</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Our family switched to the Ndovu broadband package and we couldn't be happier. Great speeds for streaming and gaming!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
