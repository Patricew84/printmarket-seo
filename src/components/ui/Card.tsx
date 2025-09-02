import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md'
}) => {
  const baseClasses = 'bg-brand-white border border-border-gray rounded-card shadow-card transition-all duration-300';
  
  const hoverClasses = hover 
    ? 'hover:border-accent-blue hover:transform hover:-translate-y-2 hover:shadow-card-hover' 
    : '';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const allClasses = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={allClasses}>
      {children}
    </div>
  );
};

export default Card;