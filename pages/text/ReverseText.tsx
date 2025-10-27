import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface ReverseTextProps {
  tool: ToolData;
}

const ReverseText: React.FC<ReverseTextProps> = ({ tool }) => {
  const [text, setText] = useState('');

  const reversedText = text.split('').reverse().join('');

  return (
    <ToolPageLayout tool={tool}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to reverse..."
          className="w-full h-64 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <textarea
          readOnly
          value={reversedText}
          placeholder="Reversed text..."
          className="w-full h-64 p-4 bg-brand-bg border border-brand-border rounded-md"
        />
      </div>
      <div className="mt-4 flex justify-end">
          <CopyButton textToCopy={reversedText} />
      </div>
    </ToolPageLayout>
  );
};

export default ReverseText;