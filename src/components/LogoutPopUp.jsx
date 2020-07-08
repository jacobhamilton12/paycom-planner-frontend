import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { LoginContext } from "./LoginContext";
import axios from "axios";


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
  width: 300px;
  height: 120px;
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


const Label = styled.label`
  margin: 0;
`;

export default function LogoutPopUp() {
  const { setIsLogoutPopUpOpen, setEmail } = useContext(LoginContext);

  function handleSubmit() {
    axios.get("/logout.php")
      .then(res => {
          setEmail("");
          setIsLogoutPopUpOpen(false);
      }
    );
  }


  function exitPopUp(){
    setIsLogoutPopUpOpen(false);
  }

  return (
    <PopUpOuter>
      <PopUpInner>
        <RightFlexBox>
          <XButton onClick={exitPopUp}>&times;</XButton>
        </RightFlexBox>
        <h2>Log Out</h2>
        <input onClick={handleSubmit} type="submit" value="Log Out" />
      </PopUpInner>
    </PopUpOuter>
  );
}
