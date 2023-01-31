import { useState } from 'react';

export const useCreditCardInput = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    handleChange,
  };
};
