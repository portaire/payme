import styled from 'styled-components';

// Appears to be no hover state in the design.

export const Wrapper = styled.button<{ variant: 'primary' | 'secondary' }>`
  ${({ theme }) => theme.typography('button')};
  border: none;
  padding: ${({ theme }) => theme.spacing(16)} 0;
  min-width: 170px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  ${({ variant, theme }) => {
    const variants = {
      primary: `background: ${theme.colors.primary}; color: ${theme.colors['text-inverted']}; `,
      secondary: `background: ${theme.colors.secondary};`,
    };

    return variants[variant];
  }};
`;
