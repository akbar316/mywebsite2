import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface RomanNumeralConverterProps {
  tool: ToolData;
}

const RomanNumeralConverter: React.FC<RomanNumeralConverterProps> = ({ tool }) => {
    const [number, setNumber] = useState('');
    const [roman, setRoman] = useState('');

    const toRoman = (num: number): string => {
        if (num < 1 || num > 3999) return 'Invalid number (1-3999)';
        const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const syb = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let result = "";
        for (let i = 0; i < val.length; i++) {
            while (num >= val[i]) {
                result += syb[i];
                num -= val[i];
            }
        }
        return result;
    };

    const fromRoman = (str: string): number | string => {
        const map: { [key: string]: number } = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
        let result = 0;
        str = str.toUpperCase().replace(/[^IVXLCDM]/g, '');
        for (let i = 0; i < str.length; i++) {
            const current = map[str[i]];
            const next = map[str[i + 1]];
            if (current < next) {
                result += next - current;
                i++;
            } else {
                result += current;
            }
        }
        return isNaN(result) ? 'Invalid Roman numeral' : result;
    }

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNumber(val);
        const num = parseInt(val, 10);
        setRoman(!isNaN(num) ? toRoman(num) : '');
    };

    const handleRomanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase();
        setRoman(val);
        setNumber(val ? fromRoman(val).toString() : '');
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Number (1-3999)</label>
                  <input
                      type="number"
                      value={number}
                      onChange={handleNumberChange}
                      placeholder="Enter number"
                      className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
                  />
              </div>
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Roman Numeral</label>
                  <input
                      type="text"
                      value={roman}
                      onChange={handleRomanChange}
                      placeholder="Enter Roman numeral"
                      className="w-full p-2 bg-brand-bg border border-brand-border rounded-md uppercase"
                  />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default RomanNumeralConverter;