import React from "react";
import InputField from "../InputField";
import Button from "../Button";

const VerifyEmailForm = ({
  confirmationCode,
  setConfirmationCode,
  onSubmit,
}) => {
  return (
    <form className="verifyEmailForm" onSubmit={onSubmit}>
      <InputField
        type="text"
        name="code"
        value={confirmationCode}
        handleChange={setConfirmationCode}
      />
      <Button name="Verify" />
    </form>
  );
};

export default VerifyEmailForm;
