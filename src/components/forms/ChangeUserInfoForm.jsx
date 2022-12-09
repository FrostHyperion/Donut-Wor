import React from "react";
import Button from "../Button";
import InputField from "../InputField";

const ChangeUserInfoForm = ({ firstname,
  setFirstname,
  setLastname,
  setUsername,
  setEmail,
  lastname,
  username,
  email,
  onSubmit, }) => {
  return (
    <form className="changeUserInfoForm" onSubmit={onSubmit}>
      <InputField
        type="text"
        name="firstname"
        value={firstname}
        handleChange={setFirstname}
      />
      <InputField
        type="text"
        name="lastname"
        value={lastname}
        handleChange={setLastname}
      />
      <InputField
        type="text"
        name="username"
        value={username}
        handleChange={setUsername}
      />
      <InputField
        type="text"
        name="email"
        value={email}
        handleChange={setEmail}
      />
      <Button />
    </form>
  );
};

export default ChangeUserInfoForm;
