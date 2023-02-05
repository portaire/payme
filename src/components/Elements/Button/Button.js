import React from "react";
import css from "./Button.module.css";

const Button = (props) => {
  const { label, type, buttonStyle, onClick } = props;

  return (
    <button
      className={css.button}
      type={type}
      data-style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
