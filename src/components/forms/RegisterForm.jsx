import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";
import "./RegisterForm.css";

const RegisterForm = ({
  onSubmit,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form className="registerForm" onSubmit={onSubmit}>
      <div className="input-group">
        <InputField
          type="text"
          name="firstname"
          value={firstname}
          handleChange={setFirstname}
          style={{ width: "80%", margin: "0 auto" }}
        />
        <InputField
          type="text"
          name="lastname"
          value={lastname}
          handleChange={setLastname}
          style={{ width: "80%", margin: "0 auto" }}
        />
      </div>
      <InputField
        type="text"
        name="username"
        value={username}
        handleChange={setUsername}
      />
      <InputField
        type="email"
        name="email"
        value={email}
        handleChange={setEmail}
      />
      <InputField
        type="password"
        name="password"
        value={password}
        handleChange={setPassword}
      />
      <Button name="Register" />
    </form>
  );
};

export default RegisterForm;
