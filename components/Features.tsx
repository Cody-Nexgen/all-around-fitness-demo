import React, { useState } from 'react';
import { FEATURES } from '../constants';
import { X, MapPin } from 'lucide-react';

const FEATURE_IMAGES: Record<string, string> = {
  f1: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // Group
  f2: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop", // Coach
  f3: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Levels
  f4: "https://images.unsplash.com/photo-1596277123985-7828038e235e?q=80&w=2071&auto=format&fit=crop", // Location (Map vibe)
};

export const Features: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === 'f4') { // Location card ID
      setShowMap(true);
    }
  };

  return (
    <section className="py-24 px-4 bg-brand-dark relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Join All Around Fitness?</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            It's not just a gym. It's a scientifically designed system for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const bgImage = FEATURE_IMAGES[feature.id];
            const isLocation = feature.id === 'f4';
            
            return (
              <div 
                key={feature.id} 
                onClick={() => handleCardClick(feature.id)}
                className={`
                    relative h-96 rounded-2xl overflow-hidden group cursor-pointer 
                    border border-white/10 shadow-2xl transition-all duration-500
                    hover:scale-105 hover:shadow-brand-red/20
                    ${isLocation ? 'ring-2 ring-brand-red/50 hover:ring-brand-red' : ''}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={bgImage} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-black/50 group-hover:rotate-6 transition-transform">
                        <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {feature.description}
                    </p>
                    {isLocation && (
                        <div className="mt-4 flex items-center text-brand-red text-xs font-bold uppercase tracking-wider animate-pulse">
                            <MapPin size={14} className="mr-1" /> Click to view map
                        </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl bg-brand-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-up">
                <button 
                    onClick={(e) => { e.stopPropagation(); setShowMap(false); }}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-brand-red text-white p-2 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="h-[60vh] w-full relative">
                     {/* Simulating Map Zoom Effect with an iframe */}
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.444378153476!2d-84.1438!3d33.9781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a28178a9b1d9%3A0x6b9f2b2b2b2b2b2b!2s3170%20Peachtree%20Industrial%20Blvd%2C%20Duluth%2C%20GA%2030097!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-1000"
                     ></iframe>
                     <div className="absolute bottom-6 left-6 bg-brand-card/90 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md">
                        <h4 className="text-white font-bold text-lg mb-1">All Around Fitness</h4>
                        <p className="text-gray-400 text-sm">3170 Peachtree Industrial Blvd, Duluth, GA</p>
                     </div>
                </div>
            </div>
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setShowMap(false)}></div>
        </div>
      )}
    </section>
  );
};