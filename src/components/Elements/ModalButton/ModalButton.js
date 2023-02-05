import React from "react";
import css from "./ModalButton.module.css";

const ModalButton = (props) => {
  const { onClick } = props;

  return (
    <button className={css.button} onClick={onClick} type={"button"}>
      <div className={css.button__icon}>
        <span>£</span>
      </div>
      <span>Update payment method</span>
    </button>
  );
};

export default ModalButton;
