import React from 'react';

interface SpidaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const SpidaLogo: React.FC<SpidaLogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Symbol */}
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 32 32" 
          className="w-full h-full"
          fill="currentColor"
        >
          {/* Main upward-curving shape (swoosh/checkmark) */}
          <path 
            d="M6 20C6 20 8 16 12 14C16 12 20 14 24 18C26 20 26 22 24 24C22 26 20 26 18 24C16 22 14 20 12 18C10 16 8 18 6 20Z"
            fill="currentColor"
          />
          {/* Small leaf/droplet element */}
          <path 
            d="M8 16C8 16 9 14 10 15C11 16 10 17 9 18C8 17 8 16 8 16Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold text-foreground ${textSizeClasses[size]}`}>
          Spida
        </span>
      )}
    </div>
  );
};

export default SpidaLogo;
