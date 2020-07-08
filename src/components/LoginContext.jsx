import React, { useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoginPopUpOpen, setIsLoginPopUpOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  function handleLoginData(data) {
    return axios.post(`/validate_user.php`, data)
      .then(res => {
        return res.data;
      });
  }

  function handleSignup(data) {
    return axios.post(`/insert_user.php`, data)
      .then(res => {
        return res.data;
      });
  }

  function openLoginPopUp() {
    setIsLoginPopUpOpen(true);
  }

  return (
    <LoginContext.Provider
      value={{
        isLoginPopUpOpen,
        setIsLoginPopUpOpen,
        openLoginPopUp,
        handleLoginData,
        handleSignup,
        loggedIn, 
        setLoggedIn,
        email, 
        setEmail
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
