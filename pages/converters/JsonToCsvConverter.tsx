import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface JsonToCsvConverterProps {
  tool: ToolData;
}

const JsonToCsvConverter: React.FC<JsonToCsvConverterProps> = ({ tool }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [csvOutput, setCsvOutput] = useState('');
    const [error, setError] = useState('');

    const convert = () => {
        if (!jsonInput.trim()) {
            setError('JSON input cannot be empty.');
            setCsvOutput('');
            return;
        }
        try {
            const data = JSON.parse(jsonInput);
            if (!Array.isArray(data)) {
                setError('Input must be a JSON array of objects.');
                setCsvOutput('');
                return;
            }
            if (data.length === 0) {
                setError('JSON array is empty.');
                setCsvOutput('');
                return;
            }

            const headers = Object.keys(data[0]);
            const csvRows = [headers.join(',')];

            for (const row of data) {
                const values = headers.map(header => {
                    const val = row[header] === null || row[header] === undefined ? '' : row[header];
                    const escaped = ('' + val).replace(/"/g, '""');
                    return `"${escaped}"`;
                });
                csvRows.push(values.join(','));
            }

            setCsvOutput(csvRows.join('\n'));
            setError('');
        } catch (e) {
            setError('Invalid JSON format.');
            setCsvOutput('');
        }
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <textarea
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      placeholder='[{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]'
                      className="w-full h-72 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary font-mono"
                  />
                  <textarea
                      readOnly
                      value={csvOutput}
                      placeholder="CSV output will appear here..."
                      className="w-full h-72 p-4 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="flex flex-wrap justify-center items-center gap-4">
                  <button onClick={convert} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Convert
                  </button>
                  <CopyButton textToCopy={csvOutput} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default JsonToCsvConverter;