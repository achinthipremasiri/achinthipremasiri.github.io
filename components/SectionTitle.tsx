import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 pb-2 border-b-2 border-secondary inline-block">
      {title}
    </h2>
  );
};

export default SectionTitle;
