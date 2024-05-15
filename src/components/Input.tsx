import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    error?: string; // Add error prop of type string
}

const Input: React.FC<InputProps> = ({ icon, error, ...rest }) => {
    return (
        <div className="relative min-h-16">
            <input
                {...rest}
                className={`w-full px-4 py-2 border bg-white text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                    error ? 'border-red-500' : ''
                }`}
            />
            {icon && <div className="absolute inset-y-0 right-0 max-w-7 max-h-10 flex items-center pr-2">{icon}</div>}
            {error && <div className="text-red-500 text-xs mt-1 ml-1 flex">{error}</div>}
        </div>
    );
};

export default Input;
