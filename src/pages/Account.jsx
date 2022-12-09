import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";
import ChangeUserInfoForm from "../components/forms/ChangeUserInfoForm";

import "./Account.css";

const Account = () => {
  const [userInfo, setUserInfo] = useState({});

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showProfileInfo, setShowProfileInfo] = useState(true);
  const [showEditProfileInfo, setEditShowProfileInfo] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((response) => {
        setUserInfo(response);
        setFirstname(response.attributes.given_name);
        setLastname(response.attributes.family_name);
        setUsername(response.attributes.preferred_username);
        setEmail(response.attributes.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const SignOut = async () => {
    await Auth.signOut({ global: true });
    navigate("/login");
  };

  const handleUserInfoSubmit = async (event) => {
    event.preventDefault();

    await Auth.updateUserAttributes(userInfo, {
      given_name: firstname,
      family_name: lastname,
      preferred_username: username,
      email: email,
    })
      .then((response) => {
        console.log(response);
        setShowProfileInfo(true);
        setEditShowProfileInfo(false);
        setShowChangePassword(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangePasswordSubmit = async (event) => {
    event.preventDefault();

    console.log(userInfo);

    await Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(userInfo, oldPassword, newPassword);
      })
      .then((response) => {
        console.log(response);
        setShowProfileInfo(true);
        setEditShowProfileInfo(false);
        setShowChangePassword(false);
        setOldPassword("");
        setNewPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="account">
      <div className="sidebar">
        <button
          onClick={() => {
            setShowProfileInfo(true);
            setEditShowProfileInfo(false);
            setShowChangePassword(false);
          }}
        >
          Profile
        </button>
        <button
          onClick={() => {
            setShowProfileInfo(false);
            setEditShowProfileInfo(true);
            setShowChangePassword(false);
          }}
        >
          Edit Profile Info
        </button>
        <button
          onClick={() => {
            setShowProfileInfo(false);
            setEditShowProfileInfo(false);
            setShowChangePassword(true);
          }}
        >
          Change Password
        </button>
        <button onClick={SignOut} className="signOut">
          Sign out
        </button>
      </div>
      <div className="profileInfo">
        {showProfileInfo && (
          <div>
            <p>
              <span>Firstname</span>: {firstname}
            </p>
            <br />
            <p>
              <span>Lastname</span>: {lastname}
            </p>
            <br />
            <p>
              <span>Username</span>: {username}
            </p>
            <br />
            <p>
              <span>Email</span>: {email}
            </p>
            <br />
          </div>
        )}
        {showEditProfileInfo && (
          <div className="changeUserInfoFormContainer">
            <ChangeUserInfoForm
              firstname={firstname}
              setFirstname={setFirstname}
              setLastname={setLastname}
              setUsername={setUsername}
              setEmail={setEmail}
              lastname={lastname}
              username={username}
              email={email}
              onSubmit={handleUserInfoSubmit}
            />
          </div>
        )}
        {showChangePassword && (
          <div>
            <ChangePasswordForm
              oldPassword={oldPassword}
              setOldPassword={setOldPassword}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              onSubmit={handleChangePasswordSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
