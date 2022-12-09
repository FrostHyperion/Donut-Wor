import React from "react";
import Button from "../Button";
import InputField from "../InputField";

const ResetPasswordCodeForm = ({ code, setCode, onSubmit }) => {
  return (
    <form className="resetPasswordCodeForm" onSubmit={onSubmit}>
      <InputField type="text" name="code" value={code} handleChange={setCode} />
      <Button name="Verify" />
    </form>
  );
};

export default ResetPasswordCodeForm;
