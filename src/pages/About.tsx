
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Shield, Speed, Support } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Planet Konnect</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to provide affordable, reliable internet connectivity 
              to every Kenyan, starting with Nairobi.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 shadow-lg hover-grow">
              <h2 className="text-2xl font-bold mb-4 text-planetOrange">Our Mission</h2>
              <p className="text-muted-foreground">
                To bridge the digital divide by providing affordable internet solutions to all Kenyans, 
                ensuring that everyone has access to the opportunities that connectivity brings, regardless of 
                economic status or location.
              </p>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 shadow-lg hover-grow">
              <h2 className="text-2xl font-bold mb-4 text-planetBlue">Our Vision</h2>
              <p className="text-muted-foreground">
                A fully connected Kenya where reliable, high-speed internet is accessible to all, 
                empowering communities, businesses, and individuals to thrive in the digital economy.
              </p>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 shadow-lg hover-grow">
              <p className="text-muted-foreground mb-4">
                Planet Konnect was founded in 2020 with a simple idea: internet access should be affordable and available to everyone. 
                We started by establishing hotspots in key locations around Nairobi, offering connectivity packages starting at just Ksh 10.
              </p>
              <p className="text-muted-foreground mb-4">
                As demand grew, we expanded our services to include home broadband solutions, providing reliable high-speed internet 
                to homes and businesses across the city. Our focus has always been on delivering exceptional service at affordable prices.
              </p>
              <p className="text-muted-foreground">
                Today, Planet Konnect continues to grow its network infrastructure while maintaining its commitment to affordability, 
                reliability, and customer satisfaction. Our goal is to expand beyond Nairobi to connect more Kenyans to the digital world.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetOrange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Speed className="h-7 w-7 text-planetOrange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously seeking new ways to improve our services and infrastructure to deliver the best possible experience.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetBlue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Support className="h-7 w-7 text-planetBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Putting our customers first in everything we do, from service design to support and problem resolution.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-7 w-7 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Committed to making internet connectivity affordable and available to everyone, regardless of economic status.
                </p>
              </div>
            </div>
          </div>
          
          {/* Map of Operations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Coverage</h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
              <div className="bg-gradient-to-br from-white/5 to-white/0 p-4 rounded-lg">
                <div className="aspect-[16/9] bg-planetBlue/10 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Kenya map */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">Currently Serving Nairobi</h3>
                    <p className="text-muted-foreground">
                      With plans to expand to other major cities and rural areas across Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
              Planet Konnect is powered by a dedicated team of professionals committed to connecting Kenya.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-planetOrange/30 to-planetBlue/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">JM</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">John Maina</h3>
                <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Tech enthusiast with a vision to connect every Kenyan to affordable internet.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-planetOrange/30 to-planetBlue/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">LW</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Lucy Wanjiru</h3>
                <p className="text-sm text-muted-foreground mb-3">Technical Director</p>
                <p className="text-sm text-muted-foreground">
                  Network infrastructure specialist ensuring our systems deliver reliable connectivity.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-planetOrange/30 to-planetBlue/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">DO</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">David Otieno</h3>
                <p className="text-sm text-muted-foreground mb-3">Customer Support Lead</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to providing exceptional 24/7 support to all our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
