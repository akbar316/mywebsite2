import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../types';

interface SearchBarProps {
  tools: Tool[];
}

const SearchBar: React.FC<SearchBarProps> = ({ tools }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Tool[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredTools = tools.filter(tool => 
      tool.name.toLowerCase().includes(lowerCaseQuery) ||
      tool.description.toLowerCase().includes(lowerCaseQuery) ||
      tool.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery))
    );
    
    setResults(filteredTools);
    setIsOpen(true);
  }, [query, tools]);

  // Handle clicks outside the search bar to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto" ref={searchContainerRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (query.trim() !== '') setIsOpen(true); }}
          placeholder="Search for a tool (e.g., 'pdf to word', 'json formatter')..."
          className="w-full px-5 py-4 pl-14 text-lg bg-brand-surface border-2 border-brand-border rounded-full focus:outline-none focus:ring-4 focus:ring-brand-primary/50 focus:border-brand-primary transition-all shadow-lg"
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-text-secondary">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-brand-surface border border-brand-border rounded-lg shadow-2xl z-10 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map(tool => (
                <li key={tool.path}>
                  <Link
                    to={tool.path}
                    onClick={() => {
                      setQuery('');
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-4 p-4 hover:bg-brand-border/50 transition-colors"
                  >
                    <div className="text-brand-primary flex-shrink-0">{tool.icon}</div>
                    <div>
                      <h3 className="font-semibold text-brand-text-primary">{tool.name}</h3>
                      <p className="text-sm text-brand-text-secondary">{tool.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
             <div className="p-4 text-center text-brand-text-secondary">
              No tools found matching "{query}".
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
