import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter';
import './Home.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const counter = useCounter();

  return (
    <div className="home-container">
      {/* 헤더 영역 */}
      <div className="header-section">
          <h1>Welcome to My Portfolio</h1>
      </div>

      {/* 상태 표시 바 */}
      <div className="warning-bar">
        <p>⭐⭐⭐ 안녕하세요! 저의 포트폴리오 사이트에 오신 것을 환영합니다! ⭐⭐⭐</p>
      </div>

      {/* 카운터 */}
      <div className="counter-area">
        <p className="counter-label">방문자 수</p>
        <div className="counter-wrapper">
          <div className="counter-display">{counter}</div>
        </div>
        <p className="counter-label">번째 방문자입니다!</p>
      </div>

      <div className="notice-box">
        <div className="home-content">
          <div className="home-intro">
            <h2>안녕하세요!</h2>
            <p>레트로 감성을 사랑하는 마음을 담아 만든 개인 포트폴리오 사이트입니다.</p>
            <p>아무래도,,, 개인 사이트니깐 제가 좋아하는 것을 표현하고 싶었어요 ('ㅇ')</p>
            <br />
            <p>왼쪽 메뉴나 아래 버튼에서 원하는 페이지를 선택해주세요!</p>
            <br />
            <div className="quick-links">
              <button className="retro-button" onClick={() => navigate('/about')}>About Me</button>
              <button className="retro-button" onClick={() => navigate('/projects')}>Projects</button>
              <button className="retro-button" onClick={() => navigate('/contact')}>Contact</button>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="announcement-bar">
        - Personal Portfolio Site -
      </div>

      <div className="footer-links">
        <p>© Jiwon Jeong | Built with Vite + React + TypeScript</p>
      </div>
    </div>
  );
};
