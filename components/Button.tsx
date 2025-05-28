import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'; // Основные варианты, которые вы использовали
  size?: 'default' | 'sm' | 'lg' | 'icon';    // Размеры, которые вы использовали
  // Убираем asChild и сложную систему вариантов cva
}

const SimpleButton = React.forwardRef<HTMLButtonElement, SimpleButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

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
        variantStyles = 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105';
        break;
    }

    let sizeStyles = '';
    switch (size) {
      case 'lg':
        // Размеры из вашего HeroSection
        sizeStyles = 'px-8 py-3 text-lg'; // py-4 было в одном, py-3 в SimpleButton
        break;
      case 'sm':
        // Размеры из вашего Header
        sizeStyles = 'px-3 py-1 text-xs';
        break;
      case 'icon':
        // Размеры из вашего Header для мобильного меню
        sizeStyles = 'h-10 w-10 p-0'; // p-0 чтобы иконка была по центру без лишних паддингов
        break;
      case 'default':
      default:
        // Размеры из вашего Header для "Get a Quote"
        sizeStyles = 'px-6 py-2';
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