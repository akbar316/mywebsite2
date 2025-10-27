import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface TextSeparatorProps {
  tool: ToolData;
}

const TextSeparator: React.FC<TextSeparatorProps> = ({ tool }) => {
  const [text, setText] = useState('');
  const [separator, setSeparator] = useState(',');
  const [output, setOutput] = useState('');

  const handleSeparate = () => {
    if (!text) return;
    const result = text.split('').join(separator);
    setOutput(result);
  };

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <div className="flex items-center gap-4 flex-wrap">
            <label className="text-brand-text-secondary">Separator:</label>
            <input
                type="text"
                value={separator}
                onChange={(e) => setSeparator(e.target.value)}
                className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md"
            />
            <button onClick={handleSeparate} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Separate</button>
        </div>
        <textarea
          readOnly
          value={output}
          placeholder="Separated text..."
          className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md"
        />
        <div className="flex justify-end">
            <CopyButton textToCopy={output} />
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default TextSeparator;