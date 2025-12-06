import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => {
  return (
    <label 
      className={`text-sm font-medium text-brand-dark cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
