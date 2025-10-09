import React from 'react';

interface SectionProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
  return (
    <section className="mt-20 py-10 border-t-2 border-gray-200">
      <h3 className="text-3xl md:text-4xl font-extrabold text-violet-600 mb-6 pb-3 border-b-2 border-violet-500 inline-block">
        {`${number}. ${title}`}
      </h3>
      <div className="space-y-8">{children}</div>
    </section>
  );
};

export default Section;
