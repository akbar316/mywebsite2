import React, { useState } from 'react';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface GpaCalculatorProps {
  tool: ToolData;
}

interface Course {
    id: number;
    grade: string;
    credits: string;
}

const gradePoints: {[key: string]: number} = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0 };

const GpaCalculator: React.FC<GpaCalculatorProps> = ({ tool }) => {
    const [courses, setCourses] = useState<Course[]>([{ id: 1, grade: 'A', credits: '3' }]);
    const [gpa, setGpa] = useState<string | null>(null);

    const addCourse = () => {
        setCourses([...courses, { id: Date.now(), grade: 'A', credits: '3' }]);
    };
    
    const updateCourse = (id: number, field: 'grade' | 'credits', value: string) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
    };
    
    const removeCourse = (id: number) => {
        setCourses(courses.filter(c => c.id !== id));
    }

    const calculateGpa = () => {
        let totalPoints = 0;
        let totalCredits = 0;
        for (const course of courses) {
            const credits = parseFloat(course.credits);
            const points = gradePoints[course.grade];
            if (!isNaN(credits) && points !== undefined && credits > 0) {
                totalPoints += points * credits;
                totalCredits += credits;
            }
        }
        if (totalCredits === 0) {
            setGpa(null);
            return;
        }
        setGpa((totalPoints / totalCredits).toFixed(2));
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-xl mx-auto space-y-4">
              {courses.map(course => (
                  <div key={course.id} className="flex items-center gap-2">
                      <select value={course.grade} onChange={e => updateCourse(course.id, 'grade', e.target.value)} className="p-2 bg-brand-bg border border-brand-border rounded-md">
                          {Object.keys(gradePoints).map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                      <input type="number" value={course.credits} onChange={e => updateCourse(course.id, 'credits', e.target.value)} placeholder="Credits" className="w-24 p-2 bg-brand-bg border border-brand-border rounded-md" />
                      <button onClick={() => removeCourse(course.id)} className="text-red-500 p-2 hover:bg-red-500/20 rounded-full">✕</button>
                  </div>
              ))}
              <button onClick={addCourse} className="text-brand-primary font-semibold hover:text-brand-primary-hover">+ Add Course</button>
              <button onClick={calculateGpa} className="w-full bg-brand-primary text-brand-bg py-2 rounded-md hover:bg-brand-primary-hover font-bold shadow-lg shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all">Calculate GPA</button>
              {gpa && (
                  <div className="text-center bg-brand-bg p-4 rounded-md">
                      <p className="text-brand-text-secondary">Your GPA is</p>
                      <p className="text-4xl font-bold text-brand-primary">{gpa}</p>
                  </div>
              )}
          </div>
        </ToolPageLayout>
    );
};

export default GpaCalculator;