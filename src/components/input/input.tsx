import { FC } from 'react';
import { InputProps } from './types';
import styles from './input.module.css';

export const Input: FC<InputProps> = ({ value, placeholder, id }) => {
  return <input id={id} className={styles.base} value={value} placeholder={placeholder} />;
};
