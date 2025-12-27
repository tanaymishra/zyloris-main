import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`w-full md:w-auto px-8 py-4 uppercase text-[10px] font-bold tracking-[0.3em] border border-white/10 bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
