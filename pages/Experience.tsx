import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { WORK_EXPERIENCE, RESEARCH_EXPERIENCE } from '../constants';

const ExperienceCard: React.FC<{ item: any, type: 'work' | 'research' }> = ({ item, type }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border-l-4 transition-all hover:shadow-md hover:translate-x-2 duration-300 border-primary">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-xl font-bold text-text font-serif">{item.role}</h3>
        <h4 className="text-lg text-primary font-medium">{item.company}</h4>
      </div>
      <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
        {item.year}
      </span>
    </div>
    <ul className="mt-4 space-y-2">
      {item.description.map((desc: string, idx: number) => (
        <li key={idx} className="flex items-start text-gray-700">
          <span className="mr-2 mt-1.5 text-secondary text-xs">●</span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle title="Work Experience" />
      <div className="mb-12">
        {WORK_EXPERIENCE.map(item => (
          <ExperienceCard key={item.id} item={item} type="work" />
        ))}
      </div>

      <SectionTitle title="Research Experience" />
      <div>
        {RESEARCH_EXPERIENCE.map(item => (
          <ExperienceCard key={item.id} item={item} type="research" />
        ))}
      </div>
    </div>
  );
};

export default Experience;
