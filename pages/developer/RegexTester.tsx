import React, { useState, useMemo } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface RegexTesterProps {
  tool: ToolData;
}

const RegexTester: React.FC<RegexTesterProps> = ({ tool }) => {
    const [pattern, setPattern] = useState('');
    const [flags, setFlags] = useState('g');
    const [testString, setTestString] = useState('');
    const [error, setError] = useState('');

    const highlightedString = useMemo(() => {
        if (!pattern) return testString;
        try {
            const regex = new RegExp(pattern, flags);
            setError('');
            return testString.replace(regex, (match) => `<mark>${match}</mark>`);
        } catch (e: any) {
            setError(e.message);
            return testString;
        }
    }, [pattern, flags, testString]);

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4 font-mono">
              <div className="flex items-center bg-brand-bg border border-brand-border rounded-md">
                  <span className="px-3 text-brand-text-secondary">/</span>
                  <input
                      type="text"
                      value={pattern}
                      onChange={(e) => setPattern(e.target.value)}
                      placeholder="Enter your regex pattern"
                      className="flex-grow p-2 bg-transparent focus:outline-none"
                  />
                  <span className="px-3 text-brand-text-secondary">/</span>
                  <input
                      type="text"
                      value={flags}
                      onChange={(e) => setFlags(e.target.value)}
                      placeholder="flags"
                      className="w-16 p-2 bg-transparent focus:outline-none"
                  />
              </div>
              {error && <p className="text-red-500 text-sm px-2">{error}</p>}
              <textarea
                  value={testString}
                  onChange={(e) => setTestString(e.target.value)}
                  placeholder="Enter string to test against"
                  className="w-full h-48 p-2 bg-brand-bg border border-brand-border rounded-md focus:outline-none"
              />
              <div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-text-primary">Result:</h3>
                  <div
                      className="p-2 bg-brand-bg border border-brand-border rounded-md min-h-[12rem] whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: highlightedString.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/<mark>/g, '<mark class="bg-brand-primary/50 rounded">').replace(/<\/mark>/g, '</mark>') }}
                  />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default RegexTester;