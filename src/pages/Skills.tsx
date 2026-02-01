import React from 'react';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <div className="skills-page-wrapper">
      <div className="notice-box skills-box">
        <h2 className="skills-main-title">Core Competencies</h2>
        
        {/* 1. 정체성 요약 */}
        <section className="skill-section identity-section">
          <div className="section-tag">IDENTITY</div>
          <h3>브랜드 세계관을 인터랙션으로 설계하는 UI/UX 중심 프론트엔드 웹디자이너</h3>
          <p className="identity-desc">
            경험 설계 → 시각 디자인 → 인터랙션 → 코드 구현까지 한 흐름으로 가져가는 <strong>디자인 주도형 </strong>인재 입니다.
          </p>
        </section>

        <div className="skills-grid">
          {/* 2. UI/UX 설계 역량 */}
          <div className="skill-card">
            <h4>🧠 UI/UX STRATEGY</h4>
            <ul>
              <li>사용자 목표 기반 행동 흐름 & 화면 전환 설계</li>
              <li>맥락 있는 인터랙션 시나리오 구축</li>
              <li>섹션 단위 스토리텔링 & 정보 구조 최적화</li>
              <li>0.2s~0.6s 단위의 정밀한 UX 디테일 집착</li>
            </ul>
          </div>

          {/* 3. 비주얼 디자인 */}
          <div className="skill-card">
            <h4>🎨 VISUAL & BRANDING</h4>
            <ul>
              <li>심미성 중심의 컨셉 주도형 디자인</li>
              <li>브랜드 세계관에 맞춘 컬러 토큰 & 폰트 페어링</li>
              <li>SVG 직접 컨트롤 및 UI 구성요소화</li>
              <li>픽셀, 아이콘, 커서 등 마이크로 디테일 설계</li>
            </ul>
          </div>

          {/* 4. 개발 스택 */}
          <div className="skill-card">
            <h4>💻 TECH STACK</h4>
            <ul>
              <li>React & TypeScript 기반 컴포넌트 설계</li>
              <li>Vite 환경 구성 및 최적화</li>
              <li>UI 상태 관리 (Zustand, Context API)</li>
              <li>반응형 디자인 붕괴 방지 및 CSS 아키텍처</li>
            </ul>
          </div>

          {/* 5. 인터랙션 */}
          <div className="skill-card killer-card">
            <h4>🔥 INTERACTION (KILLER)</h4>
            <ul>
              <li>GSAP & Framer Motion 기반 고퀄리티 연출</li>
              <li>ScrollTrigger 활용 타임라인 기반 스크롤 경험</li>
              <li>이미지 분해/확산/페이드 등 시각적 몰입 효과</li>
              <li>퍼포먼스를 고려한 구간 제한 및 리소스 관리</li>
            </ul>
          </div>

          {/* 6. 데이터 & 서비스 */}
          <div className="skill-card">
            <h4>🌐 SERVICE EXPERIENCE</h4>
            <ul>
              <li>Firebase (Auth, Firestore, Storage) 풀스택 경험</li>
              <li>외부 API 연동 및 실시간 데이터 시각화</li>
              <li>Guestbook, Worklog 등 관리자 기능 구현</li>
            </ul>
          </div>

          {/* 7. AI 활용 능력 */}
          <div className="skill-card">
            <h4>🤖 AI LEVERAGE</h4>
            <ul>
              <li>ChatGPT, Cursor, Gemini 실무 최적화</li>
              <li>AI에 휘둘리지 않는 주체적인 구조 점검 & 판단</li>
              <li>반복 작업 자동화 및 아이디어 확장 도구로 활용</li>
            </ul>
          </div>
        </div>

        {/* 8. 작업 스타일 */}
        <section className="skill-section style-section">
          <div className="section-tag">WORK STYLE</div>
          <div className="style-tags">
            <span>#문제해결형</span>
            <span>#집요함</span>
            <span>#디테일타협불가</span>
            <span>#실무친화적</span>
          </div>
          <p>"이게 회사에서 쓰일 수 있나?"를 기준으로 현실적인 구현선과 디자인 퀄리티의 정점을 고민합니다.</p>
        </section>

        {/* 9. 한 줄 정리 */}
        <div className="resume-summary">
          <h4>Resume Summary</h4>
          <p>React · TypeScript · GSAP · Framer Motion · Firebase</p>
          <p className="sub">브랜드 기반 인터랙션 설계 · 스크롤 경험 디자인 · 비주얼 중심 UI 구현</p>
        </div>

        {/* 최종 평가 */}
        <div className="final-eval">
          <p>✅ 이 회사 색깔을 웹 경험으로 만들어줄 수 있는 사람</p>
          <p>✅ 포트폴리오형 · 브랜드형 · 인터랙티브형 프로젝트 최적화</p>
        </div>
      </div>
    </div>
  );
};
