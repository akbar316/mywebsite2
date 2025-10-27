import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfPasswordRemoverProps {
  tool: ToolData;
}

const PdfPasswordRemover: React.FC<PdfPasswordRemoverProps> = ({ tool }) => {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setError('');
            setDownloadUrl(null);
        }
    };
    
    const handleUnlock = () => {
        if (!file || !password) {
            setError('Please provide a file and a password.');
            return;
        }
        setIsUnlocking(true);
        setError('');
        setTimeout(() => {
            const mockContent = `This is a mock unlocked version of "${file.name}".`;
            const blob = new Blob([mockContent], { type: 'application/pdf' });
            setDownloadUrl(URL.createObjectURL(blob));
            setIsUnlocking(false);
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
              <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter PDF password"
                  className="w-full p-2 bg-brand-bg border border-brand-border rounded-md"
              />
              {error && <p className="text-red-500">{error}</p>}
              
              {!isUnlocking && !downloadUrl && file && (
                  <button onClick={handleUnlock} className="bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold text-lg">
                      Unlock PDF
                  </button>
              )}
              {isUnlocking && <p>Unlocking...</p>}
              {downloadUrl && (
                  <div className="text-center">
                      <h3 className="text-xl font-bold text-green-400">PDF Unlocked!</h3>
                      <a href={downloadUrl} download={file?.name.replace('.pdf', '-unlocked.pdf')} className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-md">
                          Download Unlocked PDF
                      </a>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default PdfPasswordRemover;