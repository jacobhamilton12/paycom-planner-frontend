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
`;

class Day extends Component {
  state = {};
  render() {
    return (
      <Td>
        {this.props.day}
        {this.props.datenum > 0 ? ", " + this.props.datenum : ""}
        <Box></Box>
      </Td>
    );
  }
}

export default Day;
