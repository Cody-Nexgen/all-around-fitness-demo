import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Schedule } from './components/Schedule';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white font-sans">
      <Header />
      <Hero />
      <Results />
      <Schedule />
      <Features />
      <FAQ />
      <ContactLocation />
      <Footer />
      <MobileStickyCta />
    </main>
  );
};

export default App;