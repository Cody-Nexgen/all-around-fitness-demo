import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Results: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark" id="results">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Real Client Results
          </h2>
          <p className="text-gray-400 text-lg">Real people. Real work. Real progress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-brand-card rounded-xl overflow-hidden shadow-2xl border border-white/5 group hover:border-brand-red/30 transition-colors">
              <div className="flex h-64 relative">
                <div className="w-1/2 relative bg-gray-800 flex items-center justify-center border-r border-black/20">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Image Here</span>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="w-1/2 relative bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Image Here</span>
                  <div className="absolute top-2 right-2 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl text-white">{item.name}</h3>
                  <span className="bg-white/10 text-brand-red font-bold px-3 py-1 rounded-full text-sm">
                    {item.result}
                  </span>
                </div>
                <p className="text-gray-400 italic">"{item.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};