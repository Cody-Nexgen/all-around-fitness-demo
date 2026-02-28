import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-black text-white italic tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ALL AROUND <span className="text-brand-red">FITNESS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('results')} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wide transition-colors">Results</button>
          <button onClick={() => scrollToSection('schedule')} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wide transition-colors">Schedule</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wide transition-colors">FAQ</button>
          <Button onClick={handleDemoClick} className="py-2 px-6 text-sm">
            Free Trial
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl animate-fade-in">
          <button onClick={() => scrollToSection('results')} className="text-left font-bold text-white py-2">Real Results</button>
          <button onClick={() => scrollToSection('schedule')} className="text-left font-bold text-white py-2">Class Schedule</button>
          <button onClick={() => scrollToSection('faq')} className="text-left font-bold text-white py-2">FAQ</button>
          <Button onClick={handleDemoClick} fullWidth className="mt-2">
            Start Free Trial
          </Button>
        </div>
      )}
    </header>
  );
};