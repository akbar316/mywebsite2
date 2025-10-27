import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface UrlEncoderProps {
  tool: ToolData;
}

const UrlEncoder: React.FC<UrlEncoderProps> = ({ tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    setOutput(encodeURIComponent(input));
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (e) {
      setOutput('Invalid URL encoded string');
    }
  };

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or URL string..."
          className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <div className="flex justify-center gap-4">
          <button onClick={handleEncode} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Encode</button>
          <button onClick={handleDecode} className="bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-pink-600 font-bold shadow-lg shadow-brand-accent/40 transform hover:-translate-y-0.5 transition-all">Decode</button>
        </div>
        <textarea
          readOnly
          value={output}
          placeholder="Result..."
          className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md"
        />
        <div className="flex justify-end">
            <CopyButton textToCopy={output} />
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default UrlEncoder;