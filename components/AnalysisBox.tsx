import React from 'react';

interface AnalysisBoxProps {
  title?: string;
  children: React.ReactNode;
}

const AnalysisBox: React.FC<AnalysisBoxProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 my-6 text-gray-700 leading-relaxed">
      {title && <h5 className="text-lg font-bold text-violet-700 mb-3">{title}</h5>}
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default AnalysisBox;
