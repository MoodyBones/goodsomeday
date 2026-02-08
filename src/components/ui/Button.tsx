type ButtonBaseProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', ...rest } = props;
  
  const baseStyles = "inline-block px-8 py-4 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] text-center";
  
  const variantStyles = {
    primary: "bg-[#F9D762] text-black hover:bg-[#f0ce52] focus:ring-[#F9D762]/50",
    secondary: "border-2 border-black text-black bg-transparent hover:bg-black/5 focus:ring-black/30"
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in rest && rest.href) {
    return (
      <a 
        className={buttonClasses}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
