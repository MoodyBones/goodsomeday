import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentBorder?: boolean;
}

export function Card({ children, className = '', accentBorder = false }: CardProps) {
  const borderClass = accentBorder ? 'border-l-4 border-l-[#F9D762]' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 ${borderClass} ${className}`}
      role="article"
    >
      {children}
    </div>
  );
}
