import React from "react";
import css from "./Input.module.css";
import useInput from "./Input.hook";

const Input = (props) => {
  const { type, name, title, value, onChange } = props;
  const { error } = useInput(value);

  return (
    <label className={css.input__label}>
      <span className={css.input__title}>{title}</span>
      <input
        type={type}
        name={name}
        className={css.input}
        data-error={error !== ""}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className={css.input__error}>{error}</div>}
    </label>
  );
};

export default Input;
