import { FC } from 'react';
import { Icon } from 'components/icon';
import { PaymentModal } from './payments-modal/payment-modal';
import { usePaymentsModal } from './payments.hooks';
import { PaymentProps } from './types';
import styles from './payments.module.css';

export const Payments: FC<PaymentProps> = ({ updatePaymentLabel, updateDisabled = false }) => {
  const { modalOpen, openModal, closeModal, submitPayment, error, isMutating } = usePaymentsModal();

  return (
    <>
      <div
        role="button"
        onClick={openModal}
        className={styles['payment-button']}
        aria-disabled={updateDisabled}>
        <Icon name="pound" />
        {updatePaymentLabel}
      </div>
      <PaymentModal
        open={modalOpen}
        title="Update payment method"
        onProceed={submitPayment}
        onAbort={closeModal}
        proceedDisabled={isMutating}
        error={Boolean(error)}
      />
    </>
  );
};
