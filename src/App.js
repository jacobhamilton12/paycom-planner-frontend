import React, { Component } from "react";
import "./App.css";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";
import SimpleMenu from "./components/SimpleMenu";
import { render } from "@testing-library/react";

const Title = styled.h1`
  color: yellowgreen;
`;

class App extends Component {
  state = {
    menuText: "Month",
  };
  handleMenuText = (menuText) => {
    this.setState({ menuText: menuText });
  };
  render() {
    return (
      <div className="App">
        <Title color="primary">Paycom Project Planner</Title>
        <SimpleMenu
          handlemenutext={this.handleMenuText}
          menutext={this.state.menuText}
        ></SimpleMenu>
        <MonthCalendar />
      </div>
    );
  }
}

export default App;
