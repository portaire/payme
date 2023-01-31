import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

interface Props {
  children: ReactNode;
  handleSubmit: (callback: SubmitHandler<IInputs>) => (event: any) => void;
}

export const Form = ({ handleSubmit, children }: Props) => {
  const onSubmit: SubmitHandler<IInputs> = ({ ...values }) => {
    fetch('https://portaireapi.herokuapp.com/test/payment', {
      method: 'POST',
      body: JSON.stringify({
        ...values,
      }),
    });
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};
