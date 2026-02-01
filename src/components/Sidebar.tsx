import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>- MENU -</h1>
      </div>
      
      <nav className="menu-list">
        <NavLink 
          to="/" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ HOME
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ About Me
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ Projects
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ Skills
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ Contact
        </NavLink>
        <NavLink 
          to="/blog" 
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          ❤️ Blog <span className="new-badge">New</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-notice">
        <p> 개인 포폴 사이트입니다.</p>
        <p>☆ 프로젝트 및 협업 문의 환영 ☆</p>
      </div>
    </aside>
  );
};
