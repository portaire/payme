import { ErrorText, Spacer, StyledInput, Wrapper } from './Input.styles';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  optional?: boolean;
}

export const Input: Props = ({
  label,
  name,
  placeholder,
  optional,
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
      {...(error && { error: { error } })}
    />
    {error && (
      <ErrorText id={`${name}-input-error-description`}>{error}</ErrorText>
    )}
  </Spacer>
);
