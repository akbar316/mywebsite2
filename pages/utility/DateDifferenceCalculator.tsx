import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface DateDifferenceCalculatorProps {
  tool: ToolData;
}

const DateDifferenceCalculator: React.FC<DateDifferenceCalculatorProps> = ({ tool }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [diff, setDiff] = useState<string | null>(null);

    const calculateDiff = () => {
        if (!startDate || !endDate) return;
        const start = new Date(startDate);
        const end = new Date(endDate);
        if(start > end) {
            setDiff("End date must be after start date.");
            return;
        }

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        
        setDiff(`${years} years, ${months} months, and ${days} days`);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                  <div>
                      <label className="block text-sm font-medium text-brand-text-secondary mb-1">Start Date</label>
                      <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="p-2 bg-brand-bg border border-brand-border rounded-md text-brand-text-secondary"/>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-brand-text-secondary mb-1">End Date</label>
                      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="p-2 bg-brand-bg border border-brand-border rounded-md text-brand-text-secondary"/>
                  </div>
              </div>
               <button onClick={calculateDiff} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Calculate Difference</button>
               {diff && (
                  <div className="text-center bg-brand-bg p-4 rounded-md mt-4">
                      <p className="text-brand-text-secondary">Difference is:</p>
                      <p className="text-2xl font-bold text-brand-primary">{diff}</p>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default DateDifferenceCalculator;