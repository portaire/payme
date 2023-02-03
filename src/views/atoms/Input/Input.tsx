import React from 'react';
import Label from '../Label/Label';

const Input: React.FC<InputProps> = (props) => {
    const {
        id,
        name,
        onClick,
        className,
        placeholder,
        ref,
        variant = "primary",
        kind = "outline",
        disabled = false,
        fullWidth = false,
        label,
        labelPosition = "top",
        icon,
        iconPosition = "right",
        type = "text",
        autoComplete,
        defaultValue,
        required = false,
        helperText,
        value,
        onChange,
        iconRight,
        autofocus,
        optional,
        ariaLlabel
    } = props;

    return (
        <div className="form-group relative">

            {label && <Label label={label} optional={optional} htmlFor={name} />}

            <div className="relative">
            <input 
                // {...props} 
                disabled={disabled}   
                id={id}
                onClick={onClick}
                name={name}
                ref={ref}
                aria-label={ariaLlabel}
                type={type}
                required={required}
                autoComplete={autoComplete}
                placeholder={placeholder} 
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => onChange(e)}
                className={`
                    block w-full placeholder:text-[#D4D4D4] appearance-none rounded-[3px] border border-gray-300 px-3 py-3 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md
                    mt-1 ${className ? className : ""} 
                `.trim()}
            />

            {iconRight && <div className="absolute z-10 right-3 top-1/2 -translate-y-1/2" dangerouslySetInnerHTML={{ __html: iconRight}}/>}
            </div>
        </div>
    );
}

export default Input;

interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: "primary" | "secondary";
    kind?: "outline" | "filled" | "standard";
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: "top" | "right" | "bottom" | "left";
    icon?: string;
    iconPosition?: "left" | "right";
    type?: "number" | "email" | "tel" | "text" | "password" ;
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: any;
    iconRight?: any;
    autofocus?: any;
    ref?: any;
    onClick?: any;
    optional?: boolean;
    ariaLlabel?: string;
}
