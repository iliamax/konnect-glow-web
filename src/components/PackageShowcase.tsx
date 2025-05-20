
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PackageCard from './PackageCard';

const hotspotPackages = [
  { name: 'Kumi Konnect', speed: '1', price: '10', isHotspot: true },
  { name: 'Mbao Konnect', speed: '2', price: '20', isHotspot: true },
  { name: '8 Hour Konnect', speed: '3', price: '50', isHotspot: true },
  { name: 'Daily Konnect', speed: '5', price: '80', isHotspot: true },
  { name: 'Daily Konnect+', speed: '10', price: '140', isHotspot: true, badge: 'Popular' },
  { name: 'Weekly Konnect', speed: '10', price: '380', isHotspot: true },
  { name: 'Monthly Konnect', speed: '10', price: '1,000', isHotspot: true },
  { name: 'Monthly Konnect+', speed: '10', price: '1,800', isHotspot: true, badge: 'Best Value' },
];

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
    features: ['Unlimited Access', 'Better Bandwidth', 'Constant Support', 'Fast Installation'],
    badge: 'Popular'
  },
  {
    name: 'Simba',
    speed: '40',
    price: '5,000',
    features: ['Unlimited Access', 'Better Bandwidth', 'Constant Support', 'Fast Installation', 'Premium Support'],
    badge: 'Best Value'
  },
];

const PackageShowcase = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Internet Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of affordable internet packages designed to fit every need and budget.
          </p>
        </div>
        
        <Tabs defaultValue="hotspot" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
              <TabsTrigger value="hotspot" className="data-[state=active]:bg-planetOrange data-[state=active]:text-white hover-grow">
                Hotspot Internet
              </TabsTrigger>
              <TabsTrigger value="broadband" className="data-[state=active]:bg-planetBlue data-[state=active]:text-white hover-grow">
                Home Broadband
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="hotspot">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {hotspotPackages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  name={pkg.name}
                  speed={pkg.speed}
                  price={pkg.price}
                  isHotspot={pkg.isHotspot}
                  badge={pkg.badge}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                All hotspot packages have easy access with no complicated setup required.
              </p>
              <a href="/hotspot" className="text-planetOrange underline hover:text-planetOrange/80 transition-colors hover-grow">
                View Full Hotspot Details
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="broadband">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            
            <div className="mt-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center">
              <p className="text-lg">Installation Fee: <span className="font-bold">Ksh 1,500</span></p>
              <p className="text-sm text-muted-foreground mt-2">One-time payment for equipment and professional setup</p>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/broadband" className="text-planetBlue underline hover:text-planetBlue/80 transition-colors hover-grow">
                Learn More About Home Broadband
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PackageShowcase;
