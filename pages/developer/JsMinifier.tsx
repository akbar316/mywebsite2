import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface JsMinifierProps {
  tool: ToolData;
}

const JsMinifier: React.FC<JsMinifierProps> = ({ tool }) => {
    const [jsInput, setJsInput] = useState('');
    const [minifiedJs, setMinifiedJs] = useState('');
    
    const minify = () => {
        // Simple minification: remove comments and extra whitespace
        const result = jsInput
            .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // remove multiline and single line comments
            .replace(/\s+/g, ' ') // replace multiple spaces/newlines with single space
            .replace(/\s*([;:{},()=\[\]])\s*/g, '$1') // remove space around operators
            .trim();
        setMinifiedJs(result);
    };

    return (
        <ToolPageLayout tool={tool}>
           <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                      value={jsInput}
                      onChange={(e) => setJsInput(e.target.value)}
                      placeholder="Paste your JavaScript code here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
                  <textarea
                      readOnly
                      value={minifiedJs}
                      placeholder="Minified code will appear here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4">
                  <button onClick={minify} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Minify JS
                  </button>
                  <CopyButton textToCopy={minifiedJs} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default JsMinifier;