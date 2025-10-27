import React from 'react';

const AdPlaceholder: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={`bg-brand-surface/50 border-2 border-dashed border-brand-border/50 rounded-lg flex items-center justify-center min-h-[90px] text-brand-text-secondary ${className}`}>
      Ad Placeholder
    </div>
  );
};

export default AdPlaceholder;