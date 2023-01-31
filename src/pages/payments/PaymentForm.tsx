import React, { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
import Input from '../../components/Input'
import InputCard from '../../components/InputCard'
import { Payment } from '../../services/paymentService'
import '../../assets/style/payment-modal.scss' 
import Button from '../../components/Button'
import SelectStyled from '../../components/Select'

interface IProps {
  onCancel: () => void;
  onUpdate: (data: FormData) => void;
  data: Payment | undefined;
}

export interface FormData extends Payment { 
  cardNumber?: string;
  expiredDate?: string;
  ccv?: string;
  country?: string;
}


const PaymentForm = ({ onCancel, onUpdate, data }: IProps) => {
  const [formData, setFormData] = useState<FormData>({ address_one: '', address_two: '', state: '', post_code: '', cardNumber: '', expiredDate: '', ccv: '', country: ''})
  const [cardError, setCardError] = useState(false)


  useEffect(() => {
    if(data) {
      setFormData(data)
    }
  },[data])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleUpdate = () => {
    const cardNumber = formData.cardNumber ?? ''

    if (!/^\d{16}$/.test(cardNumber)) {
      setCardError(true)
      return;
    }
  
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = parseInt(cardNumber[i]);
      if ((cardNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    if((sum % 10) !== 0) {
      setCardError(true)
    } else {
      onUpdate(formData)
    }
  }

  const handleCountrySelect = (option: {value: string}) => {
    setFormData(prevState => ({
      ...prevState,
      country: option.value
    }))
  }

  return (
      <Modal>
        <h2 className="mt-0">Update payment method</h2>
        <InputCard 
          error={cardError}
          cardNumberValue={formData.cardNumber ?? ''}
          expireDateValue={formData.expiredDate ?? ''}
          ccvValue={formData.ccv ?? ''}
          onChange={handleChangeInput}
        />
        
        <Input 
          onChange={handleChangeInput}
          type="address" 
          name='address_one'
          placeholder="e.g. 123 Fake St" 
          id="address1" 
          value={formData.address_one} 
          label="Address line 1"
        />

        <Input 
          onChange={handleChangeInput}
          name="address_two"
          type="address" 
          placeholder="e.g. 123 Fake St" 
          id="address2" 
          value={formData.address_two}
          label="Address line 2"
        />

        <SelectStyled 
          onChange={handleCountrySelect}
          label="Country" id={'select'}
        />

        <div className="two-column__inputs">
          <Input 
            onChange={handleChangeInput}
            type="text" 
            name="state"
            placeholder="e.g Middlesex" 
            value={formData.state} 
            optional={true} 
            id="state" 
            label="State"
          />

          <Input 
            onChange={handleChangeInput}
            value={formData.post_code} 
            name="post_code"
            type="text" 
            placeholder="e.g W11 1NS" 
            id="post-code" 
            label="Post Code"
          />
        </div>

        <div className='buttons__wrapper'>
          <Button onClick={onCancel} variant="outline" text='Cancel'/>
          <Button onClick={handleUpdate} text='Update'/>
        </div>
        
        <div className="stripe__button">
          <a href="https://www.stripe.com" target="_blank" >
            <img src="../src/assets/images/stripe-img.svg" alt="Powered by stripe link"  />
          </a>
        </div>
      </Modal>
  )
}

export default PaymentForm