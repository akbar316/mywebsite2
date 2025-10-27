import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface JsonFormatterProps {
  tool: ToolData;
}

const JsonFormatter: React.FC<JsonFormatterProps> = ({ tool }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [formattedJson, setFormattedJson] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (value: string) => {
        setJsonInput(value);
        if (!value.trim()) {
            setError('');
            setFormattedJson('');
            return;
        }
        try {
            const parsed = JSON.parse(value);
            setFormattedJson(JSON.stringify(parsed, null, 2));
            setError('');
        } catch (e) {
            setError('Invalid JSON...');
            setFormattedJson('');
        }
    };
    
    const minify = () => {
        if (!jsonInput.trim() || error) return;
        try {
            const parsed = JSON.parse(jsonInput);
            setFormattedJson(JSON.stringify(parsed));
        } catch (e) {
           // Should not happen if input is valid
        }
    }

    const format = () => {
        if(!jsonInput.trim() || error) return;
        handleInputChange(jsonInput);
    }

    return (
        <ToolPageLayout tool={tool}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                  <textarea
                      value={jsonInput}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Paste your JSON here..."
                      className={`w-full h-96 p-4 bg-brand-bg border rounded-md focus:outline-none focus:ring-2 font-mono ${error ? 'border-red-500 focus:ring-red-500' : 'border-brand-border focus:ring-brand-primary'}`}
                  />
                  {error && <p className="absolute bottom-2 left-2 text-red-500 bg-brand-bg/80 px-2 py-1 rounded text-sm">{error}</p>}
              </div>
              <textarea
                  readOnly
                  value={formattedJson}
                  placeholder="Formatted JSON will appear here..."
                  className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
              />
          </div>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
              <button onClick={format} disabled={!!error} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                  Format / Beautify
              </button>
              <button onClick={minify} disabled={!!error} className="bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-pink-600 disabled:bg-gray-500 disabled:cursor-not-allowed font-bold shadow-lg shadow-brand-accent/40 transform hover:-translate-y-0.5 transition-all">
                  Minify / Compact
              </button>
              <CopyButton textToCopy={formattedJson} />
          </div>
        </ToolPageLayout>
    );
};

export default JsonFormatter;