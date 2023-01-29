import { ErrorText, Spacer, StyledInput, Wrapper } from './Input.styles';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  optional?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'select';
  value: string;
  selectValue?: string;
}

export const Input: Props = ({
  label,
  name,
  placeholder,
  optional,
  onChange,
  selectValue,
  value,
  error,
}: Props) => (
  <Spacer>
    <Wrapper htmlFor={`${name}-input`}>
      {label} {optional && <span>(optional)</span>}
    </Wrapper>
    <StyledInput
      id={`${name}-input`}
      name={name}
      aria-describedby={`${name}-input-error-description`}
      placeholder={placeholder}
      onChange={onChange}
      selectValue={selectValue}
      {...(error && { error })}
      {...(value && { value })}
    />
    {error && (
      <ErrorText id={`${name}-input-error-description`}>{error}</ErrorText>
    )}
  </Spacer>
);
