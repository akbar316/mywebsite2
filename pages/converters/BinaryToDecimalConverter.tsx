import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface BinaryToDecimalConverterProps {
  tool: ToolData;
}

const BinaryToDecimalConverter: React.FC<BinaryToDecimalConverterProps> = ({ tool }) => {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');

    const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setBinary(val);
        if (/^[01]+$/.test(val) || val === '') {
            setDecimal(val ? parseInt(val, 2).toString() : '');
        } else {
            setDecimal('Invalid binary');
        }
    };

    const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setDecimal(val);
        const num = parseInt(val, 10);
        if (!isNaN(num)) {
            setBinary(num.toString(2));
        } else {
            setBinary(val === '' ? '' : 'Invalid decimal');
        }
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Binary</label>
                  <input
                      type="text"
                      value={binary}
                      onChange={handleBinaryChange}
                      placeholder="Enter binary number"
                      className="w-full p-2 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Decimal</label>
                  <input
                      type="number"
                      value={decimal}
                      onChange={handleDecimalChange}
                      placeholder="Enter decimal number"
                      className="w-full p-2 bg-brand-bg border border-brand-border rounded-md font-mono"
                  />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default BinaryToDecimalConverter;