import React, { useState, useMemo } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface UnitConverterProps {
  tool: ToolData;
}

const categories = {
  Length: { meter: 1, foot: 0.3048, inch: 0.0254, kilometer: 1000, mile: 1609.34 },
  Mass: { kilogram: 1, pound: 0.453592, ounce: 0.0283495, gram: 0.001 },
  Time: { second: 1, minute: 60, hour: 3600, day: 86400 },
  Speed: { 'm/s': 1, 'km/h': 0.277778, 'mph': 0.44704, 'knot': 0.514444 },
};
type Category = keyof typeof categories;

const UnitConverter: React.FC<UnitConverterProps> = ({ tool }) => {
    const [category, setCategory] = useState<Category>('Length');
    const [value, setValue] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState('meter');
    const [toUnit, setToUnit] = useState('foot');

    const units = categories[category];

    const result = useMemo(() => {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) return '';
        const baseValue = numValue * (units as any)[fromUnit];
        const convertedValue = baseValue / (units as any)[toUnit];
        return convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 });
    }, [value, fromUnit, toUnit, units]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value as Category;
        setCategory(newCategory);
        const newUnits = Object.keys(categories[newCategory]);
        setFromUnit(newUnits[0]);
        setToUnit(newUnits[1] || newUnits[0]);
    };

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center space-y-4">
              <select value={category} onChange={handleCategoryChange} className="w-full max-w-sm p-2 bg-brand-bg border border-brand-border rounded-md">
                  {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full max-w-2xl">
                  <div className="w-full">
                      <label className="block text-sm font-medium text-brand-text-secondary mb-1">From</label>
                      <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md" />
                      <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
                          {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
                      </select>
                  </div>
                  <button onClick={handleSwap} className="p-2 bg-brand-surface border border-brand-border rounded-full hover:bg-brand-border w-12 h-12 self-center mx-auto transform transition-transform hover:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M8 3L4 7l4 4"/><path d="M4 7h16"/><path d="M16 21l4-4-4-4"/><path d="M20 17H4"/></svg>
                  </button>
                  <div className="w-full">
                      <label className="block text-sm font-medium text-brand-text-secondary mb-1">To</label>
                      <input type="text" readOnly value={result} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md font-bold text-lg"/>
                      <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
                          {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
                      </select>
                  </div>
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default UnitConverter;