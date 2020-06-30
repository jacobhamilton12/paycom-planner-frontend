import React, { useState, useContext } from "react";
import "./App.css";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";
import SimpleMenu from "./components/SimpleMenu";
import NewEventPopUp from "./components/NewEventPopUp";
import CurrentEventPopUp from "./components/CurrentEventPopUp";
import { EventContexts } from "./components/EventContexts";

const Title = styled.h1`
  color: yellowgreen;
`;

function App(props) {
  const [menuText, setMenuText] = useState("Month");
  const { isNewEventPopUpOpen, isEventPopUpOpen } = useContext(EventContexts);

  return (
    <div className="App">
      <Title color="primary">Paycom Project Planner</Title>
      <SimpleMenu
        handlemenutext={(text) => setMenuText(text)}
        menutext={menuText}
      ></SimpleMenu>
      <MonthCalendar />
      <div>{isNewEventPopUpOpen ? <NewEventPopUp /> : null}</div>
      <div>{isEventPopUpOpen ? <CurrentEventPopUp /> : null}</div>
    </div>
  );
}

export default App;
