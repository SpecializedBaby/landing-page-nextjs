import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const SimpleButton = React.forwardRef<HTMLButtonElement, SimpleButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles =
      // ИЗМЕНЕНО: rounded-md, font-medium, ring-green-500
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    let variantStyles = '';
    switch (variant) {
      case 'outline':
        variantStyles = 'border-2 border-white text-white hover:bg-white hover:text-black';
        break;
      case 'ghost':
        variantStyles = 'text-white hover:bg-white/10';
        break;
      case 'primary':
      default:
        variantStyles = 'bg-green-600 hover:bg-green-700 text-white hover:scale-105'; // Используем зеленый
        break;
    }

    let sizeStyles = '';
    switch (size) {
      case 'lg':
        sizeStyles = 'px-8 py-3 text-lg'; // Этот размер используется для Hero кнопок на десктопе в вашем предыдущем варианте
        break;
      case 'sm':
        sizeStyles = 'px-4 py-1.5 text-xs'; // Пример маленького размера, если нужен (py-1.5 ~ 24px высота)
        break;
      case 'icon':
        sizeStyles = 'h-10 w-10 p-0';
        break;
      case 'default':
      default:
        sizeStyles = 'px-6 py-2'; // Стандартный размер (высота ~30-32px с text-sm)
        break;
    }

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SimpleButton.displayName = 'SimpleButton';

export { SimpleButton as Button };