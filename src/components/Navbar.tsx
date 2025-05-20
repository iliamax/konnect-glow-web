
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-glass py-3 backdrop-blur-lg shadow-lg' : 'py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="hover-grow">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1533c550-8196-4ed4-8612-7bf7fec5c7f7.png" 
              alt="Planet Konnect" 
              className="h-10 mr-2"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-planetOrange transition-colors hover-grow">
            Home
          </Link>
          <Link to="/hotspot" className="text-foreground hover:text-planetOrange transition-colors hover-grow">
            Hotspot Packages
          </Link>
          <Link to="/broadband" className="text-foreground hover:text-planetOrange transition-colors hover-grow">
            Home Broadband
          </Link>
          <Link to="/about" className="text-foreground hover:text-planetOrange transition-colors hover-grow">
            About Us
          </Link>
          <Link to="/contact" className="text-foreground hover:text-planetOrange transition-colors hover-grow">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden hover-grow">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-glass backdrop-blur-xl p-4 absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-foreground hover:text-planetOrange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hotspot" 
              className="px-4 py-2 text-foreground hover:text-planetOrange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotspot Packages
            </Link>
            <Link 
              to="/broadband" 
              className="px-4 py-2 text-foreground hover:text-planetOrange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home Broadband
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-foreground hover:text-planetOrange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-foreground hover:text-planetOrange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
