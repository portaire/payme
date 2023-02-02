import { useState, useEffect } from 'react';
import { useSendApiData } from 'hooks/use-send-api-data';
import { UserFormData } from 'features/payments/payments-form/types';

export const usePaymentsModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { error, reset, submit, submitting } = useSendApiData('test/payment');

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

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
