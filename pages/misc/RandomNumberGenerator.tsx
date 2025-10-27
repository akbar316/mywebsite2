import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface RandomNumberGeneratorProps {
  tool: ToolData;
}

const RandomNumberGenerator: React.FC<RandomNumberGeneratorProps> = ({ tool }) => {
    const [min, setMin] = useState('1');
    const [max, setMax] = useState('100');
    const [number, setNumber] = useState<number | null>(null);

    const generateNumber = () => {
        const minNum = parseInt(min, 10);
        const maxNum = parseInt(max, 10);
        if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) return;
        const result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        setNumber(result);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                  <input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md" />
                  <span>to</span>
                  <input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md" />
              </div>
              <button onClick={generateNumber} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Generate</button>
              {number !== null && (
                  <div className="text-5xl font-bold bg-brand-bg p-6 rounded-md text-brand-primary">
                      {number}
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default RandomNumberGenerator;