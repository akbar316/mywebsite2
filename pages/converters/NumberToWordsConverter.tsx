import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface NumberToWordsConverterProps {
  tool: ToolData;
}

const NumberToWordsConverter: React.FC<NumberToWordsConverterProps> = ({ tool }) => {
    const [number, setNumber] = useState<string>('');
    const [words, setWords] = useState<string>('');

    const convertToWords = () => {
        const num = parseInt(number, 10);
        if (isNaN(num)) {
            setWords('Invalid number');
            return;
        }
        setWords(numberToWords(num));
    };

    const numberToWords = (num: number): string => {
        if (num === 0) return "zero";

        const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];
        
        const makeGroup = (n: number) => {
            let res = [];
            let rem = n;
            if (rem >= 100) {
                res.push(a[Math.floor(rem / 100)]);
                res.push("hundred");
                rem %= 100;
            }
            if (rem >= 20) {
                res.push(b[Math.floor(rem / 10)]);
                rem %= 10;
            }
            if (rem > 0) {
                res.push(a[rem]);
            }
            return res.join(' ');
        }
        
        if (num.toString().length > 18) {
             return "Number is too large to convert.";
        }

        let groups = [];
        let tempNum = num;
        while (tempNum > 0) {
            groups.push(tempNum % 1000);
            tempNum = Math.floor(tempNum / 1000);
        }

        let result = [];
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] !== 0) {
                result.unshift(makeGroup(groups[i]) + (i > 0 ? " " + g[i] : ""));
            }
        }
        return result.join(' ').trim();
    }

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter a number..."
                  className="w-full p-3 bg-brand-bg border border-brand-border rounded-md text-lg"
              />
              <button
                  onClick={convertToWords}
                  className="w-full bg-brand-primary text-brand-bg py-2 rounded-md hover:bg-brand-primary-hover transition-colors font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5"
              >
                  Convert
              </button>
              <div className="p-4 bg-brand-bg border border-brand-border rounded-md min-h-[6rem]">
                  <p className="text-lg capitalize text-brand-text-primary">{words}</p>
              </div>
               <div className="flex justify-end">
                  <CopyButton textToCopy={words} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default NumberToWordsConverter;