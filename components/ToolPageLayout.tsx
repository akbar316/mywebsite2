import React, { useState } from 'react';
import type { ToolData } from '../types';

interface ToolPageLayoutProps {
  tool: ToolData;
  children: React.ReactNode;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ tool, children }) => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2 animate-pulse-glow">{tool.name}</h1>
        <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">{tool.description}</p>
      </header>
      <div className="bg-brand-surface/80 p-6 sm:p-8 rounded-xl shadow-2xl shadow-brand-primary/10 border border-brand-border/30">
        {children}
      </div>
      <div className="mt-12 pt-8 border-t border-brand-border/20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-brand-primary mb-4">About the {tool.name}</h2>
        <p className="text-brand-text-secondary leading-relaxed">
          {tool.seoDescription}
        </p>
      </div>
    </div>
  );
};

// A reusable copy button component for tool pages
interface CopyButtonProps {
    textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-brand-primary text-brand-bg px-4 py-2 rounded-md hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/60 transform hover:-translate-y-0.5 transition-all text-sm font-bold disabled:bg-brand-text-secondary/50 disabled:shadow-none disabled:cursor-not-allowed"
            disabled={!textToCopy}
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};
