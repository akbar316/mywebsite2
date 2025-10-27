import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PercentageCalculatorProps {
  tool: ToolData;
}

const PercentageCalculator: React.FC<PercentageCalculatorProps> = ({ tool }) => {
    const [valA1, setValA1] = useState('');
    const [valA2, setValA2] = useState('');
    const [resultA, setResultA] = useState('');

    const [valB1, setValB1] = useState('');
    const [valB2, setValB2] = useState('');
    const [resultB, setResultB] = useState('');

    const calculateA = () => { // What is X% of Y
        const v1 = parseFloat(valA1);
        const v2 = parseFloat(valA2);
        if (isNaN(v1) || isNaN(v2)) return;
        setResultA(((v1 / 100) * v2).toString());
    }

    const calculateB = () => { // X is what % of Y
        const v1 = parseFloat(valB1);
        const v2 = parseFloat(valB2);
        if (isNaN(v1) || isNaN(v2) || v2 === 0) return;
        setResultB(((v1 / v2) * 100).toFixed(2) + '%');
    }

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-6">
              <div className="bg-brand-bg p-4 rounded-lg">
                  <p className="text-lg font-semibold mb-2 flex flex-wrap items-center gap-2">What is <input value={valA1} onChange={e => setValA1(e.target.value)} type="number" className="w-20 p-1 bg-brand-surface border border-brand-border rounded-md"/>% of <input value={valA2} onChange={e => setValA2(e.target.value)} type="number" className="w-24 p-1 bg-brand-surface border border-brand-border rounded-md"/>?</p>
                  <div className="flex items-center gap-4">
                      <button onClick={calculateA} className="bg-brand-primary px-4 py-1 rounded hover:bg-brand-primary-hover text-brand-bg font-bold">Calculate</button>
                      {resultA && <span className="font-bold text-lg text-brand-primary">{resultA}</span>}
                  </div>
              </div>
              <div className="bg-brand-bg p-4 rounded-lg">
                  <p className="text-lg font-semibold mb-2 flex flex-wrap items-center gap-2"><input value={valB1} onChange={e => setValB1(e.target.value)} type="number" className="w-24 p-1 bg-brand-surface border border-brand-border rounded-md"/> is what percent of <input value={valB2} onChange={e => setValB2(e.target.value)} type="number" className="w-24 p-1 bg-brand-surface border border-brand-border rounded-md"/>?</p>
                   <div className="flex items-center gap-4">
                      <button onClick={calculateB} className="bg-brand-primary px-4 py-1 rounded hover:bg-brand-primary-hover text-brand-bg font-bold">Calculate</button>
                      {resultB && <span className="font-bold text-lg text-brand-primary">{resultB}</span>}
                  </div>
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default PercentageCalculator;