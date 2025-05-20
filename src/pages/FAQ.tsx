
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import CustomCursor from '@/components/CustomCursor';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const faqs = [
    {
      question: "What internet packages do you offer?",
      answer: "We offer two main types of internet packages: Hotspot packages starting from Ksh 10 for hourly access, and Home Broadband packages starting from Ksh 2,000 for unlimited monthly access."
    },
    {
      question: "How do I connect to Planet Konnect hotspots?",
      answer: "Search for 'Planet Konnect' in your available Wi-Fi networks, connect to it, and you'll be redirected to our login page where you can enter your credentials or purchase a new package."
    },
    {
      question: "What is the installation process for home broadband?",
      answer: "After selecting your preferred package, our team will schedule a convenient time for installation. Our technicians will visit your home or business to set up the necessary equipment and ensure everything is working properly. The installation fee is Ksh 1,500."
    },
    {
      question: "How long does installation take?",
      answer: "Typically, the installation process takes 2-4 hours, depending on the complexity of the setup. We aim to complete all installations within 48 hours of your request."
    },
    {
      question: "Do you offer any discounts for long-term subscriptions?",
      answer: "Yes, we offer discounts for quarterly, bi-annual, and annual subscriptions. Contact our sales team for current promotional offers and long-term package rates."
    },
    {
      question: "How do I pay for my internet subscription?",
      answer: "We accept payments via M-Pesa, bank transfers, and credit/debit cards. For hotspot packages, you can pay directly through our portal. For broadband subscriptions, we'll provide you with payment details upon installation."
    },
    {
      question: "What happens if I experience connection issues?",
      answer: "Our technical support team is available 24/7 to assist with any connection issues. You can reach us via phone, email, or WhatsApp, and we'll work to resolve your issue as quickly as possible."
    },
    {
      question: "Can I upgrade my package?",
      answer: "Yes, you can upgrade your package at any time. For hotspot users, simply select a new package on your next purchase. For broadband customers, contact our customer service team to arrange an upgrade."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "Our hotspot packages are pay-as-you-go with no commitment. For broadband services, we offer flexible options with no long-term contracts required, though discounts are available for longer commitments."
    },
    {
      question: "Do you have a fair usage policy?",
      answer: "Yes, we maintain a fair usage policy to ensure all customers receive optimal service. While our packages are unlimited, extremely high usage that affects network performance may result in temporary speed adjustments."
    },
  ];
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about Planet Konnect services, installation, and support.
            </p>
          </div>
          
          {/* Search bar */}
          <div className="mb-10">
            <div className="relative backdrop-blur-md bg-white/5 border border-white/20 rounded-lg overflow-hidden">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-3 w-full bg-transparent border-0 focus:ring-0 text-lg"
              />
              <Button 
                variant="ghost" 
                className="absolute right-0 top-0 h-full px-3 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg mb-4 overflow-hidden hover:shadow-lg transition-shadow hover-grow"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-muted-foreground">No FAQs found matching your search.</p>
                <Button 
                  variant="link" 
                  onClick={() => setSearchTerm('')}
                  className="mt-2 text-planetOrange"
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
          
          {/* Still have questions */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our support team for assistance with any other questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-planetOrange hover:bg-orange-600 hover-grow"
                asChild
              >
                <a href="/contact">Contact Support</a>
              </Button>
              <Button 
                variant="outline"
                className="border-planetBlue text-planetBlue hover:bg-planetBlue/10 hover-grow"
                asChild
              >
                <a href="tel:0717021891">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
