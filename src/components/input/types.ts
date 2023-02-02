export interface InputProps {
  id: string;
  type: 'number' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  maxLength?: number;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  hideBorder?: boolean;
  /**
   * @param className - custom class name, if not specified, default class name will be used
   */
  className?: string;
}
