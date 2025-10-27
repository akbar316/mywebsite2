import React from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link
      to={tool.path}
      style={{ transformStyle: 'preserve-3d' }}
      className="bg-brand-surface p-6 rounded-xl border border-brand-border/50 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 transition-all duration-300 group flex flex-col items-start transform hover:-translate-y-2 hover:rotate-x-3"
    >
      <div className="text-brand-primary mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_theme(colors.brand.primary)]">{tool.icon}</div>
      <h3 className="text-lg font-semibold text-brand-text-primary mb-2">{tool.name}</h3>
      <p className="text-sm text-brand-text-secondary flex-grow">{tool.description}</p>
    </Link>
  );
};

export default ToolCard;