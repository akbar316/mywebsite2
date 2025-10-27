import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface BmiCalculatorProps {
  tool: ToolData;
}

const BmiCalculator: React.FC<BmiCalculatorProps> = ({ tool }) => {
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
    const [bmi, setBmi] = useState<string | null>(null);
    const [category, setCategory] = useState('');

    const calculateBmi = () => {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return;
        
        let bmiValue;
        if (unitSystem === 'metric') {
            bmiValue = w / ((h / 100) * (h / 100)); // weight in kg, height in cm
        } else {
            bmiValue = (w / (h * h)) * 703; // weight in lbs, height in inches
        }
        setBmi(bmiValue.toFixed(1));

        if (bmiValue < 18.5) setCategory('Underweight');
        else if (bmiValue < 25) setCategory('Normal weight');
        else if (bmiValue < 30) setCategory('Overweight');
        else setCategory('Obesity');
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-md mx-auto space-y-4">
              <div className="flex justify-center gap-4">
                  <button onClick={() => setUnitSystem('metric')} className={`px-4 py-2 rounded-md transition-colors ${unitSystem === 'metric' ? 'bg-brand-primary text-brand-bg font-bold' : 'bg-brand-border'}`}>Metric (kg, cm)</button>
                  <button onClick={() => setUnitSystem('imperial')} className={`px-4 py-2 rounded-md transition-colors ${unitSystem === 'imperial' ? 'bg-brand-primary text-brand-bg font-bold' : 'bg-brand-border'}`}>Imperial (lbs, in)</button>
              </div>
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Height ({unitSystem === 'metric' ? 'cm' : 'in'})</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-brand-text-secondary mb-1">Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})</label>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 bg-brand-bg border border-brand-border rounded-md" />
              </div>
              <button onClick={calculateBmi} className="w-full bg-brand-primary text-brand-bg py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Calculate BMI</button>
              {bmi && (
                  <div className="text-center bg-brand-bg p-4 rounded-md">
                      <p className="text-brand-text-secondary">Your BMI is</p>
                      <p className="text-4xl font-bold text-brand-primary">{bmi}</p>
                      <p className="font-semibold">{category}</p>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default BmiCalculator;