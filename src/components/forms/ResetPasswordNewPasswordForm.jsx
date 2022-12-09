import React from "react";
import Button from "../Button";
import InputField from "../InputField";

const ResetPasswordNewPasswordForm = ({
  newPassword,
  setNewPassword,
  onSubmit,
}) => {
  return (
    <form className="resetPasswordNewPasswordForm" onSubmit={onSubmit}>
      <InputField
        type="password"
        name="new password"
        value={newPassword}
        handleChange={setNewPassword}
      />
      <Button name="Change Password" />
    </form>
  );
};

export default ResetPasswordNewPasswordForm;
