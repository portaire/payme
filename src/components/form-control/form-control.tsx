import { FC } from 'react';
import { FormControlProps } from './types';
import styles from './form-control.module.css';

export const FormControl: FC<FormControlProps> = ({ label, children, optionalLabel, htmlFor }) => {
  const hasOptionalLabel = Boolean(optionalLabel);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <label htmlFor={htmlFor}>{label}</label>
        {hasOptionalLabel && (
          <span className={styles['optional-info']}>{`(${optionalLabel})`}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
