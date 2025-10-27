import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface UuidGeneratorProps {
  tool: ToolData;
}

const UuidGenerator: React.FC<UuidGeneratorProps> = ({ tool }) => {
    const [uuid, setUuid] = useState(crypto.randomUUID());

    const generateNew = () => {
        setUuid(crypto.randomUUID());
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <input
                  type="text"
                  readOnly
                  value={uuid}
                  className="w-full p-3 bg-brand-bg border border-brand-border rounded-md text-center text-lg font-mono"
              />
              <div className="flex justify-center gap-4">
                  <button onClick={generateNew} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">
                      Generate New UUID
                  </button>
                  <CopyButton textToCopy={uuid} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default UuidGenerator;