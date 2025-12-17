import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App: React.FC = () => {
  const worshipTimes = [
    { title: '주일예배', time: '주일 오전 11:00', description: '함께 찬양과 말씀을 나누며 예배합니다.' },
    { title: '수요예배', time: '수요일 저녁 7:30', description: '한 주의 한복판, 말씀과 기도로 재충전하는 시간.' },
    { title: '새벽예배', time: '화·목 오전 6:00', description: '조용한 새벽에 하나님 앞에 머무는 시간.' },
  ];

  const ministries = [
    {
      name: '찬양팀 & 워십댄스',
      detail: '예배의 문을 여는 찬양과 몸으로 드리는 예배를 준비합니다.',
      highlight: '매주 금요일 8시 연습'
    },
    {
      name: '다음세대 (유년·청소년)',
      detail: '맞춤형 예배와 성경공부, 부모와 함께하는 신앙 코칭을 진행합니다.',
      highlight: '주일 오전 11시 동시 진행'
    },
    {
      name: '선교 & 지역나눔',
      detail: '동네 어르신 돌봄, 도시락 나눔, 해외 단기선교를 이어갑니다.',
      highlight: '매월 마지막 주 토요일 봉사'
    },
    {
      name: '새가족 & 양육',
      detail: '4주 과정의 새가족 클래스와 1:1 멘토링으로 정착을 돕습니다.',
      highlight: '사전 신청 후 개별 안내'
    },
  ];

  const smallGroups = [
    {
      name: '향기로운 20대 모임',
      schedule: '주일 예배 후',
      focus: '직장·대학생의 삶과 진로를 함께 나누는 열린 소그룹'
    },
    {
      name: '마더와이즈',
      schedule: '둘째 주 토요일 오전',
      focus: '엄마들의 기도모임과 자녀 양육 세미나'
    },
    {
      name: '커피브레이크 성경공부',
      schedule: '수요일 저녁 온라인',
      focus: '비신자도 환영하는 대화형 성경공부'
    },
    {
      name: '청년 워십나잇',
      schedule: '매월 첫째 주 금요일',
      focus: '찬양과 간증, 서로를 축복하는 청년 예배'
    }
  ];

  const newsEvents = [
    {
      title: '봄맞이 이웃 사랑 바자회',
      date: '3월 22일(토) 오전 10시',
      description: '수익금 전액을 지역 어르신 돌봄 사역에 사용합니다.'
    },
    {
      title: '2025 전교인 부흥회',
      date: '4월 18-20일(금~주일)',
      description: '김하늘 목사님 초청, “성령 안에 머무는 교회” 시리즈.'
    },
    {
      title: '새가족 환영 브런치',
      date: '매월 첫째 주 주일, 예배 후',
      description: '주향기교회 가족을 소개하고 교제하는 따뜻한 시간.'
    },
  ];

  const onlineCommunity = [
    {
      title: '온라인 새가족 신청',
      description: '간단한 양식을 작성하면 담당자가 연락드려 첫 만남을 안내합니다.',
      action: 'https://forms.gle/sample'
    },
    {
      title: '카카오톡 채널 “주향기교회”',
      description: '주중 묵상, 행사 소식, 기도제목을 실시간으로 받아보세요.',
      action: 'https://pf.kakao.com/sample'
    },
    {
      title: '유튜브 예배 다시보기',
      description: '현장에 못 오셔도 예배와 설교를 영상으로 시청하실 수 있습니다.',
      action: 'https://youtube.com/'
    },
  ];

  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-14 space-y-16">
        <Header />

        <section className="bg-gradient-to-r from-amber-100 via-white to-emerald-100 rounded-3xl p-10 shadow-lg flex flex-col md:flex-row gap-10 items-center" id="top">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold">주향기교회</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
              사랑과 향기로 연결되는<br />온라인 교제 공간
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              예배의 감동과 성도의 교제를 온라인에서도 이어갈 수 있도록 준비한 주향기교회 공식 홈페이지입니다.
              예배 안내와 소그룹, 봉사 소식, 온라인 신청까지 한눈에 살펴보세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#visit" className="px-5 py-3 bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:bg-emerald-700">예배 안내 보기</a>
              <a href="#connect" className="px-5 py-3 bg-white border border-emerald-300 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50">온라인 교제 참여</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {worshipTimes.map((item) => (
                <div key={item.title} className="bg-white/70 backdrop-blur border border-white rounded-2xl p-4 shadow-sm">
                  <p className="text-xs text-emerald-700 font-semibold">{item.title}</p>
                  <p className="text-lg font-bold text-gray-900">{item.time}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-white/80 border border-white rounded-2xl shadow-inner p-8 space-y-6">
            <div className="text-sm uppercase text-gray-500 font-semibold">이번 주 설교 시리즈</div>
            <h2 className="text-3xl font-extrabold text-emerald-700">“향기로운 삶, 복음의 향을 퍼뜨리다”</h2>
            <p className="text-gray-700 leading-relaxed">
              고린도후서 2:15 말씀처럼, 우리가 어디에서나 그리스도의 향기를 드러낼 수 있도록
              삶의 자리에서 예배자로 서는 법을 함께 나눕니다.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• 주일 1주차: 감사의 향기 — <span className="font-semibold">이하늘 담임목사</span></li>
              <li>• 주일 2주차: 섬김의 향기 — <span className="font-semibold">김은혜 전도사</span></li>
              <li>• 주중 QnA: 온라인 카카오톡 채널 실시간 소통</li>
            </ul>
            <div className="flex gap-3">
              <a href="#news" className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold shadow hover:bg-amber-600">행사 일정 보기</a>
              <a href="#connect" className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg font-semibold">기도 요청하기</a>
            </div>
          </div>
        </section>

        <Section number={1} title="주향기교회 소개">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                주향기교회는 <strong>“그리스도의 향기”</strong>를 삶으로 드러내며, 예배와 섬김으로 지역을 살리는 공동체입니다.
                따뜻한 환대와 성경 중심의 말씀, 다음세대를 향한 비전으로 함께 성장하고 있습니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 비전: 예배의 향기로 가정을 세우고, 지역을 살리는 교회</li>
                <li>• 가치: 말씀, 기도, 교제, 나눔, 선교</li>
                <li>• 장소: 서울시 양천구 은행나무로 21 주향기교회 본당</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
              <h4 className="text-xl font-bold text-emerald-700">주요 사역 한눈에 보기</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="text-sm text-emerald-700 font-semibold">주일학교·청소년</p>
                  <p className="text-lg font-bold text-gray-900">다음세대 집중 케어</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-sm text-amber-600 font-semibold">지역 나눔</p>
                  <p className="text-lg font-bold text-gray-900">월 1회 봉사 & 바자회</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-sm text-blue-700 font-semibold">온라인</p>
                  <p className="text-lg font-bold text-gray-900">예배 다시보기 & 묵상</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="text-sm text-purple-700 font-semibold">양육</p>
                  <p className="text-lg font-bold text-gray-900">새가족 4주 클래스</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section number={2} title="예배와 모임 안내" >
          <div id="visit" className="grid md:grid-cols-3 gap-6">
            {worshipTimes.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 space-y-2">
                <p className="text-sm text-emerald-700 font-semibold">{item.title}</p>
                <p className="text-2xl font-extrabold text-gray-900">{item.time}</p>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-gray-700 leading-relaxed">
            <p className="font-semibold text-emerald-800">찾아오시는 길</p>
            <p>서울 양천구 은행나무로 21 (목동역 6번 출구 도보 5분) · 주차 지원, 엘리베이터 완비</p>
            <p className="mt-2">대중교통: 지하철 5호선/9호선 환승, 목동역 하차 후 도보 이동.</p>
          </div>
        </Section>

        <Section number={3} title="사역과 섬김">
          <div className="grid md:grid-cols-2 gap-6">
            {ministries.map((ministry) => (
              <div key={ministry.name} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-emerald-700 font-semibold">{ministry.highlight}</p>
                    <h4 className="text-2xl font-bold text-gray-900">{ministry.name}</h4>
                  </div>
                  <span className="text-lg">🌿</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{ministry.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number={4} title="소그룹 & 양육">
          <div className="grid md:grid-cols-2 gap-6">
            {smallGroups.map((group) => (
              <div key={group.name} className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 space-y-2">
                <p className="text-sm text-amber-700 font-semibold">{group.schedule}</p>
                <h4 className="text-xl font-bold text-gray-900">{group.name}</h4>
                <p className="text-gray-700 leading-relaxed">{group.focus}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number={5} title="소식 & 행사" >
          <div id="news" className="space-y-4">
            {newsEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
                <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold">참여 문의 환영</span>
              </div>
            ))}
          </div>
        </Section>

        <Section number={6} title="온라인 교제 공간">
          <div id="connect" className="grid md:grid-cols-3 gap-6">
            {onlineCommunity.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 space-y-3">
                <p className="text-sm text-emerald-700 font-semibold">온라인 연결</p>
                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                <a
                  href={item.action}
                  className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기
                  <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-gray-700 leading-relaxed">
            <p className="font-semibold text-amber-700">기도 요청 & 상담</p>
            <p className="mt-1">익명 또는 실명으로 기도 제목을 남겨주세요. 담당 사역자가 함께 중보하고 연락을 드립니다.</p>
            <p className="mt-2 text-sm">전화: 02-123-4567 · 이메일: joy@jhchurch.kr</p>
          </div>
        </Section>

        <Section number={7} title="오시는 길 & 연락처">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-3">
              <p className="text-sm text-gray-500">교회 주소</p>
              <h4 className="text-2xl font-bold text-gray-900">서울시 양천구 은행나무로 21</h4>
              <p className="text-gray-700">목동역 6번 출구 도보 5분 · 주차 지원 · 엘리베이터</p>
              <p className="text-gray-700">주중 사무실 운영: 화~금 10:00-17:00</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 space-y-3">
              <p className="text-sm text-emerald-700 font-semibold">문의 및 연결</p>
              <p className="text-gray-800">담임목사: 이하늘 | 교육목사: 정유진</p>
              <p className="text-gray-800">전화: 02-123-4567 | 카카오톡 채널: 주향기교회</p>
              <p className="text-gray-800">이메일: joy@jhchurch.kr</p>
              <p className="text-gray-700 text-sm">방문 전 연락을 주시면 안내 봉사자가 맞이해 드립니다.</p>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
