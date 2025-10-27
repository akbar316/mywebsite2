import React, { useState } from 'react';
import { ToolPageLayout, CopyButton } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfTextExtractorProps {
  tool: ToolData;
}

const PdfTextExtractor: React.FC<PdfTextExtractorProps> = ({ tool }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isExtracting, setIsExtracting] = useState(false);
    const [extractedText, setExtractedText] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files[0].type === 'application/pdf') {
                setFile(e.target.files[0]);
                setError('');
                setExtractedText('');
            } else {
                setError('Please upload a valid PDF file.');
                setFile(null);
            }
        }
    };
    
    const handleExtract = () => {
        if (!file) return;
        setIsExtracting(true);
        setError('');
        setTimeout(() => {
            setExtractedText(`This is mock extracted text from "${file.name}".\n\nActual PDF text extraction in the browser is complex and can be done with libraries like PDF.js. This tool demonstrates the user interface for such a feature.`);
            setIsExtracting(false);
        }, 2000);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-4">
              <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
              />
              {error && <p className="text-red-500">{error}</p>}
              {file && !isExtracting && (
                  <button onClick={handleExtract} className="bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold text-lg">
                      Extract Text
                  </button>
              )}
              {isExtracting && (
                  <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-primary"></div>
                      <span>Extracting...</span>
                  </div>
              )}
              {extractedText && (
                  <div className="w-full space-y-2">
                      <textarea
                          readOnly
                          value={extractedText}
                          className="w-full h-64 p-4 bg-brand-bg border border-brand-border rounded-md"
                      />
                      <div className="flex justify-end">
                          <CopyButton textToCopy={extractedText} />
                      </div>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default PdfTextExtractor;