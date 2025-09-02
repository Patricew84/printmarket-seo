import React from 'react';

export interface TrustIndicatorProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  text,
  icon,
  className = ''
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg ${className}`}>
      {icon && <span className="text-accent-blue">{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export interface TrustIndicatorsProps {
  indicators: string[];
  className?: string;
}

export const TrustIndicators: React.FC<TrustIndicatorsProps> = ({
  indicators,
  className = ''
}) => {
  return (
    <div className={`flex gap-4 flex-wrap justify-center ${className}`}>
      {indicators.map((indicator, index) => (
        <TrustIndicator
          key={index}
          text={indicator}
        />
      ))}
    </div>
  );
};

export default TrustIndicator;