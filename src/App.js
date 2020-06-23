import React from "react";
import "./App.css";
//import { Button } from "@material-ui/core";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";

const Button = styled.button`
  color: hotpink;
`;

function App() {
  let today = new Date();
  return (
    <div className="App">
      <Button color="primary">Hello World</Button>
      <MonthCalendar />
    </div>
  );
}

export default App;
