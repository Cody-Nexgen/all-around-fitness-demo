import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first 600px (hero section roughly)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-card/90 backdrop-blur-md border-t border-white/10 z-50 md:hidden animate-slide-up">
      <Button fullWidth onClick={handleDemoClick} className="shadow-lg">
        Start 3-Day Free Trial
      </Button>
    </div>
  );
};