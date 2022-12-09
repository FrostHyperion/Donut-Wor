import React, { useContext, useState, useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AccountContext } from "../context/account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, Login } = useContext(AccountContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    Login({ email, password })
      .then((response) => {
        console.log("auth response", response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <p>
        Don't have account <Link to="/register">Register Now</Link>
      </p>
      <p>
        <Link to="/reset-password">Forget Password</Link>
      </p>
    </div>
  );
};

export default Login;
