import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface ColorPickerProps {
  tool: ToolData;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ tool }) => {
    const [color, setColor] = useState('#00e5ff');

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
    };
    
    const hexToHsl = (hex: string) => {
        let r = 0, g = 0, b = 0;
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(result) {
            r = parseInt(result[1], 16);
            g = parseInt(result[2], 16);
            b = parseInt(result[3], 16);
        }
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    const rgbValue = hexToRgb(color);
    const hslValue = hexToHsl(color);

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="relative">
                  <div style={{ backgroundColor: color, boxShadow: `0 0 25px ${color}` }} className="w-48 h-48 rounded-full border-8 border-brand-surface"></div>
                  <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
              </div>
              <div className="space-y-3 w-full max-w-sm">
                  <ColorValue label="HEX" value={color} />
                  <ColorValue label="RGB" value={rgbValue || ''} />
                  <ColorValue label="HSL" value={hslValue || ''} />
              </div>
          </div>
        </ToolPageLayout>
    );
};

const ColorValue: React.FC<{label: string, value: string}> = ({label, value}) => (
    <div className="flex items-center">
        <span className="w-16 font-semibold text-brand-text-secondary">{label}:</span>
        <input
            type="text"
            readOnly
            value={value}
            className="flex-grow p-2 bg-brand-bg border border-brand-border rounded-l-md font-mono text-brand-text-primary focus:outline-none"
        />
        <LocalCopyButton textToCopy={value} />
    </div>
);

const LocalCopyButton: React.FC<{textToCopy: string}> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={handleCopy} className="bg-brand-primary p-2 rounded-r-md hover:bg-brand-primary-hover text-brand-bg font-bold transition-colors">
            {copied ? '✔' : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
        </button>
    );
}

export default ColorPicker;