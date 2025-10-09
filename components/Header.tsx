import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-violet-200 rounded-xl flex items-center justify-center font-bold text-xl text-gray-800">
          CCC
        </div>
        <span className="text-2xl font-semibold text-gray-800">한국대학생선교회</span>
      </div>
      <div className="w-12 h-12 bg-violet-200 rounded-xl flex items-center justify-center text-2xl font-bold text-gray-800">
        →
      </div>
    </header>
  );
};

export default Header;
