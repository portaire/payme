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
  className?: string;
}

export const Input: Props = ({
  label,
  name,
  placeholder,
  optional,
  onChange,
  value,
  error,
  className,
  form,
  ...rest
}: Props) => (
  <Spacer>
    <Wrapper htmlFor={`${name}-input`}>
      {label} {optional && <span>(optional)</span>}
    </Wrapper>
    <StyledInput
      className={className}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...(error && { error })}
      {...(value && { value })}
      {...form}
      {...rest}
    />
    {error && (
      <ErrorText id={`${name}-input-error-description`}>{error}</ErrorText>
    )}
  </Spacer>
);
