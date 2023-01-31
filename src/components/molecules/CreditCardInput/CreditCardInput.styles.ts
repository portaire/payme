import styled, { css } from 'styled-components';

export const StyledFieldset = styled.fieldset`
  margin-bottom: ${({ theme }) => theme.spacing(23)};
`;

export const Root = styled.div<{ error: string }>`
  display: grid;
  grid-template-columns: calc(70% - ${({ theme }) => theme.spacing(40)}) 17% 13%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0 ${({ theme }) => theme.spacing(16)};
  /* Clear the gap with the icon */
  padding-left: ${({ theme }) => theme.spacing(34)};
  border-radius: ${({ theme }) => theme.radius('sm')};
  gap: ${({ theme }) => theme.spacing(20)};
  ${({ error, theme }) => error && `border-color: ${theme.colors.error}`};

  img {
    position: absolute;
    top: 50%;
    left: ${({ theme }) => theme.spacing(8)};
    transform: translateY(-50%);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-left: ${({ theme }) => theme.spacing(8)};
  }
`;

const Reset = css`
  border: none;
  flex: 1;
  ${({ theme }) => theme.typography('small-input')};
  width: 100%;
  min-width: 100%;
  padding: ${({ theme }) => theme.spacing(16)} 0;

  &::placeholder {
    ${({ theme }) => theme.typography('placeholder')};
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const StyledCardInput = styled.input`
  ${Reset}
`;

export const ExpiryDateInput = styled.input`
  ${Reset}
`;

export const CCVInput = styled.input`
  ${Reset}
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
