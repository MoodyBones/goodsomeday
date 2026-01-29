import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]";
  
  const variantStyles = {
    primary: "bg-[#F9D762] text-black hover:bg-[#f0ce52] focus:ring-[#F9D762]/50",
    secondary: "border-2 border-black text-black bg-transparent hover:bg-black/5 focus:ring-black/30"
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        role="button"
        tabIndex={0}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
