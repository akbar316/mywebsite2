import React, { useState, useEffect, useRef } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface CountdownTimerProps {
  tool: ToolData;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ tool }) => {
    const [duration, setDuration] = useState(60);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if(intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if(intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive, timeLeft]);
    
    const startTimer = () => {
        setTimeLeft(duration);
        setIsActive(true);
    };

    const pauseTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(0);
    };

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-6">
              <div className="text-6xl font-mono font-bold bg-brand-bg px-6 py-3 rounded-md">
                  {formatTime(timeLeft)}
              </div>
              {!isActive && timeLeft === 0 && (
                  <div className="flex items-center gap-2">
                      <input
                          type="number"
                          value={duration}
                          onChange={e => setDuration(parseInt(e.target.value, 10))}
                          className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md"
                          placeholder="Seconds"
                      />
                       <button onClick={startTimer} className="bg-brand-primary text-brand-bg px-6 py-2 rounded-md font-bold">Start</button>
                  </div>
              )}
              <div className="flex gap-4">
                  {isActive && <button onClick={pauseTimer} className="bg-yellow-500 text-white px-6 py-2 rounded-md font-bold">Pause</button>}
                  {!isActive && timeLeft > 0 && <button onClick={() => setIsActive(true)} className="bg-green-500 text-white px-6 py-2 rounded-md font-bold">Resume</button>}
                  <button onClick={resetTimer} className="bg-red-500 text-white px-6 py-2 rounded-md font-bold">Reset</button>
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default CountdownTimer;