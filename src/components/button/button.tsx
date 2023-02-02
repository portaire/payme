import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './button.module.css';

export const Button: FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  type = 'submit',
  disabled = false,
}) => {
  const className = styles[variant];

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className}>
      {label}
    </button>
  );
};
