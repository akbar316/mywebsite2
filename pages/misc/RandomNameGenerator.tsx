import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface RandomNameGeneratorProps {
  tool: ToolData;
}

const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Katie', 'Michael', 'Sarah', 'David', 'Laura'];
const lastNames = ['Smith', 'Doe', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Wilson'];

const RandomNameGenerator: React.FC<RandomNameGeneratorProps> = ({ tool }) => {
    const [name, setName] = useState('');

    const generateName = () => {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        setName(`${first} ${last}`);
    };
    
    React.useEffect(generateName, []);

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-4">
              <div className="text-3xl font-bold bg-brand-bg p-4 rounded-md w-full text-center">
                  {name || '...'}
              </div>
               <div className="flex justify-center gap-4">
                  <button onClick={generateName} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Generate New Name
                  </button>
                  <CopyButton textToCopy={name} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default RandomNameGenerator;