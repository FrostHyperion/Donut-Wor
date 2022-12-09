import React from "react";
import InputField from "../InputField";
import Button from "../Button";
import { Auth } from "aws-amplify";

const LoginForm = (props) => {
  const { email, password, setEmail, setPassword, handleSubmit } = props;

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
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
      <Button name="Login" />
    </form>
  );
};

export default LoginForm;
