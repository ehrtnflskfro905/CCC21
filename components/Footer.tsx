import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600 gap-3">
      <div>
        © 2025 주향기교회. 함께 예배하고 섬기는 모든 분들을 환영합니다.
      </div>
      <div className="space-y-1 md:space-y-0 md:flex md:items-center md:gap-4 text-gray-700">
        <span>주소: 서울시 양천구 은행나무로 21</span>
        <span>Tel: 02-123-4567</span>
        <span>Email: joy@jhchurch.kr</span>
      </div>
    </footer>
  );
};

export default Footer;
