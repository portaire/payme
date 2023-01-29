import styled from 'styled-components';

export const Spacer = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(23)};
  }
`;

export const Wrapper = styled.label`
  display: inline-block;
  ${({ theme }) => theme.typography('label')};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  span {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const StyledInput = styled.input<{ error: string; selectValue: string }>`
  ${({ theme }) => theme.typography('input')};
  display: block;
  /* remove extra width from padding */
  width: calc(
    100% - ${({ theme }) => `${theme.spacing(17)} - ${theme.spacing(15)}`}
  );
  padding: 0;
  border-radius: ${({ theme }) => theme.radius('sm')};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => `${theme.spacing(17)} ${theme.spacing(15)}`};
  ${({ selectValue, theme }) =>
    selectValue &&
    `
    border: 1px solid ${theme.colors.outline};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid ${theme.colors.outline2};
  `};

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    ${({ theme }) => theme.typography('placeholder')};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  ${({ error, theme }) => error && `border: 1px solid ${theme.colors.error};`};
`;

export const ErrorText = styled.span`
  ${({ theme }) => theme.typography('error')};
  position: relative;
  top: -2px;
  display: block;
  width: calc(
    100% - ${({ theme }) => theme.spacing(5)} -
      ${({ theme }) => theme.spacing(5)}
  );
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors['text-inverted']};
  border-radius: ${({ theme }) => theme.radius('sm')};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0 ${({ theme }) => theme.spacing(5)};
`;
