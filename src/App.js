import React, { useState, useContext } from "react";
import "./App.css";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";
import SimpleMenu from "./components/SimpleMenu";
import PopUp from "./components/PopUp";
import { EventContexts } from "./components/EventContexts";

const Title = styled.h1`
  color: yellowgreen;
`;

function App(props) {
  const [menuText, setMenuText] = useState("Month");
  const { seen } = useContext(EventContexts);

  return (
    <div className="App">
      <Title color="primary">Paycom Project Planner</Title>
      <SimpleMenu
        handlemenutext={(text) => setMenuText(text)}
        menutext={menuText}
      ></SimpleMenu>
      <MonthCalendar />
      <div>{seen ? <PopUp /> : null}</div>
    </div>
  );
}

export default App;
