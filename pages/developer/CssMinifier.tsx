import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CssMinifierProps {
  tool: ToolData;
}

const CssMinifier: React.FC<CssMinifierProps> = ({ tool }) => {
    const [cssInput, setCssInput] = useState('');
    const [minifiedCss, setMinifiedCss] = useState('');
    
    const minify = () => {
        const result = cssInput
            .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
            .replace(/\s+/g, ' ') // collapse whitespace
            .replace(/\s*([{}:;,])\s*/g, '$1') // remove space around operators
            .replace(/;}/g, '}') // remove last semicolon in a block
            .trim();
        setMinifiedCss(result);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                      value={cssInput}
                      onChange={(e) => setCssInput(e.target.value)}
                      placeholder="Paste your CSS code here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
                  <textarea
                      readOnly
                      value={minifiedCss}
                      placeholder="Minified CSS will appear here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4">
                  <button onClick={minify} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Minify CSS
                  </button>
                  <CopyButton textToCopy={minifiedCss} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default CssMinifier;