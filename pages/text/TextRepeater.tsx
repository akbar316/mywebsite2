import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface TextRepeaterProps {
  tool: ToolData;
}

const TextRepeater: React.FC<TextRepeaterProps> = ({ tool }) => {
  const [text, setText] = useState('');
  const [times, setTimes] = useState<number | string>(10);
  const [separator, setSeparator] = useState(' ');
  const [output, setOutput] = useState('');

  const handleRepeat = () => {
    const numTimes = typeof times === 'string' ? parseInt(times, 10) : times;
    if (isNaN(numTimes) || numTimes <= 0 || !text) return;
    const result = Array(numTimes).fill(text).join(separator);
    setOutput(result);
  };

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text to repeat..."
          className="w-full p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-brand-text-secondary mb-1">Number of Repetitions</label>
                <input
                    type="number"
                    value={times}
                    onChange={(e) => setTimes(e.target.valueAsNumber || '')}
                    min="1"
                    max="10000"
                    className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-brand-text-secondary mb-1">Separator</label>
                <input
                    type="text"
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
                />
            </div>
        </div>
        <button onClick={handleRepeat} className="w-full bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all font-bold">
            Repeat Text
        </button>
        <textarea
          readOnly
          value={output}
          placeholder="Repeated text will appear here..."
          className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md"
        />
        <div className="flex justify-end">
            <CopyButton textToCopy={output} />
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default TextRepeater;