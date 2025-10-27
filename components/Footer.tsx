import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface/50 mt-12 shadow-inner border-t border-brand-primary/20">
      <div className="container mx-auto px-4 py-6 text-center text-brand-text-secondary text-sm">
        <div className="flex justify-center space-x-6 mb-3">
          <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link>
          <Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link>
          <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} DiceTools. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;