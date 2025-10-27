import React from 'react';
import { tools } from '../utils/tools';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';
import SearchBar from '../components/SearchBar';
import type { Tool } from '../types';

const HomePage: React.FC = () => {
  const categories = Array.from(new Set(tools.map(tool => tool.category)));
  const categorizedTools: Record<string, Tool[]> = {};
  categories.forEach(category => {
    categorizedTools[category] = tools.filter(tool => tool.category === category);
  });
  
  // Define the order of categories
  const categoryOrder: Tool['category'][] = ['PDF', 'Text', 'Converters', 'Developer', 'Utility', 'Misc'];
  
  const sortedCategories = categoryOrder.filter(cat => categories.includes(cat));

  return (
    <div className="space-y-16">
      <header className="text-center pt-8">
        <h1 className="text-5xl lg:text-6xl font-bold text-brand-text-primary mb-4 animate-pulse-glow">
          Dicetools — All-in-One Utility Hub
        </h1>
        <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
          Your futuristic toolkit for PDF, text, development, and conversion needs. Fast, free, and secure.
        </p>
      </header>

      <div className="-my-4">
        <SearchBar tools={tools} />
      </div>

      <AdPlaceholder className="my-8" />
      
      {sortedCategories.map((category) => (
        <section key={category}>
          <h2 className="text-3xl font-bold text-brand-primary mb-6" style={{textShadow: '0 0 10px rgba(0, 229, 255, 0.5)'}}>
            {category} Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categorizedTools[category].map((tool) => (
              <ToolCard key={tool.path} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;