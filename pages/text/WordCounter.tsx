import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface WordCounterProps {
  tool: ToolData;
}

const WordCounter: React.FC<WordCounterProps> = ({ tool }) => {
  const [text, setText] = useState('');

  const stats = React.useMemo(() => {
    if (!text.trim()) {
      return { words: 0, characters: 0, sentences: 0, paragraphs: 0 };
    }
    const words = text.match(/\b\w+\b/g)?.length || 0;
    const characters = text.length;
    const sentences = text.match(/[^.!?]+[.!?]+/g)?.length || 0;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    return { words, characters, sentences, paragraphs };
  }, [text]);

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-2xl font-bold text-brand-primary">{stats.words}</div>
            <div className="text-sm text-brand-text-secondary">Words</div>
          </div>
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-2xl font-bold text-brand-primary">{stats.characters}</div>
            <div className="text-sm text-brand-text-secondary">Characters</div>
          </div>
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-2xl font-bold text-brand-primary">{stats.sentences}</div>
            <div className="text-sm text-brand-text-secondary">Sentences</div>
          </div>
          <div className="bg-brand-bg p-4 rounded-md">
            <div className="text-2xl font-bold text-brand-primary">{stats.paragraphs}</div>
            <div className="text-sm text-brand-text-secondary">Paragraphs</div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default WordCounter;
