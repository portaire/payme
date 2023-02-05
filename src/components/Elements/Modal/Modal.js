import React from "react";
import css from "./Modal.module.css";
import useEscClicked from "../../../hooks/useEscClicked";

const Modal = (props) => {
  const { setModalOpen, children } = props;

  const nodeRef = React.useRef(null);
  useEscClicked(() => setModalOpen(false));

  return (
    <div className={css.modal__wrapper}>
      <div className={css.modal} ref={nodeRef}>
        <h1 className={css.modal__title}>Update payment method</h1>
        {children}
      </div>
    </div>
  );
};

export default Modal;
