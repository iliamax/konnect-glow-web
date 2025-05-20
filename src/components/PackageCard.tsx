
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

interface PackageCardProps {
  name: string;
  speed: string;
  price: string;
  features?: string[];
  isHotspot?: boolean;
  badge?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  speed,
  price,
  features,
  isHotspot = false,
  badge,
}) => {
  return (
    <div className={`relative transform transition-all duration-300 hover-grow ${!isHotspot && 'hover:-translate-y-2'}`}>
      {/* Badge if any */}
      {badge && (
        <span className="absolute -top-3 -right-3 bg-planetOrange text-white text-xs px-2 py-1 rounded-full shadow-lg">
          {badge}
        </span>
      )}
      
      <Card className={`h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl ${!isHotspot && 'hover:shadow-2xl'}`}>
        <div className={`px-6 py-8 flex flex-col h-full ${isHotspot ? 'items-center text-center' : ''}`}>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <div className={`flex items-center ${isHotspot ? 'justify-center' : 'mb-4'}`}>
            <span className="text-3xl font-bold text-planetOrange">{speed}</span>
            <span className="text-sm ml-1 text-muted-foreground">Mbps</span>
          </div>
          
          <div className="mt-2 mb-6">
            <span className="text-2xl font-bold">Ksh {price}</span>
          </div>
          
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-planetOrange" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          <Button className={`w-full bg-orange-blue-gradient hover:opacity-90 mt-auto animate-glow hover:shadow-lg transition-shadow ${isHotspot ? 'mt-2' : ''}`}>
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PackageCard;
