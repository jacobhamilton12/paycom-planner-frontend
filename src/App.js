import React, { Component } from "react";
import "./App.css";
//import { Calendar } from "@material-ui/pickers";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import styled from "@emotion/styled";
import MonthCalendar from "./components/MonthCalendar";
import SimpleMenu from "./components/SimpleMenu";
import { render } from "@testing-library/react";
import EventForumPopUp from "./components/EventForumPopUp";

const Title = styled.h1`
  color: yellowgreen;
`;

class App extends Component {
  state = {
    menuText: "Month",
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
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
        <div className="btn" onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        <MonthCalendar toggle={this.togglePop} />
        <div>
          {this.state.seen ? <EventForumPopUp toggle={this.togglePop} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
