import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface Base64ToolProps {
  tool: ToolData;
}

const Base64Tool: React.FC<Base64ToolProps> = ({ tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError('');
    } catch (e) {
      setError('Could not encode text to Base64. Check for special characters.');
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError('');
    } catch (e) {
      setError('Invalid Base64 string.');
      setOutput('');
    }
  };

  return (
    <ToolPageLayout tool={tool}>
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or Base64 string..."
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
          className={`w-full h-48 p-4 bg-brand-bg border rounded-md ${error ? 'border-red-500' : 'border-brand-border'}`}
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex justify-end">
            <CopyButton textToCopy={output} />
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default Base64Tool;