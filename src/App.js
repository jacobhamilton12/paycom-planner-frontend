import React, { useState, useContext, useEffect } from "react";
import "./App.css";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";
import { Button } from "react-bootstrap";
import NewEventPopUp from "./components/NewEventPopUp";
import CurrentEventPopUp from "./components/CurrentEventPopUp";
import { EventContexts } from "./components/EventContexts";
import { LoginContext } from "./components/LoginContext";
import LoginPopUp from "./components/LoginPopUp";
import axios from "axios";

const Title = styled.h1`
  color: yellowgreen;
`;

const ButtonWrap = styled.div`
  & .login {
    position: relative;
    background: lightgreen;
    color: black;
    left: 39%;
    margin-bottom: 10px;
  }
`;

function App() {
  const { isNewEventPopUpOpen, isEventPopUpOpen } = useContext(EventContexts);
  const { isLoginPopUpOpen, openLoginPopUp, email } = useContext(LoginContext);

  /*function getEmail(){
    axios.get(`/session.php`)
      .then(res => {
        setEmail(res.data);
      });
  }*/
  useEffect(() => {   

  }

  return (
    <div className="App">
      <Title color="primary">Paycom Project Planner</Title>
      {email !== "" ? <p style={{margin: '0'}}>{email}</p> : null}
      <ButtonWrap>
        <Button onClick={openLoginPopUp} className="login" variant="success">
          Log In
        </Button>
      </ButtonWrap>
      <MonthCalendar />
      <div>{isLoginPopUpOpen ? <LoginPopUp /> : null}</div>
      <div>{isNewEventPopUpOpen ? <NewEventPopUp /> : null}</div>
      <div>{isEventPopUpOpen ? <CurrentEventPopUp /> : null}</div>
    </div>
  );
}

export default App;
