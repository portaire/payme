export interface ButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @param type - button type, submit by default
   */
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
