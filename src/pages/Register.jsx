import React, { useContext, useEffect, useState } from "react";
import RegisterForm from "../components/forms/RegisterForm";

import { Link, useNavigate } from "react-router-dom";
import VerifyEmailForm from "../components/forms/VerifyEmailForm";
import "./Register.css";
import { AccountContext } from "../context/account";

const Register = () => {
  const [confirming, setConfirming] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, Register, VerifyRegisterCode } = useContext(AccountContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    Register({ email, password, firstname, lastname, username })
      .then((response) => {
        console.log(response);
        setConfirming(true);
      })
      .catch((error) => {
        console.log(error);
        setFirstname("");
        setLastname("");
        setUsername("");
        setEmail("");
        setPassword("");
        window.alert(error.message);
      });
  };

  const handleCodeSubmit = async (event) => {
    event.preventDefault();

    VerifyRegisterCode({ email, code: confirmationCode })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <div className="register">
      {!confirming ? (
        <RegisterForm
          firstname={firstname}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          lastname={lastname}
          username={username}
          email={email}
          password={password}
          onSubmit={handleRegisterSubmit}
        />
      ) : (
        <VerifyEmailForm
          confirmationCode={confirmationCode}
          setConfirmationCode={setConfirmationCode}
          onSubmit={handleCodeSubmit}
        />
      )}
      <p>
        Already have an account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
