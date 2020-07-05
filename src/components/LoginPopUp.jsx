import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/Button";
import { LoginContext } from "./LoginContext";

const PopUpOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpInner = styled.div`
  position: absolute;
  width: 30%;
  height: 31%;
  min-width: 350px;
  min-height: 280px;
  position: fixed;
  left: 50%;
  bottom: 50%;
  top: 30%;
  transform: translateX(-50%);
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const XButton = styled.div`
  border: 1px solid lightgray;
  color: white;
  background: lightgray;
  height: 18px;
  width: 18px;
  cursor: pointer;
  margin-right: 10px;
  line-height: 17px;
  border-radius: 50%;
`;

const RightFlexBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;
const CenterFlexBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  width: 70%;
  padding: 0.6em 0.7em;
  margin: 5px 5px 5px 0px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: var(--white);
  color: var(--fc-dark);
  line-height: 1.15384615;
`;

const Label = styled.label`
  margin: 0;
`;

export default function LoginPopUp() {
  const { setIsLoginPopUpOpen, handleLoginData, handleSignup } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheckFailed, setPassCheckFailed] = useState(false);

  function handleSubmit() {
    handleLoginData({email, password})
      .then(response => {
        if(response === "success"){
          setIsLoginPopUpOpen(false);
        }else{
          setPassCheckFailed(true);
        }
      });
  }

  function handleSignUpButton() {
    handleSignup({email, password});
  }

  function exitPopUp(){
    setIsLoginPopUpOpen(false);
    setPassCheckFailed(false);
  }

  return (
    <PopUpOuter>
      <PopUpInner>
        <RightFlexBox>
          <XButton onClick={exitPopUp}>&times;</XButton>
        </RightFlexBox>
        <h2>Login</h2>
        <CenterFlexBox>
          <Label>Email: </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <Label>Password:</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </CenterFlexBox>
        {passCheckFailed ? <p style={{color: 'red', margin: '0'}}>Password/Email Incorrect!</p> : null}
        <input onClick={handleSubmit} type="submit" value="Submit" />
        <input onClick={handleSignUpButton} type="submit" value="Sign Up"/>
      </PopUpInner>
    </PopUpOuter>
  );
}
