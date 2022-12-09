import React, { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const UserSubscribed = async () => {
      try {
        const authenticatedUser = await Auth.currentAuthenticatedUser();

        setUser(authenticatedUser);
      } catch (err) {
        setUser(null);
      }
    };

    UserSubscribed();
  }, [user]);

  const Register = async (registerData) => {
    const { email, password, firstname, lastname, username } = registerData;

    try {
      const response = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          given_name: firstname,
          family_name: lastname,
          preferred_username: username,
        },
      });
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  const VerifyRegisterCode = async (verifyRegisterCodeData) => {
    const { email, code } = verifyRegisterCodeData;

    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
      throw error;
    }
  };

  const Login = async (loginData) => {
    const { email, password } = loginData;

    try {
      await Auth.signIn(email, password);
    } catch (error) {
      throw error;
    }
  };

  const ForgotPassword = async (email) => {
    try {
      Auth.forgotPassword(email);
    } catch (error) {
      throw error;
    }
  };

  const SetNewPassword = async (newPasswordData) => {
    const { email, code, newPassword } = newPasswordData;

    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        Register,
        VerifyRegisterCode,
        Login,
        ForgotPassword,
        SetNewPassword,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export { AccountContext, AccountProvider };
