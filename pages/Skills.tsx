import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SKILLS, LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  const certifications = [
    { title: "How to Write a Research Paper", issuer: "Dr. Faheem Ullah", date: "Nov 2025" },
    { title: "International Conference Presenter", issuer: "InCAPM2025", date: "2025" },
    { title: "International Symposium Presenter", issuer: "ISAE2025", date: "2025" }
  ];

  return (
    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <SectionTitle title="Professional Skills" />
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            {SKILLS.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 text-sm">
                  ✓
                </span>
                <span className="font-medium text-text text-lg">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <SectionTitle title="Languages" />
          <div className="grid grid-cols-1 gap-4">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex justify-between items-center bg-white p-4 rounded shadow-sm border-l-4 border-secondary">
                <span className="font-bold text-lg">{lang.name}</span>
                <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Certifications" />
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
               <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
               <p className="text-gray-600">{cert.issuer}</p>
               <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Key Competencies</h3>
            <div className="flex flex-wrap gap-2">
                {['Data Analysis', 'Greenhouse Farming', 'Lab Protocols', 'Yield Forecasting', 'Molecular Biology'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white text-primary rounded-full text-sm font-bold shadow-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
