import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface RemoveLineBreaksProps {
  tool: ToolData;
}

const RemoveLineBreaks: React.FC<RemoveLineBreaksProps> = ({ tool }) => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const handleRemove = () => {
    setOutput(text.replace(/(\r\n|\n|\r)/gm, ' '));
  };

  const handleRemoveAndJoin = () => {
    setOutput(text.replace(/(\r\n|\n|\r)/gm, ''));
  };

  return (
    <ToolPageLayout tool={tool}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text with line breaks here..."
            className="w-full h-72 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          <textarea
            readOnly
            value={output}
            placeholder="Result without line breaks..."
            className="w-full h-72 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button onClick={handleRemove} className="bg-brand-primary text-white px-6 py-2 rounded-md hover:bg-brand-primary-hover transition-colors">
              Remove and Replace with Space
          </button>
          <button onClick={handleRemoveAndJoin} className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-colors">
              Remove and Join Lines
          </button>
          <CopyButton textToCopy={output} />
        </div>
    </ToolPageLayout>
  );
};

export default RemoveLineBreaks;
