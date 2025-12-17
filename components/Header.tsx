import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between md:items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center font-extrabold text-xl text-gray-900">
          주향
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">주향기교회</p>
          <p className="text-sm text-gray-600">그리스도의 향기로 지역을 살리는 공동체</p>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-700">
        <a href="#visit" className="px-3 py-2 rounded-lg hover:bg-emerald-50">예배 안내</a>
        <a href="#news" className="px-3 py-2 rounded-lg hover:bg-emerald-50">교회 소식</a>
        <a href="#connect" className="px-3 py-2 rounded-lg hover:bg-emerald-50">온라인 교제</a>
        <a href="#top" className="px-3 py-2 rounded-lg bg-emerald-600 text-white shadow hover:bg-emerald-700">첫 화면</a>
      </nav>
    </header>
  );
};

export default Header;
