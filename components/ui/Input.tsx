import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:opacity-20 hover:bg-white/10 ${className}`}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';
