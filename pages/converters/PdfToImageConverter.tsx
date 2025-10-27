import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfToImageConverterProps {
  tool: ToolData;
}

const PdfToImageConverter: React.FC<PdfToImageConverterProps> = ({ tool }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setError(null);
        setDownloadUrls([]);
      } else {
        setError('Please upload a valid PDF file.');
        setFile(null);
      }
    }
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleConvert = () => {
    if (!file) return;
    setIsConverting(true);
    setError(null);
    setDownloadUrls([]);
    setTimeout(() => {
        const createMockImage = (pageNum: number): Promise<string> => {
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                canvas.width = 200; canvas.height = 280;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.fillStyle = 'white'; ctx.fillRect(0, 0, 200, 280);
                    ctx.fillStyle = 'black'; ctx.font = '16px Arial';
                    ctx.fillText(`Page ${pageNum}`, 70, 140);
                    ctx.font = '10px Arial'; ctx.fillText(`(from ${file.name})`, 50, 160);
                }
                canvas.toBlob(blob => { if (blob) resolve(URL.createObjectURL(blob)); }, 'image/png');
            });
        }
        Promise.all([createMockImage(1), createMockImage(2), createMockImage(3)])
            .then(urls => {
                setDownloadUrls(urls);
                setIsConverting(false);
            });
    }, 2500);
  };

  const reset = () => {
    setFile(null);
    setIsConverting(false);
    setError(null);
    if (downloadUrls.length > 0) {
      downloadUrls.forEach(url => URL.revokeObjectURL(url));
      setDownloadUrls([]);
    }
  };
  
  useEffect(() => { return () => { if (downloadUrls.length > 0) downloadUrls.forEach(url => URL.revokeObjectURL(url)); }; }, [downloadUrls]);

  return (
    <ToolPageLayout tool={tool}>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {!file ? (
            <div
              onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}
              className={`w-full p-10 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${ isDragging ? 'border-brand-primary bg-brand-surface' : 'border-brand-border' }`}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input type="file" id="file-input" className="hidden" accept=".pdf" onChange={(e) => handleFileChange(e.target.files)} />
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-text-secondary mb-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <p className="text-brand-text-primary">Drag & drop your PDF here</p>
              <p className="text-sm text-brand-text-secondary">or click to select a file</p>
            </div>
        ) : (
            <div className="w-full text-center">
                {downloadUrls.length === 0 ? (
                <>
                    <p className="font-semibold text-brand-text-primary mb-4">Selected: {file.name}</p>
                    {isConverting ? (
                    <div className="mt-6 flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                        <p className="mt-4 text-brand-text-secondary">Converting...</p>
                    </div>
                    ) : (
                    <button onClick={handleConvert} className="bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold text-lg">
                        Convert to Images
                    </button>
                    )}
                </>
                ) : (
                <div>
                    <h3 className="text-2xl font-bold text-green-400">Conversion Successful!</h3>
                    <p className="text-brand-text-secondary mt-2">Your images are ready to download.</p>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {downloadUrls.map((url, index) => (
                        <div key={index} className="flex flex-col items-center">
                        <img src={url} alt={`Page ${index + 1}`} className="border border-brand-border rounded-md shadow-md mb-2" />
                        <a href={url} download={`${file.name.replace('.pdf', '')}-page-${index + 1}.png`} className="text-sm bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                            Page {index + 1}
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
                )}
                <button onClick={reset} className="mt-6 bg-brand-surface text-brand-text-secondary px-6 py-2 rounded-md hover:bg-brand-border">
                Start Over
                </button>
          </div>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <p className="text-xs text-brand-text-secondary mt-8 text-center max-w-md">
            Note: This tool demonstrates the conversion process. In this demo, mock images are generated instead of processing the actual PDF file content.
        </p>
      </div>
    </ToolPageLayout>
  );
};

export default PdfToImageConverter;