import React from 'react';

export const Logo = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* The Zyloris 'Flux' Mark - A Z constructed from kinetic vectors */}

            {/* Upper Component */}
            <path
                d="M10 25 H75 L90 40 V50 H35 L10 25Z"
                fill={color}
            />

            {/* Lower Component */}
            <path
                d="M90 75 H25 L10 60 V50 H65 L90 75Z"
                fill={color}
            />

            {/* Protocol Node (Floating Element) */}
            <rect x="75" y="15" width="15" height="15" fill={color} />
            <rect x="10" y="70" width="15" height="15" fill={color} />
        </svg>
    );
};
