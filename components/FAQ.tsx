import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-brand-dark border-t border-white/5" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="bg-brand-card border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-red/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-red flex-shrink-0" />
                ) : (
                  <Plus className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};