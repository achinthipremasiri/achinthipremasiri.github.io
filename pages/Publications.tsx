import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle title="Publications & Chapters" />
      
      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <div 
            key={pub.id} 
            className="bg-white p-6 rounded-lg shadow-sm border-b-4 border-transparent hover:border-primary transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-bold text-text font-serif leading-tight">
                  "{pub.title}"
                </h3>
                {pub.status && (
                  <span className={`flex-shrink-0 px-2 py-1 text-xs font-bold rounded uppercase ${
                    pub.status === 'Published' ? 'bg-green-100 text-green-800' :
                    pub.status === 'In Press' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {pub.status}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm italic">
                {pub.citation}
              </p>

              {pub.link && (
                <div className="mt-3">
                  <a 
                    href={pub.link}
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
