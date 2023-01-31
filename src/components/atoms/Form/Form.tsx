import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: IInputs;
  handleSubmit: (callback: SubmitHandler<IInputs>) => (event: any) => void;
}

export const Form = ({ defaultValues, handleSubmit, children }: Props) => {
  const onSubmit: SubmitHandler<IInputs> = ({ ...props }) => {
    console.log(props, 'FROM FORM');
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};
