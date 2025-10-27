import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CharacterCounterProps {
  tool: ToolData;
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({ tool }) => {
  const [text, setText] = useState('');

  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-3xl font-bold text-brand-primary">{charCount}</div>
            <div className="text-sm text-brand-text-secondary">Characters (with spaces)</div>
          </div>
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-3xl font-bold text-brand-primary">{charCountNoSpaces}</div>
            <div className="text-sm text-brand-text-secondary">Characters (no spaces)</div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default CharacterCounter;