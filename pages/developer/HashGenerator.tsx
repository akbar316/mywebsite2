import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface HashGeneratorProps {
  tool: ToolData;
}

// Mocking crypto-js for browser environment without build tools
// In a real project: import MD5 from 'crypto-js/md5'; import SHA256 from 'crypto-js/sha256';
const mockMD5 = (s: string) => `md5_hash_of_${s.substring(0, 10)}...`;
const mockSHA256 = (s: string) => `sha256_hash_of_${s.substring(0, 10)}...`;


const HashGenerator: React.FC<HashGeneratorProps> = ({ tool }) => {
    const [input, setInput] = useState('');
    
    // Note: These hashes are simple placeholders.
    // A real implementation requires a library like crypto-js.
    // This is for demonstration purposes as per environment constraints.
    const md5Hash = input ? mockMD5(input) : '';
    const sha256Hash = input ? mockSHA256(input) : '';

    return (
        <ToolPageLayout tool={tool}>
          <div className="space-y-4">
              <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter text here..."
                  className="w-full h-48 p-4 bg-brand-bg border border-brand-border rounded-md"
              />
              <div className="space-y-3">
                  <HashOutput label="MD5" hash={md5Hash} />
                  <HashOutput label="SHA-256" hash={sha256Hash} />
              </div>
              <p className="text-sm text-center text-brand-text-secondary">Note: Hashes are generated using a simple mock function for this demo.</p>
          </div>
        </ToolPageLayout>
    );
};

const HashOutput: React.FC<{label: string, hash: string}> = ({label, hash}) => (
    <div>
        <label className="block text-sm font-medium text-brand-text-secondary mb-1">{label}</label>
        <div className="flex">
            <input
                type="text"
                readOnly
                value={hash}
                className="w-full p-2 bg-brand-bg border border-brand-border rounded-l-md font-mono"
            />
            <LocalCopyButton textToCopy={hash} />
        </div>
    </div>
);

const LocalCopyButton: React.FC<{textToCopy: string}> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button onClick={handleCopy} disabled={!textToCopy} className="bg-brand-primary p-2 rounded-r-md hover:bg-brand-primary-hover text-brand-bg disabled:bg-gray-500 transition-colors">
            {copied ? '✔' : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
        </button>
    );
}


export default HashGenerator;