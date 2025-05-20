
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { ScrollArea } from '@/components/ui/scroll-area';

const Terms = () => {
  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using Planet Konnect services.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 shadow-lg">
            <ScrollArea className="h-[60vh]">
              <div className="pr-4">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  These Terms of Service govern your use of the internet services provided by Planet Konnect, 
                  including hotspot and broadband services. By using our services, you agree to these terms.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-3">
                  Planet Konnect provides internet connectivity services through:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Hotspot access points with prepaid packages</li>
                  <li>Broadband connections for homes and businesses</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-3">
                  As a user of Planet Konnect services, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service in compliance with all applicable laws</li>
                  <li>Not engage in any unauthorized access or network exploitation</li>
                  <li>Not use the service for illegal activities</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-6">
                  All services require payment in advance. Hotspot packages are prepaid and valid for their specified duration.
                  Broadband services are billed monthly and may include a one-time installation fee. We accept payments via
                  M-Pesa, bank transfers, and credit/debit cards. Non-payment may result in service suspension.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">5. Service Availability</h2>
                <p className="text-muted-foreground mb-6">
                  While we strive to provide uninterrupted service, Planet Konnect does not guarantee continuous, error-free
                  service. We may occasionally need to perform maintenance that could temporarily affect service availability.
                  We will make reasonable efforts to notify customers about planned maintenance.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">6. Fair Usage Policy</h2>
                <p className="text-muted-foreground mb-6">
                  Our services are subject to a Fair Usage Policy to ensure quality service for all users. Excessive usage
                  that negatively impacts our network or other users may result in temporary speed limitations. We reserve
                  the right to monitor network traffic to maintain service quality.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">7. Privacy Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We collect and process personal data in accordance with our Privacy Policy and relevant data protection laws.
                  By using our services, you consent to such processing and warrant that all data provided by you is accurate.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">8. Equipment</h2>
                <p className="text-muted-foreground mb-6">
                  For broadband services, we may provide equipment necessary for the service. This equipment remains the property
                  of Planet Konnect unless otherwise specified. You are responsible for maintaining any equipment in good condition
                  and returning it upon service termination.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-muted-foreground mb-6">
                  Either party may terminate the service agreement with notice. We reserve the right to terminate service
                  immediately for violations of these terms. Upon termination, you must return any equipment provided by
                  Planet Konnect and settle any outstanding payments.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Planet Konnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including but not limited to loss of profits, data, or other intangible losses resulting from your use of or
                  inability to use the service.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify these terms at any time. Significant changes will be communicated to users
                  via email or notices on our website. Continued use of the service after changes constitutes acceptance of
                  the revised terms.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms, please contact us at support@jadeempire.co.ke or call
                  0717021891.
                </p>
                
                <p className="text-muted-foreground text-sm italic">
                  Last Updated: May 20, 2025
                </p>
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
