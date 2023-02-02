import { FC } from 'react';
import InputMask from 'react-input-mask';
import { Icon } from 'components/icon/icon';
import styles from './card-input.module.css';
import { FORMAT_MM_YY, CARD_MASKS } from './card-input.consts';
import { CreditCardInputProps, FieldName } from './types';

export const CardInput: FC<CreditCardInputProps> = ({
  onChange,
  errors = {},
  placeholder,
  required,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name as FieldName, e.target.value);
  };

  const errorsArray = Object.values(errors).filter((err) => Boolean(err)) as string[];

  const hasError = Boolean(errorsArray?.length);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.data} ${hasError ? styles['data--error'] : ''}`}>
        <Icon name="card" />
        <InputMask
          id="number"
          name="number"
          mask={CARD_MASKS.number}
          maskChar={null}
          placeholder={placeholder}
          className={styles['card-number']}
          onChange={handleInputChange}
          required={required}
        />
        <InputMask
          name="expiry"
          id="expiry"
          mask={CARD_MASKS.expiry}
          placeholder={'MM/YY'}
          maskChar={null}
          // @ts-ignore - react input mask types are not up to date
          formatChars={FORMAT_MM_YY}
          className={styles['card-date']}
          onChange={handleInputChange}
          required={required}
        />
        <InputMask
          name="ccv"
          id="ccv"
          mask={CARD_MASKS.ccv}
          placeholder="CCV"
          type="password"
          autoComplete="off"
          maskChar={null}
          className={styles['card-ccv']}
          onChange={handleInputChange}
          required={required}
        />
      </div>
      {hasError && <div className={styles.error}>{errorsArray[0]}</div>}
    </div>
  );
};
