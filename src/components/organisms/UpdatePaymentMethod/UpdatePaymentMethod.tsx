/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validateCardNumber } from '../../../helpers/validateCardNumber';
import { Button } from '../../atoms/Button';
import { Form } from '../../atoms/Form';
import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';
import { Modal } from '../../atoms/Modal';
import { CreditCardInput } from '../../molecules/CreditCardInput';
import { Select } from '../../molecules/Select';
import {
  Actions,
  Center,
  HalfInputs,
  Title,
} from './UpdatePaymentMethod.styles';
import { formErrorMessages } from './config';

export const UpdatePaymentMethod = ({ prevData }) => {
  const { address_one, address_two, state, post_code } = prevData;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      CCV: '',
      country: '',
      addressOne: address_one,
      addressTwo: address_two,
      state,
      postCode: post_code,
    },
  });

  useEffect(() => {
    register('country', { required: formErrorMessages.country.required });
  }, [register]);

  return (
    <div>
      <Modal label="Update payment method">
        <Modal.Content>
          <Form handleSubmit={handleSubmit}>
            <Title>Update payment method</Title>
            <div>
              <CreditCardInput
                error={
                  errors?.cardNumber?.message ||
                  errors?.expiryDate?.message ||
                  errors?.CCV?.message
                }
              >
                <CreditCardInput.InputWrapper>
                  <label className="sr-only" htmlFor="card-number-input">
                    Card number
                  </label>
                  <CreditCardInput.CardNumber
                    type="tel"
                    placeholder="Card number"
                    maxLength={19}
                    {...register('cardNumber', {
                      required: formErrorMessages.cardNumber.required,
                      validate: {
                        validCardNumber: (value) => {
                          const trimmed = value.replaceAll(' ', '');
                          const valid = validateCardNumber(trimmed);
                          if (!valid) {
                            return formErrorMessages.cardNumber.validCardNumber;
                          }
                          return valid;
                        },
                      },
                      setValueAs: (v) => {
                        if (
                          v.length === 4 ||
                          v.length === 9 ||
                          v.length === 14
                        ) {
                          setValue('cardNumber', `${v} `);
                          return `${v} `;
                        }
                        return v;
                      },
                    })}
                    name="cardNumber"
                    autocomplete="cc-number"
                    autocompletetype="cc-number"
                  />
                </CreditCardInput.InputWrapper>
                <CreditCardInput.InputWrapper>
                  <label className="sr-only" htmlFor="card-expiry-date-input">
                    Expiry date
                  </label>
                  <CreditCardInput.ExpiryDate
                    placeholder="MM/YY"
                    type="text"
                    maxLength={5}
                    {...register('expiryDate', {
                      required: formErrorMessages.expiryDate.required,
                      setValueAs: (v) => {
                        if (v.length === 2) {
                          setValue('expiryDate', `${v}/`);
                          return `${v}`;
                        }
                        return v;
                      },
                      validate: {
                        validExpiryDate: (value) => {
                          const [month, year] = value.split('/');
                          const currentDate = new Date();

                          const expiryDate = new Date(
                            `20${year}`,
                            month,
                            0
                          ).getTime();
                          const currentDateInMs = currentDate.getTime();
                          const isBefore = expiryDate > currentDateInMs;

                          if (!isBefore) {
                            return formErrorMessages.expiryDate.validExpiryDate;
                          }

                          return isBefore;
                        },
                      },
                    })}
                    name="expiryDate"
                    autocomplete="cc-exp"
                  />
                </CreditCardInput.InputWrapper>
                <CreditCardInput.InputWrapper>
                  <label className="sr-only" htmlFor="card-ccv-input">
                    Card CCV
                  </label>
                  <CreditCardInput.CCV
                    type="password"
                    placeholder="CCV"
                    maxLength={3}
                    {...register('CCV', {
                      required: formErrorMessages.ccv.required,
                      validate: {
                        minCCV: (value) => {
                          if (value.length < 3) {
                            return formErrorMessages.ccv.minCCV;
                          }
                          return true;
                        },
                      },
                    })}
                    name="CCV"
                    autocomplete="cc-csc"
                  />
                </CreditCardInput.InputWrapper>
              </CreditCardInput>
              <Input
                label="Address line 1"
                placeholder="e.g. 123 Fake St"
                name="addressOne"
                error={errors?.addressOne?.message}
                form={{
                  ...register('addressOne', {
                    required: formErrorMessages.addressOne.required,
                  }),
                }}
              />
              <Input
                label="Address line 2"
                placeholder="e.g. 123 Fake St"
                name="addressTwo"
                error={errors?.addressTwo?.message}
                form={{
                  ...register('addressTwo', {
                    required: formErrorMessages.addressTwo.required,
                  }),
                }}
              />
              <Select
                setFormValue={setValue}
                setError={setError}
                error={errors?.country?.message}
              />
              <HalfInputs>
                <Input
                  className="left"
                  label="State"
                  placeholder="e.g. Middlesex"
                  error={errors?.state?.message}
                  form={{
                    ...register('state', {
                      required: formErrorMessages.state.required,
                    }),
                  }}
                />
                <Input
                  className="right"
                  optional
                  label="Post Code"
                  placeholder="e.g. W11 1NS"
                  form={{ ...register('postCode') }}
                />
              </HalfInputs>
            </div>
            <Actions>
              <Button type="submit">Update</Button>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </Actions>
            <Center>
              <Icon type="stripe" />
            </Center>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};
