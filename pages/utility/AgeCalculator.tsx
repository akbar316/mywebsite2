import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface AgeCalculatorProps {
  tool: ToolData;
}

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ tool }) => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

    const calculateAge = () => {
        if (!birthDate) return;
        const today = new Date();
        const birth = new Date(birthDate);
        
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-4">
              <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="p-2 bg-brand-bg border border-brand-border rounded-md text-brand-text-secondary"
              />
              <button onClick={calculateAge} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                  Calculate Age
              </button>
              {age && (
                  <div className="grid grid-cols-3 gap-4 text-center mt-4">
                      <div className="bg-brand-bg p-4 rounded-md">
                          <div className="text-3xl font-bold text-brand-primary">{age.years}</div>
                          <div className="text-brand-text-secondary">Years</div>
                      </div>
                      <div className="bg-brand-bg p-4 rounded-md">
                          <div className="text-3xl font-bold text-brand-primary">{age.months}</div>
                          <div className="text-brand-text-secondary">Months</div>
                      </div>
                      <div className="bg-brand-bg p-4 rounded-md">
                          <div className="text-3xl font-bold text-brand-primary">{age.days}</div>
                          <div className="text-brand-text-secondary">Days</div>
                      </div>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default AgeCalculator;