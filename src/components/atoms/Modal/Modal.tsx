import { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../Icon';
import { Cover, Root, Trigger, Wrapper } from './Modal.styles';

interface Props {
  children: ReactNode;
}

export const Modal = ({ label, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ModalRoot = document.body;

  return (
    <>
      {isOpen && <Cover onClick={() => setIsOpen(false)} />}
      {ReactDOM.createPortal(
        <Root isOpen={isOpen}>{children}</Root>,
        ModalRoot
      )}
      {label && (
        <Trigger onClick={() => setIsOpen(true)}>
          <Icon type="pound" />
          {label}
        </Trigger>
      )}
    </>
  );
};

Modal.Content = Wrapper;
