import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { PROFILE, REFERENCES } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle title="Get in Touch" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
          <h3 className="font-serif text-2xl font-bold mb-6 text-text">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary text-xl">
                ✉️
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="text-lg hover:text-secondary transition-colors font-medium">
                  {PROFILE.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 text-xl">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                <a href={`tel:${PROFILE.phone}`} className="text-lg hover:text-secondary transition-colors font-medium">
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 text-xl">
                📍
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-lg font-medium">
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="bg-primary/5 rounded-lg p-8 flex items-center justify-center border-2 border-dashed border-primary/20">
           <div className="text-center">
             <span className="text-6xl block mb-4">🌱</span>
             <p className="font-serif text-xl text-primary italic">
               "Committed to delivering original, high-quality content with strong critical insight."
             </p>
           </div>
        </div>
      </div>

      <SectionTitle title="References" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERENCES.map((ref) => (
          <div key={ref.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-primary">{ref.name}</h3>
            <p className="text-sm font-bold text-gray-600 mb-2">{ref.title}</p>
            <p className="text-sm text-gray-600 mb-4 h-10">{ref.department}, {ref.university}</p>
            
            <div className="space-y-1 text-sm border-t pt-4">
              <div className="flex gap-2">
                <span className="font-bold text-gray-400">E:</span>
                <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors truncate">{ref.email}</a>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-gray-400">T:</span>
                <a href={`tel:${ref.phone}`} className="hover:text-primary transition-colors">{ref.phone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
