import React, { useState, useEffect, useRef } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface StopwatchProps {
  tool: ToolData;
}

const Stopwatch: React.FC<StopwatchProps> = ({ tool }) => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 10);
            }, 10);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive]);

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
        const milliseconds = (ms % 1000).toString().padStart(3, '0').slice(0, 2);
        return `${minutes}:${seconds}.${milliseconds}`;
    };
    
    const handleLap = () => setLaps(prev => [...prev, time]);
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setLaps([]);
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="flex flex-col items-center gap-6">
              <div className="text-7xl font-mono font-bold bg-brand-bg px-6 py-3 rounded-md">
                  {formatTime(time)}
              </div>
              <div className="flex gap-4">
                  {!isActive ?
                      <button onClick={() => setIsActive(true)} className="bg-green-500 text-white w-24 py-2 rounded-md font-bold">Start</button> :
                      <button onClick={() => setIsActive(false)} className="bg-yellow-500 text-white w-24 py-2 rounded-md font-bold">Pause</button>
                  }
                  <button onClick={handleLap} disabled={!isActive} className="bg-brand-primary text-brand-bg w-24 py-2 rounded-md disabled:bg-gray-500 font-bold">Lap</button>
                  <button onClick={handleReset} className="bg-red-500 text-white w-24 py-2 rounded-md font-bold">Reset</button>
              </div>
              <div className="w-full max-w-sm font-mono">
                  {laps.length > 0 && laps.map((lap, index) => (
                      <div key={index} className="flex justify-between p-2 border-b border-brand-border">
                          <span>Lap {index + 1}</span>
                          <span>{formatTime(lap)}</span>
                      </div>
                  )).reverse()}
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default Stopwatch;