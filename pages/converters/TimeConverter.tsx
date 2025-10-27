import React, { useState, useMemo } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface TimeConverterProps {
  tool: ToolData;
}

const units = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
  month: 2628000,
  year: 31536000,
};
type Unit = keyof typeof units;

const TimeConverter: React.FC<TimeConverterProps> = ({ tool }) => {
  const [value, setValue] = useState<number | string>(1);
  const [fromUnit, setFromUnit] = useState<Unit>('hour');
  const [toUnit, setToUnit] = useState<Unit>('minute');

  const result = useMemo(() => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '';
    const valueInSeconds = numValue * units[fromUnit];
    const convertedValue = valueInSeconds / units[toUnit];
    return convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 });
  }, [value, fromUnit, toUnit]);
  
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const unitOptions = Object.keys(units).map(u => <option key={u} value={u}>{u.charAt(0).toUpperCase() + u.slice(1)}</option>);

  return (
    <ToolPageLayout tool={tool}>
      <div className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full max-w-2xl">
          <div className="w-full">
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">From</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
            />
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value as Unit)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
              {unitOptions}
            </select>
          </div>
          <button onClick={handleSwap} className="p-2 bg-brand-surface border border-brand-border rounded-full hover:bg-brand-border w-12 h-12 self-center mx-auto transform transition-transform hover:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M8 3L4 7l4 4"/><path d="M4 7h16"/><path d="M16 21l4-4-4-4"/><path d="M20 17H4"/></svg>
          </button>
          <div className="w-full">
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">To</label>
            <input type="text" readOnly value={result} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md font-bold text-lg"/>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value as Unit)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
              {unitOptions}
            </select>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default TimeConverter;