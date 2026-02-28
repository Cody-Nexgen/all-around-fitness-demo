import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { ChevronDown, ChevronUp, Calendar, X, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Schedule: React.FC = () => {
  const [openDay, setOpenDay] = useState<string | null>('Monday');
  const [selectedClass, setSelectedClass] = useState<any | null>(null);

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day);
  };

  const handleClassClick = (cls: any) => {
    setSelectedClass(cls);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  const handleDemoClick = () => {
    alert("This is a demo. Please contact us for the full version of your page.");
  };

  return (
    <section className="py-16 px-4 bg-brand-dark relative" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Calendar className="text-brand-red" />
          <h2 className="text-3xl font-bold text-white text-center">Weekly Class Schedule</h2>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {SCHEDULE_DATA.map((item) => (
            <div key={item.day} className="bg-brand-card rounded-lg overflow-hidden border border-white/5">
              <button 
                onClick={() => toggleDay(item.day)}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-lg text-white">{item.day}</span>
                {openDay === item.day ? <ChevronUp className="text-brand-red" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {openDay === item.day && (
                <div className="p-2 space-y-2 bg-black/20 animate-fade-in">
                  {item.classes.map((cls, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleClassClick(cls)}
                      className="flex justify-between items-center bg-brand-dark/50 border border-white/5 p-3 rounded-lg active:scale-[0.99] transition-transform cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="text-gray-200 font-bold">{cls.name}</span>
                        <span className="text-brand-red text-xs font-bold">{cls.time}</span>
                      </div>
                      <ArrowRight size={16} className="text-gray-600" />
                    </div>
                  ))}
                  {item.classes.length === 0 && <p className="text-gray-500 text-sm italic p-2">No classes scheduled.</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid/Table */}
        <div className="hidden md:grid grid-cols-7 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          {SCHEDULE_DATA.map((item) => (
            <div key={item.day} className="flex flex-col bg-brand-card min-h-[300px]">
              <div className="bg-white/5 p-3 text-center border-b border-white/5">
                <span className="font-bold text-white block truncate">{item.day}</span>
              </div>
              <div className="p-2 space-y-2 flex-1 flex flex-col gap-2">
                 {item.classes.map((cls, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleClassClick(cls)}
                      className="bg-brand-dark p-2 rounded border border-white/5 hover:border-brand-red/50 hover:bg-white/5 transition-all cursor-pointer group"
                    >
                      <div className="text-xs text-brand-red font-bold mb-1">{cls.time}</div>
                      <div className="text-xs text-gray-300 font-medium leading-tight group-hover:text-white">{cls.name}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class Details Modal - Optimized for Mobile Landscape */}
      {selectedClass && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
            <div 
              className="bg-brand-card w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-up"
              onClick={e => e.stopPropagation()}
            >
                {/* Header Image Area */}
                <div className="h-40 shrink-0 bg-gray-800 relative flex items-center justify-center border-b border-white/5">
                     <span className="text-gray-500 font-bold uppercase tracking-widest text-lg">Image Here</span>
                     <button 
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-brand-red text-white p-2 rounded-full transition-colors"
                     >
                         <X size={20} />
                     </button>
                </div>
                
                {/* Scrollable Content Area */}
                <div className="p-6 overflow-y-auto">
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">{selectedClass.name}</h3>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Clock className="text-brand-red" size={20} />
                            <span className="font-medium text-lg">{selectedClass.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <User className="text-brand-red" size={20} />
                            <span className="font-medium">Instructor: {selectedClass.instructor || 'Staff Coach'}</span>
                        </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                        This is a placeholder description for {selectedClass.name}. Expect a high-energy workout designed to challenge your limits and improve your fitness.
                    </p>

                    <Button fullWidth onClick={handleDemoClick} className="py-3">
                        Book This Class
                    </Button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};