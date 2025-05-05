
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'default',
  size = 'md',
  className,
  fullWidth = false,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = cn(
    'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center',
    {
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      'w-full': fullWidth,
      'bg-flamora-purple text-white hover:bg-flamora-purple-dark active:bg-flamora-purple-dark': variant === 'default',
      'border border-flamora-purple text-flamora-purple hover:bg-flamora-purple/10 active:bg-flamora-purple/20': variant === 'outline',
      'gold-gradient text-flamora-brown hover:brightness-105 active:brightness-95': variant === 'gold',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
