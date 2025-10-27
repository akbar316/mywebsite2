import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface NotesPadProps {
  tool: ToolData;
}

const NotesPad: React.FC<NotesPadProps> = ({ tool }) => {
    const [notes, setNotes] = useLocalStorage<string>('dicetools-notes', '');

    return (
        <ToolPageLayout tool={tool}>
          <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Start typing... your notes will be saved automatically."
              className="w-full h-96 p-4 bg-brand-bg border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </ToolPageLayout>
    );
};

export default NotesPad;