import { FC, useRef } from 'react';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { FormControl } from 'components/form-control';
import { CardInput } from 'components/card-input';
import { Select } from 'components/select';
import styles from './payment-form.module.css';
import { usePaymentForm } from './payment-form.hooks';
import { MOCK_COUNTRY_OPTIONS } from './payment-form.const';
import { PaymentFormProps } from './types';

export const PaymentForm: FC<PaymentFormProps> = ({
  onSubmit,
  onAbort,
  initialData,
  submitDisabled,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    formData,
    handleInputChange,
    handleCardDataChange,
    handleCountryChange,
    cardValidationErrors,
  } = usePaymentForm(initialData);

  const handleSubmit = async (event?: React.FormEvent<HTMLButtonElement>) => {
    if (!formRef?.current?.checkValidity()) {
      formRef?.current?.reportValidity();
      return;
    }
    event?.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form id="update_payment" className={styles.paymentForm} ref={formRef}>
      <CardInput
        errors={cardValidationErrors}
        onChange={handleCardDataChange}
        placeholder="Card number"
        required
      />
      <FormControl label="Address line 1" htmlFor="address_one">
        <Input
          id="address_one"
          name="address_one"
          type="text"
          placeholder="e.g. 123 Fake St"
          value={formData.address_one}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl label="Address line 2" htmlFor="address_two">
        <Input
          id="address_two"
          name="address_two"
          type="text"
          placeholder="e.g. 123 Fake St"
          value={formData.address_two}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl label="Country" htmlFor="payme__select">
        <Select
          options={MOCK_COUNTRY_OPTIONS}
          onChange={handleCountryChange}
          placeholder="Type to search"
        />
      </FormControl>
      <div className={styles['address-box']}>
        <FormControl label="State" htmlFor="state" optionalLabel="optional">
          <Input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            className={`${styles['address-input']} ${styles.state}`}
            onChange={handleInputChange}
            placeholder="e.g. Middlesex"
          />
        </FormControl>
        <FormControl label="Post code" htmlFor="post_code">
          <Input
            id="post_code"
            name="post_code"
            type="text"
            value={formData.post_code}
            className={`${styles['address-input']} ${styles.code}`}
            onChange={handleInputChange}
            placeholder="e.g. Middlesex"
            required
          />
        </FormControl>
      </div>

      <div className={styles.buttons}>
        <Button onClick={onAbort} variant="secondary" label="Cancel" type="reset" />
        <Button
          onClick={handleSubmit}
          variant="primary"
          label="Update"
          type="submit"
          disabled={submitDisabled}
        />
      </div>
    </form>
  );
};
