export type FieldName = 'number' | 'ccv' | 'expiry';

export interface CreditCardInputProps {
  placeholder: string;
  onChange: (fieldName: FieldName, value: string) => void;
  error?: string;
  required?: boolean;
}
