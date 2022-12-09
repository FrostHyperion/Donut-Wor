import React from "react";
import Button from "../Button";
import InputField from "../InputField";

const ChangePasswordForm = ({
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  onSubmit,
}) => {
  return (
    <form className="changePasswordForm" onSubmit={onSubmit}>
      <InputField
        type="password"
        name="Old Password"
        value={oldPassword}
        handleChange={setOldPassword}
      />
      <InputField
        type="password"
        name="New Password"
        value={newPassword}
        handleChange={setNewPassword}
      />
      <Button />
    </form>
  );
};

export default ChangePasswordForm;
