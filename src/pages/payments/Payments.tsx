import PaymentForm, { FormData } from "./PaymentForm";
import React, { useState, useEffect } from 'react'
import { Payment, getPayments, postPayments } from '../../services/paymentService'


export const Payments = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [paymentData, setPaymentData] = useState<Payment | undefined>(undefined)

  useEffect(() => {
    getPaymentInfo()
  },[])  

  const handleModal = () => {
    setShowModal(prevState => !prevState)
  }

  const submitPaymentInfo = (data: FormData) => {
    postPayments(data).then(() => {
      handleModal();
    })
  }

  const getPaymentInfo = async() => {
    const paymentData = await getPayments();

    if(paymentData.length > 1) {
      let randomData = Math.floor(Math.random() * paymentData.length)
      setPaymentData(paymentData[randomData])
    } else {
      setPaymentData(paymentData[0])
    }
  }

  return (
    <>
      <button onClick={handleModal} className="payment__button"><span className="payment__button-icon">£</span> Update payment method</button>
      { showModal && <PaymentForm onCancel={handleModal} onUpdate={submitPaymentInfo} data={paymentData}/> }
    </>
  )
}
