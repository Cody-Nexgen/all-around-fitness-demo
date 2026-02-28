import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <div className="relative z-20 -mt-8 mx-4">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 transform transition-all hover:bg-white/10 hover:border-white/20">
            
            {/* Rating */}
            <div className="flex flex-col items-center md:items-start group cursor-default">
                <div className="flex items-center gap-1 text-yellow-500 mb-1 group-hover:scale-110 transition-transform">
                    {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <div className="text-white font-bold text-lg">5.0 Star Rating</div>
                <div className="text-gray-400 text-sm">Based on 100+ Reviews</div>
            </div>

            {/* Separator Desktop */}
            <div className="hidden md:block w-px h-12 bg-white/10"></div>

            {/* Members */}
            <div className="flex flex-col items-center group cursor-default">
                 <div className="bg-brand-red/20 p-3 rounded-full mb-2 group-hover:bg-brand-red group-hover:text-white text-brand-red transition-colors duration-300">
                    <Users size={24} />
                 </div>
                 <div className="text-white font-bold text-lg">500+ Members</div>
                 <div className="text-gray-400 text-sm">Active Community</div>
            </div>

            {/* Separator Desktop */}
            <div className="hidden md:block w-px h-12 bg-white/10"></div>

            {/* Location */}
            <div className="flex flex-col items-center md:items-end group cursor-default">
                <div className="flex items-center gap-2 mb-1">
                    <MapPin className="text-brand-red animate-bounce" size={20} />
                    <span className="text-white font-bold text-lg">Duluth, GA</span>
                </div>
                <div className="text-gray-400 text-sm">Locally Owned & Operated</div>
            </div>
            
        </div>
    </div>
  );
};