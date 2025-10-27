import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface LoremIpsumGeneratorProps {
  tool: ToolData;
}

const LoremIpsumGenerator: React.FC<LoremIpsumGeneratorProps> = ({ tool }) => {
  const [count, setCount] = useState(5);
  const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [output, setOutput] = useState('');

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const generate = () => {
    const words = lorem.split(' ');
    let result = '';
    if (type === 'words') {
      result = words.slice(0, count).join(' ');
    } else if (type === 'sentences') {
      const sentences = lorem.match(/[^.!?]+[.!?]+/g) || [];
      result = Array(count).fill(0).map(() => sentences[Math.floor(Math.random() * sentences.length)]).join(' ');
    } else { // paragraphs
      result = Array(count).fill(lorem).join('\n\n');
    }
    setOutput(result);
  };
  
  React.useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
            min="1"
            className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="p-2 bg-brand-bg border border-brand-border rounded-md"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
          <button onClick={generate} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Generate</button>
        </div>
        <textarea
          readOnly
          value={output}
          className="w-full h-72 p-4 bg-brand-bg border border-brand-border rounded-md"
        />
        <div className="flex justify-end">
          <CopyButton textToCopy={output} />
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default LoremIpsumGenerator;