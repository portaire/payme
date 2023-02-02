import { useState } from 'react';
import { FieldName } from 'components/card-input/types';
import { SelectOption } from 'components/select/types';
import { validateCard } from 'utils/validate-card';
import { UserFormData, UserInitialData } from './types';

export const usePaymentForm = (initialData: Partial<UserInitialData>) => {
  const [cardValidationErrors, setCardValidationErrors] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState<Partial<UserFormData>>({
    _id: initialData?._id ?? '',
    address_one: initialData.address_one ?? '',
    address_two: initialData.address_two ?? '',
    country: '',
    state: initialData.state,
    post_code: initialData.post_code ?? '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (option: SelectOption) => {
    setFormData((prevState) => ({ ...prevState, country: option.name }));
  };

  const handleCardDataChange = (fieldName: FieldName, value: string) => {
    if (!value) {
      setCardValidationErrors('Card data is required');
    }
    if (fieldName === 'number') {
      const isValid = validateCard(value);

      return isValid
        ? setCardValidationErrors(undefined)
        : setCardValidationErrors('Card number is incorrect');
    }
    return setCardValidationErrors(undefined);
  };

  return {
    formData,
    handleInputChange,
    handleCardDataChange,
    handleCountryChange,
    cardValidationErrors,
  };
};
