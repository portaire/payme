import { useState } from 'react';
import { FieldName, ValidationError } from 'components/card-input/types';
import { SelectOption } from 'components/select/types';
import { validateCard } from 'utils/validate-card';
import { UserFormData, UserInitialData } from './types';

export const usePaymentForm = (initialData: Partial<UserInitialData>) => {
  const [cardValidationErrors, setCardValidationErrors] = useState<ValidationError>({
    number: undefined,
    ccv: undefined,
    expiry: undefined,
  });
  const [formData, setFormData] = useState<Partial<UserFormData>>({
    _id: initialData?._id ?? '',
    address_one: initialData.address_one ?? '',
    address_two: initialData.address_two ?? '',
    country: '',
    state: initialData.state,
    post_code: initialData.post_code ?? '',
    __v: initialData?.__v ?? 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (option: SelectOption) => {
    setFormData((prevState) => ({ ...prevState, country: option.name }));
  };

  const handleCardDataChange = (fieldName: FieldName, value: string) => {
    if (fieldName === 'number' && value?.length !== 16) {
      const isValid = validateCard(value);

      return setCardValidationErrors((prevState) => ({
        ...prevState,
        number: isValid ? undefined : 'Card number incorrect',
      }));
    }

    if (fieldName === 'ccv' && value?.length !== 3) {
      return setCardValidationErrors((prevState) => ({
        ...prevState,
        ccv: 'Card CCV incorrect',
      }));
    }

    if (fieldName === 'expiry' && value?.length !== 5) {
      return setCardValidationErrors((prevState) => ({
        ...prevState,
        expiry: 'Card expiry incorrect',
      }));
    }

    return setCardValidationErrors((prevState) => ({ ...prevState, [fieldName]: undefined }));
  };

  return {
    formData,
    handleInputChange,
    handleCardDataChange,
    handleCountryChange,
    cardValidationErrors,
  };
};
