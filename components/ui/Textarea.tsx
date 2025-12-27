import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={`w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:opacity-20 hover:bg-white/10 resize-none ${className}`}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';
