import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfCompressorProps {
  tool: ToolData;
}

const PdfCompressor: React.FC<PdfCompressorProps> = ({ tool }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      if (files[0].type === 'application/pdf') {
        setFile(files[0]);
        setError(null);
        setDownloadUrl(null);
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
    e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleCompress = () => {
    if (!file) return;
    setIsCompressing(true);
    setError(null);
    setDownloadUrl(null);
    setTimeout(() => {
      const mockContent = `This is a mock compressed version of ${file.name}.`;
      const blob = new Blob([mockContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setIsCompressing(false);
    }, 2500);
  };

  const reset = () => {
    setFile(null);
    setIsCompressing(false);
    setError(null);
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
  };

  useEffect(() => { return () => { if (downloadUrl) URL.revokeObjectURL(downloadUrl); }; }, [downloadUrl]);

  return (
    <ToolPageLayout tool={tool}>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {!downloadUrl ? (
          <>
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
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {file && !isCompressing && (
              <div className="mt-6 text-center">
                <p>Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</p>
                <button onClick={handleCompress} className="mt-4 bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold text-lg">
                  Compress PDF
                </button>
              </div>
            )}
            {isCompressing && (
              <div className="mt-6 flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                <p className="mt-4 text-brand-text-secondary">Compressing...</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400">Compression Successful!</h3>
            <p className="text-brand-text-secondary mt-2">Original Size: {(file!.size / 1024 / 1024).toFixed(2)} MB</p>
            <p className="text-brand-text-secondary">New Size: {(file!.size / 1024 / 1024 * 0.7).toFixed(2)} MB (Mock)</p>
            <a href={downloadUrl} download={file?.name.replace('.pdf', '-compressed.pdf')} className="mt-6 inline-block bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 font-bold">
              Download Compressed PDF
            </a>
            <button onClick={reset} className="mt-4 ml-4 bg-brand-surface text-brand-text-secondary px-6 py-2 rounded-md">
              Compress Another
            </button>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};

export default PdfCompressor;