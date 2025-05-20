
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Wifi, WifiOff, Router, Globe, Link, Users, WifiHigh, ZapIcon, ActivityIcon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

// User count data
interface UserCount {
  id: number;
  count: number;
  type: 'users' | 'hotspot' | 'activity';
  position: { top: string; left: string };
}

// Slogan animation states
type SloganMode = 'default' | 'glow' | 'highlight' | 'scale';

const HeroSection = () => {
  // State for popping user counts
  const [userCounts, setUserCounts] = useState<UserCount[]>([]);
  const [sloganMode, setSloganMode] = useState<SloganMode>('default');
  
  // Generate random number within a range
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  // Generate a new user count bubble
  const generateUserCount = () => {
    const types: ('users' | 'hotspot' | 'activity')[] = ['users', 'hotspot', 'activity'];
    const count = getRandomNumber(10, 150);
    const id = Date.now();
    const type = types[Math.floor(Math.random() * types.length)];
    const position = {
      top: `${getRandomNumber(10, 90)}%`,
      left: `${getRandomNumber(10, 90)}%`,
    };
    
    return { id, count, type, position };
  };
  
  // Add new count bubble and remove after animation
  const addAndRemoveUserCount = () => {
    const newUserCount = generateUserCount();
    setUserCounts((prev) => [...prev, newUserCount]);
    
    // Remove after animation completes
    setTimeout(() => {
      setUserCounts((prev) => prev.filter((count) => count.id !== newUserCount.id));
    }, 3000);
  };
  
  // Cycle through slogan animation modes
  const cycleSloganMode = () => {
    const modes: SloganMode[] = ['default', 'glow', 'highlight', 'scale'];
    setSloganMode((prev) => {
      const currentIndex = modes.indexOf(prev);
      return modes[(currentIndex + 1) % modes.length];
    });
  };
  
  // Set up periodic user count addition and slogan animation
  useEffect(() => {
    const countInterval = setInterval(addAndRemoveUserCount, 1200);
    const sloganInterval = setInterval(cycleSloganMode, 3000);
    
    // Add initial counts
    for (let i = 0; i < 4; i++) {
      addAndRemoveUserCount();
    }
    
    return () => {
      clearInterval(countInterval);
      clearInterval(sloganInterval);
    };
  }, []);
  
  // Get icon based on user count type
  const getCountIcon = (type: string) => {
    switch (type) {
      case 'users':
        return <Users className="w-4 h-4 text-white" />;
      case 'hotspot':
        return <WifiHigh className="w-4 h-4 text-white" />;
      case 'activity':
        return <ActivityIcon className="w-4 h-4 text-white" />;
      default:
        return <ZapIcon className="w-4 h-4 text-white" />;
    }
  };
  
  // Get slogan styling based on current mode
  const getSloganClasses = () => {
    switch (sloganMode) {
      case 'glow':
        return 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-glow transition-all duration-500';
      case 'highlight':
        return 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-planetOrange to-planetBlue transition-all duration-500 animate-pulse-grow';
      case 'scale':
        return 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white scale-105 transition-all duration-500';
      default:
        return 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-planetOrange to-planetBlue transition-all duration-500';
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Network-themed background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-planetOrange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-planetBlue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Network lines - simulating connections */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-5xl max-h-5xl">
            {/* Horizontal network lines */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`h-line-${i}`}
                className="absolute h-[1px] bg-white/10 transform animate-pulse"
                style={{
                  width: `${Math.random() * 40 + 10}%`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            ))}
            
            {/* Vertical network lines */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`v-line-${i}`}
                className="absolute w-[1px] bg-white/10 transform animate-pulse"
                style={{
                  height: `${Math.random() * 40 + 10}%`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            ))}
            
            {/* Connection nodes */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={`node-${i}`}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 4 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* User count bubbles */}
      {userCounts.map((count) => (
        <div
          key={count.id}
          className="absolute z-20 flex items-center gap-1 bg-gradient-to-r from-planetOrange to-planetBlue p-2 rounded-full text-white text-xs animate-pop-in-out"
          style={{
            top: count.position.top,
            left: count.position.left,
            animation: 'pop-in-out 3s forwards',
            opacity: 0,
            transform: 'scale(0)',
          }}
        >
          {getCountIcon(count.type)}
          <span className="font-bold">{count.count}+</span>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className={getSloganClasses()}>
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
                <RouterLink to="/hotspot">
                  Explore Packages
                </RouterLink>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-planetBlue text-planetBlue hover:bg-planetBlue/10 px-8 py-6 rounded-lg hover-grow"
                asChild
              >
                <RouterLink to="/contact">
                  Talk to Support
                </RouterLink>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            {/* New dynamic network visualization instead of spinning logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a20857c4-0c77-4836-a6bc-baa1e301913f.png" 
                alt="Planet Konnect Logo" 
                className="w-64 h-auto mb-2 object-contain animate-float"
              />
            </div>
            
            {/* Network connectivity visualization */}
            <div className="relative w-full max-w-md h-64 bg-gradient-radial from-planetBlue/5 to-transparent rounded-xl">
              {/* Router in the center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full animate-pulse z-10">
                <Router className="w-12 h-12 text-planetOrange" />
              </div>
              
              {/* Connection lines and devices */}
              <div className="absolute inset-0">
                {/* Device 1 with wifi */}
                <div className="absolute top-[15%] left-[20%] flex flex-col items-center">
                  <Wifi className="w-8 h-8 text-planetBlue animate-pulse" />
                  <div className="mt-2 bg-white/10 p-2 rounded-lg text-xs">Mobile</div>
                </div>
                
                {/* Device 2 with wifi */}
                <div className="absolute top-[25%] right-[15%] flex flex-col items-center">
                  <Globe className="w-8 h-8 text-planetBlue animate-pulse" />
                  <div className="mt-2 bg-white/10 p-2 rounded-lg text-xs">Global Access</div>
                </div>
                
                {/* Device 3 */}
                <div className="absolute bottom-[20%] left-[25%] flex flex-col items-center">
                  <Link className="w-8 h-8 text-planetOrange animate-pulse" />
                  <div className="mt-2 bg-white/10 p-2 rounded-lg text-xs">Connected</div>
                </div>
                
                {/* Device 4 */}
                <div className="absolute bottom-[15%] right-[25%] flex flex-col items-center">
                  <WifiOff className="w-8 h-8 text-red-400 animate-pulse opacity-50" />
                  <div className="mt-2 bg-white/10 p-2 rounded-lg text-xs opacity-50">Without Us</div>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  {/* Center coordinates are 200,150 (half of viewBox) */}
                  <line x1="200" y1="150" x2="80" y2="45" stroke="rgba(255,111,0,0.3)" strokeWidth="1" className="animate-pulse" />
                  <line x1="200" y1="150" x2="320" y2="75" stroke="rgba(0,87,160,0.3)" strokeWidth="1" className="animate-pulse" />
                  <line x1="200" y1="150" x2="100" y2="240" stroke="rgba(255,111,0,0.3)" strokeWidth="1" className="animate-pulse" />
                  <line x1="200" y1="150" x2="300" y2="255" stroke="rgba(255,0,0,0.1)" strokeWidth="1" strokeDasharray="4" className="animate-pulse" />
                  
                  {/* Data packets moving along lines */}
                  <circle className="animate-movePacket1" r="3" fill="rgba(255,111,0,0.7)">
                    <animateMotion path="M200,150 L80,45" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle className="animate-movePacket2" r="3" fill="rgba(0,87,160,0.7)">
                    <animateMotion path="M200,150 L320,75" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle className="animate-movePacket3" r="3" fill="rgba(255,111,0,0.7)">
                    <animateMotion path="M200,150 L100,240" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
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
