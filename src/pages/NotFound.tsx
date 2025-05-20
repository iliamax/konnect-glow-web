
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Particles />
      <CustomCursor />
      
      <div className="text-center z-10 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-10 shadow-lg max-w-md">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-planetOrange to-planetBlue">404</h1>
        <p className="text-xl mb-6">Oops! This page seems to be lost in space.</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="hover-grow bg-planetOrange hover:bg-orange-600" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
