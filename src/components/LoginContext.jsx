import React, { useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoginPopUpOpen, setIsLoginPopUpOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginData(data) {
    function getCheck(){
      return axios.post(`/validate_user.php`, data)
          .then(res => {
              return checkPass(res.data)
          });
    }
    return getCheck().then(res => {
      return res;
    })
  }

  function checkPass(data){
    if(!data){
      return "failed";
    }
    return "success";
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
