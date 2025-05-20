
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Zap, Shield, Headphones, Wifi, WifiOff, Router, Network, Globe, BarChart, TrendingUp, Activity, Users, Cloud, Smartphone, Laptop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for connectivity stats
const coverageData = [
  { name: 'Westlands', users: 5840, coverage: 94 },
  { name: 'CBD', users: 7250, coverage: 98 },
  { name: 'Kilimani', users: 4120, coverage: 90 },
  { name: 'Karen', users: 2980, coverage: 85 },
  { name: 'Eastleigh', users: 3560, coverage: 88 },
  { name: 'South B', users: 2130, coverage: 82 },
];

const usageData = [
  { time: '6AM', streaming: 20, browsing: 15, gaming: 5, work: 10 },
  { time: '9AM', streaming: 15, browsing: 25, gaming: 8, work: 42 },
  { time: '12PM', streaming: 35, browsing: 30, gaming: 12, work: 38 },
  { time: '3PM', streaming: 40, browsing: 28, gaming: 17, work: 30 },
  { time: '6PM', streaming: 55, browsing: 35, gaming: 24, work: 25 },
  { time: '9PM', streaming: 62, browsing: 40, gaming: 30, work: 10 },
  { time: '12AM', streaming: 30, browsing: 20, gaming: 18, work: 5 },
];

const NetworkNode = ({ x, y, type, pulse = false }) => {
  const getIcon = () => {
    switch(type) {
      case 'router': return <Router className="h-6 w-6 text-planetOrange" />;
      case 'user': return <Users className="h-6 w-6 text-planetBlue" />;
      case 'wifi': return <Wifi className="h-6 w-6 text-green-500" />;
      case 'server': return <Cloud className="h-6 w-6 text-purple-500" />;
      case 'mobile': return <Smartphone className="h-6 w-6 text-pink-500" />;
      case 'laptop': return <Laptop className="h-6 w-6 text-yellow-500" />;
      default: return <Network className="h-6 w-6 text-gray-500" />;
    }
  };
  
  return (
    <div className={`absolute ${pulse ? 'animate-pulse-grow' : ''}`} style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="backdrop-blur-sm bg-white/10 p-2 rounded-full">
        {getIcon()}
      </div>
      {pulse && (
        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
      )}
    </div>
  );
};

const ConnectionLine = ({ from, to, animated = false, color = "bg-planetBlue" }) => (
  <div 
    className={`absolute h-[2px] ${color} ${animated ? 'network-packet' : ''}`}
    style={{
      left: `${from.x}%`,
      top: `${from.y}%`,
      width: `${Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2))}%`,
      transform: `rotate(${Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI)}deg)`,
      transformOrigin: 'left center'
    }}
  >
    {animated && (
      <div className="h-full w-3 bg-white absolute animate-moveRight"></div>
    )}
  </div>
);

const NetworkVisualization = () => {
  // Define network nodes
  const nodes = [
    { id: 1, x: 50, y: 30, type: 'router', pulse: true },
    { id: 2, x: 20, y: 20, type: 'wifi' },
    { id: 3, x: 70, y: 15, type: 'wifi' },
    { id: 4, x: 25, y: 50, type: 'user' },
    { id: 5, x: 75, y: 45, type: 'server' },
    { id: 6, x: 40, y: 70, type: 'mobile' },
    { id: 7, x: 60, y: 65, type: 'laptop' },
    { id: 8, x: 85, y: 25, type: 'wifi' },
  ];
  
  // Define connections
  const connections = [
    { from: nodes[0], to: nodes[1], animated: true, color: "bg-planetOrange" },
    { from: nodes[0], to: nodes[2], animated: true, color: "bg-planetOrange" },
    { from: nodes[0], to: nodes[7], animated: true, color: "bg-planetOrange" },
    { from: nodes[1], to: nodes[3], animated: true, color: "bg-planetBlue" },
    { from: nodes[2], to: nodes[6], animated: true, color: "bg-planetBlue" },
    { from: nodes[7], to: nodes[4], animated: true, color: "bg-planetBlue" },
    { from: nodes[0], to: nodes[5], animated: true, color: "bg-green-500" },
  ];
  
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-black/20 to-planetBlue/10 rounded-lg overflow-hidden mb-8">
      {connections.map((conn, idx) => (
        <ConnectionLine key={`conn-${idx}`} from={conn.from} to={conn.to} animated={conn.animated} color={conn.color} />
      ))}
      {nodes.map((node) => (
        <NetworkNode key={`node-${node.id}`} x={node.x} y={node.y} type={node.type} pulse={node.pulse} />
      ))}
      
      <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black/30 text-white p-3 rounded-lg text-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-planetOrange"></div>
          <span>Main Network Backbones</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-planetBlue"></div>
          <span>User Connections</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Server Traffic</span>
        </div>
      </div>
    </div>
  );
};

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
                  <Zap className="h-7 w-7 text-planetOrange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously seeking new ways to improve our services and infrastructure to deliver the best possible experience.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg text-center hover-grow">
                <div className="bg-planetBlue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Headphones className="h-7 w-7 text-planetBlue" />
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
          
          {/* Map of Operations - Enhanced with Live Stats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Coverage</h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 shadow-lg hover-grow">
              {/* Network Visualization */}
              <NetworkVisualization />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Wifi className="h-10 w-10 text-planetOrange mb-2" />
                    <h3 className="text-2xl font-bold">2,458</h3>
                    <p className="text-sm text-muted-foreground">Active Hotspots</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Users className="h-10 w-10 text-planetBlue mb-2" />
                    <h3 className="text-2xl font-bold">25,743</h3>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Network className="h-10 w-10 text-green-500 mb-2" />
                    <h3 className="text-2xl font-bold">86%</h3>
                    <p className="text-sm text-muted-foreground">Nairobi Coverage</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Globe className="h-10 w-10 text-purple-500 mb-2" />
                    <h3 className="text-2xl font-bold">14.2 TB</h3>
                    <p className="text-sm text-muted-foreground">Daily Data Served</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Area Coverage Chart */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Area Coverage & Usage</h3>
                  <div className="space-y-4">
                    {coverageData.map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between mb-1">
                          <span>{item.name}</span>
                          <span className="text-planetOrange">{item.users.toLocaleString()} users</span>
                        </div>
                        <Progress value={item.coverage} className="h-2" />
                        <div className="flex justify-end mt-1 text-xs text-muted-foreground">
                          <span>{item.coverage}% coverage</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Usage by Time Chart */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Network Usage By Time</h3>
                  <div className="h-[300px]">
                    <ChartContainer className="h-full" config={{
                      streaming: { color: '#FF6F00' },
                      browsing: { color: '#0057A0' },
                      gaming: { color: '#10B981' },
                      work: { color: '#8B5CF6' }
                    }}>
                      <AreaChart
                        data={usageData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="time" stroke="#888888" tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="streaming" stackId="1" stroke="#FF6F00" fill="#FF6F00" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="browsing" stackId="1" stroke="#0057A0" fill="#0057A0" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="gaming" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="work" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-around mt-2 text-xs">
                    <div className="flex items-center"><div className="w-3 h-3 bg-planetOrange mr-1"></div>Streaming</div>
                    <div className="flex items-center"><div className="w-3 h-3 bg-planetBlue mr-1"></div>Browsing</div>
                    <div className="flex items-center"><div className="w-3 h-3 bg-green-500 mr-1"></div>Gaming</div>
                    <div className="flex items-center"><div className="w-3 h-3 bg-purple-500 mr-1"></div>Work</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <h3 className="text-xl font-bold mb-4">Expanding Across Kenya</h3>
                <p className="text-muted-foreground mb-6">
                  Currently serving Nairobi with plans to expand to Mombasa, Kisumu, Nakuru and other major cities by 2024.
                </p>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  <span>Network growth: +12% monthly</span>
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
