import React, { Component } from "react";
import styled from "@emotion/styled";

const Td = styled.td`
  border: 1px solid black;
  font-size: calc(6px + 0.5vw);
`;

const Box = styled.div`
  border: 1px solid black;
  height: 10vh;
  display: block;
  margin-right: -2px;
  margin-left: -2px;
  cursor: pointer;
`;

class Day extends Component {
  state = {};
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <Td>
        {this.props.day}
        {this.props.datenum > 0 ? ", " + this.props.datenum : ""}
        <Box onClick={this.handleClick}></Box>
      </Td>
    );
  }
}

export default Day;
