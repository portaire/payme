export interface SelectOption {
  id: string;
  label: string;
  name: string;
}

export interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  onChange: (option: SelectOption) => void;
}
