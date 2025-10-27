import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface QrCodeGeneratorProps {
  tool: ToolData;
}

// Mocking 'qrcode.react' library since we cannot add new dependencies.
// This component simulates a QR code.
const MockQRCode: React.FC<{ value: string; size: number }> = ({ value, size }) => {
    if (!value) {
        return <div style={{width: size, height: size}} className="bg-white border border-brand-border flex items-center justify-center text-sm text-gray-500 p-4 text-center">Enter text to generate QR code</div>
    }
    return (
        <div style={{width: size, height: size}} className="p-2 bg-white flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0 0 H50 V50 H0 Z" fill="#000" />
                <path d="M10 10 H40 V40 H10 Z" fill="#fff" />
                <path d="M15 15 H35 V35 H15 Z" fill="#000" />

                <path d="M100 0 H50 V50 H100 Z" fill="#000" />
                <path d="M60 10 H90 V40 H60 Z" fill="#fff" />
                <path d="M65 15 H85 V35 H65 Z" fill="#000" />
                
                <path d="M0 100 H50 V50 H0 Z" fill="#000" />
                <path d="M10 60 H40 V90 H10 Z" fill="#fff" />
                <path d="M15 65 H35 V85 H15 Z" fill="#000" />

                <text x="50" y="75" fontSize="8" fill="#555" textAnchor="middle">{value.length > 20 ? value.substring(0, 20) + '...' : value}</text>
            </svg>
        </div>
    );
};


const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ tool }) => {
    const [text, setText] = useState('https://dicetools.com');

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                 <MockQRCode value={text} size={256} />
              </div>
              <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text or URL"
                  className="w-full max-w-md p-3 bg-brand-bg border border-brand-border rounded-md"
              />
          </div>
        </ToolPageLayout>
    );
};

export default QrCodeGenerator;