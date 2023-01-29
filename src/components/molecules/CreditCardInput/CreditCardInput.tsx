/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import {
  CCVInput,
  ErrorText,
  ExpiryDateInput,
  InputWrapper,
  Root,
  StyledCardInput,
} from './CreditCardInput.styles';

interface Props {
  CardNumber: typeof StyledCardInput;
  ExpiryDate: typeof ExpiryDateInput;
  CVV: typeof CCVInput;
  as: string;
  children: ReactNode;
  error: string;
}

export const CreditCardInput = ({ as, error, children }: Props) => {
  const Component = as || 'div';

  return (
    <Component>
      <fieldset>
        <legend className="sr-only">Credit card information</legend>
        <Root error={error}>
          <Icon type="card" />
          {children}
        </Root>
        {error && <ErrorText>{error}</ErrorText>}
      </fieldset>
    </Component>
  );
};

CreditCardInput.CardNumber = StyledCardInput;
CreditCardInput.ExpiryDate = ExpiryDateInput;
CreditCardInput.CCV = CCVInput;
CreditCardInput.ErrorText = ErrorText;
CreditCardInput.InputWrapper = InputWrapper;
