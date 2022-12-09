import React from "react";
import { Auth } from "aws-amplify";
import InputField from "../InputField";
import Button from "../Button";

const ResetPasswordEmailForm = ({ email, setEmail, onSubmit }) => {
  return (
    <form className="resetPasswordEmailForm" onSubmit={onSubmit}>
      <InputField
        type="email"
        name="email"
        value={email}
        handleChange={setEmail}
      />
      <Button name="Submit" />
    </form>
  );
};

export default ResetPasswordEmailForm;
