import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface IpInfoLookupProps {
  tool: ToolData;
}

const mockIpInfo = {
    '8.8.8.8': { ip: '8.8.8.8', city: 'Mountain View', region: 'California', country: 'US', org: 'Google LLC' },
    '1.1.1.1': { ip: '1.1.1.1', city: 'South Brisbane', region: 'Queensland', country: 'AU', org: 'Cloudflare, Inc.' },
};

const IpInfoLookup: React.FC<IpInfoLookupProps> = ({ tool }) => {
    const [ip, setIp] = useState('8.8.8.8');
    const [info, setInfo] = useState<any>(null);

    const lookup = () => {
        // Mock lookup
        const data = (mockIpInfo as any)[ip];
        setInfo(data || { error: 'IP not found in mock database' });
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-md mx-auto space-y-4">
              <div className="flex">
                  <input type="text" value={ip} onChange={e => setIp(e.target.value)} className="w-full p-2 bg-brand-bg border border-brand-border rounded-l-md" placeholder="Enter IP Address" />
                  <button onClick={lookup} className="bg-brand-primary text-brand-bg px-4 rounded-r-md font-bold">Lookup</button>
              </div>
              {info && (
                  <div className="bg-brand-bg p-4 rounded-md space-y-1">
                      {info.error ? <p className="text-red-500">{info.error}</p> :
                      Object.entries(info).map(([key, value]) => (
                          <div key={key} className="flex">
                              <span className="w-24 font-semibold capitalize text-brand-text-secondary">{key}:</span>
                              <span>{value as string}</span>
                          </div>
                      ))}
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default IpInfoLookup;