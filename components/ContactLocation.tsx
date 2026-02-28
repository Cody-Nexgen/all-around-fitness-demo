import React from 'react';
import { MapPin, Phone, Mail, Navigation, Star, Users, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const ContactLocation: React.FC = () => {
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  const handleMapClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=All+Around+Fitness+Duluth+GA", "_blank");
  };

  return (
    <section className="py-16 px-4 bg-brand-card border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Contact & Business Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
             <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Visit Our Gym</h2>
             <p className="text-gray-400">Your local fitness destination in Duluth.</p>
          </div>

          {/* Google Maps Style Business Highlights (Former Social Proof) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    <span className="font-bold text-white text-lg">5.0</span>
                    <Star size={16} fill="currentColor" />
                </div>
                <div className="text-xs text-gray-400">100+ Google Reviews</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-brand-red mb-1">
                    <Users size={20} />
                    <span className="font-bold text-white text-lg">500+</span>
                </div>
                <div className="text-xs text-gray-400">Active Members</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-green-500 mb-1">
                    <CheckCircle size={20} />
                    <span className="font-bold text-white text-lg">Local</span>
                </div>
                <div className="text-xs text-gray-400">Owned & Operated</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors -mx-4 md:mx-0">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 text-brand-red">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Address</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  3170 Peachtree Industrial Blvd<br />
                  Suite 125<br />
                  Duluth, GA 30097
                </p>
                <div className="mt-2 text-sm text-brand-red font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleMapClick}>
                  Open in Google Maps <Navigation size={12} />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors -mx-4 md:mx-0">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 text-brand-red">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Phone</h3>
                <a href="tel:+17705550199" className="text-gray-400 text-lg hover:text-white transition-colors">
                  (770) 555-0199
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors -mx-4 md:mx-0">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 text-brand-red">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Email</h3>
                <a href="mailto:info@allaroundfitness.com" className="text-gray-400 text-lg hover:text-white transition-colors">
                  info@allaroundfitness.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="#" 
              onClick={handleDemoClick}
              className="inline-block w-full md:w-auto"
            >
              <Button fullWidth className="md:w-auto flex items-center justify-center gap-2 shadow-lg shadow-black/50">
                <Navigation size={20} />
                Get Directions
              </Button>
            </a>
          </div>
        </div>

        {/* Map Embed - Enhanced with Data Overlay */}
        <div 
            className="h-[500px] w-full rounded-3xl overflow-hidden bg-brand-dark relative border border-white/10 shadow-2xl group cursor-pointer"
            onClick={handleMapClick}
            title="Click to open in Google Maps"
        >
          {/* Satellite view embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.444378153476!2d-84.1438!3d33.9781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a28178a9b1d9%3A0x6b9f2b2b2b2b2b2b!2s3170%20Peachtree%20Industrial%20Blvd%2C%20Duluth%2C%20GA%2030097!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus&maptype=satellite" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy"
            className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none opacity-80 group-hover:opacity-100"
          ></iframe>
          
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent pointer-events-none opacity-80"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-brand-red text-white p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} fill="currentColor" />
            </div>
          </div>
          
          {/* Google Maps Data Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">All Around Fitness</h4>
                    <p className="text-gray-300 text-xs mb-2">3170 Peachtree Industrial Blvd, Duluth, GA</p>
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                        </div>
                        <span className="text-white text-xs font-bold">5.0</span>
                        <span className="text-gray-400 text-xs">(124 reviews)</span>
                    </div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" alt="Maps" className="w-8 h-8" />
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};