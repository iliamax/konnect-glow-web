
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-planetOrange rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-planetBlue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-planetOrange to-planetBlue">
              Connect Better. <br /> Live Better.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Experience reliable, affordable internet solutions throughout Nairobi. 
              From Ksh 10 hotspots to high-speed broadband connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-planetOrange hover:bg-orange-600 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-pulse-grow hover-grow"
                asChild
              >
                <Link to="/hotspot">
                  Explore Packages
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-planetBlue text-planetBlue hover:bg-planetBlue/10 px-8 py-6 rounded-lg hover-grow"
                asChild
              >
                <Link to="/contact">
                  Talk to Support
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Spinning globe or network illustration */}
              <div className="w-72 h-72 rounded-full bg-gradient-radial from-planetBlue/30 to-planetOrange/30 animate-spin-slow flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-gradient-radial from-white/10 to-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-radial from-white/20 to-transparent p-8 flex items-center justify-center">
                    {/* Center content */}
                    <img 
                      src="/lovable-uploads/1533c550-8196-4ed4-8612-7bf7fec5c7f7.png" 
                      alt="Planet Konnect Logo" 
                      className="w-32 h-32 object-contain animate-float"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative orbit lines */}
              <div className="absolute inset-0 border-2 border-dashed border-planetBlue/20 rounded-full"></div>
              <div className="absolute inset-3 border border-dashed border-planetOrange/20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover-grow">
          <span className="text-sm opacity-70 mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
