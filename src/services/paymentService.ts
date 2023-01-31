import { FormData } from "../pages/payments/PaymentForm";

export interface Payment {
    _id?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    address_one: string;
    address_two: string;
    state: string;
    post_code: string;
    __v?: number;
}

const getPayments = async(): Promise<Payment[]> => {
  const response = await fetch('https://portaireapi.herokuapp.com/test/payment');

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

const postPayments = async(data: FormData) => {
  return await fetch('https://portaireapi.herokuapp.com/test/payment', {
    method: 'POST',
    body: JSON.stringify(data)
  });  
}

export { getPayments, postPayments }
