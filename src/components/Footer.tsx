
import React from 'react';
import { Link } from 'react-router-dom';
import { Support } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-planetBlue to-planetOrange py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4 hover-grow">
              <img 
                src="/lovable-uploads/1533c550-8196-4ed4-8612-7bf7fec5c7f7.png" 
                alt="Planet Konnect" 
                className="h-12 mr-2 bg-white p-1 rounded-md"
              />
            </Link>
            <p className="text-white/90 text-sm">
              Planet Konnect provides reliable and affordable internet solutions to homes and businesses across Nairobi.
            </p>
            <p className="mt-4 text-white/90 text-sm italic">
              Connect Better. Live Better.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Packages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/hotspot" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  Hotspot Packages
                </Link>
              </li>
              <li>
                <Link to="/broadband" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  Home Broadband
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors text-sm hover-grow">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-white/80">📞 Call:</span>
                <a href="tel:0717021891" className="ml-2 text-white hover-grow">0717021891</a>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-white/80">📧 Email:</span>
                <a href="mailto:support@jadeempire.co.ke" className="ml-2 text-white hover-grow">support@jadeempire.co.ke</a>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-white/80">🌐 Web:</span>
                <a href="https://www.jadeempire.co.ke" className="ml-2 text-white hover-grow" target="_blank" rel="noopener noreferrer">www.jadeempire.co.ke</a>
              </li>
            </ul>
            
            <div className="mt-4">
              <a 
                href="https://wa.me/254717021891" 
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors mt-2 hover-grow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Support className="mr-2" size={16} />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-4 border-t border-white/20 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Planet Konnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
