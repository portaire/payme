import ReactDOM from 'react-dom';
import { ModalProps } from './types';
import styles from './modal.module.css';

export const Modal = ({ open, children, title }: ModalProps) => {
  if (!open) {
    return <></>;
  }

  return (
    open &&
    ReactDOM.createPortal(
      <div className={styles.background}>
        <div className={styles.modal} role="dialog" aria-labelledby="dialog_title" aria-modal>
          <h3 className={styles.title} id="dialog_title">
            {title}
          </h3>
          <div>{children}</div>
        </div>
      </div>,
      document.body
    )
  );
};
