import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface HtmlFormatterProps {
  tool: ToolData;
}

const HtmlFormatter: React.FC<HtmlFormatterProps> = ({ tool }) => {
    const [htmlInput, setHtmlInput] = useState('');
    const [formattedHtml, setFormattedHtml] = useState('');

    const format = () => {
        let indent_level = 0;
        let result_string = '';
        let str = htmlInput.replace(/>\s*</g, '><').trim();

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '<' && str[i + 1] !== '/') {
                result_string += '\n' + '  '.repeat(indent_level);
                indent_level++;
            } else if (str[i] === '<' && str[i + 1] === '/') {
                indent_level--;
                result_string += '\n' + '  '.repeat(indent_level);
            }
            result_string += str[i];
        }
        setFormattedHtml(result_string.trim());
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                      value={htmlInput}
                      onChange={(e) => setHtmlInput(e.target.value)}
                      placeholder="Paste your HTML here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
                  <textarea
                      readOnly
                      value={formattedHtml}
                      placeholder="Formatted HTML will appear here..."
                      className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4">
                  <button onClick={format} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Format HTML
                  </button>
                  <CopyButton textToCopy={formattedHtml} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default HtmlFormatter;