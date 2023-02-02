import { UserFormData } from 'features/payments/payments-form/types';

export interface PaymentModalProps {
  open: boolean;
  title: string;
  error?: boolean;
  proceedDisabled?: boolean;
  onProceed: (data: Partial<UserFormData>) => Promise<void>;
  onAbort: () => void;
}
