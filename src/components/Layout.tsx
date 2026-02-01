import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Sidebar } from './Sidebar';

export const Layout: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
          <div className="page-content">
            <Outlet />
          </div>
      </main>
    </div>
  );
};
