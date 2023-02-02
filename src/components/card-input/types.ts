export type FieldName = 'number' | 'ccv' | 'expiry';

export interface CreditCardInputProps {
  onChange: (fieldName: FieldName, value: string) => void;
  error?: string;
}
