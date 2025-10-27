import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DiceLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
    className="text-brand-primary animate-logo-flash">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="rgba(11, 15, 42, 0.5)"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/>
    <circle cx="8.5" cy="15.5" r="1.5" fill="currentColor"/>
    <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface/30 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-primary/10 border-b border-brand-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center gap-3 [perspective:800px]">
            <div className="w-14 h-14 animate-logo-rotate transition-transform duration-300 hover:scale-110" style={{ transformStyle: 'preserve-3d' }}>
              <DiceLogo />
            </div>
             <span className="text-3xl font-bold text-brand-primary animate-pulse-glow hidden sm:block">
              DiceTools
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-brand-text-secondary hover:text-brand-primary transition-colors ${isActive ? 'text-brand-primary font-semibold' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/privacy" 
              className={({ isActive }) => 
                `text-brand-text-secondary hover:text-brand-primary transition-colors ${isActive ? 'text-brand-primary font-semibold' : ''}`
              }
            >
              Privacy
            </NavLink>
            <NavLink 
              to="/terms" 
              className={({ isActive }) => 
                `text-brand-text-secondary hover:text-brand-primary transition-colors ${isActive ? 'text-brand-primary font-semibold' : ''}`
              }
            >
              Terms
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;