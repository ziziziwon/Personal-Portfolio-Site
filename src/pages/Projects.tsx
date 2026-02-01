import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

const projectList: Project[] = [
  {
    id: 1,
    title: "🎫 AMPLIFY - 티켓팅 플랫폼",
    tech: "React 19, TS, Firebase, Zustand",
    description: "전세계 아티스트의 내한 공연을 위한 전문 티켓팅 플랫폼입니다. 인터랙티브 SVG 좌석맵, 대기열 시스템, 관리자 대시보드 등을 포함한 엔터프라이즈급 기능을 제공합니다.",
    demoLink: "https://jjw0144.mycafe24.com/amplify/",
    githubLink: "https://github.com/ziziziwon/Amplify-ticket"
  },
  {
    id: 2,
    title: "🎸 Fender Korea - 3D Web Experience",
    tech: "React, R3F, Three.js, GSAP",
    description: "Fender Korea의 프리미엄 기타를 소개하는 인터랙티브 3D 웹 경험입니다. React Three Fiber와 GSAP를 활용하여 스크롤에 반응하는 몰입형 3D Scene과 비주얼 스토리텔링을 구현했습니다.",
    demoLink: "https://jjw0144.mycafe24.com/fender/",
    githubLink: "https://github.com/ziziziwon/fender-r3f-project"
  },
  {
    id: 3,
    title: "🏎️ F1 Community – Apex Charge",
    tech: "React, TS, GSAP, Zustand",
    description: "2025 F1 시즌을 위한 팬 커뮤니티 플랫폼입니다. 팀 컬러 기반의 동적 테마 시스템과 GSAP 스크롤 모션, 그리고 레이스 데이터/포럼/미디어 갤러리 기능을 포함한 인터랙티브 앱입니다.",
    demoLink: "https://jjw0144.mycafe24.com/apex/",
    githubLink: "https://github.com/ziziziwon/f1-community"
  },
  {
    id: 4,
    title: "🐯🐙 극단이의 우당탕 모험",
    tech: "React 18, TS, Framer Motion, Zustand",
    description: "호랑이 문어 캐릭터 '극단이'의 세계관을 담은 인터랙티브 웹 어드벤처입니다. 스토리텔링, 미니게임, 갤러리 수집 요소가 결합된 몰입형 경험을 제공합니다.",
    demoLink: "https://jjw0144.mycafe24.com/game/",
    githubLink: "https://github.com/ziziziwon/Tiger-Octo-s-ADVENTURE"
  },
  {
    id: 5,
    title: "📊 MUI Portfolio Dashboard",
    tech: "React, MUI, Tailwind, Chart.js",
    description: "React와 Material-UI로 구축된 현대적인 반응형 대시보드입니다. 다크모드, 캘린더, KPI 차트 등 실무에서 쓰이는 컴포넌트 시스템을 구현했습니다.",
    demoLink: "https://jjw0144.mycafe24.com/mui/",
    githubLink: "https://github.com/ziziziwon/mui-ui-system"
  },
  {
    id: 6,
    title: "🍬 Dream Candy Lab - 달콤한 젤리 실험실",
    tech: "React, TS, Firebase, R3F, Zustand",
    description: "하리보 젤리 감성을 담은 3D 인터랙티브 실험실입니다. 7개 씬의 스토리텔링, 나만의 젤리 만들기, 실시간 투표 및 커머스 기능을 제공하는 풀스택 웹 프로젝트입니다.",
    demoLink: "https://jjw0144.mycafe24.com/haribo/",
    githubLink: "https://github.com/ziziziwon/Dream-Candy-Lab"
  }
];

export const Projects: React.FC = () => {
  
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      
      <div className="notice-box projects-box">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer"> GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
