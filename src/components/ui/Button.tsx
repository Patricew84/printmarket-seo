import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-button transition-all duration-300 cursor-pointer inline-block text-center border-none transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-accent-blue text-brand-white hover:bg-blue-700 focus:ring-4 focus:ring-accent-blue/30 shadow-lg hover:shadow-xl',
    secondary: 'bg-neutral-gray text-brand-white hover:bg-gray-700 focus:ring-4 focus:ring-neutral-gray/30 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent text-accent-blue border-2 border-accent-blue hover:bg-accent-blue hover:text-brand-white focus:ring-4 focus:ring-accent-blue/30 shadow-lg hover:shadow-xl',
    success: 'bg-success-green text-brand-white hover:bg-green-700 focus:ring-4 focus:ring-success-green/30 shadow-lg hover:shadow-xl'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-lg' : '';

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={allClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;