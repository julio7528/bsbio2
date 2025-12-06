import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3.5 text-base font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-[#E05A2B] hover:shadow-lg shadow-brand-orange/30 border border-transparent",
    secondary: "bg-brand-dark text-white hover:bg-gray-800 hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-brand-orange border-2 border-brand-orange hover:bg-brand-orange hover:text-white",
    ghost: "bg-transparent text-brand-dark hover:bg-gray-100"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`} 
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};