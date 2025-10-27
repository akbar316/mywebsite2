import React, { useState, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfSplitterProps {
  tool: ToolData;
}

const PdfSplitter: React.FC<PdfSplitterProps> = ({ tool }) => {
  const [file, setFile] = useState<File | null>(null);
  const [ranges, setRanges] = useState('1-2, 4');
  const [isSplitting, setIsSplitting] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      if (files[0].type === 'application/pdf') {
        setFile(files[0]);
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
    e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleSplit = () => {
    if (!file || !ranges) return;
    setIsSplitting(true);
    setError(null);
    setDownloadUrls([]);
    setTimeout(() => {
      const parts = ranges.split(',').map(r => r.trim());
      const urls = parts.map(part => {
        const mockContent = `This is a mock PDF for page range "${part}" from ${file.name}.`;
        const blob = new Blob([mockContent], { type: 'application/pdf' });
        return URL.createObjectURL(blob);
      });
      setDownloadUrls(urls);
      setIsSplitting(false);
    }, 2500);
  };

  const reset = () => {
    setFile(null);
    setIsSplitting(false);
    setError(null);
    downloadUrls.forEach(url => URL.revokeObjectURL(url));
    setDownloadUrls([]);
  };

  useEffect(() => {
    return () => { downloadUrls.forEach(url => URL.revokeObjectURL(url)); };
  }, [downloadUrls]);

  return (
    <ToolPageLayout tool={tool}>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {!file ? (
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
          </>
        ) : (
          <div className="w-full text-center">
            {downloadUrls.length === 0 ? (
              <>
                <p className="font-semibold text-brand-text-primary mb-4">Selected: {file.name}</p>
                <div className="mb-4">
                  <label htmlFor="ranges" className="block text-brand-text-secondary mb-2">Page ranges to extract (e.g., 1-3, 5, 8-10)</label>
                  <input type="text" id="ranges" value={ranges} onChange={(e) => setRanges(e.target.value)} className="w-full max-w-sm p-2 bg-brand-bg border border-brand-border rounded-md" placeholder="e.g., 1-3, 5, 8-10" />
                </div>
                {!isSplitting ? (
                  <button onClick={handleSplit} className="bg-brand-primary text-brand-bg px-8 py-3 rounded-md hover:bg-brand-primary-hover font-bold text-lg">
                    Split PDF
                  </button>
                ) : (
                  <div className="mt-6 flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                    <p className="mt-4 text-brand-text-secondary">Splitting...</p>
                  </div>
                )}
              </>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-green-400">Split Successful!</h3>
                <div className="mt-4 space-y-2">
                  {downloadUrls.map((url, index) => (
                    <a key={index} href={url} download={`${file.name.replace('.pdf', '')}-part-${index + 1}.pdf`} className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                      Download Part {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
            <button onClick={reset} className="mt-4 bg-brand-surface text-brand-text-secondary px-6 py-2 rounded-md hover:bg-brand-border">
              Start Over
            </button>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};

export default PdfSplitter;