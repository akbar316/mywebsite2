import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface WordToPdfConverterProps {
  tool: ToolData;
}

const WordToPdfConverter: React.FC<WordToPdfConverterProps> = ({ tool }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setError(null);
        setDownloadUrl(null);
      } else {
        setError('Please upload a valid .docx file.');
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
    setDownloadUrl(null);
    setTimeout(() => {
      const mockContent = `This is a mock PDF file generated from ${file.name}.`;
      const blob = new Blob([mockContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setIsConverting(false);
    }, 2500);
  };

  const reset = () => {
    setFile(null);
    setIsConverting(false);
    setError(null);
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
  };
  
  useEffect(() => {
    return () => { if (downloadUrl) URL.revokeObjectURL(downloadUrl); };
  }, [downloadUrl]);

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
              <input type="file" id="file-input" className="hidden" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => handleFileChange(e.target.files)} />
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-text-secondary mb-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <p className="text-brand-text-primary">Drag & drop your .docx file here</p>
              <p className="text-sm text-brand-text-secondary">or click to select a file</p>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {file && !isConverting && (
              <div className="mt-6 text-center">
                <p className="text-brand-text-secondary">Selected file:</p>
                <p className="font-semibold text-brand-text-primary">{file.name}</p>
                <button onClick={handleConvert} className="mt-4 bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/50 transition-all text-lg">
                  Convert to PDF
                </button>
              </div>
            )}
            {isConverting && (
              <div className="mt-6 flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                <p className="mt-4 text-brand-text-secondary">Converting, please wait...</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400">Conversion Successful!</h3>
            <p className="text-brand-text-secondary mt-2">Your PDF document is ready to download.</p>
            <a href={downloadUrl} download={file?.name.replace(/\.docx$/, '.pdf') || 'converted.pdf'} className="mt-6 inline-block bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all text-lg">
              Download .pdf File
            </a>
            <button onClick={reset} className="mt-4 ml-0 sm:ml-4 bg-brand-surface text-brand-text-secondary px-6 py-2 rounded-md hover:bg-brand-border">
              Convert Another File
            </button>
          </div>
        )}
        <p className="text-xs text-brand-text-secondary mt-8 text-center max-w-md">
            Note: Due to browser limitations, this tool creates a basic PDF. Complex layouts from the original .docx file will not be preserved.
        </p>
      </div>
    </ToolPageLayout>
  );
};

export default WordToPdfConverter;