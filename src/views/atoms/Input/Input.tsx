import React, { forwardRef } from 'react';
import Label from '../Label/Label';
  
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
        id,
        name,
        className,
        placeholder,
        variant = 'primary',
        kind = 'outline',
        disabled = false,
        label,
        labelPosition = 'top',
        icon,
        iconPosition = 'right',
        type = 'text',
        autoComplete,
        defaultValue,
        required = false,
        helperText,
        value,
        onChange,
        iconRight,
        autofocus,
        optional,
        ariaLabel,
        ...props
    }) => {
    return (
        <div className="form-group relative">

            {label && (
                <Label
                label={label}
                optional={optional}
                htmlFor={name}
                //   labelPosition={labelPosition}
                />
            )}

            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={type}
                    required={required}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    className={`
                        block w-full placeholder:text-gray-400 appearance-none rounded border border-gray-300 px-3 py-3 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md
                        mt-1 ${className ? className : ''} 
                    `.trim()}
                    disabled={disabled}
                    aria-label={ariaLabel}
                    autoFocus={autofocus}
                    {...props}
                />

                {iconRight && (
                    <div
                        className="absolute z-10 right-3 top-1/2 -translate-y-1/2"
                        dangerouslySetInnerHTML={{ __html: iconRight }}
                    />
                )}

            </div>
            </div>
        );
    }
);

export default Input;

interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: 'primary' | 'secondary';
    kind?: 'outline' | 'filled' | 'standard';
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
    icon?: string;
    iconPosition?: 'left' | 'right';
    type?: 'number' | 'email' | 'tel' | 'text' | 'password';
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    iconRight?: any;
    autofocus?: boolean;
    optional?: boolean;
    ariaLabel?: string;
}