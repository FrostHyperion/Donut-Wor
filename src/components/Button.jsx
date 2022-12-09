import React from "react";
import "./Button.css";

const Button = ({ name }) => {
  return (
    <div className="inputField">
      <input type="submit" value={name} />
    </div>
  );
};

export default Button;
