import React from 'react';
import QuoteForm from './QuoteForm';

const FormSection = () => {
  return (
    <div className="relative">
      {/* Hero Background with Overlay */}
      <div 
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-center justify-center py-16"
        style={{ 
          backgroundImage: "url('/api/placeholder/1500/1000')", 
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <div className="animate-fadeIn lg:p-24" style={{animationDuration: '1s'}}>
              <h4 className="text-white text-xl md:text-2xl font-medium mb-2 drop-shadow-lg">
                Maid services trusted since 1994.
              </h4>
              
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
                PROFESSIONAL<br/>
                HOUSE CLEANING<br/>
                SERVICES
              </h1>
              
              <div className="text-white text-lg md:text-xl space-y-4 drop-shadow-lg">
                <p>
                  We pioneered environmentally friendly and sustainable cleaning 
                  methods in residential cleaning. Get your free quote now!
                </p>
                <p>
                  Three locations to serve you: Charleston, Greenville &
                  Spartanburg
                </p>
              </div>
            </div>
            
            {/* Quote Form Card */}
            <div className="animate-fadeIn lg:p-24" style={{animationDuration: '1s', animationDelay: '0.2s'}}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 lg:h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default FormSection;