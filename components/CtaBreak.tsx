import React from 'react';
import { Button } from './Button';

export const CtaBreak: React.FC = () => {
  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  return (
    <section className="py-6 w-full bg-gradient-to-r from-brand-red/20 via-brand-red/5 to-transparent border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase italic leading-tight truncate">
            Ready to change your life?
          </h2>
          <p className="text-gray-400 text-sm md:text-base hidden md:block">
            Try All Around Fitness free for 3 days. No commitment.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <Button onClick={handleDemoClick} className="py-3 px-8 text-base w-full md:w-auto animate-pulse-slow shadow-lg shadow-red-900/20">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};