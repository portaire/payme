import React from "react";
import css from "../Input.module.css";
import Select from "react-select";

const SelectInput = (props) => {
  const { title, name, options, onChange, defaultValue, value } = props;

  return (
    <label className={css.input__label}>
      <span className={css.input__title}>{title}</span>
      <Select
        options={options}
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        isSearchable={true}
      />
    </label>
  );
};

export default SelectInput;
