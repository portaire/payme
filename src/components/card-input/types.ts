export type FieldName = 'number' | 'ccv' | 'expiry';

export type ValidationError = {
  [key in FieldName]: string | undefined;
};

export interface CreditCardInputProps {
  placeholder: string;
  onChange: (fieldName: FieldName, value: string) => void;
  errors?: ValidationError;
  required?: boolean;
}
