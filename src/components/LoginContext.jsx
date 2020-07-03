import React, { useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoginPopUpOpen, setIsLoginPopUpOpen] = useState(false);

  function handleLoginData(data) {
    setIsLoginPopUpOpen(false);
    console.log(data);
  }

  function handleSignup(data) {
    console.log(data);
    axios.post(`/insert_user.php`, data)
    .then(res => console.log(res.data));
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
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
