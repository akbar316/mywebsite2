import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CaseConverterProps {
  tool: ToolData;
}

const CaseConverter: React.FC<CaseConverterProps> = ({ tool }) => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  };

  const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const toAlternatingCase = (str: string) => {
    return str.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
  };
  
  const toInverseCase = (str: string) => {
    return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
  };

  const conversions = {
    'Sentence case': toSentenceCase,
    'lower case': (s: string) => s.toLowerCase(),
    'UPPER CASE': (s: string) => s.toUpperCase(),
    'Capitalized Case': toTitleCase,
    'aLtErNaTiNg cAsE': toAlternatingCase,
    'iNVERSE cASE': toInverseCase,
  };

  return (
    <ToolPageLayout tool={tool}>
        <div className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text-primary transition"
          />
          <div className="flex flex-wrap gap-3">
            {Object.entries(conversions).map(([name, func]) => (
              <button
                key={name}
                onClick={() => setOutput(func(text))}
                className="bg-brand-surface border border-brand-border text-brand-text-secondary px-4 py-2 rounded-md hover:bg-brand-border hover:text-brand-text-primary transition-colors transform hover:scale-105"
              >
                {name}
              </button>
            ))}
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="Result will appear here..."
            className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text-primary transition"
          />
          <div className="flex justify-end gap-3">
              <CopyButton textToCopy={output} />
              <button onClick={() => {setText(''); setOutput('');}} className="bg-brand-surface border border-brand-border text-brand-text-secondary px-4 py-2 rounded-md hover:bg-brand-border hover:text-brand-text-primary transition-colors">Clear</button>
          </div>
        </div>
    </ToolPageLayout>
  );
};

export default CaseConverter;
