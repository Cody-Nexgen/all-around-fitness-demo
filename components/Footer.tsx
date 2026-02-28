import React from 'react';
import { Button } from './Button';
import { Facebook, Instagram, Twitter, MapPin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  return (
    <footer className="bg-black border-t border-white/10" id="offer">
      {/* Integrated CTA Section (formerly CtaBreak) */}
      <div className="py-20 px-4 text-center bg-gradient-to-b from-brand-card/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
            Ready to <span className="text-brand-red">change your life?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg md:text-xl font-medium">
            Try All Around Fitness free for 3 days. <span className="text-white">No commitment.</span> Experience the difference yourself.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button fullWidth onClick={handleDemoClick} className="max-w-md mx-auto py-5 text-xl shadow-red-900/40 animate-pulse-slow">
              Start 3-Day Free Trial
            </Button>
            <p className="text-gray-500 text-sm">
              Limited time offer • New members only
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Brand & Google Data */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-black text-white italic mb-4">ALL AROUND <span className="text-brand-red">FITNESS</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            The premier fitness destination in Duluth, GA. We build strength, community, and confidence.
          </p>
          
          {/* Google Maps Data Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 mb-6 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => window.open("https://maps.google.com", "_blank")}>
            <div className="bg-white p-1.5 rounded flex items-center justify-center">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" alt="Google Maps" className="w-6 h-6" />
            </div>
            <div className="text-left">
                <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-sm">4.9</span>
                    <div className="flex text-yellow-500">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                    </div>
                </div>
                <div className="text-xs text-gray-400">See all 120+ reviews</div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-brand-red/30 inline-block pb-1">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">About Us</a></li>
            <li><a href="#schedule" className="text-gray-400 hover:text-brand-red transition-colors">Class Schedule</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Trainers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Success Stories</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-brand-red/30 inline-block pb-1">Support</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Contact Us</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-brand-red transition-colors">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Location Data */}
        <div>
           <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-brand-red/30 inline-block pb-1">Visit Us</h4>
           <div className="flex items-start gap-3 mb-4">
             <MapPin className="text-brand-red shrink-0 mt-1" size={16} />
             <p className="text-gray-400 text-sm">3170 Peachtree Industrial Blvd<br/>Suite 125, Duluth, GA 30097</p>
           </div>
           <p className="text-gray-400 text-sm mb-2"><a href="tel:+17705550199" className="hover:text-white transition-colors">(770) 555-0199</a></p>
           <p className="text-gray-400 text-sm mb-4"><a href="mailto:info@aaf.com" className="hover:text-white transition-colors">info@allaroundfitness.com</a></p>
           
           <div className="text-xs text-green-500 font-bold flex items-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             Open Now: Closes 10PM
           </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6 border-t border-white/5 text-center px-4">
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} All Around Fitness. This is a demo template. All rights reserved.
        </p>
      </div>
    </footer>
  );
};