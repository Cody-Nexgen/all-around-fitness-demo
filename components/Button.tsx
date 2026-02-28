import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`
        bg-brand-red hover:bg-red-700 active:scale-95 transition-all duration-200
        text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg shadow-red-900/20
        uppercase tracking-wide
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};