interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentBorder?: boolean;
  role?: React.AriaRole;
}

export function Card({ children, className = '', accentBorder = false, role }: CardProps) {
  const borderClass = accentBorder ? 'border-l-4 border-l-[#F9D762]' : '';
  
  return (
    <div 
      className={`bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-lg shadow-md p-6 ${borderClass} ${className}`}
      role={role}
    >
      {children}
    </div>
  );
}
