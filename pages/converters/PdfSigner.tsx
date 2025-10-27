import React, { useState, useRef, useEffect } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface PdfSignerProps {
  tool: ToolData;
}

const PdfSigner: React.FC<PdfSignerProps> = ({ tool }) => {
    const [file, setFile] = useState<File | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isSigning, setIsSigning] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let drawing = false;
        const startDrawing = (e: MouseEvent) => { drawing = true; draw(e); };
        const stopDrawing = () => { drawing = false; ctx.beginPath(); };
        const draw = (e: MouseEvent) => {
            if (!drawing) return;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000000';
            const rect = canvas.getBoundingClientRect();
            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        };
        
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', draw);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mousemove', draw);
        };
    }, []);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
        }
    };
    
    const handleSign = () => {
        if (!file || !canvasRef.current) return;
        setIsSigning(true);
        setTimeout(() => {
            const mockContent = `This is a mock signed PDF of "${file.name}". Your signature would be applied here.`;
            const blob = new Blob([mockContent], { type: 'application/pdf' });
            setDownloadUrl(URL.createObjectURL(blob));
            setIsSigning(false);
        }, 2000);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-4">
              <input type="file" accept=".pdf" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md" />
              {file && (
                  <>
                      <p>Draw your signature below:</p>
                      <canvas ref={canvasRef} width="400" height="200" className="bg-white border border-brand-border rounded-md" />
                      <button onClick={clearCanvas} className="bg-gray-400 text-white px-4 py-1 rounded-md">Clear</button>
                      {!isSigning && !downloadUrl && (
                          <button onClick={handleSign} className="bg-brand-primary text-brand-bg px-8 py-3 rounded-md">
                              Sign and Download
                          </button>
                      )}
                      {isSigning && <p>Signing...</p>}
                      {downloadUrl && (
                          <a href={downloadUrl} download={file.name.replace('.pdf', '-signed.pdf')} className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-md">
                              Download Signed PDF
                          </a>
                      )}
                  </>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default PdfSigner;