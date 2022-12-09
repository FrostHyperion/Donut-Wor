import React, { useContext, useEffect, useState } from "react";
import ResetPasswordEmailForm from "../components/forms/ResetPasswordEmailForm";
import ResetPasswordCodeForm from "../components/forms/ResetPasswordCodeForm";
import ResetPasswordNewPasswordForm from "../components/forms/ResetPasswordNewPasswordForm";
import { Auth } from "aws-amplify";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../context/account";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [settingPassword, setSettingPassword] = useState(false);

  const navigate = useNavigate();

  const { user, ForgotPassword, SetNewPassword } = useContext(AccountContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    ForgotPassword(email)
      .then((data) => {
        console.log(data);
        setConfirming(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCodeSubmit = (event) => {
    event.preventDefault();

    setConfirming(false);
    setSettingPassword(true);
  };

  const handleNewPasswordSubmit = (event) => {
    event.preventDefault();

    SetNewPassword(email, code, newPassword)
      .then((response) => {
        console.log(response);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="resetPassword">
      {settingPassword ? (
        <ResetPasswordNewPasswordForm
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          onSubmit={handleNewPasswordSubmit}
        />
      ) : confirming ? (
        <ResetPasswordCodeForm
          code={code}
          setCode={setCode}
          onSubmit={handleCodeSubmit}
        />
      ) : (
        <ResetPasswordEmailForm
          email={email}
          setEmail={setEmail}
          onSubmit={handleEmailSubmit}
        />
      )}
    </div>
  );
};

export default ResetPassword;
