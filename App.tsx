import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import DataTable from './components/DataTable';
import AnalysisBox from './components/AnalysisBox';
import Footer from './components/Footer';

const App: React.FC = () => {

  const analysisData1 = {
    headers: ['구분', '2022년', '2025년', '2030년', '2040년', '변화율'],
    rows: [
      ['합계출산율', '0.78명', '0.65명', '0.68명', '0.75명', '-3.8%'],
      ['20-24세 인구', '309만명', '285만명', '220만명', '135만명', '-56.3%'],
      ['대학 재학생 수', '322만명', '298만명', '245만명', '180만명', '-44.1%'],
      ['개신교 청년 비율', '14%', '12.5%', '10.8%', '9.2%', '-34.3%'],
    ],
  };

  const universityData = {
    headers: ['구분', '2022년', '2025년', '2030년', '2040년', '변화율'],
    rows: [
      ['전국 대학 수', '432개', '410개', '380개', '320개', '-25.9%'],
      ['지방 소재 대학', '298개', '275개', '245개', '190개', '-36.2%'],
      ['온라인 수업 비율', '35%', '45%', '60%', '75%', '+114%'],
      ['캠퍼스 상주 학생 비율', '70%', '60%', '45%', '30%', '-57.1%'],
      ['대학 통폐합 건수', '5건/년', '8건/년', '12건/년', '15건/년', '+200%'],
    ]
  };
  
  const cccStatusData = {
    headers: ['사역 구분', '현재 비중', '간사 수', '주요 대상', '사역 연령층'],
    rows: [
        ['SLM (학생주도사역)', '80%', '480명', '대학생', '19-25세'],
        ['P2C (전문사역)', '20%', '120명', '직장인, 전문인', '26-60세'],
    ]
  };

  const roleChangeData = {
    headers: ['시기', '기존 역할', '변화 요인', '새로운 역할', '필요 역량'],
    rows: [
        ['2025-2027\n초기 변화', '캠퍼스 상주\n대면 모임 중심\n개별 대학 집중', '온라인 수업 45%\n통학생 증가\n캠퍼스 활동 축소', '하이브리드 사역\n지역별 통합 관리\n온오프라인 병행', '디지털 리터러시\n플랫폼 활용\n멀티 캠퍼스 관리'],
        ['2028-2032\n전환기', '학생 중심 사역\n캠퍼스 내 활동\n학기 중심 프로그램', '대학 통폐합 가속\n상주 학생 45%\n온라인 수업 60%', '권역별 허브 운영\n졸업생 연계 강화\n생애주기별 사역', '네트워크 관리\n멘토링 역량\n지역사회 연결'],
        ['2033-2040\n안정화기', '간사 1인당 1-2캠퍼스\n전통적 학생사역\n대학 중심 정체성', '대학 수 25% 감소\n상주 학생 30%\n메타버스 캠퍼스', '융합형 사역 리더\n학생-직장인 연결\n디지털 네이티브 대응', '통합적 사고\n기술 적응력\n세대 간 소통'],
    ]
  };

  const p2cStrategyData = {
    headers: ['P2C 사역 영역', '기존 조직/사역', '확장 기회', '확장 전략'],
    rows: [
        [<span key="1" className="font-semibold text-violet-700">교회 및 지역사회</span>, 'EDI & MC²: 지역 교회 훈련\nTKPM: 기도운동\nNK 사역: 통일 준비\n문화 사역: 스포츠, 예술', '교회 성장 정체\n지역사회 연결 필요\n통일 대비 부족\n문화 복음전파 수요', '소형교회 지원 강화\n지역사회 허브 확대\n통일 전문가 네트워크\n온라인 문화 콘텐츠'],
        [<span key="2" className="font-semibold text-violet-700">가정 및 생애주기</span>, '패밀리라이프 코리아\nCCC 상급생\nP2P (순결 여행)\n다문화 가정 사역', '30대 미혼 인구 급증\n1인 가구 증가 (34.5%)\n가정 해체 위기\n육아 지원 수요', '30대 싱글 사역 확대\n1인 가구 공동체\n온라인 육아 지원\n다문화 맞춤 서비스'],
        [<span key="3" className="font-semibold text-violet-700">직장 및 사회</span>, 'FWIA: 일과 신앙 통합\nC-코칭센터: 리더십\n시그니피칸트 우먼\n전문인 사역', '고학력 전문직 증가\n워라밸 중시 문화\n직장 내 영성 관심\n여성 사회진출 확대', '업종별 전문인 네트워크\n온라인 소그룹 확대\n여성 리더십 개발\n창업가/프리랜서 사역'],
    ]
  };

  const attendancePredictionData = {
    headers: ['연도', '현상유지 시나리오', '변화율', '주요 영향 요인'],
    rows: [
      ['2025', '8,800명 (기준)', '-', '현재 수준 유지'],
      ['2030', '7,400~8,100명', '-8~16%', '20대 인구 감소 시작'],
      ['2035', '6,200~7,200명', '-18~30%', '대학 통폐합 가속화'],
      ['2040', '4,800~6,000명', '-32~45%', '저출산 영향 본격화'],
    ]
  };

  const scenarioData = {
    headers: ['시나리오', '2025년', '2030년', '2035년', '2040년', '특징'],
    rows: [
        ['현상유지형', 'SLM 80:20 P2C', 'SLM 80:20 P2C', 'SLM 80:20 P2C', 'SLM 80:20 P2C', '급격한 참석자 감소'],
        [
            <strong key="1" className="text-red-600">점진적 전환형</strong>,
            <strong key="2" className="text-red-600">SLM 80:20 P2C</strong>,
            <strong key="3" className="text-red-600">SLM 70:30 P2C</strong>,
            <strong key="4" className="text-red-600">SLM 60:40 P2C</strong>,
            <strong key="5" className="text-red-600">SLM 55:45 P2C</strong>,
            <strong key="6" className="text-red-600">균형잡힌 성장</strong>
        ],
        ['급진적 전환형', 'SLM 75:25 P2C', 'SLM 60:40 P2C', 'SLM 50:50 P2C', 'SLM 45:55 P2C', '높은 위험도'],
    ]
  };

  const orgChangeData = {
    headers: ['단계', '기간', '목표 비중', '핵심 과제', '예상 효과'],
    rows: [
        ['1단계\n준비기', '2025-2027', 'SLM 75:25 P2C', 'P2C 전문인력 양성\n시스템 구축\n파일럿 프로그램', '전환 기반 마련'],
        ['2단계\n전환기', '2028-2032', 'SLM 65:35 P2C', '본격적 비중 조정\n직장인 사역 확대\n지역별 거점 구축', '균형 잡힌 성장'],
        ['3단계\n안정화기', '2033-2040', 'SLM 55:45 P2C', '최적 균형점 달성\n지속가능성 확보\n차세대 리더십 육성', '새로운 사역 모델 정착'],
    ]
  };

  const roleTransitionData = {
    headers: ['단계', '간사 배치 모델', '캠퍼스 담당', '사역 형태', '교육 과정'],
    rows: [
        ['1단계\n(2025-2027)', '전통형 + 하이브리드', '간사 1인당\n1.5개 캠퍼스', '기존 사역 유지\n온라인 역량 강화\n지역 연계 시작', '디지털 사역 교육\n멀티캠퍼스 관리\n온라인 플랫폼 활용'],
        ['2단계\n(2028-2032)', '권역별 허브 운영', '간사 1인당\n3-4개 캠퍼스', '순회형 사역\n졸업생 네트워크\n직장인 연계 강화', '네트워크 관리 기법\n생애주기별 사역\nP2C 연계 역량'],
        ['3단계\n(2033-2040)', '통합형 리더십', '권역별 통합 관리', 'SLM-P2C 융합\n지역사회 허브\n차세대 리더 양성', '통합 리더십\n지역사회 전문성\n멘토링 시스템'],
    ]
  };
  
  const roadmapData = {
    headers: ['연도', '주요 실행 과제', '성과 지표'],
    rows: [
        ['2025', '사역 성과 점검 시스템 구축\nP2C 전문간사 교육 프로그램\n캠퍼스 간사 디지털 역량 교육', '성과 관리 시스템 가동\nP2C 간사 30명 양성\n디지털 역량 100% 완료'],
        ['2026-2027', '거점 도시 재배치 (39→30개)\n멀티캠퍼스 관리 시스템\n하이브리드 사역 모델 구축', '30개 거점 운영\n간사 1인당 1.5개 캠퍼스\n온라인 참여 20% 증가'],
        ['2028-2030', 'SLM 70:30 P2C 비중 달성\n권역별 허브 운영 (20개)\n순회형 간사 시스템 도입', 'P2C 참여 50% 증가\n간사 1인당 3-4개 캠퍼스\n권역별 통합 관리'],
        ['2031-2035', 'SLM 60:40 P2C 비중 달성\n융합형 간사 양성 완료\n생애주기별 사역 시스템', '재정 자립도 70%\n융합형 간사 350명\n졸업생 연계율 85%'],
        ['2036-2040', 'SLM 55:45 P2C 최적 균형\n통합형 리더 시스템 완성\n메가시티 집중 전략 (15개)', '통합형 리더 275명\n메가시티 허브 완성\n글로벌 모델 수출'],
    ]
  };

  const riskData = {
    headers: ['위험 요소', '발생 가능성', '영향도', '대응 방안'],
    rows: [
        ['급격한 인구 감소', '높음', '높음', '온라인 사역 강화, 지역 통합 가속화'],
        ['대학 통폐합 가속화', '높음', '높음', '권역별 허브 조기 구축, 멀티캠퍼스 관리'],
        ['캠퍼스 간사 적응 저항', '중간', '중간', '점진적 역량 교육, 인센티브 제공'],
        ['온라인 수업 비중 급증', '높음', '중간', '디지털 사역 플랫폼 구축, 하이브리드 모델'],
        ['재정 부족', '중간', '높음', '다양한 후원처 개발, 효율성 증대'],
    ]
  };

  const effectList = [
    '사역 다변화: SLM과 P2C 균형잡힌 포트폴리오 구성으로 위험 분산',
    '간사 역량 진화: 캠퍼스 전문가 → 통합형 리더로 성장',
    '네트워크 확장: 학생-졸업생-직장인 생애주기별 연결',
    '지역사회 허브화: 캠퍼스 중심 → 지역사회 중심 사역 전환',
    '미래 적응력: 대학 환경 변화에 선제적 대응하는 조직 체계',
    '지속가능성: 15년 장기 계획을 통한 안정적 전환과 성장 기반 구축',
  ];

  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-16">
        <Header />

        <main>
          <div className="mt-20 mb-16">
            <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              <div className="flex items-center gap-4">
                <span>2025</span>
                <img 
                  src="https://page.gensparksite.com/get_upload_url/7a11dd6b5333205e9d7df12ac3af43610ca311b3f6b181b8086eae1c8ec2970d/default/81278a45-351c-41e8-ab53-5a32ef95b7b7" 
                  alt="Strategy Report Logo" 
                  className="h-16 w-auto" 
                />
              </div>
              <span className="text-blue-800">미래사역 전략보고서</span>
            </h1>
          </div>

          <hr className="border-gray-300 my-10" />

          <div className="mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              <span className="text-5xl md:text-6xl">🚨</span> 인구절벽 시대, CCC 사역전략 보고서
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              저출산 현실을 복음 확산의 기회로 전환하는 SLM→P2C 균형 사역 로드맵
            </p>
          </div>

          <div className="mt-16 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              대한민국은 2022년 출산율 0.78명으로 세계 최저 수준을 기록하며, 2025년에는 0.65명까지 하락할 전망입니다. 이러한 급격한 인구 구조 변화는 CCC의 핵심 사역 대상인 20대 청년층에 직접적 영향을 미치고 있습니다. 본 보고서는 향후 15년간(2025-2040) 중장기 사역 로드맵을 제시하며, 인구 저출산 시대의 변화를 예측하고 그에 맞는 사역적 대응 전략을 수립함으로써 <strong className="font-bold text-violet-600">복음화 사명의 지속가능성 확보</strong>, <strong className="font-bold text-violet-600">캠퍼스에서 사회 전반으로의 복음 영향력 확산</strong>, <strong className="font-bold text-violet-600">생애주기별 제자화 시스템 구축</strong>을 목표로 합니다.
            </p>
            <p className="p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
              이를 위해 현재 SLM(학생주도사역) 80%, P2C(전문사역) 20%의 구조에서, <strong className="font-bold text-violet-600">2040년까지 SLM 55%, P2C 45%로의 단계적 전환</strong>을 통해 변화하는 시대에 부응하는 사역 모델을 구현하고자 합니다. 이는 단순한 비중 조정을 넘어서, 인구절벽 시대에 선제적으로 대응하며 미래 복음화의 새로운 패러다임을 제시하는 전략적 전환입니다.
            </p>
          </div>
          
          <Section number={1} title="현황 분석">
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">저출산 통계 및 인구 변화 추이</h4>
            <DataTable headers={analysisData1.headers} rows={analysisData1.rows} />
            <p className="text-sm text-gray-500 italic mt-2">출처: 통계청 장래인구추계(2024), 한국갤럽 종교조사(2024)</p>
            <AnalysisBox title="저출산 통계 분석">
              한국의 합계출산율은 2022년 0.78명으로 이미 세계 최저 수준이며, 2025년 0.65명까지 더욱 하락할 것으로 예측됩니다. 이는 CCC의 주요 대상인 20-24세 인구가 2040년까지 56.3% 감소(309만명→135만명)함을 의미합니다. 특히 개신교 청년 비율도 14%에서 9.2%로 지속 하락하여, CCC 사역 대상의 절대적 규모가 크게 축소될 전망입니다.
            </AnalysisBox>

            <h4 className="text-2xl font-bold mt-12 mb-4 text-gray-800">대학교 환경 변화 추이</h4>
            <DataTable headers={universityData.headers} rows={universityData.rows} />
            <p className="text-sm text-gray-500 italic mt-2">출처: 교육부 대학정보공시(2024), 한국교육개발원(2024)</p>
            <AnalysisBox title="대학 환경 변화의 사역적 함의">
              전국 대학 수가 25.9% 감소하고 지방 소재 대학은 36.2%나 줄어들 전망입니다. 더욱 중요한 것은 온라인 수업 비율이 75%까지 증가하고 캠퍼스 상주 학생 비율이 30%로 급감한다는 점입니다. 이는 기존의 캠퍼스 중심 대면 사역 모델이 근본적 한계에 직면함을 의미하며, 하이브리드 사역 모델로의 전환이 불가피함을 보여줍니다.
            </AnalysisBox>

            <h4 className="text-2xl font-bold mt-12 mb-4 text-gray-800">CCC 현재 상황</h4>
            <DataTable headers={cccStatusData.headers} rows={cccStatusData.rows} />
            <AnalysisBox title="현재 CCC 조직 구조 분석">
              현재 CCC는 SLM(학생주도사역) 80%, P2C(전문사역) 20%의 비중으로 운영되고 있습니다. 총 600명의 간사 중 480명이 대학생 사역에, 120명이 직장인 및 전문인 사역에 집중하고 있어, 향후 인구 구조 변화에 대응하기 위한 비중 조정이 필요한 상황입니다.
            </AnalysisBox>
          </Section>
          
          <Section number={2} title="사역 영향 분석">
             <AnalysisBox>
              <h5 className="font-bold text-lg text-violet-700 mb-2">SLM에 미치는 직접적 영향</h5>
              현재 CCC 간사 480명이 대학생 사역에 집중하고 있으나, 대학생 인구 감소와 캠퍼스 환경 변화로 인해 기존 사역 방식의 효율성이 크게 저하될 것으로 예상됩니다. 캠퍼스 상주 학생 비율이 30%로 감소하면, 전통적인 캠퍼스 중심 사역 모델은 더 이상 지속가능하지 않습니다.
            </AnalysisBox>
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">캠퍼스 사역 간사의 역할 변화 예측</h4>
            <DataTable headers={roleChangeData.headers} rows={roleChangeData.rows} wide={true} />
          </Section>

          <Section number={3} title="P2C(Power to Change) 사역 강화의 배경">
             <AnalysisBox>
              <h5 className="font-bold text-lg text-violet-700 mb-2">P2C 사역 강화의 사회적 배경</h5>
              저출산으로 인한 사회 구조 변화는 P2C 사역에게는 오히려 기회입니다. 30대 미혼 인구 급증, 1인 가구 34.5% 증가, 고학력 전문직 증가, 워라밸 중시 문화 확산 등은 모두 P2C 사역의 잠재적 대상 확대를 의미합니다. 기존 P2C 조직들이 이러한 사회 변화에 맞춰 확장한다면, SLM 축소분을 충분히 보완할 수 있습니다.
            </AnalysisBox>
            <DataTable headers={p2cStrategyData.headers} rows={p2cStrategyData.rows} wide={true}/>
            <AnalysisBox title="P2C 사역 강화 전략의 핵심 원칙">
              P2C 강화 전략은 단순한 사역 영역 확대가 아니라, 생애주기별 연속성을 갖춘 통합 사역 시스템 구축을 목표로 합니다. 대학생→사회초년생→직장인→가정인으로 이어지는 자연스러운 연결고리를 만들어, SLM 졸업생들이 P2C로 자연스럽게 전환될 수 있는 구조를 만드는 것이 핵심입니다.
            </AnalysisBox>
          </Section>

          <Section number={4} title="미래 예측 모델">
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">CCC 여름수련회 참석자 수 예측 (2025-2040년)</h4>
            <p className="text-gray-600 mb-4">본 예측은 20대 인구 감소율(56.3%), 청년 기독인 비율 하락(14%→9.2%), 대학 재학생 수 감소(44.1%), 캠퍼스 환경 변화 등을 기반으로 한 수치적 추정입니다.</p>
            <DataTable headers={attendancePredictionData.headers} rows={attendancePredictionData.rows} />
             <AnalysisBox title="예측 모델의 한계와 활용 방안">
              이 예측은 현재 추세가 지속된다는 가정하에 도출된 것으로, 실제로는 CCC의 사역 전환 전략, 사회적 부흥 운동, 교회 성장 등 예측하기 어려운 변수들이 결과에 큰 영향을 미칠 수 있습니다. 따라서 이 수치들은 위기 의식을 갖고 전략을 수립하기 위한 참고 자료로 활용해야 합니다.
            </AnalysisBox>

            <h4 className="text-2xl font-bold mt-12 mb-4 text-gray-800">사역 비중 변화 시나리오</h4>
            <DataTable headers={scenarioData.headers} rows={scenarioData.rows} />
            <AnalysisBox title="시나리오별 특성 분석">
              특히 현상유지형은 급격한 쇠퇴 위험을, 급진적 전환형은 조직 안정성 위험을 내포하고 있어, <strong>점진적 전환형이 가장 균형잡힌 대안</strong>임을 확인할 수 있습니다.
            </AnalysisBox>
          </Section>

          <Section number={5} title="전략적 대응 방안">
             <AnalysisBox>
              <h5 className="font-bold text-lg text-violet-700 mb-2">SLM-P2C 비중 재조정의 필요성</h5>
              현재 SLM 80%, P2C 20% 구조는 인구 변화에 따른 리스크가 과도하게 집중되어 있습니다. 점진적으로 SLM 55%, P2C 45%로 조정하여 위험을 분산하고, 사회 전체 생애주기를 아우르는 균형잡힌 사역 포트폴리오를 구축해야 합니다. 이는 단순한 비중 조정이 아니라, CCC의 사역 패러다임 전환을 의미합니다.
            </AnalysisBox>
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">단계별 조직 개편 방안</h4>
            <DataTable headers={orgChangeData.headers} rows={orgChangeData.rows} />
            <h4 className="text-2xl font-bold mt-12 mb-4 text-gray-800">캠퍼스 간사 재배치 및 역할 전환 계획</h4>
            <DataTable headers={roleTransitionData.headers} rows={roleTransitionData.rows} wide={true} />
          </Section>

          <Section number={6} title="실행 계획">
            <AnalysisBox title="단계별 전환 전략의 핵심">
                급진적 변화는 조직 안정성을 해칠 수 있으므로, 3단계에 걸친 점진적 전환을 추진합니다. 1단계(2025-2027)는 기반 구축, 2단계(2028-2032)는 본격 전환, 3단계(2033-2040)는 안정화에 중점을 둡니다. 각 단계마다 명확한 성과 지표를 설정하여 진행 상황을 모니터링하고 필요시 조정할 수 있도록 합니다.
            </AnalysisBox>
             <AnalysisBox title="주요 용어 정의">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>멀티캠퍼스:</strong> 간사 1명이 여러 개 대학을 동시에 담당하는 방식 (기존: 1-2개 → 미래: 3-5개)</li>
                    <li><strong>하이브리드 사역:</strong> 온라인과 오프라인을 결합한 사역 방식 (Zoom 모임 + 대면 만남 병행)</li>
                    <li><strong>순회형 간사:</strong> 특정 캠퍼스에 상주하지 않고 여러 대학을 순회하며 사역하는 방식</li>
                    <li><strong>융합형 간사:</strong> SLM(대학생)과 P2C(직장인) 사역을 동시에 담당할 수 있는 역량을 갖춘 간사</li>
                    <li><strong>권역별 허브:</strong> 여러 도시를 묶어 하나의 거점에서 관리하는 방식 (예: 경기권, 충청권, 영남권 등)</li>
                    <li><strong>통합형 리더:</strong> 지역 전체의 SLM-P2C를 통합 관리하며 생애주기별 연결을 담당하는 리더십</li>
                    <li><strong>메가시티:</strong> 인구 100만 이상 대도시 (서울, 부산, 대구, 인천, 광주, 대전, 울산 등 15개 도시)</li>
                    <li><strong>생애주기별 사역:</strong> 대학생 → 사회초년생 → 직장인 → 가정인으로 이어지는 연속적 사역 시스템</li>
                </ul>
            </AnalysisBox>
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">단계별 로드맵</h4>
            <DataTable headers={roadmapData.headers} rows={roadmapData.rows} wide={true} />
             <AnalysisBox title="사역 성과 점검 및 관리 방안">
                <p>예시: "SLM-P2C 비중을 연간 1.7%p씩 조정한다" - 전환과 직접 연관, 저출산 대응, 15년 계획과 연계, 조기 감지 가능</p>
                <p>체계적인 성과 관리를 통해 전환 과정에서 발생할 수 있는 위험 요소들을 조기에 발견하고 대응할 수 있는 시스템을 구축합니다.</p>
            </AnalysisBox>
          </Section>

          <Section number={7} title="전환 전략의 예상 효과 및 결론">
             <AnalysisBox title="전환 전략 실행의 기대 효과">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>사역 다변화:</strong> SLM과 P2C 균형잡힌 포트폴리오 구성으로 위험 분산</li>
                    <li><strong>간사 역량 진화:</strong> 캠퍼스 전문가 → 통합형 리더로 성장</li>
                    <li><strong>네트워크 확장:</strong> 학생-졸업생-직장인 생애주기별 연결</li>
                    <li><strong>지역사회 허브화:</strong> 캠퍼스 중심 → 지역사회 중심 사역 전환</li>
                    <li><strong>미래 적응력:</strong> 대학 환경 변화에 선제적 대응하는 조직 체계</li>
                    <li><strong>지속가능성:</strong> 15년 장기 계획을 통한 안정적 전환과 성장 기반 구축</li>
                </ul>
            </AnalysisBox>
            <h4 className="text-2xl font-bold mt-8 mb-4 text-gray-800">예상 효과</h4>
             <ul className="divide-y divide-violet-100">
                {effectList.map((item, index) => (
                    <li key={index} className="py-3">{item}</li>
                ))}
            </ul>

            <h4 className="text-2xl font-bold mt-12 mb-4 text-gray-800">위험 요소 및 대응 방안</h4>
            <DataTable headers={riskData.headers} rows={riskData.rows} />

            <div className="mt-12 bg-violet-50/50 border border-violet-200 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-violet-700 mb-4">결론</h4>
              <div className="space-y-4 text-gray-700">
                <p>대한민국의 저출산 현상은 CCC 사역에 근본적 변화를 요구하고 있습니다. 현재의 SLM 중심 구조를 고수할 경우, 2040년까지 여름수련회 참석자가 4,800~6,000명 수준(32~45% 감소)으로 급격히 감소할 위험이 있습니다.</p>
                <p>본 보고서에서 제시한 점진적 전환 모델은 이러한 위기에 대응하기 위한 전략적 방향을 제시하지만, 실제 성과는 하나님의 은혜와 CCC 공동체의 헌신적 실행에 달려 있습니다.</p>
                <p className="font-semibold">핵심 성공 요인:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>단계적 전환을 통한 위험 최소화</li>
                  <li>체계적 성과 점검을 통한 지속적 개선</li>
                  <li>지역별 거점 운영을 통한 효율성 극대화</li>
                </ul>
                <p>2025년부터 시작되는 15년간의 로드맵을 통해 SLM과 P2C의 균형잡힌 발전을 추구하되, 예측하기 어려운 사회 변화와 하나님의 역사하심을 열린 마음으로 받아들이며 유연하게 대응해 나가야 할 것입니다.</p>
                <p>이러한 전환은 단순한 비중 조정을 넘어, CCC가 한국 사회의 인구 구조 변화에 선제적으로 대응하며 미래 복음화의 새로운 패러다임을 제시하는 <strong className="text-violet-600">역사적 의미</strong>를 갖습니다.</p>
                <div className="mt-8 p-6 bg-violet-100/70 border-l-4 border-violet-500 rounded-r-lg">
                    <h5 className="font-bold text-violet-700 mb-2">실행 거버넌스 체계</h5>
                    <p className="mb-2">특히 15년 장기 로드맵의 실행 가능성과 인구절벽 시대 CCC의 지속가능한 성장 방향에 대한 종합적 결론을 제시하여, 본 보고서가 단순한 현상 분석을 넘어 실제 사역 현장에서 활용 가능한 전략적 가이드라인으로 기능할 수 있도록 합니다.</p>
                    <p className="italic text-gray-600">본 전환 전략의 성공을 위해서는 체계적인 실행 거버넌스와 지속적인 모니터링, 그리고 무엇보다 하나님의 인도하심에 대한 믿음과 순종이 필요합니다.</p>
                </div>
              </div>
            </div>
          </Section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
