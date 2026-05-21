import React from 'react';
import Navbar from '../components/Navbar/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-bg text-text transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Main content slot */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
