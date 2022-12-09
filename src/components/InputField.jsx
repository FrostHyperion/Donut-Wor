import React from "react";
import "./InputField.css";

const InputField = ({ type, name, value, handleChange, style = {} }) => {
  return (
    <div className="inputField">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        style={style}
        required
      />
    </div>
  );
};

export default InputField;
