import React from 'react';

// Represents the static data for a tool
export interface ToolData {
  path: string;
  name: string;
  title: string;
  description: string;
  seoDescription: string;
  icon: React.ReactNode;
  keywords: string[];
  category: 'Text' | 'Converters' | 'PDF' | 'Developer' | 'Utility' | 'Misc';
}

// Represents the full tool object, including its lazy-loaded component
export interface Tool extends ToolData {
  component: React.LazyExoticComponent<React.FC<{ tool: ToolData }>>;
}
