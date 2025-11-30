import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle title="Educational Journey" />
      
      <div className="space-y-6">
        {EDUCATION.map((edu) => (
          <div 
            key={edu.id}
            className="group relative bg-white p-8 rounded-lg shadow-sm border-l-8 border-primary hover:border-secondary transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-6xl">🎓</span>
            </div>

            <span className="block text-sm font-bold tracking-widest text-accent uppercase mb-1">
              {edu.year}
            </span>
            <h3 className="text-2xl font-bold font-serif text-text mb-2">
              {edu.degree}
            </h3>
            <h4 className="text-xl text-primary font-medium mb-2">
              {edu.institution}
            </h4>
            {edu.details && (
               <p className="text-gray-600 italic mt-2 border-t border-dashed border-gray-300 pt-2 inline-block">
                 {edu.details}
               </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
