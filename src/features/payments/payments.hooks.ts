import { useState } from 'react';
import { useSendApiData } from 'hooks/use-send-api-data';
import { UserFormData } from 'features/payments/payments-form/types';

export const usePaymentsModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { error, reset, submit, submitting } = useSendApiData('test/payment');

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    reset();
  };

  const submitPayment = async (data: Partial<UserFormData>) => {
    try {
      await submit(data);
      closeModal();
    } catch (e) {
      // TODO: handle error, right now it will be displayed to the console
      console.error('[PAYMENTS] Error while sending payment data', e);
    }
  };

  return { modalOpen, openModal, closeModal, submitPayment, error, submitting };
};
