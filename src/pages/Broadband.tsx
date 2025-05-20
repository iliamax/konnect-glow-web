
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Shield, Support, Speed } from 'lucide-react';
import PackageCard from '@/components/PackageCard';

const broadbandPackages = [
  {
    name: 'Nyati',
    speed: '10',
    price: '2,000',
    features: ['Unlimited Access', 'Better Bandwidth', 'Constant Support', 'Fast Installation'],
  },
  {
    name: 'Ndovu', 
    speed: '25', 
    price: '3,500',
    features: ['Unlimited Access', 'Better Bandwidth', 'Constant Support', 'Fast Installation', 'Priority Support'],
    badge: 'Popular'
  },
  {
    name: 'Simba',
    speed: '40',
    price: '5,000',
    features: ['Unlimited Access', 'Better Bandwidth', 'Constant Support', 'Fast Installation', 'Premium Support', 'Static IP Address'],
    badge: 'Best Value'
  },
];

const Broadband = () => {
  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Broadband Internet Plans</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience high-speed, reliable internet for your home or business with our premium broadband solutions.
              Unlimited access with professional installation and dedicated support.
            </p>
          </div>
          
          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {broadbandPackages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                speed={pkg.speed}
                price={pkg.price}
                features={pkg.features}
                badge={pkg.badge}
              />
            ))}
          </div>
          
          {/* Installation Notice */}
          <div className="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg text-center mb-20 animate-pulse-grow">
            <p className="text-xl font-semibold">Installation Fee: <span className="text-planetOrange">Ksh 1,500</span></p>
            <p className="text-sm text-muted-foreground mt-2">One-time payment covers equipment and professional setup</p>
          </div>
          
          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Broadband?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-planetOrange/10 p-2 rounded-full">
                    <Speed className="h-5 w-5 text-planetOrange" />
                  </div>
                  <h3 className="ml-3 font-semibold">High Speed</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enjoy consistent high-speed internet with minimal latency for all your browsing, streaming, and gaming needs.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-planetBlue/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-planetBlue" />
                  </div>
                  <h3 className="ml-3 font-semibold">Reliability</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our infrastructure ensures a stable connection with 99.9% uptime guarantee for uninterrupted service.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Support className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="ml-3 font-semibold">24/7 Support</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our technical team is available round-the-clock to address any issues and ensure you stay connected.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 font-semibold">No Data Caps</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  All our broadband packages come with unlimited data usage, allowing you to browse, stream, and download without restrictions.
                </p>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Getting Connected is Easy</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetOrange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-planetOrange">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Choose a Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Select the broadband package that meets your needs and budget.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetBlue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-planetBlue">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Request Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us to schedule a convenient time for professional installation.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-green-500">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Quick Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Our technicians will install and configure your equipment for optimal performance.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-purple-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-purple-500">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Start Browsing</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy fast, reliable internet throughout your home or business.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Connected?</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Contact our sales team today to check availability in your area and get started with reliable broadband.
            </p>
            <Button size="lg" className="bg-planetOrange hover:bg-orange-600 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-pulse-grow hover-grow">
              Contact Sales Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Broadband;
