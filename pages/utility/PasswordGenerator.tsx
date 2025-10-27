import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PasswordGeneratorProps {
  tool: ToolData;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ tool }) => {
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');
    
    React.useEffect(() => {
      generatePassword();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    const generatePassword = () => {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let charset = '';
        if (includeUppercase) charset += upper;
        if (includeLowercase) charset += lower;
        if (includeNumbers) charset += numbers;
        if (includeSymbols) charset += symbols;
        
        if (charset === '') {
            setPassword('Please select at least one character type.');
            return;
        }

        let newPassword = '';
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);
        for (let i = 0; i < length; i++) {
            newPassword += charset[array[i] % charset.length];
        }
        setPassword(newPassword);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-md mx-auto space-y-4">
              <div className="flex">
                  <input type="text" readOnly value={password} className="w-full p-2 bg-brand-bg border border-brand-border rounded-l-md font-mono" />
                  <CopyButton textToCopy={password} />
              </div>
              <div className="space-y-2 bg-brand-bg p-4 rounded-md">
                  <div>
                      <label>Length: {length}</label>
                      <input type="range" min="4" max="64" value={length} onChange={e => setLength(parseInt(e.target.value, 10))} className="w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                      <Checkbox label="Uppercase" checked={includeUppercase} onChange={setIncludeUppercase} />
                      <Checkbox label="Lowercase" checked={includeLowercase} onChange={setIncludeLowercase} />
                      <Checkbox label="Numbers" checked={includeNumbers} onChange={setIncludeNumbers} />
                      <Checkbox label="Symbols" checked={includeSymbols} onChange={setIncludeSymbols} />
                  </div>
              </div>
               <button onClick={generatePassword} className="w-full bg-brand-primary text-brand-bg py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Generate Password</button>
          </div>
        </ToolPageLayout>
    );
};

const Checkbox: React.FC<{label: string, checked: boolean, onChange: (c: boolean) => void}> = ({label, checked, onChange}) => (
    <label className="flex items-center space-x-2">
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
        <span>{label}</span>
    </label>
);

export default PasswordGenerator;