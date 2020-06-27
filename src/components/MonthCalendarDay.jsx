import React, { Component } from "react";
import styled from "@emotion/styled";

const Td = styled.td`
  border: 1px solid black;
  font-size: calc(6px + 0.5vw);
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  height: 10vh;
  margin-bottom: -2px;
  display: block;
  margin-right: -2px;
  margin-left: -2px;
  cursor: pointer;
  overflow-y: auto;
  overflow-x: hidden;
`;

const EventBox = styled.div`
  height: 20%;
  width: 90%;
  margin: auto;
  border: 1px solid limegreen;
  margin-top: 2px;
  background: linear-gradient(lightgreen, white);
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  font-size: calc(6px + 0.5vw);
  line-height: 17px;
  text-overflow: ellipsis;
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
        <Box onClick={this.handleClick}>
          <EventBox>Coding Challenge</EventBox>
          <EventBox>The Phoenix Project</EventBox>
          <EventBox>Coding Challenge</EventBox>
          <EventBox>The Phoenix Project</EventBox>
          <EventBox>Coding Challenge</EventBox>
          <EventBox>The Phoenix Project</EventBox>
        </Box>
      </Td>
    );
  }
}

export default Day;
