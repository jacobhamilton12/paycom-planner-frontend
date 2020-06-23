import React, { Component } from "react";
import styled from "@emotion/styled";

const Td = styled.td`
  border: 1px solid black;
`;

const Box = styled.div`
  border: 1px solid black;
  height: 10vh;
  display: block;
  margin-left: 0.2%;
  width: 98.5%;
`;

class Day extends Component {
  state = {};
  render() {
    return (
      <Td>
        {this.props.day}
        <Box></Box>
      </Td>
    );
  }
}

export default Day;
