import React from 'react';

interface Logo3MProps {
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  className?: string;
}

export const Logo3M: React.FC<Logo3MProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  }[size];

  // Asset selection based on variant
  // light -> white logo for dark navy/slate backgrounds (e.g., Footer)
  // dark -> black logo for white/light backgrounds (e.g., Top Header, Navbar)
  // color -> navy logo on transparent background
  const logoSrc =
    variant === 'light'
      ? '/asset/logo-white.webp'
      : variant === 'color'
      ? '/asset/logo-navy.webp'
      : '/asset/logo-3m-official.webp';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="3M Consulting - We Take the Next Step Together"
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
