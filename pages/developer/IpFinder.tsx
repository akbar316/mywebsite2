import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface IpFinderProps {
  tool: ToolData;
}

const IpFinder: React.FC<IpFinderProps> = ({ tool }) => {
    const [ip, setIp] = useState('Loading...');

    useEffect(() => {
        // In a real app, you would fetch this from an API.
        // For this demo, we'll just use a mock IP.
        setTimeout(() => {
            setIp('8.8.8.8');
        }, 1000);
    }, []);

    return (
        <ToolPageLayout tool={tool}>
          <div className="text-center space-y-4">
              <p className="text-brand-text-secondary">Your Public IP Address is:</p>
              <div className="text-4xl font-bold bg-brand-bg p-4 rounded-md text-brand-primary">
                  {ip}
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default IpFinder;