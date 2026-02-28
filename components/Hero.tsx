import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  return (
    <section className="relative h-[85vh] md:h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight">
          GET STRONG.<br className="md:hidden" /> LOSE WEIGHT.<br />
          <span className="text-brand-red">FEEL CONFIDENT.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl mb-8 max-w-2xl font-medium">
          Join All Around Fitness with a 3-Day Free Trial.
        </p>

        <div className="w-full max-w-md">
          <Button fullWidth onClick={handleDemoClick}>
            Start 3-Day Free Trial
          </Button>
          
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment
            </span>
            <span className="hidden md:inline">•</span>
            <span>Local gym in Duluth, GA</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};