import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
