import { FC } from 'react';
import { useApiData } from 'hooks/use-api-data';
import { Modal } from 'components/modal';
import { randomize } from 'utils/randomize';
import { PaymentModalProps } from './types';
import { PaymentForm } from '../payments-form/payment-form';
import { Icon } from 'components/icon';
import styles from './payment-modal.module.css';

export const PaymentModal: FC<PaymentModalProps> = ({
  open,
  title,
  proceedDisabled = false,
  error = false,
  onAbort,
  onProceed,
}) => {
  const { data, error: initialDataError, isLoading } = useApiData('test/payment');

  if (!data || data?.length === 0 || isLoading || initialDataError) {
    return <></>;
  }

  const modalData = data.length === 1 ? data[0] : data[randomize(data.length)];

  return (
    <Modal open={open} title={title} key={modalData._id}>
      <PaymentForm
        initialData={modalData}
        onSubmit={onProceed}
        onAbort={onAbort}
        submitDisabled={proceedDisabled}
      />
      <div className={styles.footer}>
        <Icon name="stripe" />
        {error && (
          <span className={styles.error}>Could not submit data. Please try again later.</span>
        )}
      </div>
    </Modal>
  );
};
