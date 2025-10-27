import React, { useState, useMemo } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CurrencyConverterProps {
  tool: ToolData;
}

// Mock currency rates (base: USD)
const mockRates = {
  USD: 1,
  EUR: 0.92,
  JPY: 157.25,
  GBP: 0.79,
  AUD: 1.50,
  CAD: 1.37,
  CHF: 0.90,
  CNY: 7.25,
  INR: 83.54,
};
type Currency = keyof typeof mockRates;

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ tool }) => {
  const [amount, setAmount] = useState<number | string>(100);
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('EUR');

  const result = useMemo(() => {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numAmount)) return '';
    const amountInUSD = numAmount / mockRates[fromCurrency];
    const convertedAmount = amountInUSD * mockRates[toCurrency];
    return convertedAmount.toLocaleString(undefined, { style: 'currency', currency: toCurrency, maximumFractionDigits: 2 });
  }, [amount, fromCurrency, toCurrency]);
  
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  
  const currencyOptions = Object.keys(mockRates).map(c => <option key={c} value={c}>{c}</option>);

  return (
    <ToolPageLayout tool={tool}>
      <div className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full max-w-2xl">
          <div className="w-full">
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">From</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
            />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value as Currency)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
              {currencyOptions}
            </select>
          </div>
          <button onClick={handleSwap} className="p-2 bg-brand-surface border border-brand-border rounded-full hover:bg-brand-border w-12 h-12 self-center mx-auto transform transition-transform hover:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M8 3L4 7l4 4"/><path d="M4 7h16"/><path d="M16 21l4-4-4-4"/><path d="M20 17H4"/></svg>
          </button>
          <div className="w-full">
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">To</label>
            <input type="text" readOnly value={result} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md font-bold text-lg"/>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value as Currency)} className="w-full mt-1 p-2 bg-brand-bg border border-brand-border rounded-md">
              {currencyOptions}
            </select>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default CurrencyConverter;