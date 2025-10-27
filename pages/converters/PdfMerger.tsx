import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfMergerProps {
  tool: ToolData;
}

const PdfMerger: React.FC<PdfMergerProps> = ({ tool }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (fileList: FileList | null) => {
    if (fileList) {
      const newFiles = Array.from(fileList).filter(file => file.type === 'application/pdf');
      if (newFiles.length < fileList.length) {
        setError('Only PDF files are accepted.');
      } else { setError(null); }
      setFiles(prev => [...prev, ...newFiles]);
      setDownloadUrl(null);
    }
  };

  const removeFile = (index: number) => { setFiles(files.filter((_, i) => i !== index)); };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleConvert = () => {
    if (files.length < 2) {
      setError('Please select at least two PDF files to merge.');
      return;
    }
    setIsConverting(true);
    setError(null);
    setDownloadUrl(null);
    setTimeout(() => {
      const mockContent = `This is a mock merged PDF containing ${files.length} files.`;
      const blob = new Blob([mockContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setIsConverting(false);
    }, 2500);
  };

  const reset = () => {
    setFiles([]);
    setIsConverting(false);
    setError(null);
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
  };

  useEffect(() => { return () => { if (downloadUrl) URL.revokeObjectURL(downloadUrl); }; }, [downloadUrl]);

  return (
    <ToolPageLayout tool={tool}>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {!downloadUrl ? (
          <>
            <div
              onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}
              className={`w-full p-10 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${ isDragging ? 'border-brand-primary bg-brand-surface' : 'border-brand-border' }`}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input type="file" id="file-input" className="hidden" accept=".pdf" multiple onChange={(e) => handleFileChange(e.target.files)} />
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-text-secondary mb-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <p className="text-brand-text-primary">Drag & drop your PDFs here</p>
              <p className="text-sm text-brand-text-secondary">or click to select files</p>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {files.length > 0 && (
              <div className="mt-6 w-full">
                <h3 className="text-lg font-semibold text-brand-text-primary">Files to Merge:</h3>
                <ul className="mt-2 space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex justify-between items-center p-2 bg-brand-bg rounded-md">
                      <span className="truncate">{file.name}</span>
                      <button onClick={() => removeFile(index)} className="text-red-500 font-bold ml-4">✕</button>
                    </li>
                  ))}
                </ul>
                {!isConverting ? (
                  <button onClick={handleConvert} disabled={files.length < 2} className="mt-4 w-full bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg disabled:bg-gray-500 disabled:cursor-not-allowed transition-all text-lg">
                    Merge PDFs
                  </button>
                ) : (
                  <div className="mt-6 flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                    <p className="mt-4 text-brand-text-secondary">Merging, please wait...</p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400">Merge Successful!</h3>
            <p className="text-brand-text-secondary mt-2">Your merged PDF is ready to download.</p>
            <a href={downloadUrl} download="merged.pdf" className="mt-6 inline-block bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 font-bold shadow-lg">
              Download Merged PDF
            </a>
            <button onClick={reset} className="mt-4 ml-4 bg-brand-surface text-brand-text-secondary px-6 py-2 rounded-md">
              Merge More Files
            </button>
          </div>
        )}
         <p className="text-xs text-brand-text-secondary mt-8 text-center max-w-md">
            Note: This is a demonstration tool. The actual merging of PDF files is a complex process and is not performed here.
        </p>
      </div>
    </ToolPageLayout>
  );
};

export default PdfMerger;