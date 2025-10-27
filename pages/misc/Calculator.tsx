import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CalculatorProps {
  tool: ToolData;
}

const Calculator: React.FC<CalculatorProps> = ({ tool }) => {
    const [display, setDisplay] = useState('0');

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            setDisplay('0');
        } else if (value === '=') {
            try {
                // Using new Function is slightly safer than eval for this context
                const result = new Function('return ' + display.replace(/%/g, '/100'))();
                setDisplay(String(result));
            } catch (e) {
                setDisplay('Error');
            }
        } else if (value === 'DEL') {
            setDisplay(display.slice(0, -1) || '0');
        } else {
            if (display === '0' || display === 'Error') {
                setDisplay(value);
            } else {
                setDisplay(display + value);
            }
        }
    };
    
    const buttons = ['C', '%', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-xs mx-auto bg-brand-bg/50 p-4 rounded-2xl shadow-inner backdrop-blur-sm border border-brand-primary/20 shadow-2xl shadow-brand-primary/10">
              <div className="bg-black/40 text-right p-4 rounded-lg mb-4 text-4xl font-mono break-all text-brand-text-primary h-20 flex items-end justify-end">
                  {display}
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                  {buttons.map(btn => {
                      const isOperator = ['/', '*', '-', '+'].includes(btn);
                      const isSpecial = ['C', '%', 'DEL'].includes(btn);
                      const isEqual = btn === '=';
                      return (
                          <button
                              key={btn}
                              onClick={() => handleButtonClick(btn)}
                              className={`p-4 rounded-lg text-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-brand-text-primary font-semibold border border-transparent ${
                                  isEqual ? 'col-span-2 bg-brand-primary text-brand-bg hover:bg-brand-primary-hover shadow-brand-primary/40 border-brand-primary/50' :
                                  isOperator ? 'bg-brand-accent/90 hover:bg-brand-accent shadow-brand-accent/30 text-white' : 
                                  isSpecial ? 'bg-brand-surface/80 hover:bg-brand-border shadow-brand-border/30' : 
                                  'bg-brand-surface/50 hover:bg-brand-border shadow-brand-border/30'
                              }`}
                          >
                              {btn}
                          </button>
                      )
                  })}
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default Calculator;