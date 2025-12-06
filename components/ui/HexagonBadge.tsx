import React from 'react';

export const HexagonBadge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center w-12 h-12 bg-brand-orange text-white mask-hexagon ${className}`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
      {children}
    </div>
  );
};