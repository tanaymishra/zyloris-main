import React, { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { }

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={`mono text-[10px] uppercase tracking-widest opacity-60 block mb-2 ${className}`}
                {...props}
            >
                {children}
            </label>
        );
    }
);
Label.displayName = 'Label';
