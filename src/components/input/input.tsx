import { FC } from 'react';
import { InputProps } from './types';
import styles from './input.module.css';

export const Input: FC<InputProps> = ({
  id,
  type,
  disabled,
  maxLength,
  name,
  value = '',
  placeholder,
  required,
  className = styles.base,
  onChange,
}) => {
  return (
    <input
      id={id}
      required={required}
      className={className}
      value={value}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
    />
  );
};
