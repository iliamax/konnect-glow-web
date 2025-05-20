
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HotspotPackage = ({ name, speed, price, duration, badge }: { name: string, speed: string, price: string, duration: string, badge?: string }) => (
  <Card className="h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl relative hover-grow">
    {badge && (
      <span className="absolute -top-3 -right-3 bg-planetOrange text-white text-xs px-2 py-1 rounded-full shadow-lg">
        {badge}
      </span>
    )}
    <div className="px-6 py-8 flex flex-col items-center text-center h-full">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold text-planetOrange">{speed}</span>
        <span className="text-sm ml-1 text-muted-foreground">Mbps</span>
      </div>
      
      <div className="mt-2 mb-2">
        <span className="text-2xl font-bold">Ksh {price}</span>
      </div>
      
      <span className="text-xs text-muted-foreground mb-6">{duration}</span>
      
      <Button className="w-full bg-orange-blue-gradient hover:opacity-90 mt-auto animate-glow hover:shadow-lg transition-shadow">
        Get Connected
      </Button>
    </div>
  </Card>
);

const Hotspot = () => {
  const [tabValue, setTabValue] = useState("daily");
  
  const dailyPackages = [
    { name: 'Kumi Konnect', speed: '1', price: '10', duration: 'Per Hour' },
    { name: 'Mbao Konnect', speed: '2', price: '20', duration: 'Per Hour' },
    { name: '8 Hour Konnect', speed: '3', price: '50', duration: '8 Hours' },
    { name: 'Daily Konnect', speed: '5', price: '80', duration: '24 Hours' },
    { name: 'Daily Konnect+', speed: '10', price: '140', duration: '24 Hours', badge: 'Popular' },
  ];
  
  const weeklyPackages = [
    { name: 'Weekly Konnect', speed: '10', price: '380', duration: '7 Days', badge: 'Best Value' },
  ];
  
  const monthlyPackages = [
    { name: 'Monthly Konnect', speed: '10', price: '1,000', duration: '30 Days' },
    { name: 'Monthly Konnect+', speed: '10', price: '1,800', duration: '30 Days', badge: 'Best Value' },
  ];

  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Konnect Hotspot Internet</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience affordable and reliable internet on-the-go with our hotspot packages.
              Start with plans as low as Ksh 10 with no complicated setup required.
            </p>
          </div>
          
          <Tabs defaultValue="daily" value={tabValue} onValueChange={setTabValue} className="w-full mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                <TabsTrigger value="daily" className="data-[state=active]:bg-planetOrange data-[state=active]:text-white hover-grow">
                  Daily Plans
                </TabsTrigger>
                <TabsTrigger value="weekly" className="data-[state=active]:bg-planetOrange data-[state=active]:text-white hover-grow">
                  Weekly Plans
                </TabsTrigger>
                <TabsTrigger value="monthly" className="data-[state=active]:bg-planetOrange data-[state=active]:text-white hover-grow">
                  Monthly Plans
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="daily">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {dailyPackages.map((pkg, index) => (
                  <HotspotPackage
                    key={index}
                    name={pkg.name}
                    speed={pkg.speed}
                    price={pkg.price}
                    duration={pkg.duration}
                    badge={pkg.badge}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="weekly">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto">
                {weeklyPackages.map((pkg, index) => (
                  <HotspotPackage
                    key={index}
                    name={pkg.name}
                    speed={pkg.speed}
                    price={pkg.price}
                    duration={pkg.duration}
                    badge={pkg.badge}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {monthlyPackages.map((pkg, index) => (
                  <HotspotPackage
                    key={index}
                    name={pkg.name}
                    speed={pkg.speed}
                    price={pkg.price}
                    duration={pkg.duration}
                    badge={pkg.badge}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* How It Works */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetOrange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-planetOrange">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose a Package</h3>
                <p className="text-muted-foreground">
                  Select the package that fits your needs and budget from our hourly, daily, weekly, or monthly options.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetBlue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-planetBlue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Make Payment</h3>
                <p className="text-muted-foreground">
                  Pay via M-Pesa to our paybill number and receive your access credentials instantly.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl text-green-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & Browse</h3>
                <p className="text-muted-foreground">
                  Log in with your credentials and start enjoying fast, reliable internet immediately.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQs specific to Hotspot */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <h3 className="text-xl font-semibold mb-2">How do I connect to the hotspot?</h3>
                <p className="text-muted-foreground">
                  Simply find "Planet Konnect" in your available Wi-Fi networks, connect to it, and you'll be redirected to our login page where you can enter your credentials or purchase a new package.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <h3 className="text-xl font-semibold mb-2">Can I use the hotspot on multiple devices?</h3>
                <p className="text-muted-foreground">
                  Yes, you can connect up to 2 devices simultaneously with a single account. For additional devices, you may need to purchase an additional connection.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
                <h3 className="text-xl font-semibold mb-2">Where are your hotspots located?</h3>
                <p className="text-muted-foreground">
                  We have hotspots throughout Nairobi, particularly in residential areas, shopping centers, and educational institutions. Contact us to find the nearest hotspot in your area.
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

export default Hotspot;
