import { FC, ReactNode } from 'react';
import { Wrapper } from './Button.styles';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({
  variant = 'primary',
  children,
  ...rest
}) => (
  <Wrapper variant={variant} {...rest}>
    {children}
  </Wrapper>
);
