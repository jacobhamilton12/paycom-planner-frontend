import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoginPopUpOpen, setIsLoginPopUpOpen] = useState(false);

  function handleLoginData(data) {
    setIsLoginPopUpOpen(false);
    console.log(data);
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
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
