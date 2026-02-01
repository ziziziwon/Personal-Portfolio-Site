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
    title: "🎨 레트로 포트폴리오",
    tech: "React, Vite, TypeScript",
    description: "2000년대 감성을 담은 Y2K 스타일 포트폴리오 사이트입니다.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "📱 모바일 앱 프로젝트",
    tech: "React Native, Firebase",
    description: "크로스 플랫폼 모바일 애플리케이션 개발 프로젝트입니다.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "🌐 데이터 대시보드",
    tech: "Next.js, Chart.js",
    description: "실시간 데이터 시각화 및 관리자 대시보드 시스템입니다.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "🤖 AI 챗봇 서비스",
    tech: "Python, FastAPI, OpenAI",
    description: "자연어 처리 모델을 활용한 지능형 챗봇 서비스입니다.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "🛍️ 이커머스 플랫폼",
    tech: "Vue.js, Node.js",
    description: "사용자 친화적인 쇼핑몰 웹 애플리케이션입니다.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "🎮 웹 게임 프로젝트",
    tech: "HTML5 Canvas, Phaser",
    description: "브라우저에서 즐기는 레트로 스타일의 아케이드 게임입니다.",
    demoLink: "#",
    githubLink: "#"
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
                <a href={project.demoLink} className="project-link">Demo</a>
                <a href={project.githubLink} className="project-link"> GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
