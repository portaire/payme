import { useState } from 'react';
import { UserFormData } from 'features/payments/payments-form/types';
import { API_URL } from 'consts/env';

export const useSendApiData = (endpoint: string) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const submit = async (data: Partial<UserFormData>) => {
    setSubmitting(true);
    try {
      await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      setError('Error while sending data');
      throw e;
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => setError(undefined);

  return {
    error,
    submitting,
    submit,
    reset,
  };
};
